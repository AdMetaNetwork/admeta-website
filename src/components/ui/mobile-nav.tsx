import { FC } from 'react'
import Logo3 from "../svg/logo3";
import MobileShow from '../../../public/assets/images/mobile-show.png'

interface Props {
  closeNav: () => void
}

const MobileNav: FC<Props> = ({closeNav}) => {
  return (
    <div
      className='sm:hidden flex flex-col items-center pt-16 absolute inset-0'
      style={{
        background: '#262536',
        zIndex: 999
      }}
    >
      <Logo3/>
      <div className='w-full flex flex-col items-center my-10 relative z-50'>
        <div
          className='text-white-c100 text-base text-p-semi-bold underline cursor-pointer  hover:text-white-c000'><a
          href="#introduce-m"
          onClick={closeNav}
        >About</a>
        </div>
        <div
          className='text-white-c100 text-base text-p-semi-bold underline cursor-pointer my-3  hover:text-white-c000'
          onClick={() => {
            window.open('https://docs.admeta.network/', '_blank')
          }}
        >Docs
        </div>
        <div
          className='text-white-c100 text-base text-p-semi-bold underline cursor-pointer hover:text-white-c000'
          onClick={() => {
            window.open('https://github.com/AdMetaNetwork', '_blank')
          }}
        >Github
        </div>
      </div>
      <div className='w-full absolute left-0 right-0' style={{
        bottom: '-100px'
      }}>
        <img src={MobileShow.src} alt="mobile show"/>
      </div>
      <div
        className='absolute text-white-c000'
        style={{
          top: 20,
          right: 20
        }}
        onClick={closeNav}
      >X</div>
    </div>
  )
}

export default MobileNav
