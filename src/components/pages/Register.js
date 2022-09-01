import React from 'react'

function Register() {
  return (
    <div className="Auth-form-container">
    <form className="Auth-form">
        <div className="Auth-form-content">
            <h3 className="Auth-form-title">Registration Form</h3>

            <div className="form-group mt-3">
                <label className='form-label'>First Name</label>
                <input type="text"  id="firstName" className="form-input" placeholder="Enter email"/>
            </div>

            <div className="form-group mt-3">
                <label className='form-label'>Last Name</label>
                <input type="text"  id="lastName" className="form-input" placeholder="Enter email"/>
            </div>

            <div className="form-group mt-3">
                <label className='form-label'>Email</label>
                <input type="email"  id="email" className="form-input" placeholder="Enter email"/>
            </div>

            <div className="form-group mt-3">
                <label className='form-label'>Password</label>
                <input type="password"  id="password" className="form-input" placeholder="Enter email"/>
            </div>

            

            <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
    
        </div>
    </form>
</div>
  )
}

export default Register
