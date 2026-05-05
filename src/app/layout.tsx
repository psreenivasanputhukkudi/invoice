import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Invoice Generator - Create Professional Invoices Online Free",
    template: "%s | Invoice Generator",
  },
  description:
    "Free online invoice generator — create, customize, and download professional invoices as PDF instantly. Multiple templates, multi-currency support, no sign-up required. Built for freelancers, small businesses, and entrepreneurs.",
  keywords: [
    "invoice generator",
    "free invoice maker",
    "create invoice online",
    "professional invoice template",
    "PDF invoice creator",
    "billing software",
    "invoice generator free",
    "online invoice tool",
    "make invoice PDF",
    "download invoice PDF",
    "invoice template",
    "custom invoice",
    "small business invoice",
    "freelancer invoice",
    "invoice maker",
    "generate invoice",
    "invoice creator online",
    "free billing tool",
    "printable invoice",
    "A4 invoice PDF",
    "invoice with logo",
    "multi currency invoice",
    "tax invoice generator",
    "GST invoice maker",
    "VAT invoice template",
    "proforma invoice",
    "commercial invoice",
    "receipt generator",
    "quote generator",
    "billing invoice app",
    "fast invoice maker",
    "no signup invoice",
    "browser invoice tool",
    "instant invoice download",
    "invoice best practices",
    "how to create invoice",
    "professional billing",
  ],
  authors: [{ name: "Invoice Generator" }],
  creator: "Invoice Generator",
  publisher: "Invoice Generator",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Invoice Generator",
    title: "Invoice Generator - Create Professional Invoices Online Free",
    description:
      "Free online invoice generator with PDF export, multiple templates, and multi-currency support. No sign-up required. Create your first invoice in under a minute.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invoice Generator - Create Professional Invoices Online Free",
    description:
      "Free online invoice generator with PDF export, multiple templates, and multi-currency support. No sign-up required.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="light dark" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
