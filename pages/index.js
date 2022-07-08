import Hero from 'components/home/Hero';
import Footer from 'components/common/Footer';
import Image from 'next/image';
import teamImage from 'assets/images/teampic.png'

export default function Home() {
  return (
    <>
      <Hero />
      <Footer />
      <div>
      <h1>Meet the Harper Team</h1>
      <Image src={teamImage} alt="30 plus person team in business attire smiling standing in a large formal event space in front of Nashville city backdrop" />;
      </div>
    </>
  )
}
