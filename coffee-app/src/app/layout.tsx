import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/cursor'

export const metadata: Metadata = {
  title: 'Your Next Cup',
  description: 'A simple app to help you make the perfect cup of coffee.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={'bg-white text-black font-trap'}>
        {children}
        <CustomCursor />
      </body>
    </html>
  )
}
