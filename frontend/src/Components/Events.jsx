import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import {Link} from 'react-router-dom'
import Button from "./Button";

export default function Events() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
    fetch("http://localhost:5000/")
        .then(res => {
        return res.json();
        })
        .then(data => {
        setEvents(data);
        })
        .catch(err => console.error("FETCH ERROR:", err));
    }, []);


    return (
        <section id="events" className="px-6 py-12 bg-gray-100 mt-10">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Our <span className="text-red-500">Events</span></h2>
            <div className="grid grid-cols-4 gap-5 ">
            {
                events
                .filter(e =>  e.type === "event" ? true : e.type === "event")
                .sort((a,b) => new Date(b.date) - new Date(a.date))
                .slice(0,4)
                .map(e => (
                    <EventCard
                        key={e._id}
                        _id={e._id}
                        title={e.title}
                        desc={e.description}
                        img={e.img}
                    />
                ))
            }
            </div>
            <div className="flex justify-center mt-8">
                <Button link={"/events"} desc={"Explore All Events"}/>
            </div>
        </section>
    );
}