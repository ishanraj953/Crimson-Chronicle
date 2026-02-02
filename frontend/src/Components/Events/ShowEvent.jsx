import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventBanner from "./EventBanner";
import CustomizedTimeline from "./CustomizedTimeline";
import RewardCard from "./RewardCard";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export default function ShowEvent() {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/events/${id}`)
      .then(res => res.json())
      .then(e => setEvent(e));
        console.log(event);
  }, [id]);

  const onDelete = async (id) => {
  try {

    const token = localStorage.getItem("token");

    if (!token) {
      alert("Please login first");
      return;
    }

    const res = await fetch(`http://localhost:5000/events/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: token
      }
    });

    if (!res.ok) {
      alert("Delete failed");
      return;
    }

    window.location.href = "/events";

  } catch (err) {
    console.log(err);
  }
};



  if (!event) return <p>Loading...</p>;

  return (
          <section className="flex flex-col items-center p-8">
            <div className="cursor-pointer">
              <EventBanner img={event.img}/>
            </div>
            <section className="mt-8 w-225 rounded-3xl shadow-xl p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl text-gray-800 font-extrabold">{event.title}</h1>

            
          </div>

        <p className=" text-gray-800 mt-3">{event.organisation}</p>

        <div className="text-gray-600 flex flex-row items-center justify-between">
  
          {/* Left Info */}
          <div className="flex flex-row items-baseline">
            <div className="w-fit p-1 rounded mt-2 border-gray-400">
              <i className="fa-solid fa-people-group bg-teal-50"></i>
            </div>
            <p className="m-1">Team Size:</p>
            <p>{event.teamSize.min}-{event.teamSize.max}</p>
          </div>

          {/* Register Button */}
          <div>
          <div className="flex flex-row gap-2">
          <button className="px-6 py-2 rounded-xl mb-1.5 cursor-pointer 
            bg-red-500 text-white font-bold 
            hover:bg-red-600 transition">
            Register
          </button>
          <button
          onClick={() => onDelete(id)}
          className="px-6 py-2 rounded-xl mb-1.5 cursor-pointer 
              bg-red-500 text-white font-bold 
              hover:bg-red-600 transition"
          >Delete</button>
        </div>
        <div>
          <Link to={`/events/${id}/edit`}>
          <button 
          className="px-6 py-2 w-full rounded-xl mb-1.5 cursor-pointer 
            bg-red-500 text-white font-bold 
            hover:bg-red-600 transition">
            Edit Oppertunity
          </button>
          </Link>
        </div>
        </div>
        </div>

        <div className="h-8"></div>
          <h1 className="text-3xl text-gray-700 font-extrabold"><span className="text-red-500">Stages</span> & TimeLine</h1>
        <div className="bg-white shadow mt-2 p-6 rounded-xl ">
            <CustomizedTimeline />
        </div>

        <div className="p-6 rounded-xl ">
            <h1 className="text-3xl text-gray-700 font-extrabold"><span className="text-red-500">About</span> Oppertunity</h1>
            <div className="text-gray-700 mt-8">
              <h2 className="mt-3 text-gray-900 font-bold">About:</h2>
              <p className="m-3">{event.description}</p>
              <p className="m-3">Visit our Website: <a href={event.website} className="hover:text-red-400">{event.organisation}</a></p>
              <h2 className="mt-3 text-gray-900 font-bold">Participation Type:</h2>
              <p className="m-3">{(event.participationType).toUpperCase()}</p>
              <h2 className="mt-3 text-gray-900 font-bold">Mode:</h2>
              <p className="m-3">{(event.mode).toUpperCase()}</p>
              <h2 className="mt-3 text-gray-900 font-bold">Venue:</h2>
              <p className="m-3">{(event.venue).toUpperCase()}</p>
            </div>
        </div>

        <div className="mt-8">
            <h1 className="text-3xl text-gray-700 font-extrabold"><span className="text-red-500">Prizes</span> & Rewards</h1>
            <RewardCard reward={event.reward.first}/>
            <RewardCard reward={event.reward.second}/>
            <RewardCard reward={event.reward.third}/>
        </div>
        <div className="p-6 rounded-xl ">
            <h1 className="text-3xl text-gray-700 font-extrabold"><span className="text-red-500">Feedback</span> & Ratings</h1>
        </div>
      </section>
    </section>
  );
}
