import React,{ useState } from 'react'
import axios from 'axios';

function Register() {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setUser(() => {
            return { ...user, [id]: value }
        })
    }

    const handleClick = () => {
        axios.post('http://localhost:3000/users', user)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            });
    }


    return (
        <div className="Auth-form-container">
            <form className="Auth-form">
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Registration Form</h3>

                    <div className="form-group mt-3">
                        <label className='form-label'>First Name</label>
                        <input  onChange={handleChange} type="text" id="firstName" className="form-control" placeholder="Enter your FirstName" />
                    </div>

                    <div className="form-group mt-3">
                        <label className='form-label'>Last Name</label>
                        <input onChange={handleChange} type="text" id="lastName" className="form-input" placeholder="Enter your LastName" />
                    </div>

                    <div className="form-group mt-3">
                        <label className='form-label'>Email</label>
                        <input onChange={handleChange} type="email" id="email" className="form-input" placeholder="Enter your Email" />
                    </div>

                    <div className="form-group mt-3">
                        <label className='form-label'>Password</label>
                        <input onChange={handleChange} type="password" id="password" className="form-input" placeholder="Enter your Password" />
                    </div>



                    <div className="d-grid gap-2 mt-3">
                        <button onClick={handleClick} type="button" className="btn btn-primary">Submit</button>
                    </div>

                </div>
            </form>
        </div>
    )

}
export default Register
