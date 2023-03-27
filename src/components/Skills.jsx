import React from 'react'

export default function Skills() {
  return (
        <section className="skills pt-5 pb-5 text-center">
            <div className='title-skills'>
                <h2 className='title'>Skills</h2>
            </div>
            <div className="row justify-content-center mt-5 ">
                <div className="col-md-8 text-center">
                    <div className="row justify-content-center m-3">
                        <div className="col-4 skill-card html">HTML</div>
                        <div className="col-4 skill-card css">CSS</div>
                        <div className="col-4 skill-card javascript">Javascript</div>
                    </div>
                    <div className="row justify-content-center m-3">
                        <div className="col-4 skill-card bootstrap">Bootstrap</div>
                        <div className="col-4 skill-card react">React</div>
                        <div className="col-4 skill-card php">PHP</div>
                    </div>
                    <div className="row justify-content-center m-3">
                        <div className="col-4 skill-card laravel">Laravel</div>
                        <div className="col-4 skill-card node">Node.js</div>
                        <div className="col-4 skill-card git">Git</div>
                    </div>
                </div>
            </div>
        </section>
  )
}
