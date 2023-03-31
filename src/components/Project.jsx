import React from 'react'

export default function Project( props) {
  return (
    
    <section className={`project pt-5 pb-5 text-center ${props.light?"light":""}`}>
        <div className="container">
            <div className='title-project'>
                <h2 className='title'>Project</h2>
            </div>
            <div className="row g-0 mt-5 project-card">
                <div className="col-12 col-md-6">
                    <div className="project-image"></div>
                </div>
                <div className="col-12 col-md-6 ">
                    <div className="project-info"></div>
                </div>
            </div>
            <div className="row g-0 mt-5 project-card">
                <div className="col-12 col-md-6">
                    <div className="project-image"></div>
                </div>
                <div className="col-12 col-md-6 ">
                    <div className="project-info"></div>
                </div>
            </div>
        </div>
    </section>
  )
}
