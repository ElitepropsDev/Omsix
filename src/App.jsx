import SelectedProjects from './components/SelectedProjects';
import Service from './components/Service';
import Proposition from './components/Proposition';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Pricing from './components/Pricing';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import CTASection from './components/Cta';

export default function App() {
  return (
    
      <>
      <Header/>
      <Hero />
      <Service />
      <Pricing />
      <Proposition />
      <SelectedProjects />
      <Process />
      <WhyUs />
      <CTASection />
      <Footer />
      
      </>
      
   
  );
}