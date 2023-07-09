import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/NewUser.css'
function NewUser() {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [psw,setPsw] = useState('')

    const submitHandler = () => {
        try{
            fetch("http://localhost:4000/createuser", {
                method: "POST", 
                headers: {
                    'Access-Control-Allow-Origin':true,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username:username,
                    email:email,
                    password:psw,
                })
            })
            .then((res)=>{
                return res.json()
            })
            .then((res)=>{ 
                if(res.message != undefined){
                    
                    navigate('/')
                    setTimeout(() => {
                        toast.success(`${res.message}`, {
                            position: toast.POSITION.TOP_RIGHT,
                            toastId: 'signupSuccess'
                        });
                      }, 1);
                }
            })
        }
        catch(err){
            console.log(err)
        }
        
    }
  return (
    <div className='backsign'>
        <div className='signupbody'>
            <div className='signupinput'>
                <label>Username: </label><br></br>
                <input type="text" id="uname" name="uname" onChange={(e)=>{setUsername(e.target.value)}} placeholder='Enter a username'/><br></br>
           
                <label>Email: </label><br></br>
                <input type="text" id="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}  placeholder='Enter a valid email'/><br></br>
           
                <label>Password: </label><br></br>
                <input type="password" id="psw" name="psw"  onChange={(e)=>{setPsw(e.target.value)}}  placeholder='Enter your password'/><br></br>
            </div>

        <button  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-fulld" type='submit' onClick={submitHandler}>Sign Up</button><br></br>

    </div>
    </div>
  )
}

export default NewUser