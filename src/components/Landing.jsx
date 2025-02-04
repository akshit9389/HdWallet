import React from 'react'

const Landing = ({switchL}) => {
  return (
    <div className='mt-[10rem] px-5 '>
        <div className='heading text-[3rem] font-semibold tracking-tighter '>
            Sol-Er Supports ETH and SOL Blockchains    
        </div>
        <div className='subheading text-[1.5rem] tracking-tighter '>Choose a Blockchain to get started!</div>
        <div className='buttons flex mt-5 gap-5 '>
            <button onClick={() => switchL(false)} className='bg-white text-black px-7 py-2 rounded-lg text-lg cursor-pointer' >Ethereum</button>
            <button onClick={() => switchL(false)} className='bg-white text-black px-7 py-2 rounded-lg text-lg cursor-pointer '>Solana</button>
        </div>
    </div>
  )
}

export default Landing
