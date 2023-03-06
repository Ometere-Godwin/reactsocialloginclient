import Home from "./components/home/Home";
import Navbar from "./components/navBar/Navbar";
import Login from "./pages/login/Login";
import Post from "./pages/post/Post";
import './query.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      fetch('http://localhost:5000/auth/login/success', {
        method: "GET",
        credentials: 'include',
        headers: {
          Accept: "applicationnn/json",
          "Content-Type": 'application/json',
          "Access-control-Allow-Credentials": true,
        },
      }).then ((response) => {
        if (response.status === 200) return response.json();
        throw new Error("Authentification has been failed")
      }).then(resObject =>  {
        setUser(resObject.user);
      }).catch((err) => {
        console.log(err);
      });
    }
    getUser();
  },[]);

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar user = {user}/>
        <Routes>
          <Route path = '/' element = {<Home/>} />
          <Route path = '/login' element = {user ? <Navigate to = '/'/> : <Login/>} />
          <Route path = '/post/:id' element = {user ? <Post/> : <Navigate to = '/login'/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
