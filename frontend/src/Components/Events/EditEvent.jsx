import { useState, useEffect } from "react";
import Button from "../Button";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditEvent() {
const navigate = useNavigate();
  const { id } = useParams();

  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState({
    title: "",
    organisation: "",
    type: "",
    website: "",
    description: "",
    participationType: "",
    teamMin: "",
    teamMax: "",
    mode: "",
    img: "",
    venue: "",
    rewardFirst: "",
    rewardSecond: "",
    rewardThird: "",
  });

  useEffect(() => {
    fetch(`http://localhost:5000/events/${id}`)
      .then(res => res.json())
      .then(e => {
        setEvent(e);
        setDetails({
          title: e.title || "",
          organisation: e.organisation || "",
          type: e.type || "",
          website: e.website || "",
          description: e.description || "",
          participationType: e.participationType || "",
          teamMin: e.teamSize?.min || "",
          teamMax: e.teamSize?.max || "",
          mode: e.mode || "",
          img: e.img || "",
          venue: e.venue || "",
          rewardFirst: e.reward?.first || "",
          rewardSecond: e.reward?.second || "",
          rewardThird: e.reward?.third || "",
        });
      });
  }, [id]);

  const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login first");
    navigate("/login");
    return;
  }

  const payload = {
    title: details.title,
    organisation: details.organisation,
    type: details.type,
    website: details.website,
    img: details.img,
    description: details.description,
    participationType: details.participationType,
    teamSize: {
      min: Number(details.teamMin),
      max: Number(details.teamMax),
    },
    mode: details.mode,
    venue: details.venue,
    reward: {
      first: Number(details.rewardFirst),
      second: Number(details.rewardSecond),
      third: Number(details.rewardThird),
    },
  };

  const res = await fetch(`http://localhost:5000/events/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: token
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    alert("Failed to update event");
    return;
  }

  alert("Event updated successfully!");
  navigate("/events");
};


  if (!event) return <p className="text-center mt-20">Loading...</p>;

    return (
        <section className="px-3 py-20">
            <div className="flex flex-col md:flex-row justify-center w-full">
                <div className="w-full flex flex-col justify-center items-center">
                <h2 className="text-4xl mb-10 font-extrabold text-gray-700">Add <span className="text-red-500">{event.title}</span></h2>
                    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
                        <div className="flex flex-col">
                        <label htmlFor="text" className="text-gray-600 mb-1">Opportunity Title : </label>
                        <input type="text" 
                        placeholder="Title"
                        value={details.title}
                        onChange={(e) => setDetails({...details, title: e.target.value})}
                        className="bg-gray-200 rounded-2xl p-2 text-center  outline-none focus:ring-2 focus:ring-blue-400"/>
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="text" className="text-gray-600 mb-1">Organisation Name: </label>
                        <input type="text" 
                        placeholder="Organisation Name" 
                        value={details.organisation}
                        onChange={(e) => setDetails({...details, organisation: e.target.value})}
                        className="bg-gray-200 text-center rounded-2xl p-2 outline-none focus:ring-2 focus:ring-blue-400"/>
                        </div>
                        <div className="flex flex-col">
                        <label className="text-gray-600 mb-1">
                            Opportunity Type:
                        </label>

                        <select
                            value={details.type}
                            onChange={(e) => setDetails({...details, type: e.target.value})}
                            className="bg-gray-200 text-center cursor-pointer rounded-2xl p-2 outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            <option value="">Select Opportunity</option>
                            <option value="internship">Internship</option>
                            <option value="hackathon">Hackathon</option>
                            <option value="event">Event</option>
                            <option value="workshop">Workshop</option>
                        </select>
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="websiteUrl" className="text-gray-600 mb-1">Company Website URL: </label>
                        <input 
                        type="text" 
                        value={details.website}
                        onChange={(e) => setDetails({...details, website: e.target.value})}
                        placeholder="Company Website URL" className="bg-gray-200 text-center rounded-2xl p-2 outline-none focus:ring-2 focus:ring-blue-400"/>
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="img" className="text-gray-600 mb-1">Banner URL: </label>
                        <input 
                        type="text" 
                        value={details.img}
                        onChange={(e) => setDetails({...details, img: e.target.value})}
                        placeholder="Company Website URL" className="bg-gray-200 text-center rounded-2xl p-2 outline-none focus:ring-2 focus:ring-blue-400"/>
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="text" className="text-gray-600 mb-1">About the Opportunity: </label>
                        <textarea 
                        value={details.description}
                        onChange={(e) => setDetails({...details, description: e.target.value})}
                        placeholder="About the Opportunity" 
                        className="bg-gray-200 h-96 text-start rounded-2xl p-2 outline-none focus:ring-2 focus:ring-blue-400"/>
                        </div>
                        <div className="flex flex-col">
                        <label htmlFor="text" className="text-gray-600 mb-1">Participation Type: </label>
                         <div className="flex gap-6 bg-gray-200 rounded-2xl p-3 justify-center">
                        <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="mode"
                            value="individual"
                            onChange={(e) => setDetails({ ...details, participationType: e.target.value })}
                            className="accent-blue-500"
                        />
                        Individual
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="mode"
                            value="team participation"
                            onChange={(e) => setDetails({ ...details, participationType: e.target.value })}
                            className="accent-blue-500"
                        />
                        Team Participation
                        </label>
                        </div>
                        </div>

                        <div className="flex flex-col">
                        <label htmlFor="text" className="text-gray-600 mb-1">Set team size: </label>
                        <div className="flex flex-row gap-3">
                        <input type="number" placeholder="Min"
                        value={details.teamMin}
                        onChange={(e) => setDetails({ ...details, teamMin: e.target.value })}
                        min={1}
                        className="bg-gray-200 text-center w-1/2 rounded-2xl p-2 outline-none focus:ring-2 focus:ring-blue-400"/>
                        <input type="number" 
                        placeholder="Max" 
                        value={details.teamMax}
                        onChange={(e) => setDetails({ ...details, teamMax: e.target.value })}
                        className="bg-gray-200 text-center w-1/2 rounded-2xl p-2 outline-none focus:ring-2 focus:ring-blue-400"/>
                        </div>
                        </div>

                        <div className="flex flex-col">
                        <label htmlFor="text" className="text-gray-600 mb-1">Mode of Opportunity: </label>
                         <div className="flex gap-6 bg-gray-200 rounded-2xl p-3 justify-center">
                        <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="mode"
                            value="online"
                            onChange={(e) => setDetails({ ...details, mode: e.target.value })}
                            className="accent-blue-500"
                        />
                        Online
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="mode"
                            value="offline"
                            onChange={(e) => setDetails({...details, mode: e.target.value})}
                            className="accent-blue-500"
                        />
                        Offline
                        </label>
                        </div>

                        <div className="flex flex-col">
                        <label htmlFor="venue" className="text-gray-600 mb-1">Venue: </label>
                        <input
                        type="text"
                        placeholder="Venue"
                        value={details.venue}
                        className="bg-gray-200 text-start rounded-2xl p-2 outline-none focus:ring-2 focus:ring-blue-400"
                        onChange={(e) => setDetails({ ...details, venue: e.target.value })}
                        />
                        </div>                        
                        <div className="flex flex-col">
                        <label className="text-gray-600 mb-1">Rewards</label>

                        <input
                            type="number"
                            placeholder="1st Prize"
                            value={details.rewardFirst}
                            onChange={(e) =>
                            setDetails({ ...details, rewardFirst: e.target.value })
                            }
                            className="bg-gray-200 rounded-2xl p-2 mb-2 text-center"
                        />

                        <input
                            type="number"
                            placeholder="2nd Prize"
                            value={details.rewardSecond}
                            onChange={(e) =>
                            setDetails({ ...details, rewardSecond: e.target.value })
                            }
                            className="bg-gray-200 rounded-2xl p-2 mb-2 text-center"
                        />

                        <input
                            type="number"
                            placeholder="3rd Prize"
                            value={details.rewardThird}
                            onChange={(e) =>
                            setDetails({ ...details, rewardThird: e.target.value })
                            }
                            className="bg-gray-200 rounded-2xl p-2 text-center"
                        />
                        </div>

                        </div>
                        <button 
                        className="bg-blue-500 rounded-2xl w-full py-2 cursor-pointer hover:bg-blue-600 text-white">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}