import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./HomePage.css"
import {Link} from "react-router-dom"

export default function HomePage() {
  return (
    <div>
        <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col-10 title-content">
              <h1>DAVID <span className='parker'>PARKER</span> </h1>
              <h3><span className='creative'> Creative</span> Developer</h3>
              <button className='btn-getIn'> <Link to="/contact"> Get in Touch</Link></button>
            </div>
          </div>
        </div>
    </div>
  )
}
