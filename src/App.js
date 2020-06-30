//Created By Alex Setia
//June 27, 2020
//My Personal Portfolio

import React from 'react';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Card from './Components/Card'
import About from './Components/About';
import Contact from './Components/Contact';
import './App.css';

const projects = [
  {id: 3, name: 'Interview Scheduler', url: 'https://alextheprogrammer21.github.io/Interview-Scheduler/', sourceCode: 'https://github.com/alextheprogrammer21/Interview-Scheduler', description: 'A scheduler that allows users to set up, edit, or delete appointments.', img: "https://raw.githubusercontent.com/alextheprogrammer21/Interview-Scheduler/master/public/images/Screenshot0.png"},
  {id: 1, name: 'Devware', url: 'https://alextheprogrammer21.github.io/Devware/', sourceCode: 'https://github.com/alextheprogrammer21/Devware', description: 'People make software to sell to you. People make freeware to give away to you. There is also a vast sea of open source projects hidden to the average user that developers make for various reasons. I call these devwares. Devware allows users to search for and download devware applications for free.', img: "https://raw.githubusercontent.com/alextheprogrammer21/Devware/master/src/images/1.PNG"},
  {id: 2, name: 'Re:Mind', url: 'https://alextheprogrammer21.github.io/Re-Mind/', sourceCode: 'https://github.com/alextheprogrammer21/Re-Mind', description: 'A wellness app for habit tracking.', img: "https://raw.githubusercontent.com/alextheprogrammer21/Re-Mind/master/images/1.PNG"},
  {id: 4, name: 'Food-Pickup', url: 'https://github.com/alextheprogrammer21/food-pickup', sourceCode: 'https://github.com/alextheprogrammer21/food-pickup', description: 'An application that allows users to order food items for a specific restaurant online and receive a text when their order is confirmed and ready.', img: "https://raw.githubusercontent.com/alextheprogrammer21/food-pickup/master/Screen%20Shot%202020-06-29%20at%204.37.55%20PM.png"}

]

function App() {

  let [page, setPage] = React.useState('portfolio');
  let [portfolioBool, setPortfolioBool] = React.useState(true);
  let [aboutBool, setAboutBool] = React.useState(false);
  let [contactBool, setContactBool] = React.useState(false);

  const listOfProjects = projects.map((project) => {
    return (
      <Card
        name={project.name}
        url={project.url}
        sourceCode={project.sourceCode}
        img={project.img}
        description={project.description}
      />
    );
  });

  function handlePageChange(pageChange) {

    setAboutBool(false)
    setContactBool(false)
    setPortfolioBool(false)

    if (pageChange === 'portfolio') {
      setPortfolioBool(true)
    } else if (pageChange === 'about') {
      setAboutBool(true)
    } else if (pageChange === 'contact') {
      setContactBool(true)
    }
    setPage(pageChange);
  }

  return (
    <div className="App">
            <Navigation
            onClick={handlePageChange}
            ></Navigation>
      <header className="App-header">
        <p className='cards'>
        {portfolioBool ? listOfProjects : <div> </div>}
        {aboutBool ? <About></About> : <div> </div>}
        {contactBool ? <Contact></Contact> : <div> </div>}
        </p>
      </header>
      <Footer></Footer>
      {/* <footer>
  <p>© 2020. Made by Abhi Setia</p>
  <p>Contact: <a href="mailto:abhisetia0@gmail.com">abhisetia0@gmail.com</a></p>
</footer> */}
    </div>
  );
}

export default App;
