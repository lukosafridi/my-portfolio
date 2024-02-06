import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/hero/Hero';
import Parallax from './Components/parallax/Parallax';
import Services from './Components/services/Services';

function App() {
  return (
    <div className="App">
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>

      <section>
        <Parallax type="services"  />
      </section>

      <section id='services'>
        <Services/>
      </section>

      <section>
        <Parallax type="portfolio" />
      </section>

      <section id='portfolio'>
        portfolio
      </section>

      <section id='Contact'>

      </section>
    </div>
  );
}

export default App;
