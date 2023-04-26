import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nanum_Myeongjo } from 'next/font/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const defalutFont = Nanum_Myeongjo({weight: "400", subsets: ['latin']});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={`${defalutFont.className} flex min-h-screen flex-col items-center p-24`}>
      <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
