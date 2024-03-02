import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/cursor'
import classNames from 'classnames'

export const metadata: Metadata = {
  title: 'Your Next Cup',
  description: 'A simple app to help you make the perfect cup of coffee.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={classNames('bg-brand-1500', 'font-trap')}>
        {children}
        <CustomCursor />
      </body>
    </html>
  )
}
