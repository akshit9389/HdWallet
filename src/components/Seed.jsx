import React, { useState } from 'react'
import { generateMnemonic } from 'bip39';

function Seed() {
    const [mnemonic, setMnemonic] = useState("")
    const mnemo = async () => {
        if (mnemonic === "") {
            const mn = await generateMnemonic();
            setMnemonic(mn);
        }
    }
  return (
    <div className="mt-[10rem] px-5 ">
      <div className="heading text-[3rem] font-semibold tracking-tighter ">
        Secret Recovery Phase
      </div>
      <div className="subheading text-[1.5rem] tracking-tighter ">
        Save these words in a Safe Place!
      </div>
      <div className="buttons flex mt-5 gap-5 justify-start">
        <input value={mnemonic} type="text" className='border-1 border-zinc-500 rounded-md w-[75vw] p-2' placeholder='Enter your secret phrase (or leave blank to generate)' />
        <button onClick={mnemo}  className="bg-white text-black px-7 py-2 rounded-lg text-lg cursor-pointer">
          Generate Wallet
        </button>
      </div>
    </div>
  );
}

export default Seed