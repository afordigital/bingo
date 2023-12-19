import { useEffect, useState } from 'react'
import JSConfetti from 'js-confetti'
import { Card } from './components/Card'
import { NumberGenerator } from './components/NumberGenerator'
import { getNumbers } from './utils/getNumbers'
import { DealtNumbers } from './components/DealtNumbers'
import { resetGame } from './utils/resetGame'

function App () {
  const [dealtNumbers, setDealtNumbers] = useState<number[]>([])
  const [cardPlayer, setCardPlayer] = useState({
    playerName: 'Player',
    numbers: getNumbers()
  })
  const [cardCPU, setCardCPU] = useState({
    playerName: 'CPU',
    numbers: getNumbers()
  })

  const hasPlayerWon = cardPlayer.numbers.every(
    currentValue => currentValue.isMarked
  )

  const hasCPUWon = cardCPU.numbers.every(currentValue => currentValue.isMarked)
  const isGameOver = hasPlayerWon || hasCPUWon

  const jsConfetti = new JSConfetti()

  const handleJsConfetti = (emojis: string[]) => {
    jsConfetti.addConfetti({
      emojis: emojis
    })
  }
  useEffect(() => {
    if (hasPlayerWon) {
      handleJsConfetti(['🐹', '🐭'])
    }
    if (hasCPUWon) {
      handleJsConfetti(['🎉', '🎊'])
    }
  }, [hasPlayerWon, hasCPUWon])

  return (
    <div className='w-screen h-screen flex flex-col gap-y-8 justify-center items-center bg-gradient-to-b from-customBgLight to-customBgDark'>
      <div className='flex max-w-6xl mx-auto gap-x-16'>
        <Card playerName={cardPlayer.playerName} numbers={cardPlayer.numbers} />
        <NumberGenerator
          dealtNumbers={dealtNumbers}
          setDealtNumbers={setDealtNumbers}
          cardPlayer={cardPlayer}
          setCardPlayer={setCardPlayer}
          cardCPU={cardCPU}
          setCardCPU={setCardCPU}
          isGameOver={isGameOver}
        />
        <Card playerName={cardCPU.playerName} numbers={cardCPU.numbers} />
      </div>
      {isGameOver && (
        <button
          onClick={() => {
            resetGame({ setCardPlayer, setCardCPU, setDealtNumbers })
          }}
        >
          Resetear partida
        </button>
      )}
      <div className='max-w-xl w-full mx-auto bg-green-500'>
        <DealtNumbers dealtNumbers={dealtNumbers} />
      </div>
    </div>
  )
}

export default App
