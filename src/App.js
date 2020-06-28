//Created By Alex Setia
//June 27, 2020
//My Personal Portfolio

import React from 'react';
import Navigation from './Components/Navigation';
import Card from './Components/Card'
import './App.css';

const projects = [
  {id: 1, name: 'Devware', url: 'https://alextheprogrammer21.github.io/Devware/', sourceCode: 'https://github.com/alextheprogrammer21/Devware', description: 'People make software to sell to you. People make freeware to give away to you. There is also a vast sea of open source projects hidden to the average user that developers make for various reasons. I call these devwares. Devware allows users to search for and download devware applications for free.', img: "https://raw.githubusercontent.com/alextheprogrammer21/Re-Mind/master/images/1.PNG"}
]
function App() {

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

  return (
    <div className="App">
            <Navigation></Navigation>
      <header className="App-header">
        <p className='cards'>
          { listOfProjects }
        </p>
      </header>
      <footer>
  <p>Made by Abhi Setia </p>
  <p>Contact: <a href="mailto:abhisetia0@gmail.com.com">abhisetia0@gmail.com</a></p>
</footer>
    </div>
  );
}

export default App;
