import { useEffect, useState } from 'react'
import JSConfetti from 'js-confetti'
import { Card } from './components/Card'
import { NumberGenerator } from './components/NumberGenerator'
import { getNumbers } from './utils/getNumbers'
import { DealtNumbers } from './components/DealtNumbers'
import { resetGame } from './utils/resetGame'
import { LineProps } from './types/types'

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

  const hasPlayerLined =
    cardPlayer.numbers
      .slice(0, 5)
      .every(currentValue => currentValue.isMarked) ||
    cardPlayer.numbers
      .slice(5, 10)
      .every(currentValue => currentValue.isMarked) ||
    cardPlayer.numbers
      .slice(10, 15)
      .every(currentValue => currentValue.isMarked)

  const hasCPULined =
    cardCPU.numbers.slice(0, 5).every(currentValue => currentValue.isMarked) ||
    cardCPU.numbers.slice(6, 10).every(currentValue => currentValue.isMarked) ||
    cardCPU.numbers.slice(11, 15).every(currentValue => currentValue.isMarked)

  const [isLineDone, setIsLineDone] = useState<LineProps>({
    lineDone: hasPlayerLined || hasCPULined,
    winner: ''
  })

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
      handleJsConfetti(['💩', '💻'])
    }
  }, [hasPlayerWon, hasCPUWon])

  useEffect(() => {
    if (hasPlayerLined && !isLineDone.lineDone) {
      handleJsConfetti(['🐹'])
    }
    if (hasCPULined && !isLineDone.lineDone) {
      handleJsConfetti(['💩'])
    }
    if (hasPlayerLined || hasCPULined) {
      setIsLineDone({
        lineDone: true,
        winner: hasPlayerLined ? 'Player' : 'CPU'
      })
    }
  }, [isLineDone, hasPlayerLined, hasCPULined])

  return (
    <div className='w-screen h-screen flex flex-col gap-y-8 justify-center items-center bg-gradient-to-b from-customBgLight to-customBgDark'>
      <div className='flex flex-col md:flex-row justify-around items-center max-w-4xl w-full mx-auto px-8'>
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
            resetGame({
              setCardPlayer,
              setCardCPU,
              setDealtNumbers,
              setIsLineDone
            })
          }}
        >
          Resetear partida
        </button>
      )}
      <div className='max-w-4xl px-8 w-full mx-auto'>
        <DealtNumbers dealtNumbers={dealtNumbers} />
      </div>
      {isLineDone.lineDone && (
        <p className='font-bold text-customWhite text-xl'>
          Línea: {isLineDone.winner}
        </p>
      )}
    </div>
  )
}

export default App
