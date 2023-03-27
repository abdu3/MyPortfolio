import React from 'react'
import card_img from "../images/download (6).png"
export default function Services() {
  return (
   <section className='services pt-5 pb-5 text-center'>
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
                <div className="card-title-box">
                <h5 class="card-title">Back End Development</h5>
                </div>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div class="card  text-white service-card two">
            {/* <img src="..." class="card-img" alt="..."> */}
              <div class="">
                <div className="card-title-box">
                   <h5 class="card-title">Front End Development</h5>
                </div>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div class="card  text-white service-card three">
            {/* <img src="..." class="card-img" alt="..."> */}
              <div class="">
                <div className="card-title-box">
                  <h5 class="card-title">UI/UX Design</h5>
                </div>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text">Last updated 3 mins ago</p>
              </div>
            </div>
          </div>
        </div>
       </div>
       <div class="epuvUc service">
          <svg preserveAspectRatio="none" width="1440" height="74" viewBox="0 0 270 64" class="sc-c8cfb853-4 exNWwu">
            <path fill="#1D262F" d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z">          
            </path>
          </svg>
       </div>
   </section>
  )
}
