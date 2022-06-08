import React, { useState, useEffect } from "react";
import Logo from "../assets/image111.jpg";
import axiosInstance from "../configs/axios.config";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const Login = ({ user }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email, password
        }
        const res = await axiosInstance.post('/users/login', data);
        if (res.status === 200) {
            localStorage.setItem("token", res.data.token);
            navigate("/");
            window.location.reload(true)
        }
        else {
            setMessage("Provided email password were wrong");
        }
    }

    useEffect(() => {
        if (localStorage.getItem("token")) {
          navigate("/");
        }
      }, [])
      

    return (
        <div className="banner">
        <div className="navbar">
            <div className="logo">
              <img src={Logo} alt=""/>
            </div>
            <nav>
                <ul>  
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Our services</Link>
                    </li>
                    <li>
                        <Link to="/aboutus">About us</Link>
                    </li>
                    <li>
                        {
                            user !== null ?
                            <Link to="/profile">Profile</Link> :
                            <Link to="/login">login</Link>
                        }
                    </li>
                </ul>
            </nav>
        </div>
        <div className="center">
            <h1>login</h1>
            { message ? <p style={{ color: "#000" }}>{message}</p> : <p></p>}
                <div className="txt_field">
                   <input 
                        type="email" 
                        id="email" 
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                   />
                   <label>Email address</label>
                </div>
                <div className="txt_field">
                  <input
                        type="password"
                        id="password"
                        required 
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                  <label>Password</label>
                </div>
                <div className="pass">Forget Password</div>
                    <input type="submit" value="login" onClick={handleSubmit}/>
                <hr />
                <p className="or">OR</p>
                <button type="button" className="login-btn">Login with Facebook</button>
                <div className="signup_link">
                    Not a member? <Link to="/register">Signup</Link>
                </div>
            </div>
        </div>
    )
}

export default Login;