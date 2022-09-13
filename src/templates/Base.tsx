import { FC } from "react";
import Meta from './Meta';
import { AppConfig } from '../utils/AppConfig';
import Footer from './Footer';
import Header from './Header';
import Slogan from './Slogan';
import Advantage from './Advantage';
import Banner from './Banner';
import { useRouter } from "next/router";

const Base: FC = () => {

  const router = useRouter()

  const goLink = (url: string) => {
    router.push(url)
  }

  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header
        handleGoLink={goLink}
      />
      <Slogan
        handleGoLink={goLink}
      />
      <Advantage />
      <Banner
        handleGoLink={goLink}
      />
      <Footer 
        handleGoLink={goLink}
      />
    </div>
  )

}

export { Base };
