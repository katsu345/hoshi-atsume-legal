import Link from "next/link";

function getSupportEmail() {
  return process.env.SUPPORT_EMAIL?.trim() ?? "";
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span aria-hidden="true" className="brand-mark">✦</span>
        Starlit
      </Link>
      <nav aria-label="規約ページ">
        <Link href="/terms-of-service">利用規約</Link>
        <Link href="/privacy-policy">プライバシー</Link>
        <Link href="/tokushoho">特商法表記</Link>
      </nav>
    </header>
  );
}

export function ContactAddress() {
  const email = getSupportEmail();
  if (!email) {
    return <p className="contact-pending">お問い合わせ窓口は公開時に設定されます。</p>;
  }
  return (
    <p className="contact-address">
      メール：<a href={`mailto:${email}`}>{email}</a>
    </p>
  );
}

export function PageFooter() {
  return (
    <footer className="page-footer">
      <p>© 2026 Starlit</p>
      <p><Link href="/">サポートトップへ</Link></p>
    </footer>
  );
}

export function LegalPage({
  title,
  children,
}: Readonly<{ title: string; children: React.ReactNode }>) {
  return (
    <main className="legal-shell">
      <SiteHeader />
      <article className="legal-document">
        <p className="legal-nav"><Link href="/">← サポートトップ</Link></p>
        <h1>{title}</h1>
        <p className="updated-at">制定・最終更新日：2026年8月2日</p>
        {children}
      </article>
      <PageFooter />
    </main>
  );
}
