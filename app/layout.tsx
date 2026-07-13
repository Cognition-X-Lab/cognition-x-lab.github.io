import type { Metadata } from 'next'
//import 'github-markdown-css/github-markdown-light.css'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Cognition X Project',
  description: 'Research lab website',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="relative min-h-screen overflow-x-hidden bg-[hsl(var(--bg))] text-[hsl(var(--text))]">
          <Header />
          <main className="container py-10 md:py-14">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
