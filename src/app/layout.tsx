import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Interactive Card',
  description: 'made by ssik824',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="footer">
          <span>Developed by <Link href="https://github.com/victor-kiss">ssik824</Link></span>
        </footer>
      </body>
    </html>
  )
}
