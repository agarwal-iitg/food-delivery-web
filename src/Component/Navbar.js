import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {

  const navigate = useNavigate()
  const handelLogout = ()=>{
    localStorage.removeItem("authToken")
    navigate("/login")
  }

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
  <div className="container-fluid">
    <img src="https://cdn.icon-icons.com/icons2/1151/PNG/512/1486505264-food-fork-kitchen-knife-meanns-restaurant_81404.png" alt="" width={60} height={60}/>
    <Link className="navbar-brand fs-1 fst-italic" to="/" style={{paddingLeft:"10px"}}>GoFood</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
        </li>
        {(localStorage.getItem("authToken"))?
        <li className="nav-item">
          <Link className="nav-link active fs-5" aria-current="page" to="/">My orders</Link>
        </li>
          :""  }
        
        
        
      </ul>
      {(!localStorage.getItem("authToken"))?
      <div className='d-flex'>

      <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
      <Link className="btn bg-white text-success mx-1" to="/creteuser">SignUP</Link>
    
  </div>

      :<>
      <div className='btn bg-success text-white mx-1 fs-5'>My Cart</div> 
      <div className='btn bg-white text-danger mx-1'onClick={handelLogout}>LogOut</div>
      </>
      }
      

    </div>
  </div>
</nav>
    </div>
  )
}
