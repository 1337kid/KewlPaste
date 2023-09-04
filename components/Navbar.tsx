"use client"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const path = usePathname()

  const linkStyles = (pagePath: string) => {
    const activestyle = path === pagePath ? ' active-page' :''
    return "text-lg font-bold" + activestyle
  }

  return (
    <div className="py-2 px-2.5 bg-violet-700 gradient flex justify-between max-h-16">
      <div className="flex flex-row gap-3 items-center">
        <Image src="/svg/logo.svg" height={40} width={40} alt="logo" className="object-contain rounded-lg"/>
        <Link href="/" className={linkStyles('/')}>Home</Link>
      </div>
      <div className="flex items-center">
        <Link href="/api-docs" className={linkStyles('/api-docs')}>API</Link>
      </div>
    </div>
  )
}

export default Navbar