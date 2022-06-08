import React, { useEffect, useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import axiosInstance from "./configs/axios.config";
import About from './pages/About';
import Dashboard from "./pages/Dashboard";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Service from './pages/Services';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const token = localStorage.getItem("token")
  const cart = localStorage.getItem("cart")

  async function getUser() {
    const res = await axiosInstance.get('/users/profile',
      { 
        headers: {
          "Authorization": "Bearer " + localStorage.getItem("token")
        }
      }
    );
    if (res.status === 200) {
      setUser(res.data);
    }
  }

  useEffect(() => {
    if (token) {
      getUser();
    } else {
      setUser(null);
    }
    if (!cart) {
      localStorage.setItem("cart", "[]")
    }
  }, [])
  return (
    <div className="app">
      <UserContext.Provider value={{ user: user }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' exact element={<Home user={user}/>} />
            <Route path='/services' element={<Service user={user}/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/aboutus' element={<About user={user} />} />
            <Route path='/register' element={<Register/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
