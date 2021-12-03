// import Image from 'next/image';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      {/* <svg
        className="text-primary-500 stroke-current mr-1"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M0 0h24v24H0z" stroke="none" />
        <rect x="3" y="12" width="6" height="8" rx="1" />
        <rect x="9" y="8" width="6" height="12" rx="1" />
        <rect x="15" y="4" width="6" height="16" rx="1" />
        <path d="M4 20h14" />
      </svg> */}

      {/* {AppConfig.site_name} */}
      {
        <svg width="31.6" height="22.9" viewBox="0 0 316 229" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="81.7206" y="30.6232" width="55" height="159.176" transform="rotate(25 81.7206 30.6232)" fill="#0CCCCC"/>
          <ellipse cx="39.1206" cy="187.05" rx="27.5" ry="32.9122" transform="rotate(25 39.1206 187.05)" fill="#0CCCCC"/>
          <ellipse cx="106.391" cy="42.7875" rx="27.5" ry="32.9122" transform="rotate(25 106.391 42.7875)" fill="#0CCCCC"/>
          <rect x="86.6564" y="53.5303" width="55" height="159.176" transform="rotate(-25 86.6564 53.5303)" fill="#32587E"/>
          <ellipse cx="179.103" cy="186.713" rx="27.5" ry="32.9122" transform="rotate(-25 179.103 186.713)" fill="#32587E"/>
          <ellipse cx="111.833" cy="42.4506" rx="27.5" ry="32.9122" transform="rotate(-25 111.833 42.4506)" fill="#32587E"/>
          <rect x="184.656" y="52.5303" width="55" height="159.176" transform="rotate(-25 184.656 52.5303)" fill="#0CCCCC"/>
          <ellipse cx="277.103" cy="185.713" rx="27.5" ry="32.9122" transform="rotate(-25 277.103 185.713)" fill="#0CCCCC"/>
          <ellipse cx="209.833" cy="41.4506" rx="27.5" ry="32.9122" transform="rotate(-25 209.833 41.4506)" fill="#0CCCCC"/>
        </svg>
      }

      <h1 className="text-logo-blue">AdMeta</h1>
    </span>
  );
};

export { Logo };
