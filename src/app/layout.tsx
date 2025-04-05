import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from '../components/Header'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'SKAI',
  description: 'Soluciones sostenibles con IA',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={montserrat.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
