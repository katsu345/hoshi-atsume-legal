import type { Metadata } from "next";

import { ContactAddress, LegalPage } from "../site-components";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "特定商取引法に基づく表記" };

export default function TokushohoPage() {
  return (
    <LegalPage title="特定商取引法に基づく表記" updatedAt="2026年10月22日">
      <p className="notice">
        販売事業者の氏名、運営責任者、所在地および電話番号は、ご請求があった場合、購入のお申込み前に確認できるよう遅滞なく電子メールで開示します。
        下記お問い合わせ先へ「特商法表記の開示請求」と明記してご連絡ください。
      </p>

      <table>
        <tbody>
          <tr>
            <th>販売事業者・運営責任者</th>
            <td>ご請求があった場合、遅滞なく開示します。</td>
          </tr>
          <tr>
            <th>所在地・電話番号</th>
            <td>ご請求があった場合、遅滞なく開示します。</td>
          </tr>
          <tr>
            <th>お問い合わせ先</th>
            <td><ContactAddress /></td>
          </tr>
          <tr>
            <th>販売する商品</th>
            <td>
              「Starlit」アプリ内の有料機能「Starlit+」（有料の空と、Starlit+ だけの星座）<br />
              ・年額プラン：2,400円／年（自動更新）<br />
              ・月額プラン：300円／月（自動更新）<br />
              ・買い切り：3,000円（1回のお支払い）
            </td>
          </tr>
          <tr>
            <th>販売価格</th>
            <td>
              上記のとおり（日本のApp Storeにおける消費税込み価格）。
              実際の販売価格は、購入確認時にApp Storeが表示する価格をご確認ください。
            </td>
          </tr>
          <tr>
            <th>商品代金以外の必要料金</th>
            <td>インターネット接続に必要な通信料は、利用者の負担となります。</td>
          </tr>
          <tr>
            <th>支払方法</th>
            <td>Apple Accountを通じたApp Store決済。利用できる支払方法はAppleの定めによります。</td>
          </tr>
          <tr>
            <th>支払時期</th>
            <td>
              買い切り：購入手続完了時に課金されます。<br />
              年額プラン・月額プラン：購入手続完了時に最初の期間の料金が課金され、その後は各期間が終わる前の24時間以内に、次の期間の料金が自動で課金されます。
            </td>
          </tr>
          <tr>
            <th>提供時期</th>
            <td>決済完了後、直ちにStarlit+ が利用可能になります。通信状況等により反映されない場合は「購入を復元」をお試しください。</td>
          </tr>
          <tr>
            <th>キャンセル・返金</th>
            <td>
              年額プラン・月額プランは、iPhoneの「設定」アプリでApple Accountの「サブスクリプション」を開き、いつでも解約できます。
              各期間が終わる24時間前までに解約すると、次の期間から課金されません。解約後も、支払い済みの期間が終わるまでは利用できます。
              期間の途中での解約による日割りの返金はありません。<br />
              デジタルコンテンツの性質上、利用者都合による決済完了後の返品・交換はできません。
              ただし、法令上認められる権利を妨げるものではありません。返金の可否および手続はAppleの規約に従い、
              <a href="https://reportaproblem.apple.com/" rel="noreferrer" target="_blank">Appleの「問題を報告する」</a>
              から申請できます。
            </td>
          </tr>
          <tr>
            <th>動作環境</th>
            <td>iOS 15.0以上。対応端末・最新の要件はApp Storeのアプリページをご確認ください。</td>
          </tr>
          <tr>
            <th>申込有効期限</th>
            <td>特になし。販売を終了する場合は、購入画面に商品が表示されなくなります。</td>
          </tr>
          <tr>
            <th>特別な販売条件</th>
            <td>
              販売地域、通貨および価格表示はApp Storeの設定に従います。年額プラン・月額プランは、解約しない限り同じ期間・同じ価格で自動更新されます。
              どのプランでも利用できる内容は同じです。以前に販売していた空の単品および3種パックの新規の販売は終了しています（購入済みの空は引き続き利用できます）。
            </td>
          </tr>
        </tbody>
      </table>
    </LegalPage>
  );
}
