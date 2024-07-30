
import { useState } from 'react';
import './index.css';
function App() {
  const [color, setColor] = useState("black")
  const [color1, setColor1] = useState("white")
  return (
    <div className='main-container'>
      <div className="outer-container p-5 bg-yellow-200 rounded-md " style={{backgroundColor:color}}>
        <div className="inner-container" style={{backgroundColor:color}}>
        <h1 className='text-center m-2 text-fuchsia-700 text-xl font-bold capitalize'>Here all change color will be display of right div container</h1>
          <button onClick={() => setColor1("#fca5a5")} className='px-5 py-2 m-1 bg-red-700 rounded-lg text-white'>red</button>
          <button onClick={() => setColor1("#86efac")}  className='px-5 py-2 m-1 bg-green-600 rounded-lg text-white'>Green</button>
          <button onClick={() => setColor1("#f9a8d4")} className='px-5 py-2 m-1 bg-pink-600 rounded-lg text-white'>pink</button>
          <button onClick={() => setColor1("#bef264")} className='px-5 py-2 m-1 bg-lime-600 rounded-lg text-white'>Lime</button>
          <button onClick={() => setColor1("#fdba74")} className='px-5 py-2 m-1 bg-orange-600 rounded-lg text-white'>orange</button>
          <button onClick={() => setColor1("#93c5fd")} className='px-5 py-2 m-1 bg-blue-600 rounded-lg text-white'>blue</button>
          <button onClick={() => setColor1("#fda4af")} className='px-5 py-2 m-1 bg-rose-600 rounded-lg text-white'>Rose</button>
          <button onClick={() => setColor1("#67e8f9")} className='px-5 py-2 m-1 bg-cyan-600 rounded-lg text-white'>cyan</button>
        </div>
      </div>
      <div className="outer-container p-5 bg-yellow-200 rounded-full " style={{backgroundColor:color1}}>
        <div className="inner-container" style={{backgroundColor:color1}}>
          <h1 className='text-center m-2 text-xl font-bold capitalize'>Here all change color will be display in opacity of left div container</h1>
          <button onClick={() => setColor("red")} className='px-5 py-2 m-1 bg-orange-700 rounded-lg text-white'>Red</button>
          <button onClick={() => setColor("green")} className='px-5 py-2 m-1 bg-green-600 rounded-lg text-white'>Green</button>
          <button onClick={() => setColor("Pink")} className='px-5 py-2 m-1 bg-pink-600 rounded-lg text-white'>pink</button>
          <button onClick={() => setColor("lime")} className='px-5 py-2 m-1 bg-lime-600 rounded-lg text-white'>Lime</button>
          <button onClick={() => setColor("teal")} className='px-5 py-2 m-1 bg-orange-600 rounded-lg text-white'>Orange</button>
          <button onClick={() => setColor("blue")} className='px-5 py-2 m-1 bg-blue-600 rounded-lg text-white'>Blue</button>
          <button onClick={() => setColor("#b45309")} className='px-5 py-2 m-1 bg-amber-600 rounded-lg text-white'>Amber</button>
          <button onClick={() => setColor("cyan")} className='px-5 py-2 m-1 bg-cyan-600 rounded-lg text-white'>Cyan</button>
        </div>
      </div>
    </div>
  )
}

export default App
