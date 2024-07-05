import React, { useState } from 'react'
import { Link } from 'react-router-dom'


export default function SignUp() {

  const[credentials, setcredentials]=useState({name:"",email:"",password:"",geolocation:""})
  const handleSubmit = async(e)=>{

    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser",{
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password, location:credentials.geolocation})
    });
    const json = await response.json();
    console.log(json);

    if(!json.success)
        alert("Enter valid values ")




  }

  const onChange = (event)=>{
    setcredentials({...credentials, [event.target.name]: event.target.value})
  }

  return (
    <>    
    <div className='container'>
    <form onSubmit={handleSubmit}>
      
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="name" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Location</label>
    <input type="location" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/login" className="m-3 btn btn-danger">Already a user</Link>
</form>
</div>
    </>
  )
}
