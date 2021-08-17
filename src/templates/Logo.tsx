import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '44' : '32';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      {/* {AppConfig.site_name} */}
      <span className={`text-primary-logo-red`}>ad</span>
      <span className={`text-primary-logo-blue`}>nonymous</span>
    </span>
  );
};

export { Logo };
