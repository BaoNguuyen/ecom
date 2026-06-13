import { ReactNode } from 'react'
import { Inter, DM_Sans, Smooch } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { ModalProvider, Providers } from '@/src/providers';
import { Header, Footer } from '@/src/component/layout';

const smooch = Smooch({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-smooch",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export default async function LocaleLayout({ children, params }: { children: ReactNode, params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const messages = await getMessages()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`min-h-screen bg-background antialiased ${inter.variable} ${dmSans.variable} ${smooch.variable}`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <ModalProvider>
              <Header />
              {children}
              <Footer />
            </ModalProvider>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}