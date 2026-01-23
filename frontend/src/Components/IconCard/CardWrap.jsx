import IconCard from "./IconCard";
import CodeIcon from '@mui/icons-material/Code';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LaptopIcon from '@mui/icons-material/Laptop';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import { ReactTyped } from "react-typed";
export default function CardWrap() {
    return (
        <section className="flex flex-col justify-center mt-10">
             <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-800">For <span className="text-red-600">
                     <ReactTyped
                       strings={["Hackethons", "Internships", "Events","Bootcamps"]}
                       typeSpeed={80}
                       backSpeed={60}
                       loop
                     />
                   </span></h2>
            <div className="flex flex-row justify-center gap-10">
            <IconCard icon={<CodeIcon fontSize="large" />} link={"/events"} bgcolor={"rgb(90, 156, 181)"} title={"Hackathon"} desc={"Participate in various hackathons and upskill yourself."}/>
            <IconCard icon={<LaptopIcon fontSize="large" />} link={"/events"} bgcolor={"green"} title={"Internships"} desc={"Get the right internships by upscaling yourself."}/>
            <IconCard icon={<EmojiEventsIcon fontSize="large" />} link={"/events"} bgcolor={"rgb(250, 206, 104)"} title={"Event"} desc={"Get connected with the community and connect with Innovators."}/>
            <IconCard icon={<LightbulbIcon fontSize="large" />} link={"/events"} bgcolor={"rgb(209, 133, 92)"} title={"Bootcamps"} desc={"Learn new skills with industry experts in short time."}/>
            </div>
        </section>
    )
}