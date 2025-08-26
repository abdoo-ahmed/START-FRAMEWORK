import React from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'

export default function About() {
  return (
    

    <div className='p-5 text-white page_about'>
      <div className="page_aboutheight"></div>
     <h2 className='text-center fw-bold contact1_about mb-3'>
        ABOUT COMPONENT
     </h2>

      <div class="line-with-star mt-4 mb-3 m-auto">
        <span class="star"> ★ </span>
      </div>
     <div class="container mt-2">
        <div class="row g-3">
          <div class="col-md-6">
            <p className='parag'>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div class="col-md-6">
           <p className='parag'>
           Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
           </p>
          </div>
        </div>
      </div>
      <div className="page_aboutheight"></div>
    </div>
  )
}
