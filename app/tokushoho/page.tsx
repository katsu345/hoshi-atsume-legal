import type { Metadata } from "next";

import { ContactAddress, LegalPage } from "../site-components";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "特定商取引法に基づく表記" };

export default function TokushohoPage() {
  return (
    <LegalPage title="特定商取引法に基づく表記">
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
              「星あつめ」アプリ内の空の着せ替え（非消費型・買い切り）<br />
              ・暁：300円<br />
              ・オーロラ：300円<br />
              ・雪の夜：300円<br />
              ・3種パック：600円
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
            <td>購入手続完了時に課金されます。買い切りのため、自動更新による継続課金はありません。</td>
          </tr>
          <tr>
            <th>提供時期</th>
            <td>決済完了後、直ちに対象の空が利用可能になります。通信状況等により反映されない場合は「購入を復元」をお試しください。</td>
          </tr>
          <tr>
            <th>キャンセル・返金</th>
            <td>
              デジタルコンテンツの性質上、利用者都合による決済完了後の返品・交換はできません。
              ただし、法令上認められる権利を妨げるものではありません。返金の可否および手続はAppleの規約に従い、
              <a href="https://reportaproblem.apple.com/" rel="noreferrer" target="_blank">Appleの「問題を報告する」</a>
              から申請できます。
            </td>
          </tr>
          <tr>
            <th>動作環境</th>
            <td>iOS 13.0以上。対応端末・最新の要件はApp Storeのアプリページをご確認ください。</td>
          </tr>
          <tr>
            <th>申込有効期限</th>
            <td>特になし。販売を終了する場合は、購入画面に商品が表示されなくなります。</td>
          </tr>
          <tr>
            <th>特別な販売条件</th>
            <td>
              販売地域、通貨および価格表示はApp Storeの設定に従います。単品は対象の空1種、3種パックは「暁」「オーロラ」「雪の夜」の3種を解放します。
            </td>
          </tr>
        </tbody>
      </table>
    </LegalPage>
  );
}
