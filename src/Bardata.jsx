import React from 'react'
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';
Chart.register()

const labels=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
const options={
  plugins:{
    legend :{
      position:'top'
    },
    title:{
      display :true,
       text : "Expense Tracker"
    }
  }
}
const data={
  labels,
  datasets : [
    
    {
    label : '2022expense',
    data : [12000,8000,9000,13000,16000,8000,11000,7000,16000,15000,10000,9500],
    backgroundColor:'pink',
    },
    {
      label : '2023expense',
      data: [11000,8080,9070,12400,11000,8200,11200,7450,16470,13800,10800,7900],
      backgroundColor:'gray',
    }
  
],
}
function Bardata() {
  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  )
}

export default Bardata
