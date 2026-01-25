import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EventsRoute from "./pages/EventsRoute";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import EventRoute from "./pages/EventRoute";
import AboutRoute from "./pages/AbouteRoute";
import LoginRoute from "./pages/LoginRoute";
import SignUpRoute from "./pages/SignUpRoute";
import NewEventRoute from "./pages/NewEventRoute";
import EditRoute from "./pages/EditRoute";


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
        <Route path="/login" element={<LoginRoute/>}/>
        <Route path="/signup" element={<SignUpRoute/>}/>
        <Route path="/events/create" element={<NewEventRoute/>}/>
        <Route path="/events/:id/edit" element={<EditRoute/>}/>
      </Routes>
      <Footer/>
      </>
    )
}