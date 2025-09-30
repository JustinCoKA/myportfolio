import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { DM_Serif_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Suspense } from "react"
import "./globals.css"

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Justin Lee | IT Student & Data Engineer",
  description:
    "Portfolio of Justin Lee - IT student specializing in data engineering and backend development. Building data pipelines, APIs, and dashboards in Melbourne/Sydney, Australia.",
  keywords: ["Justin Lee", "Data Engineering", "Backend Development", "Python", "SQL", "AWS", "ETL", "Portfolio"],
  authors: [{ name: "Justin Lee" }],
  creator: "Justin Lee",
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://sitesync.solutions",
    title: "Justin Lee | IT Student & Data Engineer",
    description: "Portfolio of Justin Lee - IT student specializing in data engineering and backend development.",
    siteName: "Justin Lee Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Justin Lee | IT Student & Data Engineer",
    description: "Portfolio of Justin Lee - IT student specializing in data engineering and backend development.",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${dmSerif.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
