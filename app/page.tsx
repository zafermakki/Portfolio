import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen w-full" style={{ direction: 'ltr', textAlign: 'left' }}>
      <Header />
      <Hero />
      <div className="h-20"></div>
      <About />
      <div className="h-20"></div>
      <Skills />
      <div className="h-20"></div>
      <Projects />
      <div className="h-20"></div>
      <Contact />
      <div className="h-20"></div>
      <Footer />
    </main>
  );
}
