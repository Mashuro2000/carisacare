import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carisa Care',
  description: 'At Carisa Care, we provide personalized NDIS support services that empower individuals with disabilities to live independently and achieve their goals with dignity and respect.',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
