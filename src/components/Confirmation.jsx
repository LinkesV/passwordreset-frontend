import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './styles/Confirmation.css'
function Confirmation() {
  const username = useParams().username
  const navigate = useNavigate('')
  const [otp, setOTP] = useState('')
  const otphandler = () =>{
    try{
      fetch("https://passwordreset-backend-k9az.onrender.com/checkotp", {
          method: "POST", 
          headers: {
              'Access-Control-Allow-Origin':true,
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              username:username,
              otp:otp,
          })
      })
      .then((res)=>{
          return res.json()
      })
      .then((res)=>{ 
        console.log(res)
          if(res.result){
            navigate(`/cnfmpsw/${username}`)
            setTimeout(() => {
              toast.success(`${res.message}`, {
                  position: toast.POSITION.TOP_RIGHT
              });
            }, 1);
          }
          else{
            toast.success(`${res.message}`, {
              position: toast.POSITION.TOP_RIGHT
          });
          }
      })
  }
  catch(err){
      console.log(err)
  }
  }
  return (
    <div className='backcfm'>
        <div className='cfmbody'>
            <label>Enter your 4-digit OTP: </label>
            <input type="number" id="otp" name="otp" onChange={(e)=>{setOTP(e.target.value)}}/><br></br>
        <button type='submit' onClick={otphandler} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-fulld">Confirm OTP code</button><br></br>
    </div>
      <ToastContainer/>
    </div>
  )
}

export default Confirmation