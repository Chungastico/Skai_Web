import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { IdiomaProvider } from '../context/IdiomaContext'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

export const metadata = {
  title: 'SKAI',
  description: 'Soluciones sostenibles con IA',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${montserrat.className} relative`}>
        <IdiomaProvider>
          <Header />
          <main className="pt-[90px] md:pt-[90px] lg:pt-[64px]">
            {children}
          </main>
          <Footer />
        </IdiomaProvider>
      </body>
    </html>
  )
}
