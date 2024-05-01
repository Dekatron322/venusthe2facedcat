"use client"
import React, { useEffect, useState } from "react"
import Search from "components/Search/Search"
import { IoIosNotificationsOutline } from "react-icons/io"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { IoChevronBackOutline } from "react-icons/io5"

const AccountNav = () => {
  const pathname = usePathname()
  const router = useRouter()
  const [isMoonIcon, setIsMoonIcon] = useState(true)
  const [mounted, setMounted] = useState(false)

  const toggleIcon = () => {
    setIsMoonIcon(!isMoonIcon)
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleBackButtonClick = () => {
    router.back()
  }

  if (!mounted) {
    return null
  }

  const isAccountDetails = pathname.includes("/accounts/details")
  return (
    <>
      <nav className="hidden px-16 py-4 md:block">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="rounded-md border p-2" onClick={handleBackButtonClick}>
              <IoChevronBackOutline />
            </div>
            <h5 className="font-bold capitalize">Account Details</h5>
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
      <nav className="mb-4 block border-b px-16 py-4 max-md:px-3 md:hidden">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer p-1 transition duration-300" onClick={handleBackButtonClick}>
            <IoChevronBackOutline />
          </div>
          {isAccountDetails ? (
            <h5 className="font-bold capitalize"> Account Details </h5>
          ) : (
            <h5 className="font-bold capitalize"> Deposit Account </h5>
          )}
          <Image src="/profile.png" width={35} height={16} alt="profile" />
        </div>
      </nav>
    </>
  )
}

export default AccountNav
