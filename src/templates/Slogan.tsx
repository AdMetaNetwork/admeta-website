import { FC } from "react";

type Prop = {
  handleGoLink: (url: string) => void
}

const Slogan: FC<Prop> = ({ handleGoLink }) => {
  return (
    <div className="relative bg-black-100 pl-body-p pr-body-p box-border" style={{ paddingTop: '6.5rem', paddingBottom: '10rem' }}>
      <div className="text-base font-bold text-gray-1000 mb-3">ADMETA ADS</div>
      <div className="relative z-10 text-7xl text-gray-1100 font-base" style={{ lineHeight: '4.125rem' }}>A privacy-preserving <br /> advertising Platform tailored for</div>
      <div className="flex items-center justify-left">
        <div className="linear-btn">Web3</div>
        <div className="ml-5 mr-5 text-gray-1100" style={{ fontSize: '3.5rem' }}>&</div>
        <div className="linear-btn">Metaverse</div>
      </div>
      <div className="text-gray-1100 mt-5 mb-20">Customized ads service without compromising user privacy</div>
      <div 
        className="bg-blue-100 pl-6 pr-6 pt-3.5 pb-3.5 text-white font-semibold rounded-full text-base	inline-block cursor-pointer"
        onClick={() => handleGoLink('https://app.admeta.network/')}
      >Start now</div>
      <div className="s-bg"></div>
    </div>
  )
}

export default Slogan;