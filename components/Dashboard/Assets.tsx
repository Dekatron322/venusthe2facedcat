"use client"
import React, { useState } from "react"
import styles from "../../components/Dashboard/dashboard.module.css"
import { Asset } from "utils"
import Image from "next/image"
import { Skeleton } from "@mui/material"

export const Assets = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <div className={styles.assets}>
      <p className="px-4 py-1 font-semibold max-md:px-0">Your Assets</p>
      <div className={styles.horizontal_line}></div>
      <div className="px-4 py-1 max-md:px-0">
        <div className="dd h-48"></div>
        {Asset.map((assets) => (
          <div key={assets.id} className="small-card flex items-center justify-between py-3">
            <div className="item-center flex gap-2">
              {loading == false ? (
                <Image src={assets.image} width={18} height={23} alt="dekalo" />
              ) : (
                <Skeleton variant="circular" animation="wave" height={35} width={35} />
              )}
              {loading == false ? (
                <div>
                  <h6 className="text-[13px] font-bold">{assets.number}</h6>
                  <p className="text-xs">Account number</p>
                </div>
              ) : (
                <Skeleton variant="rounded" animation="wave" height={35} width={150} />
              )}
            </div>
            {loading == false ? (
              <div className="flex flex-col items-end justify-end">
                <p className="text-[13px] font-bold">{assets.balance}</p>
                <small className="text-xs">Account balance</small>
              </div>
            ) : (
              <Skeleton variant="rounded" animation="wave" height={35} width={150} />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
