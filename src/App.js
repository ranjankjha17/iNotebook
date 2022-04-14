import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Login from './components/Login';
import Signup from './components/Signup';
import { useState } from 'react';
import Alert from './components/Alert';
function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>   
     <NoteState>
        <BrowserRouter>
          <Navbar/>
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/" showAlert={showAlert} element={<Home/>}/>      
              <Route exact path="/about" element={<About/>} />
              <Route exact path="/login"  showAlert={showAlert} element={<Login/>}/>
              <Route exact path="/signup" showAlert={showAlert} element={<Signup/>}/>
            </Routes>
        </div>
      </BrowserRouter>
  </NoteState>
    </>
  );
}

export default App;
