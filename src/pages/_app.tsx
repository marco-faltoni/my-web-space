import type { AppProps } from 'next/app'
import './globals.css'
import { Poiret_One, Noto_Serif_Display, Italiana } from 'next/font/google'

const poiret = Poiret_One({
  variable: '--font-poirot_one',
  subsets: ['latin'],
  weight: '400'
})

const noto = Noto_Serif_Display({
  variable: '--font-noto_serif_display',
  subsets: ['latin'],
  weight: ['400', '600', '700']
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poiret.variable} ${noto.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}