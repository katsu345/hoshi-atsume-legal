import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const base = new URL("../_site/", import.meta.url);

async function html(route = "") {
  return readFile(new URL(`${route ? `${route}/` : ""}index.html`, base), "utf8");
}

test("GitHub Pagesの配下URLで全規約と画像を参照する", async () => {
  const output = await html();
  for (const route of [
    "terms-of-service",
    "privacy-policy",
    "tokushoho",
    "en/terms-of-service",
    "en/privacy-policy",
  ]) {
    assert.match(output, new RegExp(`href="/hoshi-atsume-legal/${route}"`));
  }
  assert.match(output, /https:\/\/katsu345\.github\.io\/hoshi-atsume-legal\/og\.png/);
  assert.match(output, /support@example\.test/);
  assert.doesNotMatch(output, /__VINEXT_RSC|modulepreload/);
});

// 2026-10-09 アプリに PostHog を導入したため、外部サービスは RevenueCat と PostHog の2つ。
test("プライバシーポリシーはRevenueCatとPostHogを外部サービスとして記載する", async () => {
  const output = await html("privacy-policy");
  for (const expected of [
    "RevenueCat",
    "Apple App Store",
    "科目名",
    "広告識別子をRevenueCatへ設定しません",
    "PostHog（利用状況の分析）",
    "科目名、試験の名前・日付、氏名、メールアドレス、広告識別子は送信しません",
    "自動更新サブスクリプション",
    "posthog\\.com/privacy",
  ]) {
    assert.match(output, new RegExp(expected));
  }
  // アプリはセッションリプレイを使わない。科目名を送る・端末外に出ないの両方の誤記を防ぐ。
  assert.doesNotMatch(output, /セッションリプレイを(利用|使用)します/);
  assert.doesNotMatch(output, /データは端末の外に出ません/);
  assert.doesNotMatch(output, /運営者のサーバーへ送信する機能はありません/);
});

// 2026-10-22 Starlit+ (年額・月額の自動更新と買い切り)に移行。旧の単品・3種パックは復元だけ残す。
test("利用規約はStarlit+の3プラン・自動更新・解約後の扱いを説明する", async () => {
  const output = await html("terms-of-service");
  for (const expected of [
    "第4条（アプリ内課金・Starlit\\+）",
    "年額プラン（自動更新サブスクリプション・期間1年）",
    "月額プラン（自動更新サブスクリプション・期間1か月）",
    "買い切り（期限なし）",
    "各期間が終わる24時間前までに解約しない限り",
    "本アプリを削除しても解約にはなりません",
    "無料の空「深い藍夜」に戻ります",
    "これらの新規の販売は終了しています",
    "購入を復元",
  ]) {
    assert.match(output, new RegExp(expected));
  }
  assert.doesNotMatch(output, /サブスクリプションではなく、自動更新による継続課金はありません/);
});

test("特商法表記は全商品と販売条件を掲載する", async () => {
  const output = await html("tokushoho");
  for (const expected of [
    "年額プラン：2,400円／年（自動更新）",
    "月額プラン：300円／月（自動更新）",
    "買い切り：3,000円（1回のお支払い）",
    "支払方法",
    "支払時期",
    "提供時期",
    "キャンセル・返金",
    "iOS 15.0以上",
    "期間の途中での解約による日割りの返金はありません",
    "support@example.test",
  ]) {
    assert.match(output, new RegExp(expected));
  }
  assert.match(output, /ご請求があった場合、遅滞なく開示/);
  assert.doesNotMatch(output, /3種パック：600円/);
});

// 2026-10-28 Google Play 版と英語版を出す(オーナー決定)。文書は App Store・Google Play 共通、
// 英語は利用規約とプライバシーポリシーだけ(日本語が正本)。特商法は日本語のみ+英語の説明1行。
test("日本語の3文書は App Store と Google Play の両方を案内する", async () => {
  const terms = await html("terms-of-service");
  for (const expected of [
    "Google Playの利用規約",
    "Google Playストアアプリの「お支払いと定期購入」から「定期購入」",
    "App Storeで購入した権利とGoogle Playで購入した権利は、互いに引き継げません",
    "第12条（翻訳）",
    'href="/hoshi-atsume-legal/en/terms-of-service"',
  ]) {
    assert.match(terms, new RegExp(expected));
  }
  const privacy = await html("privacy-policy");
  for (const expected of [
    "App Store版（iPhone）とGoogle Play版（Android）の両方に適用",
    "Google Playの購入情報",
    "Androidの広告ID",
    "Androidのバックアップ機能の対象にしていません",
    "policies\\.google\\.com/privacy",
  ]) {
    assert.match(privacy, new RegExp(expected));
  }
  const tokushoho = await html("tokushoho");
  for (const expected of [
    "Act on Specified Commercial Transactions",
    "日本のApp StoreおよびGoogle Playにおける消費税込み価格",
    "Google Play版：Android 7\\.0以上",
    "support\\.google\\.com/googleplay/answer/2479637",
  ]) {
    assert.match(tokushoho, new RegExp(expected));
  }
});

test("英語の利用規約とプライバシーポリシーは日本語版を正本と明記する", async () => {
  for (const [route, title] of [
    ["en/terms-of-service", "Terms of Service"],
    ["en/privacy-policy", "Privacy Policy"],
  ]) {
    const output = await html(route);
    assert.match(output, new RegExp(`<h1>${title}</h1>`));
    assert.match(output, /lang="en"/);
    assert.match(output, /the Japanese version prevails/);
    assert.match(output, /Email: /);
    assert.match(output, /support@example\.test/);
    const body = output.slice(output.indexOf("<body"));
    assert.doesNotMatch(body, /[\u3040-\u30ff\u4e00-\u9fff]/, `${route} has Japanese text`);
    assert.match(output, /<meta name="description" content="[^"]*English translation/);
  }
  const terms = await html("en/terms-of-service");
  assert.match(terms, /Payments &amp; subscriptions/);
  assert.match(terms, /href="\/hoshi-atsume-legal\/terms-of-service"/);
});
