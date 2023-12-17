import { NumberGeneratorProps } from '../types/types'
import { checkNumberInCard } from './checkNumberInCard'
import { getRandomBingoNumber } from './getRandomBingoNumber'

export const generateRandomNumber = (props: NumberGeneratorProps) => {
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
}
