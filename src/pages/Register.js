import React, { useState, useEffect } from "react";
import Logo from "../assets/image111.jpg";
import axiosInstance from "../configs/axios.config";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState(null)
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            firstname,
            lastname,
            email,
            phone,
            password
        }
        const res = await axiosInstance.post('/users/', data);
        if (res.status === 200) {
            setMessage("registartion successfull");
            navigate("/")
        }
        else {
            // setMessage("Provided email password were wrong");
        }
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
          navigate("/");
        }
      }, [])
      

    return (
        <>
            <div className="banner">
                <div className="navbar">
                    <div className="logo">
                        <img src={Logo} alt="" />
                    </div>
                </div>
            </div>
            <div className="center">
                <div className="Signup_box">
                    <h1>
                        Sign Up 
                    </h1>
                    { message ? <p style={{ color: "#000" }}>{message}</p> : <p></p>}
                    <label>First Name</label> <br />
                    <input 
                        type="text" 
                        className="input box" 
                        placeholder="First Name"
                        value={firstname}
                        required
                        onChange={(e) => setFirstname(e.target.value)}
                     /> <br />
                    <label>Last Name</label> <br />
                    <input 
                        type="text" 
                        placeholder="Last Name"
                        className="input box"
                        required
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                     /> <br />
                    <label>Email</label> <br />
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="email address"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                   /> <br />
                    <label>Password</label> <br />
                    <input 
                        type="password" 
                        placeholder="Password"
                        id="password" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                     /> <br />
                    <label>Phone No.</label> <br />
                    <input 
                        type="number" 
                        placeholder="Phone No."
                        value={phone}
                        required
                        onChange={(e) => setPhone(e.target.value)}
                     /> <br />
                    <p>
                        <span>
                            <input type="checkbox" />I agree to the terms of services
                        </span>
                    </p>
                    <input type="submit" value="signup" onClick={handleSubmit} />
                    <p>
                        By clicking the Sign Up button, you agree to our <br/>
                        <a href="/">Terms and condition</a>and <a href="policy.html">Policy Privacy</a>
                    </p>
                </div>
                <p className="para-2">Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </>
    )
}

export default Register;