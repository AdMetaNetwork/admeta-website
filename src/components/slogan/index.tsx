import Slogan from './slogan'
import { FC } from 'react'
import MainIcon from "../ui/main-icon";
import Copy from "../svg/copy";
import { CopyToClipboard } from 'react-copy-to-clipboard';

interface Props {
  openTip: (v?: string) => void
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
          <div
            className='text-white-c100 text-xs text-p-light mb-10'
            style={{
              lineHeight: '1.125rem'
            }}
          >AdMeta is a Web3 advertising protocol, <br/>completely
            designed and customized for Web3 <br/>and Metaverse.
          </div>
        </div>
        <div className='px-4'>
          <div className='flex flex-col bg-black-c900 rounded-2xl p-2 -mt-12'>
            <div className='text-center text-blue-c100 text-base text-p-semi-bold mb-1'>Desktop view available</div>
            <div className='text-center text-gray-c200 text-xs text-p-light mb-4'>Open in a desktop browser to unlock
              full functions
            </div>
            <div className='w-full h-9 rounded-full bg-black-c1000 flex items-center justify-between px-4'>
              <div className='text-gray-c200 text-xs text-p-light'>https://admeta.network/</div>
              <CopyToClipboard
                text={'https://admeta.network/'}
                onCopy={() => openTip('Copied! ')}
              >
                <div>
                  <Copy/>
                </div>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Index
