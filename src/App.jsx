import React from 'react'
import { useState } from 'react'
import "./App.css"

function App() {
  const [firstName, setFirstName ] = useState('')
  const [lastName, setLastName ] = useState('')
  const [contact, setContact ] = useState(0)
  const [email, setEmail ] = useState('')

  const[valid,setvalid]=useState(false)
  const [error,seterror]=useState({})

  const HandleOnChange = e => {
    if(e.target.name == "firstName"){
      setFirstName(e.target.value)
    }
    else if(e.target.name == "lastName"){
      setLastName(e.target.value)
    }
    else if(e.target.name == "Contact"){
      setContact(e.target.value)
    }
    else {
      setEmail(e.target.value)
    }
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();
      if(firstName === ''){
        seterror(error=>({...error,first:'First name is required'}))
        setvalid(false)
      }else{
        seterror(error=>({...error,first:''}))
        setvalid(true)
      }

      if(lastName === ''){
      seterror(error=>({...error,last:"last name is required"}))
      setvalid(false)
      }else{
        seterror(error=>({...error,last:''}))
        setvalid(true)
      }

      if(email === ''){
        seterror(error=>({...error,email:"Email is required"}))
        setvalid(false)
      }else{
        seterror(error=>({...error,email:''}))
        setvalid(true)
      }

      if(contact.length == null){
        seterror(error=>({...error,contact:"Contact number is required"}))
        setvalid(false)
      }else if(contact.length <10){
        seterror(error=>({...error,contact:"Contact number is less than 10"}))
        setvalid(false)
      }else if(contact.length >10){
        seterror(error=>({...error,contact:"Contact number is more than 10"}))
        setvalid(false)
      }else{
        seterror(error=>({...error,contact:""}))
        setvalid(true)

      }

      if(valid){
        seterror(error=>({...error,submit:"Submitted"}))
      }
    }
  return (  
    <div className='container'>
      <h2>{error.submit}</h2>
      <form onSubmit={(e)=>handleSubmit(e)}>
        <div>
          <input type="text" placeholder='First Name' onChange={(e)=>HandleOnChange(e)} name="firstName"/>
          <p>{error.first}</p>
        </div>
        <div>
          <input type="text" placeholder='Last name' name='lastName' onChange={(e)=>HandleOnChange(e)} />
          <p>{error.last}</p>
        </div>
        <div>
          <input type="email" placeholder='Email' name='Email' onChange={(e)=>HandleOnChange(e)} />
          <p>{error.email}</p>
        </div>
        <div>
          <input type="number" placeholder='Contact' name='Contact' onChange={(e)=>HandleOnChange(e)}/>
          <p>{error.contact}</p>
        </div>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default App