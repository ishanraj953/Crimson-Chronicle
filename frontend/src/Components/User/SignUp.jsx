import Button from "../Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/register",
        { name, email, password }
      );

      alert("Registration successful!");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <section className="px-3 py-20">
      <div className="flex flex-col md:flex-row justify-center w-full">

        <div className="w-full">
          <img 
            src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-27096.jpg"
            alt="signup"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-center">

          <h2 className="text-4xl mb-10 font-extrabold text-gray-700">
            Sign<span className="text-red-500">Up</span>🔒
          </h2>

          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">

            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">Enter your Name:</label>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-200 rounded-2xl p-2 text-center outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">Enter your Email:</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-200 rounded-2xl p-2 text-center outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-600 mb-1">Enter your Password:</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-200 text-center rounded-2xl p-2 outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button className="bg-blue-500 rounded-2xl w-full py-2 cursor-pointer hover:bg-blue-600 text-white">
              Submit
            </button>

          </form>

          <Link to={"/login"} className="mt-2">
            <span>Already have an account?</span>
          </Link>

        </div>

      </div>
    </section>
  );
}
