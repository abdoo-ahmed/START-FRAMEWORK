import React from 'react'
import imageHome from "./images/avataaars (1).svg"

export default function Home() {
  return ( 
    <div>

      <div className='sec_Home d-flex justify-content-center align-items-center text-white pt-5 text-center'>

        <div>
          
          <img className='w-100' src={imageHome} alt="" />
          
          <h2 className='logo mt-3 mb-3'>START FRAMEWORK</h2>
          <div class="line-with-star mb-4 m-auto">
            <span class="star"> ★ </span>
          </div>
          <p>
            Graphic Artist - Web Designer - Illustrator
          </p>

        </div>
      </div>
    
    </div>
  )
}
