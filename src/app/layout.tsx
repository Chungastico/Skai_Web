import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
