import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'devkarasel — Software Developer',
  description: 'Full-stack software developer crafting digital experiences. Next.js, React, Node.js.',
  keywords: ['software developer', 'full stack', 'next.js', 'react', 'devkarasel'],
  openGraph: {
    title: 'devkarasel — Software Developer',
    description: 'Full-stack software developer crafting digital experiences.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
