import React from 'react'
import pic from './e.png'
import './Navbar.css'
function Navbar() {
  return (
   <>
   <nav class="navbar navbar-custom">
  <div class="container-fluid">
  <img src={pic}alt=""/><span>REPORT</span>
  </div>
</nav>
   </>
  )
}

export default Navbar