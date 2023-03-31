import React from 'react'

export default function ContactMe(props) {
    const [formData,setFormData] =React.useState({
            fullName: "",
            email: "",
            message: "",
    });
    function handleChange(event){
        const {name,value}=event.target
        setFormData(prevFormData=>{
            return{
            ...prevFormData,
            [name]:value

        }})
    }
    function handleSubmit(e){
        e.preventDefault()

        console.log(formData);
    }

  return (
    <section className={`contactMe text-center pb-5 pt-5 ${props.light?"light":""}`}>
        <div className="container">
            <div className='title-contactMe mt-5'>
                <h2 className='title'>Contact</h2>
            </div>
            <div className="row justify-content-center py-5 text-start">
                <div className="col-md-6 col-10 form-box">
                <form onSubmit={handleSubmit} className="row g-3">
                <div className="mb-1">
                    <label for="fullName" class="form-label">Full Name</label>
                    <input
                    className="form-control"
                    type="text"
                    placeholder="Abdurzaq Al-hmri"
                    onChange={handleChange}
                    name="fullName"
                    value={formData.fullName}
                    />
                </div>
                <div className="mb-1">
                    <label for="email" class="form-label">Email</label>
                    <input
                        className="form-control"
                        type="email"
                        placeholder="Abdurzaq@ex.com"
                        onChange={handleChange}
                        name="email"
                        value={formData.email}
                    />
                </div>
                <div className="mb-1">  
                    <label for="email" class="form-label">Message</label>  
                    <textarea 
                        cols="30" rows="10"
                        className="form-control"
                        value={formData.message}
                        placeholder="message..."
                        onChange={handleChange}
                        name="message"
                    />
                </div>
                <button type="submit" class="btn ">Send</button>
                </form>
                </div>
            </div>
        </div>
    </section>
  )
}
