import { FC } from 'react'
import EarnSvg1 from "../svg/earn-svg-1";
import EarnSvg2 from "../svg/earn-svg-2";
import EarnSvg3 from "../svg/earn-svg-3";

const SurfEarn: FC = () => {

  const listItems = () => (
    <div className='flex flex-col justify-start'>
      <div className='flex flex-col items-start w-space-160 mb-12'>
        <EarnSvg1 />
        <div className='my-2 text-white-c100 text-lg font-semibold s-items-before'>Customized ads</div>
        <div className='text-gray-c100 text-sm'>Users who opt-in to our ad service will receive personalized ads and can earn rewards in return</div>
      </div>
      <div className='flex flex-col items-start w-space-160 mb-12'>
        <EarnSvg2 />
        <div className='my-2 text-white-c100 text-lg font-semibold s-items-before'>NFT and SBT loyalty program</div>
        <div className='text-gray-c100 text-sm'>AdMeta provides NFTs and SBTs to our loyal users, granting them exclusive privileges such as airdrops and other rewards.</div>
      </div>
      <div className='flex flex-col items-start w-space-160'>
        <EarnSvg3 />
        <div className='my-2 text-white-c100 text-lg font-semibold s-items-before'>Data staking</div>
        <div className='text-gray-c100 text-sm'>Users are incentivized for data staking</div>
      </div>
    </div>
  )

  return (
    <div>
      <div
        className='mb-6 gradient-font'
      >DATA STAKING
      </div>
      <div className='text-font-size-110 text-white-c000 mb-20 font-semibold'>Surf to Earn</div>
      {listItems()}
    </div>
  )
}

export default SurfEarn
