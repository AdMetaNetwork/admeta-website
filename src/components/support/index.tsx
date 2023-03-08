import { FC } from 'react'
import Illustrate from "./illustrate";
import SupportItems from "./support-items";
import { motion, AnimatePresence } from "framer-motion";

const Index: FC = () => {
  return (
    <>
      <Illustrate/>
      <AnimatePresence>
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1, y: '-2.5rem'}}
          transition={{
            duration: 1
          }}
        >
          <SupportItems />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Index
