import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


export default function Header() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
  logout();
  navigate("/login");
  };


  return (
    <header className="sticky z-50 top-0">
      <nav className="w-full h-16 bg-white flex items-center justify-between px-6">
        
        <Link to="/" className="flex items-center">
          <h2 className="text-5xl p-1.5 mt-1 font-semibold text-gray-700 font-[macondo]"><span className="text-red-600">! </span>Losers</h2>
        </Link>

        <div className="space-x-4 font-medium">
          <Link to="/" className="hover:bg-red-500 rounded-xl p-2 hover:text-amber-50">Home</Link>
          <Link to="/events" className="hover:bg-red-500 rounded-xl p-2 hover:text-amber-50">Oppertunities</Link>
          <Link to="/events/create" className="hover:bg-red-500 rounded-xl p-2 hover:text-amber-50">New Events</Link>
          <Link to="/about" className="hover:bg-red-500 rounded-xl p-2 hover:text-amber-50">About Us</Link>
          <Link to="/contact" className="hover:bg-red-500 rounded-xl p-2 hover:text-amber-50">Contact Us</Link>
        </div>

        <div className="space-x-4 font-medium">

        {user ? (
          <>
            <span className="text-gray-700">
              Hi, {user.name}
            </span>

            <button
              onClick={handleLogout}
              className="hover:bg-red-600 text-white cursor-pointer hover:rounded-2xl rounded-xl bg-red-500 p-2 hover:text-amber-50 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:bg-red-600  text-white bg-red-500 cursor-pointer hover:rounded-2xl rounded-xl p-2 hover:text-amber-50 transition">
              Login
            </Link>

            <Link to="/signup" className="hover:bg-red-600  text-white bg-red-500 cursor-pointer hover:rounded-2xl rounded-xl p-2 hover:text-amber-50 transition">
              SignUp
            </Link>
          </>
        )}

      </div>


      </nav>
    </header>
  );
}
