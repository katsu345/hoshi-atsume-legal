import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const base = new URL("../_site/", import.meta.url);

async function html(route = "") {
  return readFile(new URL(`${route ? `${route}/` : ""}index.html`, base), "utf8");
}

test("GitHub Pagesの配下URLで全規約と画像を参照する", async () => {
  const output = await html();
  for (const route of ["terms-of-service", "privacy-policy", "tokushoho"]) {
    assert.match(output, new RegExp(`href="/hoshi-atsume-legal/${route}"`));
  }
  assert.match(output, /https:\/\/katsu345\.github\.io\/hoshi-atsume-legal\/og\.png/);
  assert.match(output, /support@example\.test/);
  assert.doesNotMatch(output, /__VINEXT_RSC|modulepreload/);
});

test("プライバシーポリシーは実装中の外部サービスと端末内データに一致する", async () => {
  const output = await html("privacy-policy");
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

test("利用規約は空の個別所有・パック・非サブスクを説明する", async () => {
  const output = await html("terms-of-service");
  assert.match(output, /「暁」「オーロラ」「雪の夜」の各単品および3種パック/);
  assert.match(output, /サブスクリプションではなく、自動更新による継続課金はありません/);
  assert.match(output, /購入を復元/);
});

test("特商法表記は全商品と販売条件を掲載する", async () => {
  const output = await html("tokushoho");
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
    "support@example.test",
  ]) {
    assert.match(output, new RegExp(expected));
  }
  assert.match(output, /ご請求があった場合、遅滞なく開示/);
});
