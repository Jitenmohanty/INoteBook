import React, {useState} from 'react'
import {  useNavigate } from 'react-router-dom'


const Login = () => {
    const [credential , setCredential] = useState({email:"",password:""})
    const navigate = useNavigate();
    const onChange = (e)=>{
        setCredential({...credential,[e.target.name]:e.target.value})
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:3005/api/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credential.email, password: credential.password})
        });
        const json = await response.json()
        console.log(json);
        if (json.status===true){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
           navigate('/');
        }
        else{
            alert("Invalid credentials");
        }
    }
  return (
    <div className='container my-3'>
      <form onSubmit={handleSubmit}>
  <div className="mb-3" >
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={credential.email} name='email'  onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" value={credential.password} name='password' onChange={onChange}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Login
