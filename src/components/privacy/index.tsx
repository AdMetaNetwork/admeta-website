import { FC } from 'react'
import Privacy from "./privacy";
import ProtectIcon from "../ui/protect-icon";
import ComputerIcon from "../ui/computer-icon";
import Card from "../ui/card";
import PrivacySvg1 from "../svg/privacy-svg-1";
import PrivacySvg2 from "../svg/privacy-svg-2";
import PrivacySvg3 from "../svg/privacy-svg-3";

const Index: FC = () => {
  return (
    <>
      <div className='hidden sm:block relative w-full px-space-100 3xl:px-space-200 box-border py-40 liner-bg overflow-hidden'>
        <Privacy/>
        <ProtectIcon/>
        <ComputerIcon/>
      </div>
      <div className='block sm:hidden px-4 box-border mb-20'>
        <div
          className='gradient-font text-p-bold'
          style={{
            fontSize: '0.75rem'
          }}
        >PRIVACY FIRST
        </div>
        <div className='text-2xl text-white-c000 text-p-medium mb-6'>Your Privacy, <br />Your Choice</div>
        <Card
          title={'Privacy protection'}
          dec={'All collected data will be stored in our privacy layer, with user-only access permission'}
        >
          <PrivacySvg1 />
        </Card>
        <Card
          title={'Data collection with user consent'}
          dec={'With users consent, AdMeta anonymously collects Web3 related browsing history for personal advertising analysis'}
        >
          <PrivacySvg2 />
        </Card>
        <Card
          title={'Data management'}
          dec={'Users can at any time turn off our ad service and erase their anonymous data partially or fully'}
        >
          <PrivacySvg3 />
        </Card>
      </div>
    </>

  )
}

export default Index
