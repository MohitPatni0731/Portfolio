import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Mohit Patni - ML Research Scholar & Data Analyst",
  description:
    "Machine Learning Research Scholar and Data Analyst specializing in advanced ML algorithms, data visualization, and network security research.",
  keywords: ["Machine Learning", "Data Analysis", "Research", "Python", "AI", "Computer Science"],
  authors: [{ name: "Mohit Patni" }],
  openGraph: {
    title: "Mohit Patni - ML Research Scholar & Data Analyst",
    description:
      "Machine Learning Research Scholar and Data Analyst specializing in advanced ML algorithms, data visualization, and network security research.",
    type: "website",
  },
  generator: 'v0.dev',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      </head>
      <body className="font-inter antialiased touch-manipulation">
        {children}
      </body>
    </html>
  )
}
