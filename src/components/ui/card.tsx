import { FC, ReactNode } from 'react'

interface Props {
  title: string,
  dec: string,
  children: ReactNode
}

const Card: FC<Props> = ({title, dec, children}) => {
  return (
    <div
      className='flex flex-col p-4 box-border rounded-2xl bg-black-c700 mb-2'
    >
      {children}
      <div className='text-lg text-white-c000 text-p-medium mb-2 s-items-before mt-4'>{title}</div>
      <div className='text-xs text-gray-c100 text-p-light'>{dec}</div>
    </div>
  )
}

export default Card
