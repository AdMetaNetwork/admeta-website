import { FC } from 'react'
import computerLottie from '../../../public/assets/lottie/computer.json'
import { useLottie } from "lottie-react";

const ComputerIcon: FC = () => {

  const options = {
    animationData: computerLottie,
    loop: true
  };

  const { View } = useLottie(options);

  return (
    <div
      className='absolute computer-icon-bg'
      style={{width: '50rem', height: '50rem', top: '10.75rem'}}

    >
      {View}
    </div>
  )
}

export default ComputerIcon
