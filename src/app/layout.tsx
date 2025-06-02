import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AdMob 관리 시스템",
  description: "Google AdMob 광고를 쉽게 관리하고 모니터링할 수 있는 웹 애플리케이션입니다. app-ads.txt 자동 설정과 Vercel 배포를 지원합니다.",
  keywords: "AdMob, 광고 관리, Google AdMob, app-ads.txt, 모바일 광고",
  authors: [{ name: "AdMob Manager" }],
  openGraph: {
    title: "AdMob 관리 시스템",
    description: "Google AdMob 광고를 쉽게 관리하고 모니터링하세요",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
