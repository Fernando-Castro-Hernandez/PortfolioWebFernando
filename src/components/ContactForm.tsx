"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
const inputClasses =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-ink placeholder:text-ink-dim focus:border-tq-500 focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!WEB3FORMS_KEY) return;

    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: bots fill the hidden field; humans never see it.
    if (data.get("botcheck")) return;

    setStatus("sending");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "New message from the portfolio",
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (!WEB3FORMS_KEY) {
    return (
      <p className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-ink-dim">
        The form is being wired up. Meanwhile, reach me by email or LinkedIn — links
        on the left.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate={false}>
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="text-sm text-ink-dim">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-email" className="text-sm text-ink-dim">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          className={inputClasses}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-sm text-ink-dim">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="What are you building, and how can I help?"
          className={`${inputClasses} resize-y`}
        />
      </div>

      <div className="mt-2 flex items-center gap-4">
        <button type="submit" className="btn-cta" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
        <p role="status" aria-live="polite" className="text-sm">
          {status === "success" && (
            <span className="text-tq-400">Message sent — I’ll reply soon.</span>
          )}
          {status === "error" && (
            <span className="text-cta">
              Something failed. Please try again or email me directly.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
