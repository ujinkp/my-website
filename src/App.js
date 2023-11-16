import React from 'react';
import Navbar from './components/NavBar/navbar';
import About from './components/About/about';
import Work from './components/Work/work';
import Education from './components/Education/education';
import Skills from './components/Skills/skills';
import Contacts from './components/Contacts/contacts';
import Footer from './components/Footer/footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/> 
      <Work/> 
      <Education/>
      <Skills/>
      <Contacts/>
      <Footer/>
    </div>
  ); 
}

export default App;
