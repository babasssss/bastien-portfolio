import { Sora } from '@next/font/google'
import Nav from './Nav'
import Header from './Header'
import TopLeftImg from './TopLeftImg'
import Head from 'next/head'
import { useRouter } from 'next/router'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

const Layout = ({ children }) => {
  const router = useRouter()
  const pageClass = (router.pathname === '/' || router.pathname === '/contact') ? 'page' : 'page-no-hidden'
  return (
    <>
      <Head>
        <link rel='icon' href='/bulb.png' />
        <title>Portfolio - Soreau Bastien</title>
      </Head>
      <div className={`${pageClass} xl:page  bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>

        <TopLeftImg />
        <Nav />
        <Header />
        {children}
      </div>
    </>
  )
}

export default Layout
