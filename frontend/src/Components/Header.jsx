import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky z-50 top-0">
      <nav className="w-full h-16 bg-white flex items-center justify-between px-6">
        <div>
          <h1 className="text-2xl font-bold">Crimson Chronicle</h1>
        </div>
        <div className="space-x-4">
          <a className="hover:text-red-600" href="#home">Home</a>
          <a className="hover:text-red-600" href="#about">About Us</a>
          <a  className="hover:text-red-600" href="#home">Events</a>
          <a className="hover:text-red-600" href="#contact">Contact Us</a>
        </div>
      </nav>
    </header>
  );
}
