type Props = {
  dealtNumbers: number[]
}

export const DealtNumbers = (props: Props) => {
  return (
    <div>
      {props.dealtNumbers.length > 0 && (
        <div className='border-2 border-customWhite grid grid-cols-12 gap-2 p-4'>
          {props.dealtNumbers.map(number => (
            <p key={number} className='bg-customWhite p-2'>
              {number}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
