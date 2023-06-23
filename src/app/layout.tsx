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
          <span>Developed by ssik824</span>
        </footer>
      </body>
    </html>
  )
}
