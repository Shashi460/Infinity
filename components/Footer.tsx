import { logoutAccount } from '@/lib/actions/user.actions'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
  const router = useRouter();

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();
    if(loggedOut) router.push('/sign-in')
  }

  return (
    <footer className="footer gap-2">
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <Link href='/profile'
              className="text-xl font-bold text-gray-700"
          >
            {user?.firstName[0]}
        </Link>
      </div>

      <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
          <div className='flex flex-col'>
            <h1 className="text-14 truncate text-gray-700 font-semibold">
              {user?.firstName}
            </h1>
            <p className="text-14 truncate font-normal text-gray-600">
              {user?.email}
            </p>
          </div>
      </div>

      <div className="footer_image" onClick={handleLogOut}>
        <Image src="icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  )
}

export default Footer