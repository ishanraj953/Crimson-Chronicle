import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventBanner from "./EventBanner";
import CustomizedTimeline from "./CustomizedTimeline";
import RewardCard from "./RewardCard";

export default function ShowEvent() {
  const [event, setEvent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/events/${id}`)
      .then(res => res.json())
      .then(e => setEvent(e));
        console.log(event);
  }, [id]);

  if (!event) return <p>Loading...</p>;

  return (
          <section className="flex flex-col items-center p-8">
            <div className="cursor-pointer">
              <EventBanner />
            </div>
            <section className="mt-8 w-225 rounded-3xl shadow-xl p-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl text-gray-800 font-extrabold">{event.title}</h1>

            
          </div>

        <p className=" text-gray-800 mt-3">Indian Institute of Technology (IIT), Kharagpur</p>

        <div className="text-gray-600 flex flex-row items-center justify-between">
  
          {/* Left Info */}
          <div className="flex flex-row items-baseline">
            <div className="w-fit p-1 rounded mt-2 border-gray-400">
              <i className="fa-solid fa-people-group bg-teal-50"></i>
            </div>
            <p className="m-1">Team Size:</p>
            <p>1-4</p>
          </div>

          {/* Register Button */}
          <button className="px-6 py-2 rounded-xl mb-1.5 cursor-pointer 
            bg-red-500 text-white font-bold 
            hover:bg-red-600 transition">
            Register
          </button>

        </div>

        <div className="h-8"></div>
          <h1 className="text-3xl text-gray-700 font-extrabold"><span className="text-red-500">Stages</span> & TimeLine</h1>
        <div className="bg-white shadow mt-2 p-6 rounded-xl ">
            <CustomizedTimeline />
        </div>
        <div className="mt-8">
            <h1 className="text-3xl text-gray-700 font-extrabold"><span className="text-red-500">Prizes</span> & Rewards</h1>
            <RewardCard />
            <RewardCard />
            <RewardCard />
        </div>
        <div className="p-6 rounded-xl ">
            <h1 className="text-3xl text-gray-700 font-extrabold"><span className="text-red-500">Feedback</span> & Ratings</h1>
        </div>
      </section>
    </section>
  );
}
