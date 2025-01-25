import React from 'react'
import LoadingAnimation from '@/components/LoadingAnimation'
const loading = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <LoadingAnimation />
    </div>
  )
}

export default loading