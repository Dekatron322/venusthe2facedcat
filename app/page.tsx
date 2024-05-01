"use client"
import { Metadata } from "next"
import Footer from "components/Footer/Footer"
import AOS from "aos"
import "aos/dist/aos.css"

import Image from "next/image"
import Link from "next/link"
import Navbar from "components/Navbar/Navbar"
import { useEffect } from "react"

export default function Web() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate elements once
    })
  }, [])
  return (
    <>
      <Navbar />
      <section id="about" className="mx-auto grid max-w-screen-xl py-8  max-sm:px-3 sm:text-end lg:py-16">
        <div className="w-full items-end justify-between sm:flex">
          <div className="h-[600px] w-[300px]">
            <div className="animate-left absolute left-0">
              <Image src="/cat.png" width={500} height={700} alt="" />
            </div>
          </div>
          <div className="animate-right">
            <h1 className="mb-4 mt-16 max-w-2xl text-2xl font-extrabold leading-none tracking-tight dark:text-[red] md:text-2xl xl:text-3xl">
              AFTER THE MOON COMES THE VENUS !
            </h1>
            <h1 className="someClass mb-6 flex max-w-2xl text-3xl font-extrabold text-[#FFCC00] sm:items-end  sm:justify-end lg:mb-8 lg:text-9xl">
              $Venus
            </h1>
            <p className="d:text-base mb-6 flex max-w-2xl items-end justify-end  font-light lg:mb-8 lg:text-xl">
              Venus The Two Face Cat is an online sensation with over 2 million followers. With an endless supply of
              timeless two face cat memes, Venus offers rewarding community and trading made easy for all.
            </p>
            <Link
              target="_blank"
              href="https://github.com/Blazity/next-enterprise"
              className="mr-3 rounded-lg bg-[#FFCC00] px-4 py-2 text-xl font-extrabold text-black"
            >
              BUY ON RAYDIUM
            </Link>
            <Link
              target="_blank"
              href="https://github.com/Blazity/next-enterprise"
              className=" rounded-lg bg-[#FFCC00] px-4 py-2 text-xl font-extrabold text-black"
            >
              DOCS
            </Link>
          </div>
        </div>
      </section>
      <Image src="/PawPrints.png" height={300} width={2000} alt="" />

      <section id="roadmap" className="mt-10 bg-[#FFCC00] max-sm:px-3 ">
        <div className="mx-auto grid max-w-screen-xl     pb-10">
          <div className="w-full justify-between  sm:flex">
            <div
              data-aos="fade-down" // Specify a different animation for this element
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              <h1 className=" someClass mt-16 flex max-w-2xl text-3xl  font-extrabold  text-[#FFFFFF] lg:text-6xl">
                ROADMAP TO VENUS
              </h1>
              <h1 className="mb-4  max-w-2xl text-2xl leading-none tracking-tight dark:text-[red] md:text-xl xl:text-xl">
                Over the rainbow, after the moon... VENUS !
              </h1>
              <div className="mt-10">
                <h3 className="text-2xl font-bold">COMMUNITY TAKEOVER</h3>
                <p className="mb-6 flex max-w-2xl items-end justify-end font-light lg:mb-8 lg:text-xl">
                  Community building and token distribution. Listing on major centralized exchanges (CEXs) to increase
                  accessibility
                </p>
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-bold">COMMUNITY GROWTH AND SUSTAINABILITY</h3>
                <p className="mb-6 flex max-w-2xl items-end justify-end font-light lg:mb-8 lg:text-xl">
                  Continued community engagement. Endless pool of creative memes. exploration of partnerships and
                  collaborations to expand the project's reach and influence
                </p>
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-bold">COMMUNITY TRADING BOT</h3>
                <p className="mb-6 flex max-w-2xl items-end font-light lg:mb-8 lg:text-xl">
                  Develop a fully functional easy-to-use trading bot
                </p>
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-bold">NFT INTEGRATION</h3>
                <p className="mb-6 flex max-w-2xl items-end justify-end font-light lg:mb-8 lg:text-xl">
                  Integration of non-fungible tokens (NFTs) into the ecosystem to immortalize the Two Face Cat.
                </p>
              </div>
            </div>
            <div
              data-aos="fade-up" // Specify a different animation for this element
              data-aos-duration="1000"
              data-aos-delay="250"
              className=""
            >
              <Image src="/Cat-On-Planet.png" width={500} height={700} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="how-to-buy" className="mb-20 mt-10 max-sm:px-3">
        <div className="mx-auto grid max-w-screen-xl     ">
          <div className="w-full justify-between  sm:flex">
            <div
              className="flex flex-col items-center justify-center gap-4 sm:w-[40%]"
              data-aos="flip-left" // Specify a different animation for this element
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              <Image src="/Few-Paw-Prints.png" width={200} height={100} alt="" className="mb-4 max-sm:hidden" />
              <Image src="/Cat-in-Paw.png" width={450} height={100} alt="" />
            </div>
            <div
              data-aos="flip-right" // Specify a different animation for this element
              data-aos-duration="1000"
              data-aos-delay="250"
            >
              <h1 className=" someClass mt-16 flex max-w-2xl text-3xl font-extrabold text-[#FFCC00] lg:text-7xl">
                HOW TO BUY $VENUS
              </h1>
              <h1 className="mb-4  max-w-2xl text-2xl leading-none tracking-tight dark:text-[red] md:text-xl xl:text-xl">
                Phantom Wallet . Solana . VENUS!
              </h1>
              <div className="mt-10">
                <h3 className="text-2xl font-bold">GET A WALLET</h3>
                <p className="mb-6 flex max-w-2xl items-end justify-end font-light lg:mb-8 lg:text-xl">
                  First, you need a compatible wallet to store your $VENUS tokens. We recommend using Phantom for ease
                  of use and security
                </p>
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-bold">BUY SOLANA</h3>
                <p className="mb-6 flex max-w-2xl items-end justify-end font-light lg:mb-8 lg:text-xl">
                  To acquire $VENUS token, you'll need Solana in your phantom wallet. Purchase Solanaa from Major
                  cryptocurrency exchanges like Coinbase, Binance or Kraken
                </p>
              </div>
              <div className="mt-10">
                <h3 className="text-2xl font-bold">Add $VENUS TOKEN TO YOUR WALLET</h3>
                <p className="mb-6 flex max-w-2xl items-end justify-end font-light lg:mb-8 lg:text-xl">
                  Use a decentralized exchange like Raydium to swap your Solana to $Venus tokens. Enter the amount of
                  Solana you want to exchange and confirm the transaction. Add $Venus token contract afterwards to view
                  your token balance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
