import { FC } from "react";
import Logo2Svg from "../svg/logo2";

type Prop = {
  handleGoLink: (url: string) => void
}

const Banner: FC<Prop> = ({ handleGoLink }) => {
  return (
    <div className="pl-body-p pr-body-p">
      <div
        className="pl-body-p pr-body-p flex box-border items-center justify-between"
        style={{
          height: '16.375rem', padding: '0 3.125rem', background: '#302682',
          borderRadius: '20px', marginBottom: '6.25rem'
        }}
      >
        <div
          className="box-border flex items-start justify-start"
        >
          <Logo2Svg />
          <div
            style={{ marginLeft: '3.125rem' }}
          >
            <div className="text-25 text-white font-bold mb-6">Start now to discover ads in metaverse!</div>
            <div className="flex justify-start items-center">
              <div className="key-word">Trustworthy</div>
              <div className="mr-6 ml-6 w-px" style={{ height: '1.125rem', background: 'rgba(255, 255, 255, 0.16)' }}></div>
              <div className="key-word">Innovative</div>
              <div className="mr-6 ml-6 w-px" style={{ height: '1.125rem', background: 'rgba(255, 255, 255, 0.16)' }}></div>
              <div className="key-word">Humanistic</div>
            </div>
          </div>
        </div>
        <div 
          className="bg-blue-100 pl-6 pr-6 pt-3.5 pb-3.5 text-white font-semibold rounded-full text-base	cursor-pointer"
          onClick={() => handleGoLink('https://app.admeta.network/')}
        >Start now</div>
      </div>
    </div>
  )
}

export default Banner;