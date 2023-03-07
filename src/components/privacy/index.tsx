import { FC } from 'react'
import Privacy from "./privacy";
import ProtectIcon from "../ui/protect-icon";
import ComputerIcon from "../ui/computer-icon";

const Index: FC = () => {
  return (
    <div className='relative w-full px-space-100 3xl:px-space-200 box-border py-40 liner-bg overflow-hidden'>
      <Privacy/>
      <ProtectIcon/>
      <ComputerIcon />
    </div>
  )
}

export default Index
