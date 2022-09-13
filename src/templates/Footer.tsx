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
    <div className="pl-body-p pr-body-p">
      <div className="flex items-center justify-between" style={{ borderTop: '1px solid #2B2931', height: '5.5rem' }}>
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
            onClick={() => handleGoLink('https://web.telegram.org/k/#@admetanetwork')}
          >
            <TelegramSvg />
          </div>
          <div
            className="cursor-pointer"
            onClick={() => handleGoLink('https://www.youtube.com/')}
          >
            <YoutobeSvg />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;