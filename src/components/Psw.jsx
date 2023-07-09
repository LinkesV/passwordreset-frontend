import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './styles/Psw.css'


function Psw() {
  const navigate = useNavigate()
  const username = useParams().username


  const [psw,setPsw] = useState('')
  const [cfmpsw,setcfmPsw] = useState('')

  const changeHandler = () => {
    if(psw === cfmpsw){
      try{
        fetch("http://localhost:4000/changepsw", {
            method: "POST", 
            headers: {
                'Access-Control-Allow-Origin':true,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username:username,
                password:psw,
            })
        })
        .then((res)=>{
            return res.json()
        })
        .then((res)=>{ 
            alert(res.message)
            navigate('/')
        })
    }
    catch(err){
        console.log(err)
    }
    }
    else{
      alert('Password does not match')
    }
  }

  return (
    <div className='backpsw'>
       <div className='pswbody'>
          <label>Password: </label><br></br>
          <input type="password" id="psw" name="psw"  onChange={(e)=>{setPsw(e.target.value)}} placeholder='Enter your password'/><br></br>

          <label>Confirm Password: </label><br></br>
          <input type="password" id="cfmpsw" name="cfmpsw"  onChange={(e)=>{setcfmPsw(e.target.value)}} placeholder='Reenter new password'/><br></br>

          <button type='submit' onClick={changeHandler} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-fulld">Change Password</button><br></br>
</div>
    </div>
  )
}

export default Psw