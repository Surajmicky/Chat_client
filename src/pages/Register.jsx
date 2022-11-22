import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Logo from '../icons/whatsapp.png'
import {useState,useEffect} from 'react';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';
import {registerRoute} from '../utils/APIRoutes'
const Register = () => {
    const [values,setValues]=useState({
        username:"",
        email:"",
        password:"",
        cofirmPassword:""
    })
    const handleChange=(event) => {
      setValues({...values,[event.target.name]:event.target.value})
      console.log(values)
    }
    const handleSubmit= async(event)=>{
       event.preventDefault();
       console.log(toast)
       if(handleValidation()){
            const {username,email,password}=values;
            let {data}=await axios.post(registerRoute,{username,email,password});
            
       }
     
       

    }
    // const toastCSS={
    //   position:'bottom-right',
    //   autoClose:6000,
    //   pauseOnHover:true,
    //   draggable:true,
    //   theme:'dark'

    // }
    const handleValidation=()=>{
       let {username,email,password,confirmPassword}=values;
      if(username.length<3){
        toast.error('Username should be at least 3 characters');
        return false;
      }else if(email==''){
        toast.error('please enter valid email');
        return false;
      }else if(password.length<8){
        toast.error('password should be at least 8 characters');
        return false;
      }else if(password!==confirmPassword){
        toast.error('password and confirm password do not match');
        return false;
      }
      return true;
    }
  return (
    <>
    <FormContainer>
   
    <form onSubmit={(event)=>handleSubmit(event)}>
    <div className="form_div">
    <img src={Logo} alt="" />
    <h1>Chatty</h1>
    </div>
        <input type="name" name="username" placeholder="Name" onChange={(event)=>handleChange(event)} />
        <input type="email" name="email" placeholder="Email" onChange={(event)=>handleChange(event)} />
        <input type="password" name="password" placeholder="Password" onChange={(event)=>handleChange(event)} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={(event)=>handleChange(event)} />
        <button>Submit</button>
        <ToastContainer/>
        <span>Already have an account ? <Link to="/login">Login</Link></span>
      
    </form>
    
    </FormContainer>
    </>
  )
}
const FormContainer= styled.div`
  height:100vh;
  width:100vw;
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:1rem;
  align-items:center;
  background-color:#131324;
  .form_div{
    display:flex;
    gap:1rem;
    align-items:center;
    justify-content:center;
   
    img{
    height:5rem;
  }
   
  h1{
    color:white;
    text-transform:uppercase;
  }

  }
 
  
  form{
    display:flex;
    flex-direction:column;
    gap:1.5rem;
    align-items:center;
    background-color:#00000076;
    padding:2.5rem 3.5rem;
    border-radius:2rem;
  }
 
  input{
    background-color:transparent;
    padding:1rem;
    border-radius:0.4rem;
    border:0.1rem solid #4e0eff;
    font-size:1rem;
    color:white;
    width:100%;
    &:focus{
        border:0.1rem solid #997af0;
        outline:none;
    }
  }
  button{
    background-color:#997af0;
    color:white;
    padding:1rem 2rem;
    border:none;
    border-radius:0.4rem;
    font-weight:bold;
    cursor:pointer;
    font-size:1rem;
    text-transform:uppercase;
    transition:0.5s ease-in-out;
    &:hover{
        background-color:#4e0eff;

    }
    

  }
  span{
        color:white;
        text-transform:uppercase;
        a{
            color:#4e0eff;
            text-decoration:none;
            font-weight:bold;
        }
    }

`;
export default Register