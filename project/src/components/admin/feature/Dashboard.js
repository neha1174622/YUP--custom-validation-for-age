

import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import SignupSchema from '../shared/SignupSchema'



const Dashboard = () => {
  let navigate = useNavigate();
  

  let signupForm = useFormik({
    validationSchema : SignupSchema,
    initialValues : {
      name : "",
      dob :"",
    },
    onSubmit : (formdata)=>{
      
      axios.post("http://localhost:8080/api/demo", formdata).then(response=>{
        navigate("/booking");
      })
    }

    
  })



  

  

  return (
    <>
   
    <div className="container" style={{marginTop : "100px", minHeight : "600px"}}>
        <div className="row">
            <div className='col-md-6 offset-md-3'>
              <form onSubmit={signupForm.handleSubmit}>
              <div className='card'>
                <div className='card-header bg-dark border border-dark'>
                  <h5 style={{color : "#fff"}}>User Registration</h5>
                  <small>If you already member <NavLink to="/login">click here</NavLink></small>
                </div>

                <div className="card-body">
                  <div className='my-4'>
                    <label>Full Name</label>
                    <input type='text' name='name' onChange={signupForm.handleChange} className={'form-control ' + (signupForm.errors.name && signupForm.touched.name ? 'is-invalid' : '')} />
                    {
                      signupForm.errors.name && signupForm.touched.name ? <small className='text-danger'>{signupForm.errors.name}</small> : ''
                    }
                  </div>
                  <div className='my-4'>
                    <label>Date of birth</label>
                    <input type='date' name='dob' onChange={signupForm.handleChange}  className={'form-control ' + (signupForm.errors.dob && signupForm.touched.dob ? 'is-invalid' : '')} />
                    {
                      signupForm.errors.dob && signupForm.touched.dob ? <small className='text-danger'>{signupForm.errors.dob}</small> : ''
                    }
                  </div>

                </div>
                
                <div className="card-footer">
                  {/* <div class="d-grid">
                  </div> */}
                  <button type='submit' className='btn btn-success btn-block'>Signup</button>
                </div>
              </div>
              </form>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard