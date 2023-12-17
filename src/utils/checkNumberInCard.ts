import { BingoNumber } from '../types/types'

type Props = {
  number: number
  card: BingoNumber[]
}

export const checkNumberInCard = (props: Props) => {
  const newCards = props.card.map(cardTroncho => {
    if (cardTroncho.number === props.number) {
      const cardItemModified = { ...cardTroncho, isMarked: true }
      return cardItemModified
    }
    return cardTroncho
  })

  console.log(newCards)

  return newCards
}
