import { FC } from 'react'
import Logo2 from "../svg/logo2";
import Btn from "../ui/btn";

const Header: FC = () => {
  return <div
    className='h-space-190 w-full px-space-100 box-border flex justify-between items-center relative z-50 bg-black-c600 mb-24'>
    <Logo2/>
    <div className='flex justify-center items-center'>
      <div className='text-gray-c100 text-base font-semibold underline cursor-pointer hover:text-white-c000'>About</div>
      <div
        className='text-gray-c100 text-base font-semibold underline cursor-pointer mx-8 hover:text-white-c000'
        onClick={() => {
          window.open('https://docs.admeta.network/', '_blank')
        }}
      >Docs
      </div>
      <div
        className='text-gray-c100 text-base font-semibold underline cursor-pointer hover:text-white-c000'
        onClick={() => {
          window.open('https://github.com/AdMetaNetwork', '_blank')
        }}
      >GitHub
      </div>
    </div>
    <Btn
      label='Early Access'
      handleClick={() => {
        window.open('https://app.admeta.network/', '_blank')
      }}
    />
  </div>
}

export default Header
