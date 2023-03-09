import { FC } from 'react'

import mobileImg from '../../../public/assets/images/mobile.png'

const Index: FC = () => {
  return (
    <div
      className='w-full flex justify-center'
    >
      <img src={mobileImg.src} style={{ width: '100%'}} alt=""/>
    </div>
  )
}

export default Index
