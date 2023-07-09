import React from 'react'
import { useState } from 'react'
import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './styles/Email.css'

function Email() {
  const [email,setEmail] = useState('')

  const emailHandler = () =>{
    try{
      fetch("http://localhost:4000/sendemail", {
          method: "POSt", 
          headers: {
              'Access-Control-Allow-Origin':true,
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email:email,
          })
      })
      .then((res)=>{
          return res.json()
      })
      .then((res)=>{ 
          if(res.email){

            toast.success(`${res.message}`, {
              position: toast.POSITION.TOP_RIGHT
            });

            // SEND EMAIL 

            emailjs.send(
              "service_vwt5hn4", //service ID
              "template_qxyvfa6", //Template ID 
              {
                email:res.useremail,
                username: res.username,
                message: `
                Your OTP IS ${res.OTP}
                Click on this url to proceed: http://localhost:3000/resetpsw/${res.username}
                `
              },

              "VkDdWcg4J7ipzkxpk" // PUBLIC KEY
            ) 

          }
          else{
            toast.error(`${res.message}`, {
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
    <div className='backsend'>
        <div className='sendbody'>
            <label>Email: </label><br></br>
            <input type="text" id="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder='Enter your email to recieve OTP code'/><br></br>
        <button type='submit' onClick={emailHandler} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-fulld">Send OTP code</button><br></br>
    </div>
      <ToastContainer/>
    </div>
  )
}

export default Email