import React from 'react'
import Nav from './Nav'
import logo2 from "../images/myPic.png"
import SocialMedia from './SocialMedia'
export default function Header(props) {
  return (
    <header className={`header ${props.light?"light":""}`}>
        <div className='container-md'>
        {/* <Nav/> */}
        <SocialMedia/>
          <div className="row mt-5 align-items-center">
              <div className="col-md-6 text-start">
                <h6 >Hi , my name is </h6>
                <h2 className='name-title'>Abdurazaq Al-Hmri</h2>
                <h2 className='title'>I build things for the web.</h2>
                <p className='brief'>Creative and hardworking backend and frontend developer, producing high-quality, modular, and robust codes.</p>
                <button className='btn mt-5 btn-resume ms-3' type="button" value="" >
                  <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-arrow-down" viewBox="0 0 16 16">
                    <path d="M8 5a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5A.5.5 0 0 1 8 5z"/>
                    <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                  </svg>
                  resume
                </button>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <div className="my-image-box">
                  <img className='my-image' src={logo2} alt=""/>
                </div>
              </div>
          </div>
        </div>
        <div className="svg-Wave-box">
          <svg preserveAspectRatio="none" width="1440" height="74" viewBox="0 0 1440 74" className="sc-c8cfb853-4 svg-Wave">
            <path  d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z">
            </path>
          </svg>
        </div>
        {/* <img className='icon7' src={icon7} alt="" /> */}

        {/* <span className='icon6'> &lt; </span>
        <span className='icon7'> /&gt; </span> */}
        {/* {/* <img src={icon7} alt="" /> */}
        {/* <img className='icon7' src={icon7} alt="" /> */}
    </header>
  )
}
