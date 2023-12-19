import { NumberGeneratorProps } from '../types/types'
import { generateRandomNumber } from '../utils/generateRandomNumber'

export const NumberGenerator = (props: NumberGeneratorProps) => {
  return (
    <section className='w-[100px] h-[200px] flex items-center justify-center'>
      <button
        onClick={() => {
          if (!props.isGameOver) {
            generateRandomNumber(props)
          }
        }}
        className='bg-gray border-4 cursor-default border-black rounded-full p-10'
      >
        <p className='bg-white cursor-default select-none w-[40px] h-[40px] flex items-center justify-center border-2 border-gray-700 text-black text-xl'>
          {props.dealtNumbers.at(-1)}
        </p>
      </button>
    </section>
  )
}
