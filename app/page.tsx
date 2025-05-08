import Image from "next/image";

import Hero from  '@/components/Hero';
import Experience from '@/components/Experience';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import Navigator from '@/components/Navigator';
import Contact from '@/components/Contact';
export default function Home() {
  return (
    <div>
      <div className="wrapper" >
      <Navigator />
      <Hero/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer />
      </div>
    </div>
  );
}
