import React from 'react'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { data } from '../App';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/Form.css'
function Form() {
    const [details,setdetails] = useContext(data)
    const navigate = useNavigate()
    const [email,setEmail] = useState('')
    const [psw,setPsw] = useState('')

    const submitHandler = () => {
      try{
        fetch("http://localhost:4000/login", {
            method: "POST", 
            headers: {
                'Access-Control-Allow-Origin':true,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email:email,
                password:psw,
            })
        })
        .then((res)=>{
            return res.json()
        })
        .then(async (res)=>{ 
            if(res.login){
              await setdetails({username:res.username})
              navigate('/home')
            }
            else{
              toast.error(`${res.message}`, {
                position: toast.POSITION.TOP_RIGHT,
            });
            }
        })
    }
    catch(err){
        console.log(err)
    }
    }
  return (
    <div className='backform'>
    <div className='formbody' >
      <div className='forminput'>
        <label>Email: </label><br></br>
        <input class="rounded text-500"  type="text" id="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your username'/><br></br>

        <label>Password: </label><br></br>
        <input class="rounded text-500" type="password" id="psw" name="psw"  placeholder='Enter your password' onChange={(e)=>{setPsw(e.target.value)}}/><br></br>
      </div>

        <button type='submit' onClick={submitHandler} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-fulld">Login</button><br></br>
        <Link className="loginlink" to='/resetpsw'><p>Forgotten password?</p></Link>
        <Link  className="loginlink" to='/signup'><button>Create new account</button></Link>

    </div>
    </div>
  )
}

export default Form