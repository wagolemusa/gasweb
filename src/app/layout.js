import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/layouts/Header'
import Header3 from '../components/layouts/Header3'
import Footer from '../components/layouts/Footer'
import { GlobalProvider } from './GlobalProvider'
import HeaderLine from "../components/layouts/HeaderLine"
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Gas, Banners, Grills',
  description: 'Gas Banners, Grill',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalProvider>
        <Header3 />
     
        {children}
        <Footer />
        </GlobalProvider>
      </body>
    </html>
  )
}
