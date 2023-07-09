import React from 'react'
import Nav from '../components/Nav'
import Form from '../components/Form'
import { ToastContainer } from 'react-toastify';


function Login() {
  return (
    <div>
        <Nav/>
        <Form/>
        <ToastContainer/>
    </div>
  )
}

export default Login