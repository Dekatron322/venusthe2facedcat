"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  AccountsIcon,
  CardsIcon,
  DashboardIcon,
  InvoicingIcon,
  PaymentIcon,
  ReportsIcon,
  TradingIcon,
  TransactionsIcon,
} from "./Icons"
import { useState } from "react"
import { Box, Skeleton } from "@mui/material"

const links = [
  { name: "Dashboard", href: "/dashboard", icon: DashboardIcon },
  {
    name: "Accounts",
    href: "/accounts",
    icon: AccountsIcon,
  },
  { name: "Cards", href: "/cards", icon: CardsIcon },
  { name: "Transactions", href: "/transactions", icon: TransactionsIcon },
  { name: "Payment", href: "/payment", icon: PaymentIcon },
  { name: "Invoicing", href: "/invoicing", icon: InvoicingIcon },
  { name: "Trading", href: "/trading", icon: TradingIcon },
  { name: "Reports", href: "/reports", icon: ReportsIcon },
]

export function Links() {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  const pathname = usePathname()
  return (
    <div className="flex h-full flex-row  border-black pl-5 lg:h-80 lg:flex-col">
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <>
            {loading == false ? (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "flex grow items-center justify-center rounded-l-md border-0 border-black px-2 transition duration-300 hover:bg-gray-200 lg:justify-normal lg:space-x-2",
                  {
                    "bg-blue-500 font-extrabold max-md:my-2 max-md:rounded-md max-md:text-white lg:border-r-2 lg:border-blue-700 lg:bg-inherit":
                      pathname.startsWith(link.href),
                  }
                )}
              >
                <LinkIcon />
                <p
                  className={clsx("hidden text-sm font-semibold lg:block", {
                    "font-extrabold": pathname.startsWith(link.href),
                  })}
                >
                  {link.name}
                </p>
              </Link>
            ) : (
              <Box sx={{ pt: 1, pr: 2 }}>
                <Skeleton variant="rounded" height={30} />
              </Box>
            )}
          </>
        )
      })}
    </div>
  )
}
