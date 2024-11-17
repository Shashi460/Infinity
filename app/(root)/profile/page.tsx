import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from '../../../components/BankCard'
import { countTransactionCategories } from '@/lib/utils'
import Category from '../../../components/Category'
import { getBanks, getLoggedInUser } from '@/lib/actions/user.actions'
import { getAccount, getAccounts } from '@/lib/actions/bank.actions'
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Profile = async () => {
  const user = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: user.$id 
  })

  if(!accounts) return;
  
  const accountsData = accounts?.data;
  const appwriteItemId = (user.id as string) || accountsData[0]?.appwriteItemId;
  // console.log(accountsData)
  const account = await getAccount({ appwriteItemId })
  const categories: CategoryCount[] = countTransactionCategories(account?.transactions);
  // console.log(user)
  return (
      <section className="flex flex-col p-8 overflow-y-scroll">
        <div className="h-[120px] w-full bg-gradient-mesh bg-cover bg-no-repeat"> 
        </div>
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">{user.firstName[0]}</span>
          </div>
          <div className="profile-details">
            <h1 className='profile-name'>
              {user.firstName} {user.lastName}
            </h1>
            <p className="profile-email">
              {user.email}
            </p>
          </div>
        </div>
        <div className='mt-10 flex flex-col gap-10 px-5'>
          <HeaderBox 
                type="greeting"
                title="Welcome"
                user={user?.firstName || 'Guest'}
                subtext="Access and manage your account and transactions efficiently."
              />
              <TotalBalanceBox 
                accounts={accountsData}
                totalBanks={accounts?.totalBanks}
                totalCurrentBalance={accounts?.totalCurrentBalance}
              />
        </div>
        <h2 className='header-2 m-10'>Top Categories</h2>
        <div className='flex flex-col gap-3 max-w-[50%] px-6'>
          {categories.map((category , index) => (
            <Category key = {category.name} category={category} />
          ))}
        </div>
      </section>
  )
}

export default Profile