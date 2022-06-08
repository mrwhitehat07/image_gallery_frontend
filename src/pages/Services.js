import React, { useEffect, useState } from "react";
import Logo from "../assets/image111.jpg";
import axiosInstance from "../configs/axios.config";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({user}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
      async function getImages () {
          const res = await axiosInstance.get("/images/");
          if (res.status === 200) {
              setImages(res.data)
          }
      }
      getImages();
    }, [])
    

    return (
        <>
            <div className="banner">
                <div className="navbar"> 
                    <div className="logo">
                        <img src={Logo} alt="" />
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
                        <div className="banner-text">
                            <h1>
                                Royalty free stock photo
                            </h1>
                            <p>DSBP Photography</p>
                        </div>
                    </nav>
                </div>
            </div>
            <h2>
                Categories
            </h2>
            <h3>History</h3>
            {
                images.map((item, index) => (
                    <div className="row" key={index}>
                        <div className="column" key={index}>
                            <img src={item.path} alt={"image-"+ index} />
                            <button className="btn">Add to Cart</button>
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default Service;