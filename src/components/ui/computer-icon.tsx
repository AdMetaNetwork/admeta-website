import { FC } from 'react'
import Image from "next/image"

import protectImg from '../../../public/assets/images/computer.png'

const ComputerIcon: FC = () => {
  return (
    <div
      className='absolute right-12 3xl:right-1/4'
      style={{width: '50rem', height: '50rem', top: '10.75rem'}}>
      <Image
        src={protectImg.src}
        layout={'fill'}
      />
    </div>
  )
}

export default ComputerIcon
