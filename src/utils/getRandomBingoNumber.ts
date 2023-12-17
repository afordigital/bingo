type Props = {
  array: number[]
}

export const getRandomBingoNumber = (props: Props): number => {
  let number = Math.floor(Math.random() * 90)
  if (props.array.includes(number)) {
    return getRandomBingoNumber(props)
  }
  return number
}
