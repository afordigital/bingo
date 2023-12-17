import { useEffect, useState } from 'react'
import { Card } from './components/Card'
import { NumberGenerator } from './components/NumberGenerator'
import { getNumbers } from './utils/getNumbers'

function App () {
  const [dealtNumbers, setDealtNumbers] = useState<number[]>([])
  const [cardPlayer, setCardPlayer] = useState({
    playerName: 'Player 1',
    numbers: getNumbers()
  })
  const [cardCPU, setCardCPU] = useState({
    playerName: 'CPU',
    numbers: getNumbers()
  })

  return (
    <div className='w-screen h-screen flex justify-center items-center bg-gradient-to-b from-customBgLight to-customBgDark'>
      <Card playerName={cardPlayer.playerName} numbers={cardPlayer.numbers} />
      <NumberGenerator
        dealtNumbers={dealtNumbers}
        setDealtNumbers={setDealtNumbers}
        cardPlayer={cardPlayer}
        setCardPlayer={setCardPlayer}
        cardCPU={cardCPU}
        setCardCPU={setCardCPU}
      />
      <Card playerName={cardCPU.playerName} numbers={cardCPU.numbers} />
    </div>
  )
}

export default App
