"use client"
import React, { useEffect } from "react"

import Image from "next/image"
import AuthProviders from "components/ProvidersComponents/AuthProviders"
import AOS from "aos"
import "aos/dist/aos.css"
import Link from "next/link"

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate elements once
    })
  }, [])
  return (
    <>
      <div className="relative mt-10 flex h-[500px] px-3 text-center sm:items-center">
        <div>
          <div
            className="absolute -bottom-24 right-0 "
            data-aos="fade-up" // Specify a different animation for this element
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            <Image src="/Corner.png" width={300} height={100} alt="" className="mb-4 max-sm:hidden" />
            <Image src="/Corner.png" width={200} height={100} alt="" className="mb-4 sm:hidden" />
          </div>
          <div
            className="absolute -bottom-4 left-0"
            data-aos="fade-right" // Specify a different animation for this element
            data-aos-duration="1000"
            data-aos-delay="250"
          >
            <Image src="/Cat-With-Fur.png" width={400} height={100} alt="" className="mb-4 max-sm:hidden" />
            <Image src="/Cat-With-Fur.png" width={200} height={100} alt="" className="mb-4 sm:hidden" />
          </div>
        </div>
        <div className="flex w-full flex-col">
          <h3 className="someClass mb-2 text-center font-bold max-sm:text-4xl sm:text-7xl">
            FOLLOW VENUS ON SOCIAL MEDIA
          </h3>
          <div className="flexCenter gap-2">
            <AuthProviders />

            <Link href="https://x.com/venuscat_sol?s=11&t=lJcRGun_pd4gpFpb8bAobw" target="_blank">
              <Image src="/TwitterX.png" height={30} width={30} alt="" />
            </Link>
            <Link href="https://dexscreener.com/solana/gpmofkvaxocdetbcfysxun23bv5txud5qpjjz9hwf5eg" target="_blank">
              <Image src="/Dexscreener.png" height={30} width={30} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <div className="paddings flex w-full flex-col items-center justify-center  bg-[#FFCC00] ">
        <div
          className="flex items-center justify-center pt-16 sm:w-[60%]  sm:px-16 sm:py-4"
          data-aos="fade-down" // Specify a different animation for this element
          data-aos-duration="1000"
          data-aos-delay="250"
        >
          <p className="text-center">
            Venus The Two Face Cat is committed to building a community of cat meme lovers aimed at making the crypto
            world more fun and safer for everyone!
          </p>
        </div>
        <p
          data-aos="fade-up" // Specify a different animation for this element
          data-aos-duration="1000"
          data-aos-delay="250"
          className="mt-10 text-white"
        >
          © 2024 VENUS - All Rights Reserved
        </p>
      </div>
    </>
  )
}

export default Footer
