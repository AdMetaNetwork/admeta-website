import { FC } from 'react'
import PrivacySvg1 from "../svg/privacy-svg-1";
import PrivacySvg2 from "../svg/privacy-svg-2";
import PrivacySvg3 from "../svg/privacy-svg-3";
import { motion, AnimatePresence } from "framer-motion";

const Privacy: FC = () => {

  const listItems = () => (
    <div className='flex flex-col justify-start -translate-x-10'>
      <AnimatePresence>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1, x: '2.5rem'}}
          transition={{
            duration: 1,
          }}
        >
          <div className='flex flex-col items-start w-space-160 mb-12'>
            <PrivacySvg1/>
            <div className='my-2 text-white-c100 text-lg text-p-semi-bold s-items-before'>Privacy protection</div>
            <div className='text-gray-c100 text-sm text-p-light'>All collected data will be stored in our privacy layer,
              with user-only
              access permission
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1, x: '2.5rem'}}
          transition={{
            duration: 1,
            delay: 0.2
          }}
        >
          <div className='flex flex-col items-start w-space-160 mb-12'>
            <PrivacySvg2/>
            <div className='my-2 text-white-c100 text-lg text-p-semi-bold s-items-before'>Data collection with user consent
            </div>
            <div className='text-gray-c100 text-sm text-p-light'>With users consent, AdMeta anonymously collects Web3
              related browsing
              history for personal advertising analysis
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1, x: '2.5rem'}}
          transition={{
            duration: 1,
            delay: 0.4
          }}
        >
          <div className='flex flex-col items-start w-space-160'>
            <PrivacySvg3/>
            <div className='my-2 text-white-c100 text-lg text-p-semi-bold s-items-before'>Data management</div>
            <div className='text-gray-c100 text-sm text-p-light'>Users can at any time turn off our ad service and erase
              their anonymous
              data partially or fully
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )

  return (
    <div>
      <div
        className='mb-6 gradient-font text-p-bold'
      >PRIVACY FIRST
      </div>
      <div
        className='text-font-size-110 text-white-c000 mb-20 text-p-semi-bold'
        style={{lineHeight: '3.125rem'}}
      >Your Privacy,<br/>Your Choice
      </div>
      {listItems()}
    </div>
  )
}

export default Privacy
