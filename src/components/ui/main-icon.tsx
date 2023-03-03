import { FC } from 'react'
import Image from "next/image"

import MainBg from '../../../public/assets/images/main-bg.png'

const MainIcon: FC = () => {
  return (
    <div className='absolute' style={{width: '72rem', height: '72rem', right: '-8.9rem', top: '-5.25rem'}}>
      <Image
        src={MainBg.src}
        layout={'fill'}
      />
    </div>
  )
}

export default MainIcon
