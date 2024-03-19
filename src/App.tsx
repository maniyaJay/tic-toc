import React, { useState } from 'react'
import './App.css'
import Block from './Componet/block'

function App() {
  const [state, setState] = useState(Array(9).fill(null))
  const [currntTurn, setCurrntTurn] = useState("X")
  const [count, setCount] = useState();

  const chackWiner = (state: any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c])
        return true;
    }
    return false
  }

  const henalBlockClick = (index: number) => {
    const stateCopy = Array.from(state);
    if (stateCopy[index] !== null) return;
    stateCopy[index] = currntTurn;

    const win = chackWiner(stateCopy);

    if (win) {
      alert(`${currntTurn} won the game`)
      window.location.reload();
    }



    setCurrntTurn(currntTurn === "X" ? "O" : "X");
    setState(stateCopy);
  }

  return (
    <>
      <div className='border'>
        <Block onClick={() => henalBlockClick(0)} value={state[0]} />
        <Block onClick={() => henalBlockClick(1)} value={state[1]} />
        <Block onClick={() => henalBlockClick(2)} value={state[2]} />
      </div>
      <div className='border'>
        <Block onClick={() => henalBlockClick(3)} value={state[3]} />
        <Block onClick={() => henalBlockClick(4)} value={state[4]} />
        <Block onClick={() => henalBlockClick(5)} value={state[5]} />
      </div>
      <div className='border'>
        <Block onClick={() => henalBlockClick(6)} value={state[6]} />
        <Block onClick={() => henalBlockClick(7)} value={state[7]} />
        <Block onClick={() => henalBlockClick(8)} value={state[8]} />
      </div>
       

    </>
  )
}

export default App
