import React from 'react'
import {RiWallet3Fill} from '@remixicon/react'

function Nav() {
  return (
    <div className=' w-full h-[5rem] flex items-center mt-4 justify-between'>
        <div className='heading p-5 flex gap-12 items-center '>
            <RiWallet3Fill className='Logo' size={"3rem"}></RiWallet3Fill>
            <h1 className='text-[3rem] font-bold '>Sol-Er</h1>
      </div>
      <h1 className=' mr-23 text-xl font-semibold'>Developed by Akshit Panchal</h1>
    </div>
  )
}

export default Nav