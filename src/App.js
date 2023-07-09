import './App.css';
import Login from './pages/Login.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome.jsx'
import SignUp from './pages/SignUp.jsx'
import Reset from './pages/Reset';
import { createContext } from 'react';
import { useState } from 'react';
import Code from './pages/Code';
import Change from './pages/Change';


const data = createContext()
function App() {
  const [details,setdetails] = useState({})
  return (
    <div className='backdiv'>
    <div className='bodypage'>
    <data.Provider value={[details,setdetails]}>
    <BrowserRouter>
      <Routes>
          <Route path = '/' element={<Login/>}/>
          <Route path = '/home' element={<Welcome/>}/>
          <Route path = '/signup' element={<SignUp/>}/>
          <Route path = '/resetpsw' element={<Reset/>}/>
          <Route path = '/resetpsw/:username' element={<Code/>}/>
          <Route path = '/cnfmpsw/:username' element={<Change/>}/>

      </Routes>
    </BrowserRouter>
    </data.Provider>
    </div>
    </div>

  );
}

export default App;
export {data};
