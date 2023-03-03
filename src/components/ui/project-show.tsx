import { FC } from 'react'
import Image from 'next/image'

import projectImg from '../../../public/assets/images/project-show.png'

const ProjectShow: FC = () => {
  return (
    <div
      className='absolute'
      style={{
        width: '74.6rem',
        height: '59.4rem',
        top: '10rem',
        right: '-23.3rem'
      }}
    >
      <Image
        src={projectImg.src}
        layout={'fill'}
      />
    </div>
  )
}

export default ProjectShow
