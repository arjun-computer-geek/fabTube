import axios from 'axios'
import React, { useState } from 'react'

export const Login = () => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')

const loginHandler = async (e, formData) => {
  try{

    e.preventDefault();
      const respose = await axios.post('/api/auth/login', JSON.stringify(formData))
      console.log(respose)
  }catch(err){
    console.log(err)
  }
}
const guestLoginHandler = (e) => {
  loginHandler(e, {email: "adarshbalika@gmail.com", password: "adarshBalika123"});
}
  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email'/>
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
      <button onClick={(e) => guestLoginHandler(e)} >Login with guest</button>
      <button onClick={(e) => loginHandler(e, {email, password})}>Login</button>
    </div>
  )
}
