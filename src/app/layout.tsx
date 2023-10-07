import { Header } from '@/components/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Footer } from '@/components/Footer/Footer'

const pangea = localFont({ 
  src: [
    {
      path: './fonts/pangea/regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/pangea/bold.woff2',
      weight: '700',
      style: 'normal'
    },
    {
      path: './fonts/pangea/light.woff2',
      weight: '200',
      style: 'normal'
    },
    {
      path: './fonts/pangea/italic.woff2',
      weight: '400',
      style: 'italic'
    },
    {
      path: './fonts/pangea/bold-italic.woff2',
      weight: '700',
      style: 'italic'
    },
    {
      path: './fonts/pangea/light-italic.woff2',
      weight: '200',
      style: 'italic'
    }
]})
//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Grupo Febre do Rato',
  description: 'Um conglomerado de empresas que visam a inovação e sustentabilidade em seus processos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={pangea.className}>
        <Header/>
        {children}
        <Footer/>
        </body>

    </html>
    
  )
}
