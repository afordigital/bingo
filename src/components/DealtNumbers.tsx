type Props = {
  dealtNumbers: number[]
}

export const DealtNumbers = (props: Props) => {
  return (
    <div className='w-full'>
      {props.dealtNumbers.length > 0 && (
        <div
          style={{
            display: 'grid',
            gap: '4px',
            gridTemplateColumns: 'repeat(auto-fill, minmax(2rem, 1fr))'
          }}
          className='border-2 min-w-[800px] w-full border-customWhite p-4'
        >
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
