import { FC } from 'react'
import Logo2 from "../svg/logo2";
import Logo3 from "../svg/logo3";
import Btn from "../ui/btn";
import Menu from "../svg/menu";

interface Props {
  openNav: () => void

}

const Header: FC<Props> = ({openNav}) => {

  return (
    <>
      <div
        className='hidden h-space-190 w-full px-space-100 3xl:px-space-200 box-border sm:flex justify-between items-center relative z-50 bg-black-c800 mb-24'>
        <Logo2/>
        <div className='flex justify-center items-center'>
          <div
            className='text-gray-c100 text-base text-p-semi-bold underline cursor-pointer hover:text-white-c000'
          ><a href="#introduce">About</a></div>
          <div
            className='text-gray-c100 text-base text-p-semi-bold underline cursor-pointer mx-8 hover:text-white-c000'
            onClick={() => {
              window.open('https://docs.admeta.network/', '_blank')
            }}
          >Docs
          </div>
          <div
            className='text-gray-c100 text-base text-p-semi-bold underline cursor-pointer hover:text-white-c000'
            onClick={() => {
              window.open('https://github.com/AdMetaNetwork', '_blank')
            }}
          >GitHub
          </div>
        </div>
        <Btn
          label='Early Access'
          handleClick={() => {
            window.open('https://app.admeta.network', '_blank')
          }}
        />
      </div>
      <div className='flex sm:hidden px-4 box-border justify-between items-end pb-2 h-space-210 mb-6'>
        <Logo3/>
        <div
          onClick={openNav}
        >
          <Menu/>
        </div>

      </div>
    </>
  )
}

export default Header
