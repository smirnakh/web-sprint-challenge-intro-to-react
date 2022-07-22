// Write your Character component here
import React from 'react'

export default function Character(props){

    return(
        <div className="character">
          <h1>{props.name}</h1>
          <p>height: {props.height}</p>
          <p>hair color: {props.hairColor}</p>
          <p>eye color: blue</p>
          <p>birth year: 19BBY</p>
          <p>gender: male</p>
       </div>
    )
}

// name: "Luke Skywalker",
//     height: "172",
//     mass: "77",
//     hair_color: "blond",
//     skin_color: "fair",
//     eye_color: "blue",
//     birth_year: "19BBY",
//     gender: "male",