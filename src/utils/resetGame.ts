import { getNumbers } from './getNumbers'
import { cardType, LineProps } from '../types/types'

type Props = {
  setCardPlayer: (cardType: cardType) => void
  setCardCPU: (cardType: cardType) => void
  setDealtNumbers: (dealtNumbers: number[]) => void
  setIsLineDone: (isLineDone: LineProps) => void
}

export const resetGame = (props: Props) => {
  props.setCardPlayer({
    playerName: 'Player 1',
    numbers: getNumbers()
  })
  props.setCardCPU({
    playerName: 'CPU',
    numbers: getNumbers()
  })
  props.setDealtNumbers([])
  props.setIsLineDone({ lineDone: false, winner: '' })
}
