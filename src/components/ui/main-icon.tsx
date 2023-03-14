import { FC } from 'react'
import { useLottie } from "lottie-react"

import mainBgLottie from '../../../public/assets/lottie/main-bg.json'

const MainIcon: FC = () => {

  const options = {
    animationData: mainBgLottie,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <div className='absolute scale-100 3xl:scale-200'
         style={{width: '90rem', height: '90rem', right: '-8.9rem', top: '-5.25rem'}}
    >
      {View}
    </div>
  )
}

export default MainIcon
