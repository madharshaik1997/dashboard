import React from 'react'
import Sidebar from './Sidebar'
import Bardata from './Bardata'
import Piedata from './Piedata'

function Homepage() {
  return (
    <>
    <div class="container text-center">
  <div class="row">
    <div class="col">
      <Sidebar/>
    </div>
    <div class="col">
      <Bardata />
    </div>
    <div class="col">
      <Piedata/>
    </div>
  </div>
</div>
    </>
  )
}

export default Homepage