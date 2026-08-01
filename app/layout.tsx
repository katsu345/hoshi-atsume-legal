import type { Metadata } from "next";
import { headers } from "next/headers";

import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host.startsWith("localhost") ? "http" : "https");

  return {
    metadataBase: new URL(`${protocol}://${host}`),
    title: {
      default: "星あつめ｜サポート・各種規約",
      template: "%s｜星あつめ",
    },
    description: "集中タイマー『星あつめ』のサポートと各種規約です。",
    openGraph: {
      type: "website",
      locale: "ja_JP",
      siteName: "星あつめ",
      title: "星あつめ｜サポート・各種規約",
      description: "集中タイマー『星あつめ』のサポートと各種規約です。",
      images: [
        {
          url: "/og.png",
          width: 1729,
          height: 910,
          alt: "星あつめ サポート・各種規約",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "星あつめ｜サポート・各種規約",
      description: "集中タイマー『星あつめ』のサポートと各種規約です。",
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
