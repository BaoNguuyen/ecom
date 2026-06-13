import { ReactNode } from 'react'
import { Inter, DM_Sans } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import SubModal from '@/src/component/common/modal/sub-modal';
import { ModalProvider, Providers } from '@/src/providers';
import { Header, Footer } from '@/src/component/layout';

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
        className={`min-h-screen bg-background font-sans antialiased ${inter.className} ${dmSans.className}`}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <ModalProvider>
              <SubModal />
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