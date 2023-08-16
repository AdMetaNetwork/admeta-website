import { FC } from 'react'
import Logo1 from "../svg/logo1";

const Main: FC = () => {
  return (
    <div className='banner-bg flex px-28 box-border items-center justify-between'>
      <Logo1 />
      <div className='flex flex-col items-start'>
        <div
          className='text-black-c400 text-font-size-120 text-p-bold mb-6'
          style={{lineHeight: '2.5rem'}}
        >Unlock the Future of Advertising<br/> Start Today!</div>
        <div className='flex justify-start items-center'>
          <div className='text-lg text-black-c400 text-p-semi-bold'>Trustworthy</div>
          <div style={{
            width: '1px',
            height: '18px',
            background: '#14141F'
          }} className='mx-2'></div>
          <div className='text-lg text-black-c400 text-p-semi-bold'>Innovative</div>
          <div style={{
            width: '1px',
            height: '18px',
            background: '#14141F'
          }} className='mx-2'></div>
          <div className='text-lg text-black-c400 text-p-semi-bold'>Humanistic</div>
        </div>
      </div>
      <div className='px-6 flex h-11 bg-black-c400 rounded-full items-center justify-center cursor-pointer hover:opacity-80'>
        <div
          className='text-white-c000 text-p-semi-bold text-lg'
          onClick={() => {
            window.open('https://app.admeta.network', '_blank')
          }}
        >Early Access</div>
      </div>
    </div>
  )
}

export default Main
