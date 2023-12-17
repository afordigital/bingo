import { BingoNumber } from '../types/types'

type Props = {
  playerName: string
  numbers: BingoNumber[]
}

export const Card = (props: Props) => {
  return (
    <section className='bg-customWhite'>
      <p className='text-center'>{props.playerName}</p>
      <article className='grid grid-cols-5 gap-2'>
        {props.numbers.map(number => (
          <div
            key={number.number}
            className={`p-2 ${number.isMarked && 'bg-red-500'} `}
          >
            {number.number}
            <p>{String(number.isMarked)}</p>
          </div>
        ))}
      </article>
    </section>
  )
}
