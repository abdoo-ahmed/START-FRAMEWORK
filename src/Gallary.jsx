import React, { useState } from 'react'
import img1 from "./images/poert1.png"
import img2 from "./images/port2.png"
import img3 from "./images/port3.png"



export default function Gallary() {

  const [data]= useState([

    { id:"img1"},
    { id:"img2"} ,
    { id:"img3"},
    { id:"img4"},
    { id:"img5"} ,
    { id:"img6"},

  ])
  console.log(data);
  
  return (
    <>
    <div className="inner_protofolio">



      <h1 className='fw-bold pt-3 mb-4 pro text-center'>
        PORTFOLIO COMPONENT
      </h1>
      <div class="line-with-star2 mb-4 m-auto">
          <span className="star2"> ★ </span>
      </div>

      <div className="container">

        <div className="row g-3">
           
          <div className="col-md-4">

           <div className="hoverd_image">

              <img src={img1} alt=""  className='rounded-3 w-100' />
              <div data-bs-toggle="modal" data-bs-target={"#"+data[0].id} className="Icon_plus d-flex justify-content-center align-items-center text-center rounded-3">
                <i className="fa-solid size_icon fa-plus"></i>
              </div>
           </div>



            <div className="modal fade" id={data[0].id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                
                  <div className="modal-body p-0">
                  <img src={img1} alt="" className='w-100' />
                  </div>
                  
                </div>
              </div>
            </div>


            
          </div>
          <div className="col-md-4">
            <div className="hoverd_image">
              <img src={img2} alt="" className='rounded-3 w-100' />
              <div data-bs-toggle="modal" data-bs-target={"#"+data[1].id} className="Icon_plus d-flex justify-content-center align-items-center rounded-3 text-center">
                <i className="fa-solid fa-plus size_icon"></i>
              </div>

            </div>

            <div className="modal fade" id={data[1].id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-body p-0">
                  <img src={img2} alt="" className='w-100' />
                  </div>
                  
                </div>
              </div>
            </div>


          </div>




          <div className="col-md-4">

           <div className="hoverd_image">

              <img src={img3} alt="" className='rounded-3 w-100' />
              <div data-bs-toggle="modal" data-bs-target={"#"+data[2].id} className="Icon_plus d-flex justify-content-center align-items-center rounded-3 text-center">
                  <i className="fa-solid size_icon fa-plus"></i>
              </div>
           </div>


           <div className="modal fade" id={data[2].id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                
                  <div className="modal-body p-0">
                  <img src={img3} alt="" className='w-100' />
                  </div>
                  
                </div>
              </div>
            </div>




          </div>

          <div className="col-md-4">

            <div className="hoverd_image">
                
              <img src={img1} alt="" className='rounded-3  w-100' />
              <div data-bs-toggle="modal" data-bs-target={"#"+data[3].id} className="Icon_plus d-flex justify-content-center align-items-center rounded-3 text-center">
                  <i className="fa-solid size_icon fa-plus"></i>
              </div>
            </div>

            
           <div className="modal fade" id={data[3].id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                
                  <div className="modal-body p-0">
                  <img src={img1} alt="" className='w-100' />
                  </div>
                  
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-4">


            <div className="hoverd_image">
              <img src={img2} alt="" className='rounded-3 w-100' />
              <div  data-bs-toggle="modal" data-bs-target={"#"+data[4].id}  className="Icon_plus d-flex justify-content-center align-items-center rounded-3 text-center">
                  <i className="fa-solid size_icon fa-plus"></i>
              </div>

            </div>


            
           <div className="modal fade" id={data[4].id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                
                  <div className="modal-body p-0">
                  <img src={img2} alt="" className='w-100' />
                  </div>
                  
                </div>
              </div>
            </div>




          </div>
          <div className="col-md-4">

            <div className="hoverd_image mb-5">

              <img src={img3} alt="" className='rounded-3 w-100' />
              <div  data-bs-toggle="modal" data-bs-target={"#"+data[5].id}  className="Icon_plus d-flex justify-content-center align-items-center rounded-3 text-center">
                  <i className="fa-solid size_icon fa-plus"></i>
              </div>

            </div>
            
            
           <div className="modal fade" id={data[5].id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog">
                <div className="modal-content">
                
                  <div className="modal-body p-0">
                  <img src={img3} alt="" className='w-100' />
                  </div>
                  
                </div>
              </div>
            </div>


          </div>

        </div>

      </div>






    </div>
    </>
  )
}
