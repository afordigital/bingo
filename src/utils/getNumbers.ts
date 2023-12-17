import { getRandomBingoNumber } from './getRandomBingoNumber'

export const getNumbers = () => {
  let array: number[] = []

  for (let i = 0; i < 15; i++) {
    array.push(getRandomBingoNumber({ array }))
  }

  let result = array.map(bingoNumber => {
    return { number: bingoNumber, isMarked: false }
  })

  return result
}
