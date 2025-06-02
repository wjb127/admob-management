import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "가월 (Gawol) - 모바일 앱 개발자 포트폴리오",
  description: "혁신적인 모바일 앱으로 일상을 더 의미있게 만드는 개발자 가월의 포트폴리오입니다. Life Timer, 암기훈련소 등 실용적인 앱을 개발합니다.",
  keywords: "가월, Gawol, 모바일 앱 개발, Life Timer, 암기훈련소, 앱 개발자, 포트폴리오, Android, iOS",
  authors: [{ name: "가월 (Gawol)" }],
  creator: "가월 (Gawol)",
  openGraph: {
    title: "가월 (Gawol) - 모바일 앱 개발자",
    description: "혁신적인 모바일 앱으로 일상을 더 의미있게 만드는 개발자",
    type: "website",
    locale: "ko_KR",
    siteName: "가월 포트폴리오",
  },
  twitter: {
    card: "summary_large_image",
    title: "가월 (Gawol) - 모바일 앱 개발자",
    description: "혁신적인 모바일 앱으로 일상을 더 의미있게 만드는 개발자",
  },
  robots: {
    index: true,
    follow: true,
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
