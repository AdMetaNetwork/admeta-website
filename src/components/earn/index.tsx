import { FC } from 'react'
import SurfEarn from "./surf-earn";
import ProjectShow from "../ui/project-show";

const Index: FC = () => {
  return (
    <div className='relative w-full px-space-100 box-border mb-space-100 py-40 bg-black-c200 overflow-hidden mb-0'>
      <SurfEarn/>
      <ProjectShow />
    </div>
  )
}

export default Index
