import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Carisa Care',
  description: 'Carisa Care is a trusted NDIS registered provider offering compassionate disability support and healthcare services across Australia. Our experienced team empowers individuals with disabilities to live independently and achieve their goals with dignity and respect.',
  keywords: [
    'NDIS',
    'Disability Support',
    'Disability Services',
    'NDIS Provider',
    'Australia',
    'Healthcare',
    'Support Coordination',
    'Carisa Care',
    'NDIS Australia',
    'Disability Care',
    'Personal Care',
    'Community Participation',
    'Supported Independent Living',
    'Respite Care',
    'Group Activities',
    'Specialized Support',
    'Brisbane',
    'Queensland'
  ],
  generator: 'v0.dev',
  alternates: {
    canonical: 'https://carisacare.vercel.app/',
  },
  openGraph: {
    title: 'NDIS Disability Support Services Australia | Carisa Care',
    description: 'Compassionate NDIS disability support and healthcare services across Australia. Empowering individuals with disabilities to live independently and achieve their goals.',
    url: 'https://carisacare.vercel.app/',
    siteName: 'Carisa Care',
    locale: 'en_AU',
    type: 'website',
    images: [
      {
        url: 'https://carisacare.vercel.app/og-image.jpg', // Replace with your actual image if available
        width: 1200,
        height: 630,
        alt: 'Carisa Care - NDIS Disability Support Services Australia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NDIS Disability Support Services Australia | Carisa Care',
    description: 'Compassionate NDIS disability support and healthcare services across Australia.',
    site: '@carisacare', // Replace with your Twitter handle if available
    images: ['https://carisacare.vercel.app/og-image.jpg'], // Replace with your actual image if available
  },
  metadataBase: new URL('https://carisacare.vercel.app/'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
