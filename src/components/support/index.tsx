import { FC } from 'react'
import Illustrate from "./illustrate";
import SupportItems from "./support-items";
import { motion, AnimatePresence } from "framer-motion";
import Card from '../ui/card'
import SupportSvg1 from "../svg/support-svg-1";
import SupportSvg2 from "../svg/support-svg-2";
import SupportSvg3 from "../svg/support-svg-3";
import SupportSvg4 from "../svg/support-svg-4";

const Index: FC = () => {
  return (
    <>
      <div className='hidden sm:block'>
        <Illustrate/>
        <AnimatePresence>
          <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1, y: '-2.5rem'}}
            transition={{
              duration: 1
            }}
          >
            <SupportItems/>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className='block sm:hidden px-4 box-border mb-20'>
        <div className='text-2xl text-white-c000 text-p-medium mb-2 text-center' id="introduce-m">Seamless transition to Web3 advertising</div>
        <div className='text-gray-c100 text-xs text-p-light mb-10 text-center'>AdMeta offers a range of products designed to enable
          users to take control of their personal data, eliminate annoying tracking and privacy issues, and even
          monetize their data.
        </div>
        <Card
          title={'Anti-tracking'}
          dec={'Block trackers used by websites to collect data on user behavior'}
        >
          <SupportSvg1 />
        </Card>
        <Card
          title={'Anti-phishing'}
          dec={'Detect and protect against phishing and malicious websites that can compromise user browsing security'}
        >
          <SupportSvg2 />
        </Card>
        <Card
          title={'DApp protection'}
          dec={'Phishing and security checks for DApp front-end sites'}
        >
          <SupportSvg3 />
        </Card>
        <Card
          title={'Cookie pop-ups removal'}
          dec={'Automatically rejects non-essential cookies and eliminates annoying cookie pop-ups'}
        >
          <SupportSvg4 />
        </Card>
      </div>
    </>
  )
}

export default Index
