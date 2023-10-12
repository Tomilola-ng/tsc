import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Nav from "./Nav"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Techies Bio',
  description: 'Stories of techies all over Africa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`no-scroll-bar ${inter.className}`}>
        <Nav />
        {children}</body>
    </html>
  )
}
