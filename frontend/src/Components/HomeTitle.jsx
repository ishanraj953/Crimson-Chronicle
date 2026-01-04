import { ReactTyped } from "react-typed";

export default function HomeTitle() {
  return (
    <h1 className="text-5xl mb-5 font-extrabold ">
      Welcome to{" "}
      <span className="text-red-600">
        <ReactTyped
          strings={["Crimson Chronicle", "Your Daily News Hub", "Trusted. Bold. Independent."]}
          typeSpeed={80}
          backSpeed={60}
          loop
        />
      </span>
    </h1>
  );
}