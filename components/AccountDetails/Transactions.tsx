import React from "react"
import styles from "../../components/Dashboard/dashboard.module.css"
import { AccountTransaction, Transaction } from "Utils"
import { GoArrowUpRight } from "react-icons/go"
import dynamic from "next/dynamic"
import Image from "next/image"

const DynamicImage = dynamic(() => import("next/image"), { ssr: false })

export const Transactions = () => {
  return (
    <div className={styles.account_transactions}>
      <div className="px-4 pb-1 max-md:px-0">
        {AccountTransaction.map((transactions, index) => (
          <div key={transactions.date}>
            <div className="pb-4 text-xs text-[gray]">{transactions.date}</div>
            {transactions.list.map((item, itemIndex) => (
              <div key={item.id} className="small-card py-2">
                <div className="flex items-center justify-between">
                  <div key={item.image} className="flex items-center gap-1">
                    <Image src={item.image} height={30} width={30} alt="" />
                    <div className="items-center pb-2">
                      <p className="text-[13px] font-bold">{item.description}</p>
                      <small className="text-xs">{item.date}</small>
                    </div>
                  </div>
                  <p className="text-[13px] font-bold">{item.amount}</p>
                </div>
                {/* Check if it's not the last item across all Transactions */}
                {!(index === Transaction.length - 1 && itemIndex === transactions.list.length - 1) && (
                  <div className={styles.horizontal_line}></div>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.blurEffect}></div>
    </div>
  )
}
