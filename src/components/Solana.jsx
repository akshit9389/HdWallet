import React, { useState } from 'react'
import { mnemonicToSeed } from 'bip39'
import { derivePath } from 'ed25519-hd-key'
import { Keypair } from '@solana/web3.js'
import nacl from 'tweetnacl'
function Solana({mnemonic}) {
    const [currIndex, setCurrIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState([]);
    const generateKeys = async () => {
        const seed = mnemonicToSeed(mnemonic)
        const path = `m/44'/501'/${currIndex}'/0'`
        const deriveSeed = derivePath(path, (await seed).toString("hex")).keys
        const secret = Uint8Array.from(nacl.sign.keyPair.fromSeed(deriveSeed).secretKey)
        const keypair = Keypair.fromSecretKey(secret)
    }
  return (
    <div>Solana</div>
  )
}

export default Solana