import React, { useState } from 'react'
import { mnemonicToSeed } from 'bip39'
import { Wallet, HDNodeWallet } from 'ethers'
import Walleti from './Wallet'
function Eth({ mnemonic }) {
    const [wallets, setWallets] = useState([])
    const [index, setIndex] = useState(0);
    const ALC_URL = 'https://eth-mainnet.g.alchemy.com/v2/ICgF52Zh1tQkDx4tMp1pct3U9hWydoCh'
    const generateKeys = async () => {
        const seed = await mnemonicToSeed(mnemonic)
        const derivPath = `m/44'/60'/${index}'/0'`
        const hdNode = HDNodeWallet.fromSeed(seed)
        const child = hdNode.derivePath(derivPath)
        const privateKey = child.privateKey
        const wallet = new Wallet(privateKey)
        const balance = await bfetch(wallet.address)
        const newWallet = {
          privateKey: wallet.privateKey,
          balance,
          publicKey: wallet.address,
        };
        setWallets(prevWallets => [...prevWallets,newWallet])
        setIndex(index + 1)
        

    }
    const bfetch = async (pk) => {
        try {
            const response = await fetch(ALC_URL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                jsonrpc: "2.0",
                method: "eth_getBalance",
                params: [pk, "latest"],
                id: 1,
              }),
            });
            const data = await response.json();
            return parseInt(data.result, 16) / 1e18 || 0;
        }
        catch (e) {
            console.error(e.message)
            return -1
        }
    }
   return (
     <div className="my-4 mx-5">
       <div className='flex gap-4'>
         <button
           onClick={generateKeys}
           className="cursor-pointer bg-white text-black px-5 py-2 rounded-md"
         >
           Generate Ethereum Wallet
         </button>
         <button className='cursor-pointer bg-white text-black px-5 py-2 rounded-md' onClick={() => setWallets([])}>
           Clear Wallets
         </button>
       </div>
       <h1 className="font-bold text-xl pt-3">Ethereum Wallets</h1>
       <div>
         {wallets.map((wallet, index) => (
           <Walleti
             publickey={wallet.publicKey}
             privatekey={wallet.privateKey}
             balance={wallet.balance}
           />
         ))}
       </div>
     </div>
   );
}

export default Eth