import { FC, useEffect } from 'react'
import { useLottie } from "lottie-react";
import * as U from '../../utils'

import projectLottie from '../../../public/assets/lottie/project-show.json'


const ProjectShow: FC = () => {

  const options = {
    animationData: projectLottie,
    loop: false,
    autoplay: false
  };

  const { View, play } = useLottie(options);

  useEffect(() => {
    const dom = document.getElementById("surf-earn")

    window.addEventListener('scroll', () => {
      if (dom && U.H.isContain((dom))) {
        play()
        window.removeEventListener('scroll', () => {})
      }
    })
  }, [])

  return (
    <div
      className='absolute dashboard-bg2 z-10'
      style={{
        width: '74.6rem',
        height: '59.4rem',
        top: '10rem'
      }}
    >
      {View}
    </div>
  )
}

export default ProjectShow
