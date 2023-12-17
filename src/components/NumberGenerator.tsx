import { getRandomBingoNumber } from '../utils/getRandomBingoNumber'
import { checkNumberInCard } from '../utils/checkNumberInCard'
import { BingoNumber } from '../types/types'

interface cardType {
  playerName: string
  numbers: BingoNumber[]
}

type Props = {
  dealtNumbers: number[]
  setDealtNumbers: (dealtNumbers: number[]) => void
  cardPlayer: cardType
  setCardPlayer: (cardPlayer: cardType) => void
  cardCPU: cardType
  setCardCPU: (cardCPU: cardType) => void
}

export const NumberGenerator = (props: Props) => {
  return (
    <section
      onClick={() => {
        let number = getRandomBingoNumber({ array: props.dealtNumbers })
        props.setDealtNumbers([...props.dealtNumbers, number])
        props.setCardPlayer({
          numbers: checkNumberInCard({
            number,
            card: props.cardPlayer.numbers
          }),
          playerName: props.cardPlayer.playerName
        })
        props.setCardCPU({
          numbers: checkNumberInCard({
            number,
            card: props.cardCPU.numbers
          }),
          playerName: props.cardCPU.playerName
        })
      }}
      className='bg-green-500 w-[100px] h-[200px] flex items-center justify-center'
    >
      <p>{props.dealtNumbers.at(-1)}</p>
    </section>
  )
}
