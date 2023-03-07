import { FC } from 'react'
import Image from 'next/image'

import projectImg from '../../../public/assets/images/project-show.png'

const ProjectShow: FC = () => {
  return (
    <div
      className='absolute -right-96 3xl:right-96'
      style={{
        width: '74.6rem',
        height: '59.4rem',
        top: '10rem'
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
