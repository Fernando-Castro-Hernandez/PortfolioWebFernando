import { site } from "@content/site";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 sm:flex-row">
        <p className="text-sm text-ink-dim">
          © 2026 {site.name} · {site.location}
        </p>
        <div className="flex items-center gap-5">
          <a
            href={site.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-ink-dim transition-colors hover:text-tq-400"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-ink-dim transition-colors hover:text-tq-400"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
          <span className="font-mono text-xs text-ink-dim">summit reached</span>
        </div>
      </div>
    </footer>
  );
}
