import React from 'react'
import card_img from "../images/download (6).png"
export default function Services() {
  return (
   <section className='services pt-5 text-center'>
       <div className="container-md pt-5">
        <div className="title-service">
          <h2 className='title'>Services</h2>
        </div>
        <div className="sub-title mt-4">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui!</p>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 ">
          <div class="card  text-white service-card one"> 
            {/* <img src={card_img} class="card-img " alt="..." style={{width:'350px', height:'150px'}}/> */}
              <div class="card-img">
                <h5 class="card-title">Back End Development</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div class="card  text-white service-card two">
            {/* <img src="..." class="card-img" alt="..."> */}
              <div class="">
                <h5 class="card-title">Front End Development</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div class="card  text-white service-card three">
            {/* <img src="..." class="card-img" alt="..."> */}
              <div class="">
                <h5 class="card-title">UI/UX Design</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
       </div>
   </section>
  )
}
