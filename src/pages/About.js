import React from "react";
import Logo from "../assets/image111.jpg";
import Dipendra from "../assets/dipu.jpg";
import Sanjan from "../assets/sanjan.jpg";
import Pawan from "../assets/pawan.jpg";
import Bimu from "../assets/bimu.jpg";
import { Link } from "react-router-dom";
import './About.css';

const About = ({ user }) => {
    return (
        <>
            <div className="banner">
                <div className="navbar">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
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
                <h2>DSBP Photography</h2>
            </div>
            <h1>About us</h1>
            <div class="row">
                <div class="column">
                    <img src={Dipendra} alt="dipu" />
                    <p>
                    Name:Dipendra Khadka
                    Email:dipendrakhadka731@gmail.com<br/>
                    Contact:9865344720
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <img src={Sanjan} alt="sanju"/>
                    Name:Sanjan Rai<br/>
                    Email:sanjan1@gmail.com<br/>
                    Contact:9865311111
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <img src={Pawan} alt="pawan"/>
                    Name:Pawan Shrestha<br/>
                    Email:pawan31@gmail.com<br/>
                    Contact:9865340000
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <img src={Bimu} alt="bimu" />
                    Bimarsha Khadka<br/>
                    Email:bimukhadka71@gmail.com<br/>
                    Contact:9865342222
                </div>
            </div>
        </>
    )
}

export default About;