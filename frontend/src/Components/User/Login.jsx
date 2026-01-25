import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";



export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const res = await axios.post(
        "http://localhost:5000/login",
        { email, password }
        );

        // save user + token globally
        login(res.data.user, res.data.token);

        navigate("/"); // go to home
    } catch (err) {
        alert(err.response?.data?.message || "Login failed");
    }
    };


    return (
        <section className="px-3 py-20">
            <div className="flex flex-col md:flex-row justify-center w-full">
                <div className="w-full">
                    <img 
                    src="https://static.vecteezy.com/system/resources/previews/006/912/004/original/secure-login-and-sign-up-concept-illustration-vector.jpg"
                    alt="login" />
                </div>
                <div className="w-full flex flex-col justify-center items-center">
                <h2 className="text-4xl mb-10 font-extrabold text-gray-700">Log<span className="text-red-500">In</span>🔑</h2>
                    <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
                        <div className="flex flex-col">
                        <label htmlFor="email" className="text-gray-600 mb-1">Enter your Email: </label>
                        <input type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="bg-gray-200 rounded-2xl p-2 text-center  outline-none focus:ring-2 focus:ring-blue-400"/>
                        </div>


                        <div className="flex flex-col">
                        <label htmlFor="password" className="text-gray-600 mb-1">Enter your Password: </label>
                        <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password" 
                        className="bg-gray-200 text-center rounded-2xl p-2 outline-none focus:ring-2 focus:ring-blue-400"/>
                        </div>

                        <button className="bg-blue-500 rounded-2xl w-full py-2 cursor-pointer hover:bg-blue-600 text-white">Submit</button>
                    </form>
                    <Link to={"/signup"} className="mt-2">
                        <span>Don't have account?</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}