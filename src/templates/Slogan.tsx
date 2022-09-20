import { FC } from "react";

type Prop = {
  handleGoLink: (url: string) => void
}

const Slogan: FC<Prop> = ({ handleGoLink }) => {
  return (
    <div
      className="relative bg-black-100 pl-8 pr-8 box-border sm:pl-body-p sm:pr-body-p"
      style={{ paddingTop: '6.5rem', paddingBottom: '10rem' }}>
      <div className="text-base font-bold text-gray-1000 mb-3">ADMETA ADS</div>
      <div
        className="relative z-10 text-xl text-gray-1100 font-base leading-8 font-semibold sm:text-7xl sm:leading-t-line-h"
      >A privacy-preserving <br /> advertising Platform tailored for</div>
      <div className="flex items-center justify-left">
        <div className="linear-btn">Web3 & Metaverse</div>
      </div>
      <div className="text-gray-1100 mt-5 mb-20 relative z-10">Customized ads service without compromising user privacy</div>
      <div
        className="bg-blue-100 pl-6 pr-6 pt-3.5 pb-3.5 text-white font-semibold rounded-full text-base inline-block cursor-pointer relative z-10 text-center w-full sm:w-auto "
        onClick={() => handleGoLink('https://app.admeta.network/')}
      >Start now</div>
      <div className="s-bg"></div>
    </div>
  )
}

export default Slogan;
