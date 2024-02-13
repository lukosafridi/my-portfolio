import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/contact/Contact';
import Hero from './Components/hero/Hero';
import Parallax from './Components/parallax/Parallax';
import Portfolio from './Components/portfolio/Portfolio';
import Services from './Components/services/Services';

function App() {
  return (
    <BrowserRouter>
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

        <section >
          <Parallax type="portfolio" />
        </section>


        <Portfolio id='Portfolio' />


        <section id='Contact'>
          <Contact />
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
