import { FC } from 'react'
import SupportSvg1 from "../svg/support-svg-1";
import SupportSvg2 from "../svg/support-svg-2";
import SupportSvg3 from "../svg/support-svg-3";
import SupportSvg4 from "../svg/support-svg-4";

const SupportItems: FC = () => {
  return (
    <div className='w-full px-space-100 3xl:px-space-200 box-border flex justify-between items-start mb-space-150'>
      <div
        className='flex flex-col items-start w-space-140'
      >
        <SupportSvg1 />
        <div className='my-2 text-white-c100 text-lg text-p-semi-bold s-items-before'>Anti-tracking</div>
        <div className='text-gray-c100 text-sm text-p-light'>Block trackers used by websites to collect data on user behavior</div>
      </div>
      <div
        className='flex flex-col items-start w-space-140'
      >
        <SupportSvg2 />
        <div className='my-2 text-white-c100 text-lg text-p-semi-bold s-items-before'>Anti-phishing</div>
        <div className='text-gray-c100 text-sm text-p-light'>Detect and protect against phishing and malicious websites that can compromise user browsing security</div>
      </div>
      <div
        className='flex flex-col items-start w-space-140'
      >
        <SupportSvg3 />
        <div className='my-2 text-white-c100 text-lg text-p-semi-bold s-items-before'>DApp protection</div>
        <div className='text-gray-c100 text-sm text-p-light'>Phishing and security checks for DApp front-end sites</div>
      </div>
      <div
        className='flex flex-col items-start w-space-140'
      >
        <SupportSvg4 />
        <div className='my-2 text-white-c100 text-lg text-p-semi-bold s-items-before'>Cookie pop-ups removal</div>
        <div className='text-gray-c100 text-sm text-p-light'>Automatically rejects non-essential cookies and eliminates annoying cookie pop-ups</div>
      </div>
    </div>
  )
}

export default SupportItems
