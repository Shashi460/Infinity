import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { formatAmount } from '@/lib/utils'
import Copy from './Copy'
const BankCard = ({account,userName,showBalance = true} : CreditCardProps) => {
    console.log(account)
  return (
    <div className='flex flex-col'>
        <Link href={`/transaction-history/?id=${account?.appwriteItemId}`} className='bank-card min-w-[325px]'
        >
            <div className='bank-card_content'>
                <div>
                    <h1 className='text-16 font-semibold text-white'>
                        {account?.name}
                    </h1>
                    <p className='font-ibm-plex-serif font-back text-black'>
                        {formatAmount(account.currentBalance)}
                    </p>
                </div>

                <article className='flex flex-col '>
                    <div className='flex justify-between'>
                        <h1 className='text-12 font-semibold text-white'>
                        {userName}
                        </h1>

                        <h2 className='text-12 font-semibold text-white'>
                        ●● / ●●
                        </h2>
                        </div>
                        <div>
                        <p className='text-14 font-semibold tracking-[1.1px] text-white'>
                        ●●●● ●●●● ●●●●
                            <span className='text-16 ml-1.5'>{account?.mask}</span>
                        </p>
                    </div>
                </article>
            </div>

            <div className='bank-card_icon ml-5'>
                <Image src="/icons/Paypass.svg"
                    width={20}
                    height={24}
                    alt="pay"
                />

                <Image src="/icons/mastercard.svg"
                    width={45}
                    height={32}
                    alt="mastercard"
                />
            </div>

            <Image  
                src="/icons/lines.png"
                width={316}
                height={190}
                alt='lines'
                className='absolute top-0 left-0'
            />
        </Link>

        {showBalance && 
            <Copy title={account?.sharaebleId} />
        }
    </div>
  )
}

export default BankCard