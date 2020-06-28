import React from "react";
import "./Card.css";


export default function Card() {
    return (
        <div className='Container'> 
            <img src="https://raw.githubusercontent.com/alextheprogrammer21/Re-Mind/master/images/1.PNG" />
            <div className='Project'>
                <header>
                    <h1>Devware</h1>
                </header>
                <p>People make software to sell to you. People make freeware to give away to you. There is also a vast sea of open source projects hidden to the average user that developers make for various reasons. I call these devwares.
                Devware allows users to search for and download devware applications for free.
                </p>
                <h6><a href="url">Visit Site</a></h6>
                <h6><a href="url">Source Code</a></h6>
            </div>
        </div>
    )
}