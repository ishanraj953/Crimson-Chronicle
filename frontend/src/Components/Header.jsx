import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky z-50 top-0">
      <nav className="w-full h-16 bg-white flex items-center justify-between px-6">
        <div>
          <h1 className="text-2xl font-bold">Crimson Chronicle</h1>
        </div>
        <div className="space-x-4">
          <a className="hover:text-red-600"><Link to="/">Home</Link></a>
          <a className="hover:text-red-600"><Link to="/about">About Us</Link></a>
          <a  className="hover:text-red-600"><Link to="/events">Events</Link></a>
          <a className="hover:text-red-600"><Link to="/contact">Contact Us</Link></a>
        </div>
      </nav>
    </header>
  );
}
