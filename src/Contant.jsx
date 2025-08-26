import React from 'react'

export default function Contant() {
  return (
    <>
        
      <div className="page_contact ">


        <h1 className='fw-bold pt-5 mb-4 pro text-center'>
          CONATCT SECTION
        </h1>
        
        <div className="line-with-star2 mb-5 m-auto">
            <span className="star2"> ★ </span>
        </div>

        <div className="inputs_contact pt-5 pb-5">

          <form className='m-auto text-center'>
            <input type="text" className='w-50 form-control m-auto inp'  placeholder='userName'/>
            <input type="number" max={80} min={10} className='w-50 m-auto form-control inp'  placeholder='userAge'/>
            <input type="text" className='w-50 form-control m-auto inp' placeholder='userEmail'/>
            <input type="text" className='w-50 form-control m-auto inp' placeholder='userPassword'/>

            <button type='button' className='btn btn1 btn-outline-info'>send Message</button>
          </form>


        </div >

      </div>



        
    </>
  )
}
