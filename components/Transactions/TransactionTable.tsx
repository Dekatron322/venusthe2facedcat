"use client"
import React, { useState } from "react"
import styles from "../../components/Dashboard/dashboard.module.css"
import { AccountTransaction } from "Utils"
import { GoArrowUpRight } from "react-icons/go"
import dynamic from "next/dynamic"
import Image from "next/image"
import TransactionModal from "./TransactionModal"

interface TransactionTableProps {}

export const TransactionTable: React.FC<TransactionTableProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTransaction, setSelectedTransaction] = useState<{
    date: string
    description: string
    amount: string
    status: string
    type: string
    fee: string
    image: string
    payer: string
    card: string
    bank: string
    transfer: string

    // Add more properties as needed
  } | null>(null)

  const openModal = (transaction: (typeof AccountTransaction)[0]["list"][0]) => {
    setSelectedTransaction(transaction)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedTransaction(null)
    setIsModalOpen(false)
  }
  return (
    <div className="flex w-full">
      <div className="w-full px-2 py-1">
        {AccountTransaction.map((transactions, index) => (
          <div key={transactions.date}>
            <div className="my-4 text-xs text-[gray] max-md:my-1">{transactions.date}</div>
            {transactions.list.map((item, itemIndex) => (
              <div key={item.id} className="py-2 max-md:py-0" onClick={() => openModal(item)}>
                <div className="small-card flex cursor-pointer items-center justify-between">
                  <div key={item.image} className="flex items-center gap-3">
                    <Image src={item.image} height={30} width={30} alt="" />
                    <div className="items-center pb-2">
                      <p className="text-[13px] font-bold">{item.description}</p>
                      <small className="text-xs">{item.date}</small>
                    </div>
                  </div>
                  <p className="text-[13px] font-bold">{item.amount}</p>
                </div>
                {/* Check if it's not the last item across all Transactions */}

                {!(index === AccountTransaction.length - 1 && itemIndex === transactions.list.length - 1) && (
                  <div className={styles.horizontal_line}></div>
                )}
              </div>
            ))}
            <TransactionModal isOpen={isModalOpen} closeModal={closeModal} transactionInfo={selectedTransaction} />
          </div>
        ))}
      </div>
      <div className={styles.blurEffect}></div>
    </div>
  )
}
