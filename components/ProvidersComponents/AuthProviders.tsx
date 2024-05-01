import Link from "next/link"
import React from "react"
import { Button } from "components/Button/Button"
import Image from "next/image"

const AuthProviders = () => {
  return (
    <>
      <Link
        target="_blank"
        href="https://t.me/VenusPortal"
        className="rounded-lg bg-[#FFCC00] px-4 py-1 text-white max-sm:hidden"
      >
        JOIN TELEGRAM
      </Link>
      <Link target="_blank" href="https://t.me/VenusPortal" className="rounded-lg sm:hidden">
        <Image src="/Telegram.png" height={30} width={30} alt="" />
      </Link>
    </>
  )
}

export default AuthProviders
