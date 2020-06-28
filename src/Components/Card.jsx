import React from "react";
import "./Card.css";


export default function Card(props) {
    return (
        <div className='Container'> 
            <img src="https://raw.githubusercontent.com/alextheprogrammer21/Re-Mind/master/images/1.PNG" />
            <div className='Project'>
                <header>
                    <h1>{props.name}</h1>
                </header>
                <p> {props.description} </p>
                <h6><a href={props.url}>Visit Site</a></h6>
                <h6><a href={props.sourceCode}>Source Code</a></h6>
            </div>
        </div>
    )
}