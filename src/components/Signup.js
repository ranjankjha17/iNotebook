import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup(props) {
    let navigate = useNavigate()
    const [credential, setCredential] = useState({name:"",email:"",password:"",cpassword:""});
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,email,password}=credential;
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                //"auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZGE0ZDA1MDcwNTQ3Mjk5OWQyMDQ2In0sImlhdCI6MTY0OTQ4NTY2M30.t84cy_-b80GKBRHt6oi4McQ981Yms0lTqxuQ0I4-N_Y",
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json();
        console.log(json);
    
        if(json.success)
        {
            //save the auth-token and redirect
            localStorage.setItem('token',json.authtoken);
           // history.push("/");
           navigate('/');
           props.showAlert("Account created successfully","success");

        }else
        {
            props.showAlert("Invalid Credentials","danger");
        }
    }

    const onChange=(e)=>{
        setCredential({...credential,[e.target.name]:e.target.value})
        }
    return (
        <div className="container mt-2">
            <h2 className="my-2">Create an account to use iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" name="email" onChange={onChange} aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name="password" minLength={5} required onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" id="cpassword" name="cpassword" minLength={5} required onChange={onChange} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Signup
