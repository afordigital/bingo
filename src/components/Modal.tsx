type Props = {
  winner: string
}

export const Modal = (props: Props) => {
  return (
    <div className='h-screen w-screen'>
      <dialog className='w-[500px] h-[500px] bg-white absolute top-0 bottom-0 left-0 right-0 mx-auto'>
        <p>¡{props.winner} ha ganado!</p>
      </dialog>
    </div>
  )
}
