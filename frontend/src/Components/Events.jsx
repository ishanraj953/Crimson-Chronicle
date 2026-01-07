import { useState, useEffect } from "react";
import EventCard from "./EventCard";
import {Link} from 'react-router-dom'

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
        <section id="events" className="px-6 py-12 bg-gray-100">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">Upcoming Events</h2>
            <div className="ml-4 grid grid-cols-3 gap-4">
            {
                events
                .sort((a,b) => new Date(b.date) - new Date(a.date))
                .slice(0,3).map(e => (
                    <EventCard
                        key={e._id}
                        title={e.title}
                        desc={e.description}
                        img={e.img}
                    />
                ))
            }
            </div>
            <div className="flex justify-center mt-8">
                <button className=" cursor-pointer px-4 py-2 mt-6 bg-blue-600 text-white rounded hover:bg-blue-700">
                    <Link to="/events">Load More</Link>
                </button>
            </div>
        </section>
    );
}