import { FC } from "react";
import LogoSvg from "../svg/logo";

type Prop = {
  handleGoLink: (url: string) => void
}

const Header: FC<Prop> = ({ handleGoLink }) => {
  return (
    <div className="h-nav bg-black-100 pl-body-p pr-body-p flex box-border items-center justify-between">
      <LogoSvg />
      <div
        className="bg-blue-100 pl-6 pr-6 pt-3.5 pb-3.5 text-white font-semibold rounded-full text-base	cursor-pointer"
        onClick={() => handleGoLink('https://app.admeta.network/')}
      >Start now</div>
    </div>
  )
}

export default Header;