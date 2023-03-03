import { FC } from 'react'
import Image from "next/image"

import protectImg from '../../../public/assets/images/protect-icon.png'

const ProtectIcon: FC = () => {
  return (
    <div className='absolute' style={{width: '49.6rem', height: '49.6rem', right: '1rem', top: '5.25rem'}}>
      <Image
        src={protectImg.src}
        layout={'fill'}
      />
    </div>
  )
}

export default ProtectIcon
