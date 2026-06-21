import { useState } from "react";
import {motion} from "framer-motion";
import "./App.css"
 
import{
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App(){
  const [darkMode,SetDarkMode]=useState(true);
  return(
    <BrowserRouter>
    <motion.div className="soniya"initial={{opacity:0,y: -50}}
    animate={{opacity: 1, y:0}}
    transition={{duration:1}}>
      <nav>
        <button onClick={()=>SetDarkMode(!darkMode)}className="mode-btn">{darkMode ?"Light" :"Dark"}

        </button>
        <h1 className="logo">Soniya.Developer</h1>
        <div className='links'>
         
          <Link to="/">Home</Link>

          <Link to="/about">About</Link>
          <Link to='/projects'>Projects</Link>
          <Link to='/contact'>Contact</Link>

        </div>
      </nav>
      <section className="hero"></section>
      
        
      
        

     
    
    </motion.div>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>}/>
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />


      
    </Routes>
    </BrowserRouter>
  );
}
      