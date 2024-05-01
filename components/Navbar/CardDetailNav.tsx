"use client"
import React from "react"
import Search from "components/Search/Search"
import { IoIosNotificationsOutline } from "react-icons/io"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { IoChevronBackOutline } from "react-icons/io5"

const CardDetailNav = () => {
  const router = useRouter()
  const pathname = usePathname()

  const handleBackButtonClick = () => {
    router.back()
  }
  return (
    <>
      <nav className="px-16 py-4 max-md:hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="" className="rounded-md border p-2">
              <IoChevronBackOutline />
            </Link>
            <h5 className="font-bold capitalize">Card Details</h5>
          </div>
          <div className="flex items-center gap-2">
            <Search />
            <div className="flex h-8 items-center rounded border border-[#CFDBD5] px-2 py-1">
              <IoIosNotificationsOutline />
            </div>
            <Image src="/profile.png" width={35} height={16} alt="profile" />
          </div>
        </div>
      </nav>
      <nav className="border-b py-4  max-md:px-3 md:hidden md:px-16">
        <div className="flex items-center justify-between">
          <div className="" onClick={handleBackButtonClick}>
            <IoChevronBackOutline />
          </div>

          <h5 className="font-bold capitalize">Card Details</h5>
          <div className="flex items-center gap-2">
            <Image src="/profile.png" width={35} height={16} alt="profile" />
          </div>
        </div>
      </nav>
    </>
  )
}

export default CardDetailNav
