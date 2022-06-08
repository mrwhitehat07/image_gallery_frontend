import React from "react";
import "./Home.css";
import Logo from "../assets/image111.jpg";

const Dashboard = () => {
    return (
        <>
            <div className="">
                <div className="navbar">
                    <div className="logo">
                        <img src={Logo} alt=""/>
                    </div>
                </div>
                <div className="container">
                    
                    <form className="Signup_box">
                        <h1>
                            Add Photo 
                        </h1>
                        <label>Title</label> <br />
                        <input 
                            type="text" 
                            className="input box" 
                            placeholder="Title"
                            // value={firstname}
                            // required
                            // onChange={(e) => setFirstname(e.target.value)}
                        /> <br />
                        <label>Description</label> <br />
                        <input 
                            type="text" 
                            placeholder="Description"
                            className="input box"
                            required
                            // value={lastname}
                            // onChange={(e) => setLastname(e.target.value)}
                        /> <br />
                        <label>Price</label> <br />
                        <input 
                            type="number" 
                            placeholder="Price"
                            // required
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                        /> <br />
                            <label>category</label> <br />
                            <input 
                                type="text" 
                                placeholder="Category"
                                // required
                                // value={password}
                                // onChange={(e) => setPassword(e.target.value)}
                            /> <br />
                            <label>Image</label> <br />
                            <input 
                                type="file" 
                                placeholder="image"
                                // value={phone}
                                // required
                                // onChange={(e) => setPhone(e.target.value)}
                            /> <br />
                            <input type="submit" value="Submit"  />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Dashboard;