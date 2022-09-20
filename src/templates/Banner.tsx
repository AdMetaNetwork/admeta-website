import { FC } from "react";
import Logo2Svg from "../svg/logo2";

type Prop = {
  handleGoLink: (url: string) => void
}

const Banner: FC<Prop> = ({ handleGoLink }) => {
  return (
    <div className="sm:pl-body-p sm:pr-body-p pr-8 pl-8">
      <div
        className="pr-8 pl-8 sm:pl-body-p sm:pr-body-p flex box-border items-center justify-between sm:"
        style={{
          height: '16.375rem', padding: '0 3.125rem', background: '#302682',
          borderRadius: '20px', marginBottom: '6.25rem'
        }}
      >
        <div
          className="w-full box-border flex items-start justify-start flex-col sm:flex-row sm:items-center"
        >
          <Logo2Svg />
          <div className="sm:ml-gap-w-3 w-full mt-2 ms:mt-0">
            <div className="text-base text-white font-bold mb-6 sm:text-25">Start now to discover ads in metaverse!</div>
            <div className="flex justify-start items-start w-full flex-col sm:flex-row sm:items-start">
              <div className="key-word">Trustworthy</div>
              <div className="mr-6 ml-6 w-px hidden sm:block" style={{ height: '1.125rem', background: 'rgba(255, 255, 255, 0.16)' }}></div>
              <div className="key-word mt-2 mb-2 sm:mt-0 sm:mb-0">Innovative</div>
              <div className="mr-6 ml-6 w-px hidden sm:block" style={{ height: '1.125rem', background: 'rgba(255, 255, 255, 0.16)' }}></div>
              <div className="key-word">Humanistic</div>
            </div>
          </div>
        </div>
        <div 
          className="bg-blue-100 pl-6 pr-6 pt-3.5 pb-3.5 text-white font-semibold rounded-full text-base	cursor-pointer hidden sm:block sm:w-48 sm:text-center"
          onClick={() => handleGoLink('https://app.admeta.network/')}
        >Start now</div>
      </div>
    </div>
  )
}

export default Banner;