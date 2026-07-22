// Dev tool: screenshot a URL with true device emulation via Edge/Chrome CDP.
// Usage: node scripts/screenshot.mjs <url> <out.png> [width] [height] [--mobile]
import { spawn } from "node:child_process";
import { writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const [url, out, w = "1440", h = "900", mobileFlag] = process.argv.slice(2);
if (!url || !out) {
  console.error("usage: node scripts/screenshot.mjs <url> <out.png> [w] [h] [--mobile]");
  process.exit(1);
}
const width = Number(w);
const height = Number(h);
const mobile = mobileFlag === "--mobile";

const EDGE = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe";
const PORT = 9333;
const profile = mkdtempSync(join(tmpdir(), "pf-cdp-"));

const browser = spawn(
  EDGE,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    `--remote-debugging-port=${PORT}`,
    `--user-data-dir=${profile}`,
    "about:blank",
  ],
  { stdio: "ignore" },
);

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function waitForEndpoint() {
  for (let i = 0; i < 50; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${PORT}/json/list`);
      const targets = await res.json();
      const page = targets.find((t) => t.type === "page");
      if (page) return page.webSocketDebuggerUrl;
    } catch {
      /* not up yet */
    }
    await sleep(200);
  }
  throw new Error("CDP endpoint never came up");
}

let msgId = 0;
function send(ws, method, params = {}) {
  const id = ++msgId;
  return new Promise((resolve, reject) => {
    const onMessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.id === id) {
        ws.removeEventListener("message", onMessage);
        data.error ? reject(new Error(data.error.message)) : resolve(data.result);
      }
    };
    ws.addEventListener("message", onMessage);
    ws.send(JSON.stringify({ id, method, params }));
  });
}

function waitForEvent(ws, eventName, timeoutMs = 15000) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`timeout waiting ${eventName}`)), timeoutMs);
    const onMessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.method === eventName) {
        clearTimeout(timer);
        ws.removeEventListener("message", onMessage);
        resolve(data.params);
      }
    };
    ws.addEventListener("message", onMessage);
  });
}

try {
  const wsUrl = await waitForEndpoint();
  const ws = new WebSocket(wsUrl);
  await new Promise((r, j) => {
    ws.addEventListener("open", r);
    ws.addEventListener("error", j);
  });

  await send(ws, "Page.enable");
  await send(ws, "Emulation.setDeviceMetricsOverride", {
    width,
    height,
    deviceScaleFactor: 2,
    mobile,
  });
  const loaded = waitForEvent(ws, "Page.loadEventFired");
  await send(ws, "Page.navigate", { url });
  await loaded;
  await sleep(1500); // fonts / late paint

  const { data } = await send(ws, "Page.captureScreenshot", { format: "png" });
  writeFileSync(out, Buffer.from(data, "base64"));
  console.log(`saved ${out} (${width}x${height}${mobile ? " mobile" : ""})`);
  ws.close();
} finally {
  browser.kill();
  await sleep(300);
  try {
    rmSync(profile, { recursive: true, force: true });
  } catch {
    /* profile dir may still be locked on Windows; temp dir cleans itself */
  }
}
