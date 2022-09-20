import { FC } from "react";
import YoutobeSvg from "../svg/youtube";
import DiscordSvg from "../svg/discord";
import TwitterSvg from "../svg/twitter";
import TelegramSvg from "../svg/telegram";

type Prop = {
  handleGoLink: (url: string) => void
}

const Footer: FC<Prop> = ({ handleGoLink }) => {
  return (
    <div className="sm:pl-body-p sm:pr-body-p sm:pl-8 sm:pr-8">
      <div
        className="flex items-center justify-between flex-col h-32 pt-5 pb-5 sm:flex-row sm:h-gap-w-4"
        style={{ borderTop: '1px solid #2B2931' }}
      >
        <div className="font-medium" style={{ fontSize: '0.813rem', color: '#A7A4AF' }}>© Copyright 2022 AdMeta.</div>
        <div className="flex items-center justify-start">
          <div
            className="text-white font-medium cursor-pointer"
            style={{ fontSize: '0.813rem' }}
            onClick={() => { }}
          >About</div>
          <div
            className="ml-4 mr-4 text-white font-medium cursor-pointer"
            style={{ fontSize: '0.813rem' }}
            onClick={() => handleGoLink('https://docs.admeta.network/')}
          >Docs</div>
          <div
            className="text-white font-medium cursor-pointer"
            style={{ fontSize: '0.813rem' }}
            onClick={() => handleGoLink('https://github.com/AdMetaNetwork')}
          >Github</div>
        </div>
        <div className="flex items-center justify-end">
          <div
            className="cursor-pointer"
            onClick={() => handleGoLink('https://discord.gg/TSSVZZVAM2')}
          >
            <DiscordSvg />
          </div>
          <div
            className="ml-4 cursor-pointer"
            onClick={() => handleGoLink('https://twitter.com/AdMetaNetwork')}
          >
            <TwitterSvg />
          </div>
          <div
            className="ml-4 mr-4 cursor-pointer"
            onClick={() => handleGoLink('https://t.me/admetanetwork')}
          >
            <TelegramSvg />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => handleGoLink('https://www.youtube.com/channel/UCWzB-7tKPKWtmT0mBYO_tGA')}
          >
            <YoutobeSvg />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;