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
      default: "Starlit｜サポート・各種規約",
      template: "%s｜Starlit",
    },
    description: "集中タイマー『Starlit』のサポートと各種規約です。",
    openGraph: {
      type: "website",
      locale: "ja_JP",
      siteName: "Starlit",
      title: "Starlit｜サポート・各種規約",
      description: "集中タイマー『Starlit』のサポートと各種規約です。",
      images: [
        {
          url: "/og.png",
          width: 1729,
          height: 910,
          alt: "Starlit サポート・各種規約",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Starlit｜サポート・各種規約",
      description: "集中タイマー『Starlit』のサポートと各種規約です。",
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
