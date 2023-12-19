type Props = {
  dealtNumbers: number[]
}

export const DealtNumbers = (props: Props) => {
  return (
    <div className='w-full border-2 border-customWhite min-h-[210px] p-4'>
      <div
        style={{
          display: 'grid',
          gap: '4px',
          gridTemplateColumns: 'repeat(auto-fill, minmax(2rem, 1fr))',
          alignItems: 'start'
        }}
        className='items-start w-full'
      >
        {props.dealtNumbers.map(number => (
          <p key={number} className='bg-customWhite h-fit p-2'>
            {number}
          </p>
        ))}
      </div>
    </div>
  )
}
