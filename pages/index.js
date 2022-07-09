import Hero from 'components/home/Hero';
import CTA from 'components/home/CTA';
import Footer from 'components/common/Footer';
import Advocacy from 'components/home/Advocacy';
import Image from 'next/image';
import teamImage from 'assets/images/teampic.png'

export default function Home() {
  return (
    <>
      <Hero />
      <CTA />
      <Advocacy />
      <div className="flex flex-col">
      <h1 className="text-4xl text-center mt-8">Meet the Harper Team</h1>
      <div className="flex basis-auto justify-center md">
        <div className="mt-8">
          <Image src={teamImage} alt="30 plus person team in business attire smiling standing in a large formal event space in front of Nashville city backdrop" />
        </div>
      </div>
      </div>
      <Footer />
    </>
  )
}
