import React from 'react'
import './Dashboard.css'

export default function Dashboard() {
  return (



    <div className='Dashboard'>
      <h1>Dashboard</h1>
      <div className='div'>
        <span>Font Scale</span>
        <input type="range" className='Range' />
        <input type="text" placeholder='Search' className='Text' />
        <i className="fa-solid fa-bars" ></i>
      </div>
    </div>


  )
}
