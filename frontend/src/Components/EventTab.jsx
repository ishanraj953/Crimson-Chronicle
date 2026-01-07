import { useEffect, useState } from "react"
import EventCard from "./EventCard"

export default function EventTab(){

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
    return(

        <section className="flex flex-wrap justify-center">
            <div className=" grid grid-cols-3 gap-18 m-5">
                {
                events.map(e => (
                    <EventCard
                        key={e._id}
                        title={e.title}
                        desc={e.description}
                        img={e.img}
                    />
                ))
            }
            </div>
        </section>
    )
}