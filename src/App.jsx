/* eslint-disable no-unused-vars */
import './App.css';
import { Banner } from './components/Banner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import {handleContactScroll} from './helpers/handleContactScroll';
import {handleContactScrollResponsive} from './helpers/handleContactScroll';


function App() {

  return (
    <div className='App'>
        <NavBar 
        handleContactScroll={handleContactScroll} 
        handleContactScrollResponsive={handleContactScrollResponsive} 
        />
        <Banner handleContactScroll={handleContactScroll}/>
        <Skills />
        <Contact />
        <Footer />
    </div>
  )
}

export default App;
