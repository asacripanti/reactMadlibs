import React from "react"

export default function Madlib({formData}){
    const { color, firstNoun, adjective, secondNoun } = formData;
    return(
        <h1 className="madlibMessage">There was a {color} {firstNoun} who loved a {adjective} {secondNoun}</h1>
    )
}