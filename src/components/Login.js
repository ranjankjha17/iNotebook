import React, { useState } from 'react'
//import {useHistory} from 'react-router-dom'
import { useNavigate} from 'react-router-dom';

function Login(props) {
//let history=useHistory();
let navigate = useNavigate();
    const [credential, setCredential] = useState({email:"",password:""});
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                //"auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZGE0ZDA1MDcwNTQ3Mjk5OWQyMDQ2In0sImlhdCI6MTY0OTQ4NTY2M30.t84cy_-b80GKBRHt6oi4McQ981Yms0lTqxuQ0I4-N_Y",
            },
            body: JSON.stringify({email:credential.email,password:credential.password})
        });
        const json = await response.json();
        console.log(json);
    
        if(json.success)
        {
            //save the auth-token and redirect
            localStorage.setItem('token',json.authtoken);
           // history.push("/");
           props.showAlert("Login successfully","success");
           //console.log(navigate);
           navigate("/");
        
        }else
        {
            props.showAlert("Invalid Details","danger");
        }
    }

    const onChange=(e)=>{
        setCredential({...credential,[e.target.name]:e.target.value})
        }
    return (
        <div className="mt-3">
            <h2>Login to continue to iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" value={credential.email} id="email" name="email" onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credential.password} id="password" name="password"  onChange={onChange}/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
