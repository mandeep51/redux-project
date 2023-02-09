import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'
function Navbar() {
    const count=useSelector(state=>state.cart)
   
  return (
  
      <div className="navbar">
        <div className="logo">
           <img src="https://t3.ftcdn.net/jpg/00/68/51/24/240_F_68512486_0SPdwDujD56DjJ0YIFm0J1EXsPVcC2f3.jpg" alt="" width="100px" height="50px" />
            <h2>Buy Online</h2>
            </div>
        <div className="list">
            <div className="list-item">
                <Link to='/'>Home</Link>
            </div>
            <div className="list-item">
            <Link to='/cart'>Cart</Link>
            </div>
            <div className="item"><b className='item'>Cart Items: 
              <span style={{color:'white',backgroundColor:'red',margin:'10px',padding:'5px 13px',borderRadius:'50%'}}>{count.length}</span></b></div>
        </div>
      </div>
  
  )
}

export default Navbar
