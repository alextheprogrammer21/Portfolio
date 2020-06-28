import React from "react";
import "./Card.css";


export default function Card(props) {
    return (
        <div className='Container'> 
            <img src={props.img} />
            <div className='Project'>
                <header>
                    <h1>{props.name}</h1>
                </header>
                <p> {props.description} </p>
                <h6><a href={props.url} target="_blank">Visit Site</a></h6>
                <h6><a href={props.sourceCode} target="_blank">Source Code</a></h6>
            </div>
        </div>
    )
}