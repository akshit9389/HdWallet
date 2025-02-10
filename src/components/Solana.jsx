import React, { useState } from 'react'
import { mnemonicToSeed } from 'bip39'
import { derivePath } from 'ed25519-hd-key'
import { Keypair } from '@solana/web3.js'
import nacl from 'tweetnacl'
import Wallet from './Wallet'

function Solana({mnemonic}) {
    const [currIndex, setCurrIndex] = useState(0);
    const [wallets, setWallets] = useState([]);
    const ALC_URL = 'https://solana-mainnet.g.alchemy.com/v2/ICgF52Zh1tQkDx4tMp1pct3U9hWydoCh'
    const generateKeys = async () => {
        const seed = await mnemonicToSeed(mnemonic)
        const path = `m/44'/501'/${currIndex}'/0'`
        const deriveSeed = derivePath(path, (await seed).toString("hex")).key
        const secret = Uint8Array.from(nacl.sign.keyPair.fromSeed(deriveSeed).secretKey)
        const keypair = Keypair.fromSecretKey(secret)
        const newWalllet = {
          publicKey: keypair.publicKey.toBase58(),
          privateKey: Buffer.from(keypair.secretKey).toString("hex"),
          balance: await fBalance(keypair.publicKey.toBase58()),
      };
      console.log(newWalllet);
          setCurrIndex(currIndex + 1)
          setWallets(prevWallets => [...prevWallets, newWalllet])
    }
  const fBalance = async (pk) => {
    try {
      const response = await fetch(ALC_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsonrpc: "2.0",
          id: 1,
          method: "getBalance",
          params: [pk],
        }),
      }); 
      const data = await response.json();
      return data.result?.value / 10 ** 9 || 0;
    }
    catch{
      console.error("Error fetching balance:", error);
      return -1;
    }
    } 
  return (
    <div className='my-4 mx-5'>
      <div className='flex gap-4'>
        <button onClick={generateKeys} className="cursor-pointer bg-white text-black px-5 py-2 rounded-md">
        Generate Solana Wallet
      </button>
        <button className='cursor-pointer bg-white text-black px-5 py-2 rounded-md' onClick={() => setWallets([])}>
           Clear Wallets
         </button>
      </div>
      
      <h1 className='font-bold text-xl pt-3'>Solana Wallets</h1>
      <div>
        {wallets.map((wallet, index) => (
          <Wallet publickey={wallet.publicKey} privatekey={wallet.privateKey} balance={wallet.balance} />
        ))}
      </div>
    </div>
  );
}

export default Solana