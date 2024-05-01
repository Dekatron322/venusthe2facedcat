"use client"
import React, { useEffect, useState } from "react"
import { GoArrowUpRight } from "react-icons/go"
import { MdCompareArrows } from "react-icons/md"
import Image from "next/image"
import { SignInCard } from "utils"
import BackArrow from "./BackArrow"

interface AuthCardProps {
  showBackArrow?: boolean
}

const AuthCard: React.FC<AuthCardProps> = ({ showBackArrow = false }) => {
  const quotes = [
    {
      quote: "Fintech is the technology and innovation that aims to compete with traditional financial methods",
      author: "Waiapi Karaka",
      title: "Financial Officer",
    },
    {
      quote: "The Technology innovation in financial services is one such example, accerationg rapidly",
      author: "Waiapi Karaka",
      title: "Financial Officer",
    },
    {
      quote: "Powerfully built online banking for small businesses. See why over 160,000 businesses trust us.",
      author: "Waiapi Karaka",
      title: "Financial Officer",
    },
  ]

  const [currentQuote, setCurrentQuote] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the quote index
      setCurrentQuote((prevQuote) => (prevQuote + 1) % quotes.length)
    }, 5000) // Change quote every 5 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, []) // Empty dependency array ensures that the effect runs only once on mount
  return (
    <div className="max-md:mt-4  md:mt-36 md:h-screen">
      {showBackArrow && <BackArrow onClick={() => console.log("Back clicked")} />}
      <div className="flex flex-col items-center  max-md:mt-10">
        <Image className="md:hidden" src="/dekalopay.png" width={50} height={50} alt="smup" />
        <div className="tab-bg h-auto w-1/2 rounded-md p-8 max-md:hidden">
          <div className="tab-bg fixed right-[13%] mt-8 h-16 w-60 rounded-md p-2 shadow-2xl">
            <div className="flex justify-between">
              <div className="flex flex-col justify-between gap-3">
                <small className="text-xm">$2 week high</small>
                <p className=" text-sm font-bold">107.545</p>
              </div>
              <div className="flex flex-col items-end justify-between gap-3">
                <GoArrowUpRight className="self-end text-green-500" />
                <small className="text-xm">+5.7</small>
              </div>
            </div>
          </div>

          <div className=" tab-bg absolute left-[61%]  mt-40 h-16 w-60 rounded-md p-2 shadow-2xl">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="flex h-12 w-16 items-start justify-end rounded-md bg-gradient-to-b from-blue-500 to-cyan-500 p-1">
                  <Image src="../../visa-bg.svg" height={25} width={20} alt="" />
                </div>
                <div>
                  <p className="text-sm font-bold">Visa Gold Payware</p>
                  <small>**** 8790</small>
                </div>
              </div>
            </div>
          </div>

          <div className=" tab-bg absolute right-[10%] mt-64 h-16 w-60 rounded-md p-2 shadow-2xl">
            <div className="flex justify-between">
              <div className="flex gap-2">
                <div className="rounded-full bg-gray-200 p-3">
                  <MdCompareArrows />
                </div>
                <div>
                  <p className="text-sm font-bold">Transfer to someone</p>
                  <small>158 contacts</small>
                </div>
              </div>
            </div>
          </div>

          {SignInCard.map((item, index) => (
            <div className="mb-6 flex items-center gap-3">
              <div>
                <Image src={item.image} width={30} height={30} alt="" className="rounded-full" />
              </div>
              <div>
                <h4 className="text-sm font-bold">{item.name}</h4>
                <small className="text-xs">{item.amount}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="flex max-md:mt-8  max-md:h-40 max-md:w-full max-md:px-4 md:mt-14 md:w-3/5">
          <p className="text-center font-bold  text-white max-md:text-3xl md:text-2xl">{quotes[currentQuote]?.quote}</p>
        </div>

        <div className="mt-20 flex transform items-center justify-center gap-2">
          {quotes.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full ${index === currentQuote ? "w-5 bg-white" : " bg-white"}`}
            />
          ))}
        </div>
        <div className=" mt-10 flex w-full flex-col items-center text-white  max-md:mb-10">
          <p className="text-center font-bold">{quotes[currentQuote]?.author ?? "Unknown author"}</p>
          <p className="text-center text-xs">{quotes[currentQuote]?.title}</p>
        </div>
      </div>
    </div>
  )
}

export default AuthCard
