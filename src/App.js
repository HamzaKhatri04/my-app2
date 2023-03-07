
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';

import {
 
  Routes,
  Route,
  // Link,
  // useRouteMatch,
  // useParams
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#343a40" //"#212529" 
      showAlert("Dark mode has been enable", "success")
      document.title = "TextUtils - DarkMode"

      // setInterval(() => {
      // document.title = "Hamza is Amazing" 

      // }, 2000);
      // setInterval(() => {
      // document.title = "Install TextUtils"

      // }, 1500);
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enable", "success")
      document.title = "TextUtils - LightMode"
    }

  }


  return (
    <>
      {/* <Navbar title="Hamza" abouttext="About Hamza" /> */}
      {/* <Navbar /> */}
        <Navbar title="Hamza" mode={mode} toggleMode={toggleMode} />

        <Alert alert={alert} />

      
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About />}/>

            <Route exact path="/" element={<TextForm heading="Enter the text to analays" mode={mode} showAlert={showAlert} />}> </Route>
          </Routes>
          {/* <TextForm heading="Enter the text to analays" mode={mode} showAlert={showAlert} /> */}
        </div>
{/*       
      <div className="container my-5">

        <About />
      </div> */}

    </>
  );
}

export default App;
