import { BingoNumber } from '../types/types'

type Props = {
  playerName: string
  numbers: BingoNumber[]
}

export const Card = (props: Props) => {
  return (
    <section className='bg-customRed px-2 pb-2 border-2 border-customBrown drop-shadow-sm'>
      <p className='text-center p-2 uppercase text-customWhite text-xl font-semibold'>
        {props.playerName}
      </p>
      <article className='grid grid-cols-5 gap-2'>
        {props.numbers.map(number => (
          <div
            key={number.number}
            className={`py-2 px-3 ${
              number.isMarked
                ? 'bg-customRed text-customBrown font-bold line-through'
                : 'bg-customWhite'
            } text-center font-semibold`}
          >
            {number.number}
          </div>
        ))}
      </article>
    </section>
  )
}
