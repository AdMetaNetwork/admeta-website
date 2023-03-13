import { FC } from 'react'
import Main from './main'

interface Props {
  openTip: () => void
}

const Index: FC<Props> = ({openTip}) => {
  return (
    <>
      <div
        className='hidden sm:flex relative w-full px-space-100 box-border bg-black-c300 flex items-center justify-center'
        style={{height: '31.25rem'}}
      >
        <Main/>
      </div>
      <div className='block sm:hidden px-4 box-border mb-10'>
        <div className='w-full p-8 box-border banner-bg2'>
          <div className='text-2xl text-black-c000 text-p-bold mb-6'>Unlock the Future of<br/> Advertising<br/>
            Start Today!
          </div>
          <div className='flex justify-start items-center mb-8'>
            <div className='text-sm text-black-c400 text-p-semi-bold'>Trustworthy</div>
            <div style={{
              width: '1px',
              height: '18px',
              background: '#14141F'
            }} className='mx-2'></div>
            <div className='text-sm text-black-c400 text-p-semi-bold'>Innovative</div>
            <div style={{
              width: '1px',
              height: '18px',
              background: '#14141F'
            }} className='mx-2'></div>
            <div className='text-sm text-black-c400 text-p-semi-bold'>Humanistic</div>
          </div>
          <div
            className='px-6 flex h-11 bg-black-c400 rounded-full items-center justify-center cursor-pointer hover:opacity-80 inline-flex'>
            <div
              className='text-white-c000 text-p-semi-bold text-lg'
              onClick={openTip}
            >Early Access
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
