import { useState } from "react"
import React  from 'react'


export default function TextForm(props) {
  const [text,setText] = useState("")
  const handleUpClick= () =>{
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleLowClick= () =>{
    let newText = text.toLowerCase();
    setText(newText)
  }
  const handleClear= () =>{
    let newText = ""
    setText(newText)
  }
  const handleOnChange= (event) =>{
    setText(event.target.value)
  }
  return (
    <>
    <div className="container">   
        <div className="container">
<div className="mb-3">
  <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
  <textarea className="form-control" value = {text} onChange= {handleOnChange} id="myBox" rows="5"></textarea>
</div>
<button className="btn btn-dark mx-2" onClick={handleUpClick}>Uppercasae</button>
<button className="btn btn-dark mx-2" onClick={handleLowClick}>Lowercase</button>
<button className="btn btn-dark mx-2" onClick={handleClear}>Clear</button>
</div>
<div className="container my-4">
  <h2>Your Text Summary</h2>
  <p>{text.trim().split(" ").length} Words {text.trim().length} Characters</p>
  <p>Reading time {text.trim().split(" ").length*0.08} Minutes</p>
 <h2>Preview</h2>
 <p>{text}</p>
</div>
    </div>
    </>
  )
}



