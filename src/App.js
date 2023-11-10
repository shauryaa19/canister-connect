import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Profile from "./components/Profile"
import Jobs from "./components/Jobs"
import EmployerForm from './components/EmployerForm';
import { JobsProvider } from './components/JobContext';

export default function App() {
  return (
    <JobsProvider>
      <Router>
        <Header />
        
        <Routes>
          <Route path="/" element= {<Home />} />
          <Route path="/about" element= {<AboutUs />} />
          <Route path="/contact" element= {<ContactUs />} />
          <Route path="/profile" element= {<Profile />} />
          <Route path="/jobs" element= {<Jobs />} />
          <Route path="/projects" element= {<EmployerForm />} />
        </Routes>

        <Footer />
      </Router>
    </JobsProvider>
  )
}