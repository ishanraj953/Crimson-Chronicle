import Ishan from "../assets/Ishan.jpeg"

export default function AbouteTab() {
  return (
    <section className="px-12 py-12 bg-white">
      
      <h2 className="text-4xl font-extrabold text-center text-gray-700">
        About <span className="text-red-500">Us</span>
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">
            Turning Setbacks into Strength.
          </h3>

          <p className="text-gray-600 leading-relaxed text-lg">
            Losers is a platform built for dreamers, learners, and creators who refuse to give up.
            We believe that failure is not the end — it’s the foundation of success.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://royalsoftsolutions.com/wp-content/uploads/2023/04/125606-contact-us.gif"
          />
        </div>
      </div>



      <div className="mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full">
            <img src="https://cdn.dribbble.com/users/1539887/screenshots/15388855/media/89e7a326b6eee8d7bb0f4cfba4a05c40.jpg"
            alt="About Us" 
            // className="w-1/2 h-1/2"
            />
        </div>
        <div>
         <h2 className="text-4xl font-extrabold mb-8 text-gray-700">
            Who We <span className="text-red-500">Are?</span>
        </h2>
            <p className="text-gray-600 leading-relaxed text-lg w-full">
                We are a community-driven platform designed to help students, developers, and young professionals discover real-world opportunities such as hackathons, internships, competitions, and events.

                Losers was created for those who have faced rejection, self-doubt, and setbacks — and are ready to rise stronger.
            </p>
            <br />
            <p className="text-gray-800 leading-relaxed text-lg w-full">Our Platform helps to find:</p>
            <br />
            <p className="text-gray-700 leading-relaxed text-lg w-full">
                🚀 Hackathons & Coding Competitions
            </p>
            <p className="text-gray-700 leading-relaxed text-lg w-full">
                🎯 Internship & Job Opportunities
            </p>
            <p className="text-gray-700 leading-relaxed text-lg w-full">
                📅 Tech & Career Events
            </p>
            <p className="text-gray-700 leading-relaxed text-lg w-full">
                📚 Learning Resources
            </p>
            <p className="text-gray-700 leading-relaxed text-lg w-full">
                🤝 A Supportive Community
            </p>
        </div>
      </div>


      <section className="mx-auto flex flex-col md:flex-row p-12 items-center gap-12 mt-20">
            <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800">
            About <span className="text-red-500">Me</span>
          </h2>

          <p className="text-gray-600 leading-relaxed text-lg mb-4">
            Hi, I’m <span className="font-semibold">Ishan Raj</span>, a Computer Science Engineering student
            and a passionate web developer.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            I believe that failure is not the end — it’s the beginning of growth. Like many others,
            I’ve faced setbacks, confusion, and self-doubt, but I chose to keep learning and improving.
          </p>

          <p className="text-gray-600 leading-relaxed mb-4">
            I created <span className="font-semibold">Losers</span> to help students and developers
            discover opportunities like hackathons, internships, and events that can shape their future.
          </p>
        </div>
         <div className="w-full flex justify-center">
          <img
            src={Ishan}
            alt="Ishan Raj"
            className="h-xs w-xs rounded-full"
          />
        </div>
      </section>
    </section>
  );
}
