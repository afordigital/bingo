import { NumberGeneratorProps } from '../types/types'
import { generateRandomNumber } from '../utils/generateRandomNumber'

export const NumberGenerator = (props: NumberGeneratorProps) => {
  return (
    <section
      onClick={() => {
        if (!props.isGameOver) {
          generateRandomNumber(props)
        }
      }}
      className='bg-green-500 w-[100px] h-[200px] flex items-center justify-center'
    >
      <p>{props.dealtNumbers.at(-1)}</p>
    </section>
  )
}
