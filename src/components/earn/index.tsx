import { FC } from 'react'
import SurfEarn from "./surf-earn";
import ProjectShow from "../ui/project-show";
import EarnSvg1 from "../svg/earn-svg-1";
import EarnSvg2 from "../svg/earn-svg-2";
import EarnSvg3 from "../svg/earn-svg-3";
import Card from '../ui/card'

const Index: FC = () => {
  return (
    <>
      <div
        className='hidden sm:block relative w-full px-space-100 3xl:px-space-200 box-border mb-space-100 py-40 bg-black-c200 overflow-hidden mb-0'>
        <SurfEarn/>
        <ProjectShow/>
      </div>
      <div className='block sm:hidden px-4 box-border mb-20'>
        <div
          className='gradient-font text-p-bold'
          style={{
            fontSize: '0.75rem'
          }}
        >DATA STAKING
        </div>
        <div className='text-2xl text-white-c000 text-p-medium mb-6'>Surf to Earn</div>
        <Card
          title={'Customized ads'}
          dec={'Users who opt-in to our ad service will receive personalized ads and can earn rewards in return'}
        >
          <EarnSvg1 />
        </Card>
        <Card
          title={'NFT and SBT loyalty program'}
          dec={'AdMeta provides NFTs and SBTs to our loyal users, granting them exclusive privileges such as airdrops and other rewards.'}
        >
          <EarnSvg2 />
        </Card>
        <Card
          title={'Data staking'}
          dec={'Users are incentivized for data staking'}
        >
          <EarnSvg3 />
        </Card>
      </div>
    </>
  )
}

export default Index
