import { FC } from 'react'
import Btn from "../ui/btn";

const Slogan: FC = () => {

  return (
    <div className='w-full px-space-100 3xl:px-space-200 box-border'>
      <div className='flex-col flex items-start mb-6'>
        <div className='text-font-size-100 text-white-c000 text-p-bold tracking-wide leading-none'>The Web3</div>
        <div className='text-font-size-100 text-white-c000 text-p-bold tracking-wide leading-none'>Advertising</div>
        <div className='text-font-size-100 text-white-c000 text-p-bold tracking-wide leading-none'>Protocol</div>
      </div>
      <div className='text-white-c000 text-base leading-6 mb-10 text-p-light'>AdMeta is a Web3 advertising protocol,
        completely<br/> designed and customized for Web3 and Metaverse.
      </div>
      <Btn
        label={'Start Now'}
        handleClick={() => {
          window.open('https://app.admeta.network/', '_blank')
        }}
      />
    </div>
  )
}

export default Slogan
