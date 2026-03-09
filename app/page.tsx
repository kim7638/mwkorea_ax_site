import Header from './components/Header';
import Hero from './components/Hero';
import CaseStudiesSection from './components/CaseStudiesSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CaseStudiesSection />
      </main>
      <Footer />
    </>
  );
}
