import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const output = path.join(root, "_site");
const basePath = "/hoshi-atsume-legal";
const publicOrigin = "https://katsu345.github.io";
const supportEmail = process.env.SUPPORT_EMAIL?.trim() || "support@example.test";
const routes = ["", "terms-of-service", "privacy-policy", "tokushoho"];

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("export", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(path.join(root, "dist/client/assets"), path.join(output, "assets"), {
  recursive: true,
});
await cp(path.join(root, "dist/client/og.png"), path.join(output, "og.png"));
await writeFile(path.join(output, ".nojekyll"), "");

for (const route of routes) {
  const pathname = route ? `/${route}` : "/";
  const response = await worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
      SUPPORT_EMAIL: supportEmail,
    },
    { waitUntil() {}, passThroughOnException() {} },
  );

  if (!response.ok) {
    throw new Error(`Could not render ${pathname}: ${response.status}`);
  }

  let html = await response.text();
  html = html
    .replaceAll('href="/', `href="${basePath}/`)
    .replaceAll('src="/', `src="${basePath}/`)
    .replaceAll(
      "http://localhost:3000/og.png",
      `${publicOrigin}${basePath}/og.png`,
    )
    .replace(/<link rel="modulepreload"[^>]*>/g, "")
    .replace(/<script[^>]*>[\s\S]*?<\/script>/g, "")
    .replace(/\sdata-rsc-css-href="[^"]*"/g, "")
    .replace(/\sdata-precedence="[^"]*"/g, "");

  const routeOutput = route ? path.join(output, route) : output;
  await mkdir(routeOutput, { recursive: true });
  await writeFile(path.join(routeOutput, "index.html"), html);
}
