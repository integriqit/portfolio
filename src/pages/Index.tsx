import About from '../components/About';
import Contact from '../components/Contact';
import Faq from '../components/Faq';
import Features from '../components/Features';
import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import ProcessWorkflow from '../components/ProcessWorkflow';
import SectorSolutions from '../components/SectorSolutions';
import Services from '../components/Services';
import SystemHealth from '../components/SystemHealth';
import Technology from '../components/Technology';

const Index = () => {
  return (
    <>
      <Hero />
      <OurServices />
      <Services />
      <SystemHealth />
      <SectorSolutions />
      <ProcessWorkflow />
      <Features />
      <Technology />
      <About />
      <Contact />
      <Faq />
    </>
  );
};

export default Index;
