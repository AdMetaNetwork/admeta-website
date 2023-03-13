import Slogan from './slogan'
import { FC } from 'react'
import MainIcon from "../ui/main-icon";
import Btn from '../ui/btn'

interface Props {
  openTip: () => void
}

const Index: FC<Props> = ({openTip}) => {

  return (
    <>
      <div className='hidden sm:block mb-space-120'>
        <Slogan/>
        <MainIcon/>
      </div>
      <div className='block sm:hidden px-4 box-border mb-10'>
        <div className='w-full p-6 box-border flex flex-col mobile-slogan-bg rounded-2xl'>
          <div className='text-2xl text-white-c000 text-p-medium mb-2'>The Web3 Advertising Protocol</div>
          <div className='text-white-c100 text-xs text-p-light mb-10'>AdMeta is a Web3 advertising protocol, <br/>completely
            designed and customized for Web3 <br/>and Metaverse.
          </div>
          <div>
            <Btn
              label='Early Access'
              handleClick={openTip}
            />
          </div>
        </div>
      </div>
    </>
  )

}

export default Index
