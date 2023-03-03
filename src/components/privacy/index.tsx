import { FC } from 'react'
import Privacy from "./privacy";
import ProtectIcon from "../ui/protect-icon";

const Index: FC = () => {
  return (
    <div className='relative w-full px-space-100 box-border py-40 liner-bg overflow-hidden'>
      <Privacy/>
      <ProtectIcon/>
    </div>
  )
}

export default Index
