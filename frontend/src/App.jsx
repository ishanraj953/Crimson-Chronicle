import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EventsRoute from "./pages/EventsRoute";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import EventRoute from "./pages/EventRoute";
import AboutRoute from "./pages/AbouteRoute";
import HackethonRoute from "./pages/HackethonRoute";
import LoginRoute from "./pages/LoginRoute";
import SignUpRoute from "./pages/SignUpRoute";


export default function App(){
    return(
      <>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/events" element={<EventsRoute/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/events/:id" element={<EventRoute/>}/>
        <Route path="/about" element={<AboutRoute/>}/>
        <Route path="/hackethons" element={<HackethonRoute/>}/>
        <Route path="/login" element={<LoginRoute/>}/>
        <Route path="/signup" element={<SignUpRoute/>}/>
      </Routes>
      <Footer/>
      </>
    )
}