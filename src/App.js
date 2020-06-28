//Created By Alex Setia
//June 27, 2020
//My Personal Portfolio

import React from 'react';
import Navigation from './Components/Navigation';
import Card from './Components/Card'
import './App.css';


function App() {
  return (
    <div className="App">
            <Navigation></Navigation>
      <header className="App-header">
        <p className='cards'>
          <Card></Card> <Card></Card>
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
