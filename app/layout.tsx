import { NavBar } from '../components/NavBar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Desafio IACC Frontend',
  description: 'Hecho con NextjS 13.4, Typescript y Ant Design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <NavBar></NavBar>
        <h1>Desafio IACC FrontEnd</h1>
        {children}
      </body>
    </html>
  )
}
