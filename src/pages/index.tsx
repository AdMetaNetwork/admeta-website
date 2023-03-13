import type { NextPage } from 'next';
import Base from '../components/common/base';
import Slogan from "../components/slogan";
import Support from "../components/support";
import Earn from '../components/earn'
import Header from "../components/common/header";
import Privacy from "../components/privacy";
import Banner from "../components/banner";
import Footer from "../components/common/footer";
import MobileNav from '../components/ui/mobile-nav'
import Modal from "../components/ui/modal";
import { useState } from "react";

const Home: NextPage = () => {

  const [showNav, setShowNav] = useState(false)
  const [showTip, setShowTip] = useState(false)

  return (
    <Base>
      <Header openNav={() => {
        let bodyStyle = document.body.style
        bodyStyle.height = '100vh'
        bodyStyle.overflowY = 'hidden'
        setShowNav(true);
      }}/>
      <Slogan
        openTip={() => {
          setShowTip(true)
          const timer = setTimeout(() => {
            setShowTip(false)
            clearTimeout(timer)
          }, 3000)
        }}
      />
      <Support/>
      <Earn/>
      <Privacy/>
      <Banner
        openTip={() => {
          setShowTip(true)
          const timer = setTimeout(() => {
            setShowTip(false)
            clearTimeout(timer)
          }, 3000)
        }}
      />
      <Footer/>
      {
        showNav
        &&
          <MobileNav
              closeNav={() => {
                let bodyStyle = document.body.style
                bodyStyle.height = '100%'
                bodyStyle.overflowY = 'auto'
                setShowNav(false)
              }}
          />
      }
      {
        showTip
        &&
          <Modal
              label={'Please switch to a desktop browser to experience our Testnet.'}
          />
      }

    </Base>
  )
}

export default Home;
