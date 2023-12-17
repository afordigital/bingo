import { getNumbers } from './getNumbers'
import { cardType } from '../types/types'

type Props = {
  setCardPlayer: (cardType: cardType) => void
  setCardCPU: (cardType: cardType) => void
  setDealtNumbers: (dealtNumbers: number[]) => void
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
}
