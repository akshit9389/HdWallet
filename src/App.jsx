import React, { useState } from 'react'
import Nav from './components/Nav'
import Landing from './components/Landing'
import Seed from './components/Seed'
import Wallet from './components/Wallet'
import Solana from './components/Solana'
import Eth from './components/Eth'


function App() {
  const [land, setLanding] = useState(true)
  const [mnemonic, setMnemonic] = useState("")
  const [soleth, setsoleth] = useState(false)
  return (
    <div className="absolute bg-black text-white min-w-full min-h-screen ">
      <Nav />
      <Landing />
      <Seed mnemonic={mnemonic} setMnemonic={setMnemonic} setsoleth={setsoleth}  />
      {soleth && <Solana mnemonic={mnemonic} />}
      {soleth && <Eth mnemonic={mnemonic} />}
      
    </div>
  );
}

export default App