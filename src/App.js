import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/contact/Contact';
import Hero from './Components/hero/Hero';
import Parallax from './Components/parallax/Parallax';
import Portfolio from './Components/portfolio/Portfolio';
import Services from './Components/services/Services';

function App() {
  return (
    <div className="App">
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>

      <section>
        <Parallax type="services" />
      </section>

      <section id='About'>
        <Services />
      </section>

      <section>
        <Parallax type="portfolio" />
      </section>

        <Portfolio />


      <section id='Contact'>
        <Contact />
      </section>
    </div>
  );
}

export default App;
