import Nav from 'components/common/Nav';
import Hero from 'components/home/Hero';
import Contact from 'components/common/Contact';
import ValueServices from 'components/home/ValueServices';
import ClickApproval from 'components/common/ClickApproval';
import CTA from 'components/home/CTA';
import Footer from 'components/common/Footer';
import Advocacy from 'components/common/Advocacy';
import Image from 'next/image';
import teamImage from 'assets/images/teampic.png'
import Chatbot from 'components/common/Chatbot';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />

      <CTA />
      <ValueServices />
      <Advocacy />
      {/* <ClickApproval /> */}
      <Contact />

      {/* <ClickApproval />
      <CTA />
      <Advocacy /> */}

      <Footer />
      <Chatbot />
    </>
  )
}
