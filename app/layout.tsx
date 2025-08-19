import type { Metadata } from 'next'
import { Inter } from 'next/font/google'/
import './globals.css'/

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'GlamCS',
  description: 'Experience luxury cosmetics with GlamCS, where modern design meets elegance.',
  keywords: ['cosmetics', 'GlamCS', 'luxury', 'modern design'],
  authors: [{ name: 'GlamCS' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="">
      <body className={`${inter.className} bg-white text-orange-600 min-h-screen antialiased`}>
        <div className="relative min-h-screen bg-gradient-to-br from-orange-300 via-white to-orange-200">
          {children}
        </div>/
      </body>/
    </html>/
  )
}