import { Navbar,Footer } from '@components'
import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {config} from '@fortawesome/fontawesome-svg-core'
import type { Metadata } from 'next'

config.autoAddCss = false

export const metadata: Metadata = {
  title: 'KewlPaste',
  description: 'A self-hosted pastebin service',
  site_name: 'KewlPaste',
  url: 'https://kewlpaste.vercel.app/',
  type: 'website',
  locale: '---  ---',
  imageWidth: 600,
  imageHeight: 600,
  name: 'KewlPaste',
  url: 'https://kewlpaste.vercel.app/',
  thumbnailUrl: '',
  twitter: {
    site: '@--- YOUR TWITTER USERNAME ---',
    creator: '@--- YOUR TWITTER USERNAME ---',
    url: 'https://kewlpaste.vercel.app/',
    title: 'KewlPaste',
    description: 'A self-hosted pastebin service',
    card: 'summary',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/svg/logo.svg" />
      </head>
      <body>
        <Navbar/>
        <div className='max-sm:px-2.5 py-2.5'>
          <div className='mx-auto sm:w-11/12 rounded-lg p-2.5 w-full bg-[#212529]'>
            <div>{children}</div>
            <Footer/>
          </div>
        </div>
      </body>
    </html>
  )
}
