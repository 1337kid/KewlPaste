import { Navbar,Footer } from '@components'
import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import {config} from '@fortawesome/fontawesome-svg-core'
import type { Metadata } from 'next'

config.autoAddCss = false

export const metadata: Metadata = {
  title:'KewlPaste',
  description: 'A selfhosted pastebin service',
}

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
