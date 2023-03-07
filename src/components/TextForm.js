import React, { useState } from 'react'



export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked " + text)
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase!", "success")
    }
    const handleDownClick = () => {
        // console.log("Lowercase was clicked " + text)
        let newText = text.toLocaleLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success")
    }
    const handleClearClick = () => {
        // console.log("Lowercase was clicked " + text)
        let newText = ""
        setText(newText)
    }
    const handleonchange = (event) => {
        // console.log("On Change")
        setText(event.target.value)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text)
        window.speechSynthesis.speak(msg)
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === speak) {
            toogle.innerHTML = "stop"
        }
        else {
            toogle.innerHTML = "speak"
            if (toogle.innerHTML === "speak") {
                window.speechSynthesis.cancel()
            }
        }
    }
    const handleCopy = () => {
        // console.log("Copy text")
        let text = document.getElementById("myBox")
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copy to Clipboard!", "success")
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))

    }
    const [text, setText] = useState("");
    // setText("New text")
    return (
        <>
            <div className="container"  style={{color:props.mode==="dark"? 'white':"black"}}>

                <h1>{props.heading} </h1>
                <div className="mb-3" >

                    <textarea className="form-control " value={text} onChange={handleonchange} id="myBox" style={{backgroundColor:props.mode==="light"? 'white':"#343a40",color:props.mode==="dark"? 'white':"black"}} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1 " onClick={handleDownClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
                <button className="btn btn-primary mx-1" onClick={speak}> speak Text </button>
                <button className="btn btn-primary mx-1" onClick={handleCopy}> Copy Text </button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}> Remove Extra Spaces </button>

            </div>
            <div className="container my-3"  style={{color:props.mode==="dark"? 'white':"black"}}>
                <h2>Your Text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Average Minutes to read</p>
            </div>
            <div className="container" style={{color:props.mode==="dark"? 'white':"black"}}>
                <h3>Preview</h3>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>

        </>
    )
}
