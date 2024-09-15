import type { Metadata } from 'next'
import './globals.css'
import classNames from 'classnames'
import CustomCursor from '@coffee-app/components/cursor'

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
