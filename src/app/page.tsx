"use client";

import { useState } from "react";

export default function Home() {

  const [display, setDisplay] = useState("")
   

  const addNum = (e: any) => {
    setDisplay(display.concat(e.target.id))
  }

  const clean = () => {
    setDisplay("")
  }

  const deleteNum = () => {
    setDisplay(display.slice(0, -1))
  }

  const equal = () => {
    try {
      setDisplay(eval(display).toString())
    } catch (error) {
      setDisplay("opção invalida")
    }

  }


  return (
    <main className="flex h-screen sm:min-w-16 bg-[#219ebc]">
      <div className="grid max-w-5xl sm:max-w2.5 sm:min-w-10 bg-[#023047] h-2/3 w-6/12 mx-auto mt-10 p-4 rounded-lg shadow-lg">
       <h1 className="flex text-center max-w-5xl text-white text-xl" >Calculadora</h1>
       <input className="flex w-full max-w-5xl text-right border-white py-1 px-5 text-2x1 text-white" type="text" value={display}  disabled/>
       <div className="grid max-w-5xl grid-cols-4 gap-y-4 gap-x-3 mt-4">
        <button onClick={clean} className=" flex-initial bg-[#219ebc]  text-center hover:bg-blue-700 text-white font-bold px-py rounded">AC</button>
        <button onClick={deleteNum} className=" bg-[#219ebc] text-center hover:bg-blue-700 text-white font-bold px-py rounded">DE</button>
        <button onClick={addNum} id="." className="bg-[#219ebc] hover:bg-blue-700 text-white font-bold px-py rounded">.</button>
        <button onClick={addNum} id="/" className="bg-[#219ebc] hover:bg-blue-700 text-white font-bold px-py rounded">/</button>
        
        <button onClick={addNum} id="7" className="bg-gray-200 text-center hover:bg-blue-700 text-gray-700 font-bold px-py rounded">7</button>
        <button onClick={addNum} id="8" className="bg-gray-200 hover:bg-blue-700 text-gray-700 font-bold px-py rounded">8</button>
        <button onClick={addNum} id="9" className="bg-gray-200 hover:bg-blue-700 text-gray-700 font-bold px-py rounded">9</button>
        <button onClick={addNum} id="*" className="bg-[#219ebc] hover:bg-blue-700 text-white font-bold px-py rounded">*</button>
        
        <button onClick={addNum} id="4" className="bg-gray-200 hover:bg-blue-700 text-gray-700 font-bold px-py rounded">4</button>
        <button onClick={addNum} id="5" className="bg-gray-200 hover:bg-blue-700 text-gray-700 font-bold px-py rounded">5</button>
        <button onClick={addNum} id="6" className="bg-gray-200 hover:bg-blue-700 text-gray-700 font-bold px-py rounded">6</button>
        <button onClick={addNum} id="-" className="bg-[#219ebc] hover:bg-blue-700 text-white font-bold px-py rounded">-</button>
        
        <button onClick={addNum} id="1" className="bg-gray-200 hover:bg-blue-700 text-gray-700 font-bold px-py rounded">1</button>
        <button onClick={addNum} id="2" className="bg-gray-200 hover:bg-blue-700 text-gray-700 font-bold ppx-py rounded">2</button>
        <button  onClick={addNum} id="3" className="bg-gray-200 hover:bg-blue-700 text-gray-700 font-bold px-py rounded">3</button>
        <button onClick={addNum} id="+" className="bg-[#219ebc] hover:bg-blue-700 text-white font-bold px-py rounded">+</button>
        
        <button onClick={addNum} id="0" className="bg-gray-200 hover:bg-blue-700 text-gray-700 font-bold px-py rounded">0</button>
        <button 
        onClick={addNum} 
        id="00" 
        className="bg-gray-200 hover:bg-blue-700 text-gray-700 font-bold px-py rounded">
          00
        </button>

        <button 
        onClick={equal} 
        className="bg-[#219ebc] hover:bg-blue-700 text-white font-bold py-2 px-4  p-4 col-span-2 rounded">
          =
        </button>
       </div>
      </div>
    </main>
  )
}
