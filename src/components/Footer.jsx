import React from 'react'

export default function Footer(props) {
    const objectDate =new Date();
    let year = objectDate.getFullYear();
  return (
    
    <section className={`footer ${props.light?"light":""}`}>
        <div className="container">
            <div className="row justify-content-center text-center">
                <div className="col-6 footer-box">
                <span className='text-dark me-2'>{year}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#1D262F" class="bi bi-heart-fill" viewBox="0 0 16 16">
                     <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
                </div>
            </div>
        </div>
    </section>
  )
}
