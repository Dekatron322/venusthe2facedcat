"use client"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Button } from "components/Button/Button"
import AuthProviders from "components/ProvidersComponents/AuthProviders"
import { NavLinks } from "utils"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      sections.forEach((section) => {
        const top = section.offsetTop
        const height = section.offsetHeight
        if (window.scrollY >= top && window.scrollY < top + height) {
          setActiveLink(section.id)
        }
      })
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const session = null
  return (
    <nav className="flexBetween navbar paddings z-50 bg-white">
      <div className=" gap-7">
        <Link href="/">
          <Image src="/Venus-Logo.png" width={115} height={43} alt="dekalo" />
        </Link>
      </div>
      <div>
        <ul className="text-small hidden gap-20  xl:flex">
          <a href="#about" className={activeLink === "about" ? " border-b-3 border-[#ffcc00] font-bold" : ""}>
            ABOUT $VENUS
          </a>
          <a href="#roadmap" className={activeLink === "roadmap" ? "border-b-3 border-[#ffcc00] font-bold" : ""}>
            ROADMAP
          </a>
          <a href="#how-to-buy" className={activeLink === "how-to-buy" ? "border-b-3 border-[#ffcc00] font-bold" : ""}>
            HOW TO BUY
          </a>
        </ul>
      </div>
      <div className="flexCenter gap-2">
        {session ? (
          <>
            UserPhoto
            <Button href="https://github.com/Blazity/next-enterprise" className="mr-3">
              go to dashboard
            </Button>
          </>
        ) : (
          <AuthProviders />
        )}
        <Link href="https://x.com/venuscat_sol?s=11&t=lJcRGun_pd4gpFpb8bAobw">
          <Image src="/TwitterX.png" height={30} width={30} alt="" />
        </Link>
        <Link href="https://dexscreener.com/solana/gpmofkvaxocdetbcfysxun23bv5txud5qpjjz9hwf5eg">
          <Image src="/Dexscreener.png" height={30} width={30} alt="" />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
