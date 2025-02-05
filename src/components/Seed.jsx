import React, { useState } from 'react'
import { generateMnemonic } from 'bip39';
import Seed1 from './Seed1';

function Seed() {
    const [mnemonic, setMnemonic] = useState("")
    const mnemo = async () => {
        if (mnemonic.trim() === "") {
            const mn = await generateMnemonic();
            setMnemonic(mn);
        }
        if(!seedgen){setSeedgen(true)}
    }
    const [seedgen, setSeedgen] = useState(false)
    
    
  return (
    <div className="mt-[2.5rem] px-5 ">
      <div className="heading text-[3rem] font-semibold tracking-tighter ">
        {seedgen ? "Your Secret Phrase" : "Secret Recovery Phase"}
      </div>
      <div className="subheading text-[1.5rem] tracking-tighter ">
        Save these words in a Safe Place!
      </div>
      {!seedgen && (
        <div className="buttons flex mt-5 gap-5 justify-start">
          <input
            value={mnemonic}
            onChange={(e) => setMnemonic(e.target.value)}
            type="text"
            className="border-1 border-zinc-500 rounded-md w-[75vw] p-2"
            placeholder="Enter your secret phrase (or leave blank to generate)"
          />
          <button
            onClick={mnemo}
            className="bg-white text-black px-7 py-2 rounded-lg text-lg cursor-pointer"
          >
            Generate Wallet
          </button>
        </div>
      )}
      {seedgen && (
        <div className="w-full flex gap-3  items-center flex-wrap   min-h-[15vh] p-5 mt-2 border-1 border-zinc-600 rounded-md ">
          {mnemonic.split(" ").map((m, index) => (
            <Seed1 data={m} />
          ))}
        </div>
      )}
      {seedgen && (
        <div className="buttons mt-5">
        <button className="px-5 py-2 bg-white text-black rounded-xl ciurso">
          Add SOL Wallet
        </button>
        <button className="ml-4 px-5 py-2 bg-white text-black rounded-xl">
          Add ETH Wallet
        </button>
      </div>
      )}
      
    </div>
  );
}

export default Seed