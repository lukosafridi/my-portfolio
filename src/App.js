import { BrowserRouter } from 'react-router-dom';
import './App.scss';
// import Navbar from './Components/Navbar/Navbar';
// import Contact from './Components/contact/Contact';
// import Hero from './Components/hero/Hero';
// import Parallax from './Components/parallax/Parallax';
// import Portfolio from './Components/portfolio/Portfolio';
// import Services from './Components/services/Services';
import Dndani from './Components/Dnd_home/Dndani';
import Dndheader from './Components/dndheader/Dndheader';

function App() {
  return (
    <BrowserRouter>
    
    <div className='main-body'>
      <div className='main-header'>
        <Dndheader/>
      </div>
      <div className='home'>
        <Dndani/>
      </div>
    </div>
    </BrowserRouter>
    // <BrowserRouter>
    //   <div className="App">
    //     <section id='Home'>
    //       <Navbar />
    //       <Hero />
    //     </section>

    //     <section>
    //       <Parallax type="services" />
    //     </section>

    //     <section id='About'>
    //       <Services />
    //     </section>

    //     <section >
    //       <Parallax type="portfolio" />
    //     </section>


    //     <Portfolio />


    //     <section id='Contact'>
    //       <Contact />
    //     </section>
    //   </div>
    // </BrowserRouter>
  );
}

export default App;
