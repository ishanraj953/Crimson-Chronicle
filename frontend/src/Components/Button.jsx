import { Link } from "react-router-dom";

export default function Button({ onClick= () => {},link = "#", desc }) {
  return (
    <button onClick={onClick} className="cursor-pointer px-4 py-2 mt-6 bg-blue-600 text-white rounded hover:bg-blue-700">
      <Link to={link}>{desc}</Link>
    </button>
  );
}
