import { FC } from 'react'
import circleLottie from '../../../public/assets/lottie/circle-bg.json'
import { useLottie } from "lottie-react";

const CircleBg: FC = () => {
  const options = {
    animationData: circleLottie,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <div
      className='absolute dashboard-bg'
      style={{width: '50rem', height: '50rem', top: '10.75rem'}}
      id='circle-bg'
    >
      {View}
    </div>
  )
}

export default CircleBg
