import React from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom'
function Sidebar() {
 
  return (
  
    <>
  <div class="row">
    <div class="col-md-4" style={{height:'100vh', backgroundColor:'lightgray'}}> 
   <Link to="/"> <i className="bi bi-house-fill">HOME</i><hr/></Link>
    <Link to="/barchart"><i class="bi bi-bar-chart-fill"style={{display:'flex'}}>BARCHART</i><hr/></Link>
    <Link to="/piechart"><i class="bi bi-pie-chart-fill"style={{display:'flex'}}>PIECHART</i><hr/></Link>
    </div>
  
</div>

    </>
  )
}

export default Sidebar