import { FC, useEffect } from 'react'
import computerLottie from '../../../public/assets/lottie/computer.json'
import { useLottie } from "lottie-react";
import * as U from '../../utils'

const ComputerIcon: FC = () => {

  const options = {
    animationData: computerLottie,
    loop: false,
    autoplay: false
  };

  const { View, play } = useLottie(options);

  useEffect(() => {
    const dom = document.getElementById("use-consent")

    window.addEventListener('scroll', () => {
      if (dom && U.H.isContain((dom))) {
        play()
        window.removeEventListener('scroll', () => {})
      }
    })
  }, [])

  return (
    <div
      className='absolute computer-icon-bg z-50'
      style={{width: '50rem', height: '50rem', top: '10.75rem'}}

    >
      {View}
    </div>
  )
}

export default ComputerIcon
