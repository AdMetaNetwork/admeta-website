import { FC } from 'react'
import Logo2 from "../svg/logo2";
import Discord from "../svg/discord";
import Telegram from "../svg/telegram";
import Youtobe from "../svg/youtobe";
import Twitter from "../svg/twitter";
import Grant1 from "../svg/grant1";
import Logo3 from "../svg/logo3";

const Footer: FC = () => {
  return (
    <>
      <div
        className='hidden sm:flex justify-between items-center h-space-170 bg-black-c000 w-full px-space-100 3xl:px-space-200 box-border'>
        <div className='flex flex-col items-start'>
          <Logo2/>
          <div className='flex flex-col items-start mt-space-180'>
            <div className='flex justify-start items-start mb-2'>
              <div className='mr-7 cursor-pointer'>
                <Discord/>
              </div>
              <div className='mr-7 cursor-pointer'>
                <Twitter/>
              </div>
              <div className='mr-7 cursor-pointer'>
                <Telegram/>
              </div>
              <div>
                <Youtobe/>
              </div>
            </div>
            <div className='text-black-c500 text-font-size-130 text-p-light'>© Copyright 2023 AdMeta</div>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='text-gray-c100 text-base text-p-semi-bold underline cursor-pointer  hover:text-white-c000'><a
            href="#introduce">About</a>
          </div>
          <div
            className='text-gray-c100 text-base text-p-semi-bold underline cursor-pointer my-3  hover:text-white-c000'
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
          >Github
          </div>
        </div>
        <div>
          <Grant1/>
        </div>
      </div>
      <div className='flex sm:hidden flex-col items-center'>
        <Logo3/>
        <div className='mt-10 w-full flex justify-between px-20 box-border mb-14'>
          <Discord/>
          <Twitter/>
          <Telegram/>
          <Youtobe/>
        </div>
        <div className='w-full flex flex-col items-center mb-14'>
          <div className='text-white-c100 text-base text-p-semi-bold underline cursor-pointer  hover:text-white-c000'><a
            href="#introduce-m">About</a>
          </div>
          <div
            className='text-white-c100 text-base text-p-semi-bold underline cursor-pointer my-3  hover:text-white-c000'
            onClick={() => {

            }}
          >Docs
          </div>
          <div
            className='text-white-c100 text-base text-p-semi-bold underline cursor-pointer hover:text-white-c000'
            onClick={() => {

            }}
          >Github
          </div>
        </div>
        <div className='mb-6'>
          <Grant1/>
        </div>
        <div className='text-black-c500 text-p-regular mb-10' style={{fontSize: '0.813rem'}}>© Copyright 2023 AdMeta</div>
      </div>
    </>

  )
}

export default Footer
