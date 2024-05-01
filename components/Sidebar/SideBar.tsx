"use client"
import Link from "next/link"
import React, { useState } from "react"
import { Links } from "./Links"
import { EurIcon, GbpIcon, LogoIcon, PlusIcon, SettingsIcon, UsdIcon } from "./Icons"
import { Box, Skeleton } from "@mui/material"

const SideBar = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <div className="sidebar flex h-full flex-col justify-between overflow-auto border-0 border-black ">
      <div className="h-full justify-between border-0 border-red-700 lg:mt-6 lg:h-auto lg:space-y-8">
        <div className="hidden border-0 border-white px-7 lg:block">
          {loading == false ? (
            <Link href="/">
              <LogoIcon />
            </Link>
          ) : (
            <Skeleton variant="circular" width={50} height={50} />
          )}
        </div>

        <div className="h-full border-0 border-primary-700 lg:h-auto lg:space-y-4">
          {loading == false ? (
            <p className="hidden px-7 text-sm lg:block">Navigation</p>
          ) : (
            <div className="hidden px-7 text-sm lg:block">
              <Skeleton variant="rounded" />
            </div>
          )}
          <Links />
        </div>

        <div className="hidden h-full border-0 border-purple-700  lg:block lg:h-auto lg:space-y-4">
          {loading == false ? (
            <p className="px-7 text-sm">Balances</p>
          ) : (
            <div className="hidden px-7 text-sm lg:block">
              <Skeleton variant="rounded" />
            </div>
          )}
          <Balances />

          <div className=" px-7">
            {loading == false ? (
              <div className="flex flex-row items-center space-x-2">
                <PlusIcon />
                <p className="text-sm font-semibold">Open a balance</p>
              </div>
            ) : (
              <div className="hidden text-sm lg:block">
                <Skeleton variant="rounded" />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="my-4 hidden h-auto border-0 border-yellow-700 px-7 lg:block">
        {loading == false ? (
          <Link href="/settings" className="flex h-10 items-center space-x-2 border-0 border-black hover:bg-blue-100">
            <SettingsIcon />
            <p className="hidden text-sm font-semibold lg:block">Profile Settings</p>
          </Link>
        ) : (
          <div className="hidden text-sm lg:block">
            <Skeleton variant="rounded" />
          </div>
        )}
      </div>
    </div>
  )
}

const balances = [
  { amount: "100,50.75", currency: "USD", icon: UsdIcon },
  {
    amount: "2310.40",
    currency: "EUR",
    icon: EurIcon,
  },
  { amount: "9455.50", currency: "GBP", icon: GbpIcon },
]

const Balances = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <div className="flex h-full w-full flex-row border-0 border-black lg:h-32 lg:flex-col">
      {balances.map((balance) => {
        const BalanceIcon = balance.icon
        return (
          <div
            key={balance.currency}
            className="flex grow items-center justify-center border-0 border-black lg:justify-normal lg:space-x-2"
          >
            {loading == false ? (
              <div className="flex grow items-center justify-center border-0 border-black px-7 lg:justify-normal lg:space-x-2">
                <BalanceIcon />
                <p className="text-sm font-semibold">{`${balance.amount} ${balance.currency}`}</p>
              </div>
            ) : (
              <Box sx={{ pt: 1, px: 2 }}>
                <Skeleton variant="rounded" width={220} height={30} />
              </Box>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default SideBar
