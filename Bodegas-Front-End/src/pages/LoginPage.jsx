import React, { useState, useContext } from 'react'
import { Navbar } from '../components/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../Index'

export const LoginPage = () => {
   const { loggedIn, setLoggedIn, setDataUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e)=>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const logIn = async(e)=>{
    try{
      e.preventDefault()
      const { data } = await axios.post('http://localhost:3200/user/login', form)
      console.log(data.user)
      if(data.message){
        alert(data.message)
        localStorage.setItem('token', data.token)
        setDataUser(data.userLogged)
        setLoggedIn(true)
        navigate('/dashboard')
      }      
    }catch(err){
      console.log(err)
      alert(err.response?.data.message)
      throw new Error('Error in login')
    }
  }
  
  return (
    <>
      <Navbar></Navbar>
      <div className='container'>
      <h2 className='text-center'>Login</h2>
      <form className='m-5 text-center'>
        <div className="mb-3">
          <label className='form-label' htmlFor="">Username</label>
          <input onChange={handleChange} name='username' className='form-control' type="text" />
        </div>
        <div className="mb-3">
          <label className='form-label' htmlFor="">Password</label>
          <input onChange={handleChange} name='password' className='form-control' type="password" />
        </div>
        <button onClick={(e)=> logIn(e)} className='btn btn-success'>
          Login
        </button>
      </form>
      </div>
    </>
  )
}
