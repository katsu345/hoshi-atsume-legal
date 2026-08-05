import type { Metadata } from "next";
import Link from "next/link";

import { ContactAddress, PageFooter, SiteHeader } from "./site-components";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: "Starlit｜サポート・各種規約" },
  description: "集中タイマー『Starlit』のサポート、利用規約、プライバシーポリシー、特定商取引法に基づく表記です。",
};

const documents = [
  {
    href: "/terms-of-service",
    title: "利用規約",
    description: "アプリをご利用いただく際の条件",
  },
  {
    href: "/privacy-policy",
    title: "プライバシーポリシー",
    description: "端末内データと外部サービスの取扱い",
  },
  {
    href: "/tokushoho",
    title: "特定商取引法に基づく表記",
    description: "買い切りのアプリ内課金に関する販売条件",
  },
] as const;

export default function Home() {
  return (
    <main className="site-shell">
      <SiteHeader />

      <section className="hero" aria-labelledby="page-title">
        <p className="eyebrow">Starlit サポート</p>
        <h1 id="page-title">集中の時間を、安心して星に。</h1>
        <p>
          25分の集中で星を灯すタイマー「Starlit」の各種規約とお問い合わせ窓口です。
        </p>
      </section>

      <section className="section" aria-labelledby="documents-title">
        <h2 id="documents-title">各種規約</h2>
        <div className="document-grid">
          {documents.map((document) => (
            <Link className="document-card" href={document.href} key={document.href}>
              <span>
                <strong>{document.title}</strong>
                <small>{document.description}</small>
              </span>
              <span aria-hidden="true" className="arrow">→</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="contact-panel" aria-labelledby="contact-title">
        <div>
          <p className="eyebrow">お問い合わせ</p>
          <h2 id="contact-title">不具合・ご意見・事業者情報の開示請求</h2>
        </div>
        <p>
          アプリ名「Starlit」、ご利用のiOSバージョン、問題が起きた場面を添えてご連絡ください。
          特定商取引法に基づく販売事業者情報の開示をご希望の場合は、その旨を明記してください。
        </p>
        <ContactAddress />
      </section>

      <PageFooter />
    </main>
  );
}
