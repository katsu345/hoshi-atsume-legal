import assert from "node:assert/strict";
import test from "node:test";

const supportEmail = "support@example.test";

async function render(pathname) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
      SUPPORT_EMAIL: supportEmail,
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

async function html(pathname) {
  const response = await render(pathname);
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  return response.text();
}

test("support top links every legal document and renders runtime contact", async () => {
  const output = await html("/");
  assert.match(output, /星あつめ サポート/);
  assert.match(output, /href="\/terms-of-service"/);
  assert.match(output, /href="\/privacy-policy"/);
  assert.match(output, /href="\/tokushoho"/);
  assert.match(output, new RegExp(supportEmail));
  assert.doesNotMatch(output, /codex-preview|Starter Project|react-loading-skeleton/);
});

test("privacy policy matches the app's actual external services and local data", async () => {
  const output = await html("/privacy-policy");
  for (const expected of [
    "PostHog",
    "RevenueCat",
    "Apple App Store",
    "科目名",
    "セッションリプレイ（画面録画）は無効",
    "広告識別子（IDFA）は送信しません",
  ]) {
    assert.match(output, new RegExp(expected));
  }
  assert.doesNotMatch(output, /データは端末の外に出ません/);
});

test("terms describe per-sky ownership, the pack, and no subscription", async () => {
  const output = await html("/terms-of-service");
  assert.match(output, /「暁」「オーロラ」「雪の夜」の各単品および3種パック/);
  assert.match(output, /サブスクリプションではなく、自動更新による継続課金はありません/);
  assert.match(output, /購入を復元/);
});

test("commercial disclosure includes every purchase and required sales condition", async () => {
  const output = await html("/tokushoho");
  for (const expected of [
    "暁：300円",
    "オーロラ：300円",
    "雪の夜：300円",
    "3種パック：600円",
    "支払方法",
    "支払時期",
    "提供時期",
    "キャンセル・返金",
    "iOS 13.0以上",
    supportEmail,
  ]) {
    assert.match(output, new RegExp(expected));
  }
  assert.match(output, /ご請求があった場合、遅滞なく開示/);
});
