"use client"
import React, { useState } from "react"
import { GoArrowDownLeft } from "react-icons/go"
import { Skeleton } from "@mui/material"

const Spendings = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <div className="small-card basis-1/2 rounded-md border p-3 max-md:border-0">
      {loading == false ? (
        <div className="mb-3 flex items-center justify-between">
          <small>Spendings</small>
          <GoArrowDownLeft className="text-[#f72cb7]" />
        </div>
      ) : (
        <div className="mb-3">
          <Skeleton variant="text" />
        </div>
      )}
      {loading == false ? (
        <h5 className="text-2xl font-bold">$7.845,00</h5>
      ) : (
        <Skeleton variant="rounded" height={24} width={100} />
      )}
      {loading == false ? (
        <div className=" flex items-center justify-between">
          <small>84 Transactions</small>
          <small className="text-[#f72cb7]">-2%</small>
        </div>
      ) : (
        <Skeleton variant="text" />
      )}
    </div>
  )
}

export default Spendings
