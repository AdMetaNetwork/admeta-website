import { FC } from 'react'

interface Props {
  label: string
}

const Modal: FC<Props> = ({label}) => {
  return (
    <div
      className='flex flex-col p-4 box-border bg-blue-200 fixed left-0 right-0 top-0'
      style={{
        zIndex: 9999
      }}
    >
      <div className='text-xs text-black-c500 text-p-light px-4'>{label}</div>
    </div>
  )
}

export default Modal
