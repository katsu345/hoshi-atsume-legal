import Link from "next/link";

type Lang = "ja" | "en";

function getSupportEmail() {
  return process.env.SUPPORT_EMAIL?.trim() ?? "";
}

export function SiteHeader({ lang = "ja" }: Readonly<{ lang?: Lang }>) {
  if (lang === "en") {
    return (
      <header className="site-header">
        <Link className="brand" href="/">
          <span aria-hidden="true" className="brand-mark">✦</span>
          Starlit
        </Link>
        <nav aria-label="Legal pages">
          <Link href="/en/terms-of-service">Terms</Link>
          <Link href="/en/privacy-policy">Privacy</Link>
          <Link href="/tokushoho">Legal notice (Japan)</Link>
        </nav>
      </header>
    );
  }
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

export function ContactAddress({ lang = "ja" }: Readonly<{ lang?: Lang }>) {
  const email = getSupportEmail();
  if (!email) {
    return (
      <p className="contact-pending">
        {lang === "en"
          ? "The contact address will be set when the site is published."
          : "お問い合わせ窓口は公開時に設定されます。"}
      </p>
    );
  }
  return (
    <p className="contact-address">
      {lang === "en" ? "Email: " : "メール："}
      <a href={`mailto:${email}`}>{email}</a>
    </p>
  );
}

export function PageFooter({ lang = "ja" }: Readonly<{ lang?: Lang }>) {
  return (
    <footer className="page-footer">
      <p>© 2026 Starlit</p>
      <p>
        <Link href="/">{lang === "en" ? "Back to support home" : "サポートトップへ"}</Link>
      </p>
    </footer>
  );
}

export function LegalPage({
  title,
  updatedAt = "2026年8月2日",
  lang = "ja",
  children,
}: Readonly<{
  title: string;
  updatedAt?: string;
  lang?: Lang;
  children: React.ReactNode;
}>) {
  const en = lang === "en";
  return (
    <main className="legal-shell" lang={lang}>
      <SiteHeader lang={lang} />
      <article className="legal-document">
        <p className="legal-nav">
          <Link href="/">{en ? "← Support home" : "← サポートトップ"}</Link>
        </p>
        <h1>{title}</h1>
        <p className="updated-at">
          {en
            ? `Established: August 2, 2026　Last updated: ${updatedAt}`
            : `制定日：2026年8月2日　最終更新日：${updatedAt}`}
        </p>
        {children}
      </article>
      <PageFooter lang={lang} />
    </main>
  );
}
