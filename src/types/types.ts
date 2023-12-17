export interface BingoNumber {
  number: number
  isMarked: boolean
}

export interface cardType {
  playerName: string
  numbers: BingoNumber[]
}

export interface NumberGeneratorProps {
  dealtNumbers: number[]
  setDealtNumbers: (dealtNumbers: number[]) => void
  cardPlayer: cardType
  setCardPlayer: (cardPlayer: cardType) => void
  cardCPU: cardType
  setCardCPU: (cardCPU: cardType) => void
  isGameOver: boolean
}
