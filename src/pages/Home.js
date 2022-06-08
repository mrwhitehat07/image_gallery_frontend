import React, { useEffect, useState } from "react";
import Logo from "../assets/image111.jpg";
import axiosInstance from "../configs/axios.config";
import { Link } from "react-router-dom";
import Facebook from "../assets/facebook.png";
import Microsoft from "../assets/microsoft.webp";
import Walmart from "../assets/walmart.jpg";
import Adobe from "../assets/adobe.jpg";
import "./Home.css";
import { logout } from "../functions/logout";

const Home = ( {user} ) => {
    const [images, setImages] = useState([]);
    const [query, setQuery] = useState("")

    useEffect(() => {
      async function getImages () {
          const res = await axiosInstance.get("/images/");
          if (res.status === 200) {
              setImages(res.data)
          }
      }
      getImages();
    }, [])
    
    const handleSearch = async (e) => {
        e.preventDefault();
        const res = await axiosInstance.get("/images/search/"+query);
        if (res.status === 200) {
            setImages(res.data)
        }
    }

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
                                user ?
                                <>
                                {
                                    !user.isAdmin ?
                                    <>
                                        <Link to="/profile">Hello, {user.firstname} {user.lastname}</Link> 
                                    </> :
                                    <>
                                        <Link to="/dashboard">Dashboard</Link> 
                                    </>
                                }
                                <button className="logout-btn" onClick={logout}>Logout</button>
                                </>
                                :
                                <Link to="/login">login</Link>
                            }
                        </li>
                    </ul>
                </nav> 
            </div>
            <div className="banner-text">
                <h1>
                    Royalty free stock photo
                </h1>
                <p>DSBP Photography</p>
                <div className="searchbar">
                    <input 
                        className="searchinput"
                        type="text" 
                        placeholder="search free stock photos"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button 
                        className="searchBtn"
                        type="button" 
                        onClick={handleSearch} 
                    >
                        search
                    </button>
                </div>
                <p className="suggested">Suggested: 
                    <a href="/"> Food</a>,
                    <a href="/">Travel</a>,
                    <a href="/">Mother Nature</a>,
                    <a href="/">Mountian</a>,
                    <a href="/">Technology</a>
                </p>
            </div>
        </div>
        <div className="stock">
            <h2>Free Stock Photos</h2>
            <div className="row">
                {
                    images.map((item, index) => (
                        <div className="column" key={index}>
                            <img src={item.path} alt={"image-"+ index} />
                        </div>
                    ))
                }
            </div>
            <a href="/" className="explore-btn">Explore more</a>
        </div>
        <div className="customers">
            <h2>Our Customers</h2>
            <div className="customers-row">
                <div className="customers-col">
                    <img src={Adobe} alt="" />
                </div>
                <div className="customers-col">
                    <img src={Microsoft} alt="" />
                </div>
                <div className="customers-col">
                    <img src={Walmart} alt="" />
                </div>
                <div className="customers-col">
                    <img src={Facebook} alt="" />
                </div>
            </div>
            <div className="about">
                <h2> About us</h2>
                <p>
                    Any photograph protrays something. Every image has a story to tell. We are just a couple of 
                    bachlour students who are trying to contribute to this mothernature by capturing its beuty. 
                </p>
            </div> 
        </div>
        <div className="copyright">
            <p>
                Copyright @ 2021, company Pvt.Ltd
            </p>
        </div>
    </>
    )
}

export default Home;