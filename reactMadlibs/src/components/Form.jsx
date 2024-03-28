import React from "react"
import Madlib from "./Madlib"

export default function Form(){
    const [showMadlib, setMadlib] = React.useState(false)
    const [formData, setFormData] = React.useState(
        {
            firstNoun: "",
            secondNoun: "",
            adjective: "",
            color: ""
        }
    )

    function handleChange(event){
        const {name, value} = event.target
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [name]: value
            }
        })
    }

    function toggle(event){
        event.preventDefault();
        setMadlib(prevData => !prevData)
    }
    return(
        <div className="appShell">
            <form className="madlibsForm">
                <input
                    type="text"
                    name="firstNoun"
                    placeholder="noun"
                    className="firstNounInput"
                    value={formData.firstNoun}
                    onChange={handleChange}
                />

                <input
                    type="text" 
                    name="secondNoun"
                    placeholder="noun 2"
                    className="secondNounInput"
                    value={formData.secondNoun}
                    onChange={handleChange}
                />

                <input 
                    type="text" 
                    name="adjective"
                    placeholder="adjective"
                    className="adjectveInput"
                    value={formData.adjective}
                    onChange={handleChange}
                />

                <input 
                    type="text" 
                    name="color"
                    placeholder="color"
                    className="colorInput"
                    value={formData.color}
                    onChange={handleChange}
                />
                <button className="formButton" onClick={toggle}>Get Story</button>
            </form>
            {showMadlib && <div className="madlibShell">
                <Madlib formData={formData} />
            </div>}
        </div>
    )
}