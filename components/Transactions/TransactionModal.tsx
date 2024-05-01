import React from "react"
import styles from "./modal.module.css"
import { IoMdClose } from "react-icons/io"
import { GrDownload } from "react-icons/gr"
import { AiOutlinePrinter } from "react-icons/ai"
import Image from "next/image"

interface TransactionModalProps {
  isOpen: boolean
  closeModal: () => void
  transactionInfo: {
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
  } | null
}

const TransactionModal: React.FC<TransactionModalProps> = ({ isOpen, closeModal, transactionInfo }) => {
  if (!isOpen || !transactionInfo) {
    return null
  }

  return (
    <div className={styles.modalOverlay} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 h-24 rounded-lg bg-green-50">
          <div className="flex justify-between p-2">
            <small className="font-bold">Transaction Detail</small>
            <IoMdClose onClick={closeModal} />
          </div>
          <div className={styles.horizontal_line}></div>
          <div className="mt-3 flex h-full w-full  items-center justify-center">
            <div className="rounded-full border-2 border-white bg-green-50 p-2">
              <Image src={transactionInfo.image} width={30} height={30} alt="" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center py-4 ">
          <p className="pb-2 font-bold">{transactionInfo.amount}</p>

          <p className="pb-2 text-xs">Completed {transactionInfo.date}</p>
          <p className="rounded-md bg-green-100 px-4 py-1 text-xs font-semibold text-green-500">
            {" "}
            {transactionInfo.status}
          </p>
          {/* Add more details as needed */}
        </div>

        <div className="flex justify-between px-3 pb-2">
          <p className="text-xs">Transfer</p>
          <p className="text-xs font-semibold">{transactionInfo.transfer}</p>
        </div>

        <div className="flex justify-between px-3 pb-2">
          <p className="text-xs">Payeer</p>
          <p className="text-xs font-semibold">{transactionInfo.payer}</p>
        </div>
        <div className="flex justify-between px-3 pb-2">
          <p className="text-xs">Bank Account</p>
          <p className="text-xs font-semibold">{transactionInfo.bank}</p>
        </div>
        <div className="flex justify-between px-3 pb-2">
          <p className="text-xs">Card</p>
          <p className="text-xs font-semibold">{transactionInfo.card}</p>
        </div>
        <div className="flex justify-between px-3 pb-2">
          <p className="text-xs">Amount</p>
          <p className="text-xs font-semibold">{transactionInfo.amount}</p>
        </div>
        <div className="flex justify-between px-3 pb-16">
          <p className="text-xs">Fee</p>
          <p className="text-xs font-semibold">{transactionInfo.fee}</p>
        </div>

        <div className="flex justify-between px-3 pb-4">
          <div className="flex gap-2">
            <GrDownload />
            <small className="font-bold">Download</small>
          </div>
          <div className="flex gap-2">
            <AiOutlinePrinter />
            <small className="font-bold">Print</small>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionModal
