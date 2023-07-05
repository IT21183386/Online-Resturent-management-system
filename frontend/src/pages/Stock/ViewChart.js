import React, { useState } from 'react'
import "./ViewChart.css"
import Barchart from './Barchart'
import {UserData} from './Data'
import { Link } from 'react-router-dom';



export default function ViewChart() {

  // eslint-disable-next-line
  const[userData, setUserData] = useState({  

    labels: UserData.map((data) => data.date) ,

    datasets:[{
      label: "Vegetable",
      data: UserData.map((data) => data.Vegitable),
      backgroundColor: ["blue"],
      borderColor: "black",
      borderWidth:1,
      barPercentage: 0.4,
     
    },
    {
      label: "Fruit",
      data: UserData.map((data) => data.Fruit),
      backgroundColor: ["red"],
      borderColor: "black",
      borderWidth:1,
      barPercentage: 0.4,
    },
    {
      label: "Groceries",
      data: UserData.map((data) => data.groceries),
      backgroundColor: ["green"],
      borderColor: "black",
      borderWidth:1,
      barPercentage: 0.4,
    },
    {
      label: "Others",
      data: UserData.map((data) => data.other),
      backgroundColor: ["pink"],
      borderColor: "black",
      borderWidth:1,
      barPercentage: 0.4,
    },
  ]

  });

  return (
    <div> 
       <p className='stock'> Admin Summery </p>
       <div className='wrapbutns'>
       <Link to='/stockdash/manageitem'>
             <button className='Sbtn1'>
             Materials
            </button>
            </Link>

            <Link to='/stockdash/additem'>
             <button className='Sbtn2'>
              view Form
             </button>
             </Link>
             <Link to='/stockdash/report'>
             <button className='Sbtn3'>
            Report
             </button>
             </Link>
       </div>
       <div className='chart'>
       <Barchart chartData={userData}/>
       </div>

        
       
       
    
    </div>
  )
}
