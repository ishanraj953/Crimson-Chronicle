import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import Button from "../Button";

export default function EventTab() {

  const [events, setEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [loader, setLoader] = useState(6);


  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(res => res.json())
      .then(data => setEvents(data))
      .catch(err => console.error("FETCH ERROR:", err));
  }, []);

  useEffect(() => {
    setLoader(6);
  }, [selectedCategory]);


  const filteredCategory = events
    .filter(e =>
      selectedCategory === "all" ? true : e.type === selectedCategory
    )

  const eventsLoader = () => setLoader(prev => prev + 6);
  const eventsReducer = () => setLoader(6);

  return (
    <section className="flex flex-col items-center justify-center">

      <h1 className="text-4xl text-gray-700 font-bold font-mono underline decoration-orange-400 underline-offset-4 m-1 mt-6">
        Oppertunity
      </h1>

      <div className="flex gap-5 m-5">
        {["all", "hackathon", "event", "workshop", "internship"].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`hover:bg-red-400 hover:text-white p-2 rounded-2xl border border-gray-200 cursor-pointer ${
              selectedCategory === cat ? "bg-red-400 text-white" : "bg-white"
            }`}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-18 m-5">
        {filteredCategory
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, loader)
          .map(e => (
            <EventCard
              key={e._id}
              _id={e._id}
              title={e.title}
              desc={e.description}
              img={e.img}
            />
          ))}
      </div>

      {loader < filteredCategory.length && (
        <Button onClick={eventsLoader} desc={"Load More"} />
      )}

      {loader > filteredCategory.length && (
        <Button onClick={eventsReducer} desc={"Show Less"} />
      )}

    </section>
  );
}
