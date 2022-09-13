import { FC } from "react";
import AdvantageItem1Svg from "../svg/advantage-item-1";
import AdvantageItem2Svg from "../svg/advantage-item-2";
import AdvantageItem3Svg from "../svg/advantage-item-3";

const Advantage: FC = () => {
  return (
    <div
      className="pl-body-p pr-body-p box-border grid gap-4 grid-cols-2 gap-x-gap-w gap-y-gap-w"
      style={{ marginBottom: '4.75rem' }}
    >
      <div className="advantage-item flex items-center">
        <AdvantageItem1Svg />
        <div className="flex items-start flex-col ml-6">
          <div className="text-2xl font-bold text-gray-1100 mb-2">Privacy Preserving</div>
          <div className="text-sm font-normal" style={{ color: 'rgba(230, 231, 240, 0.7)' }}>Users' private data is fully protected and under their own control</div>
        </div>
      </div>
      <div className="advantage-item flex items-center">
        <AdvantageItem2Svg />
        <div className="flex items-start flex-col ml-6">
          <div className="text-2xl font-bold text-gray-1100 mb-2">Precise Targeting</div>
          <div className="text-sm font-normal" style={{ color: 'rgba(230, 231, 240, 0.7)' }}>Zero-knowledge proof ensures precise target audience matching</div>
        </div>
      </div>
      <div className="advantage-item flex items-center">
        <AdvantageItem3Svg />
        <div className="flex items-start flex-col ml-6">
          <div className="text-2xl font-bold text-gray-1100 mb-2">User-centered</div>
          <div className="text-sm font-normal" style={{ color: 'rgba(230, 231, 240, 0.7)' }}>Users can turn off all ads at any time. This is completely free of choice</div>
        </div>
      </div>
      <div className="advantage-item flex items-center">
        <div className="item-icon"></div>
        <div className="flex items-start flex-col ml-6">
          <div className="text-2xl font-bold text-gray-1100 mb-2">Decentralized Governance</div>
          <div className="text-sm font-normal" style={{ color: 'rgba(230, 231, 240, 0.7)' }}>Democratic evaluation of advertisers to improve the quality of advertising</div>
        </div>
      </div>
    </div>
  )
}

export default Advantage;