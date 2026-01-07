import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EventRoute from "./pages/EventRoute";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";


export default function App(){
    return(
      <>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/events" element={<EventRoute/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </>
    )
}