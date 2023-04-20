import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nanum_Myeongjo } from 'next/font/google';

const defalutFont = Nanum_Myeongjo({weight: "400", subsets: ['latin']});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${defalutFont.className} flex min-h-screen flex-col items-center p-24`}>
     <Component {...pageProps} />
    </main>
  );
}
