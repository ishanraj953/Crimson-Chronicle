import { useEffect, useState } from "react"
import EventCard from "./EventCard"
import Button from "./Button"

export default function HackethonTab(){

   const [events, setEvents] = useState([]);
   const [loader, setLoader] = useState(6);

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

    const eventsLoader = () => setLoader(prev => prev + 6);

    const eventsReducer = () => setLoader(prev => prev = 6);

    return(

        <section className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-gray-700 font-extrabold m-1 mt-2.5">Explore <span className="text-red-500">Hackethons</span></h1>
            <div className=" grid grid-cols-3 gap-18 m-5">
                {
                events
                .sort((a,b) => new Date(b.date) - new Date(a.date))
                .slice(0,loader)
                .map(e => (
                    <EventCard
                        _id={e._id}
                        title={e.title}
                        desc={e.description}
                        img={e.img}
                    />
                ))
            }
            </div>
            {loader < events.length &&
            <div>
                <Button onClick={eventsLoader} desc={"Load More"}/>
            </div>
            }
            {loader > events.length &&
            <div>
                <Button onClick={eventsReducer} desc={"Show Less"}/>
            </div>
            }

        </section>
    )
}