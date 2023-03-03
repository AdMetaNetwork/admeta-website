import type { NextPage } from 'next';
import Base from '../components/common/base';
import Slogan from "../components/slogan";
import Support from "../components/support";
import Earn from '../components/earn'
import Header from "../components/common/header";
import Privacy from "../components/privacy";
import Banner from "../components/banner";
import Footer from "../components/common/footer";

const Home: NextPage = () => {
  return (
    <Base>
      <Header/>
      <Slogan/>
      <Support/>
      <Earn/>
      <Privacy/>
      <Banner />
      <Footer />
    </Base>
  )
}

export default Home;
