import React, { useState } from "react"
import styles from "../../components/Dashboard/dashboard.module.css"
import { Transaction } from "utils"
import { GoArrowUpRight } from "react-icons/go"
import dynamic from "next/dynamic"
import Image from "next/image"
import { Skeleton } from "@mui/material"

const DynamicImage = dynamic(() => import("next/image"), { ssr: false })

export const Transactions = () => {
  const [loading, setLoading] = useState(true)
  setTimeout(() => setLoading(false), 5000)
  return (
    <div className={styles.transactions}>
      <div className="flex items-center justify-between px-4 py-1 max-md:px-0">
        <p className="font-semibold">Latest Transactions</p>
        <GoArrowUpRight />
      </div>
      <div className={styles.horizontal_line}></div>
      <div className="px-4 py-1 max-md:px-0">
        {Transaction.map((transactions, index) => (
          <div key={transactions.date}>
            {loading == false ? (
              <div className="my-4 text-xs text-[gray]">{transactions.date}</div>
            ) : (
              <div className="my-4 ">
                <Skeleton variant="text" animation="wave" width={100} />
              </div>
            )}
            {transactions.list.map((item, itemIndex) => (
              <>
                <div key={item.id} className="small-card py-2">
                  <div className="flex items-center justify-between ">
                    <div key={item.image} className="flex items-center gap-1">
                      {loading == false ? (
                        <Image src={item.image} height={30} width={30} alt="" className="transition duration-1000" />
                      ) : (
                        <Skeleton variant="circular" animation="wave" width={30} height={30} />
                      )}
                      <div className="items-center pb-2">
                        {loading == false ? (
                          <>
                            <p className="text-[13px] font-bold">{item.description}</p>
                            <small className="text-xs">{item.date}</small>
                          </>
                        ) : (
                          <Skeleton variant="rounded" animation="wave" height={40} width={200} />
                        )}
                      </div>
                    </div>
                    {loading == false ? (
                      <p className="text-[13px] font-bold">{item.amount}</p>
                    ) : (
                      <Skeleton variant="text" animation="wave" width={100} />
                    )}
                  </div>
                  {/* Check if it's not the last item across all Transactions */}
                </div>
                <div>
                  {!(index === Transaction.length - 1 && itemIndex === transactions.list.length - 1) && (
                    <div className={styles.horizontal_line}></div>
                  )}
                </div>
              </>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.blurEffect}></div>
    </div>
  )
}
