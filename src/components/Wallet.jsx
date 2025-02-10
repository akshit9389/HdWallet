import React, { useState } from 'react'
import { RiEyeOffFill } from '@remixicon/react'

function Wallet({publickey, privatekey, balance}) {
    const [show,setShow] = useState(false)
  return (
    <div className="mt-4 border-1 border-zinc-700 rounded-md p-2 mx-5">
      <div className="publickey flex gap-1">
        <h4>Public Key: </h4>
        <p>{publickey}</p>
      </div>

      <div className="privatekey flex gap-2 overflow-hidden">
        <h4>Private Key:</h4>
        <button onClick={() => setShow(!show)} className="cursor-pointer">
          <RiEyeOffFill size={"1rem"} />
        </button>
        <div className="flex gap-3 w-[80vh] ">
          {show && <p className=''>{privatekey}</p>}
        </div>
      </div>
      <div className="balance flex gap-2">
        <h4>Balance:</h4>
        <p>{balance}</p>
      </div>
    </div>
  );
}

export default Wallet