import HomeTitle from "./HomeTitle";

export default function Home() {
  return (
    <main className="flex items-center justify-center from-white">
      <section 
        id="home" 
        className="min-h-auto flex flex-col md:flex-row items-center justify-center w-full px-10 py-20 gap-10"
      >
        
        <div className="md:w-1/2 w-full">
          <div className="text-left">
            <HomeTitle />

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Your go-to platform for the latest news, events, and stories from around the world. 
              Stay informed and connected with Crimson Chronicle.
            </p>
          </div>

          <div className="flex gap-6">
            <button className="bg-red-600 cursor-pointer text-white px-6 py-3 rounded-lg shadow hover:bg-red-500 transition">
              Get Started
            </button>

            <button className="bg-white cursor-pointer text-red-600 border border-red-400 px-6 py-3 rounded-lg hover:bg-red-50 transition">
              Events
            </button>
          </div>
        </div>

        <div className="md:w-1/2 w-full flex items-center justify-center">
          <img 
            src="https://img.freepik.com/vecteurs-libre/illustration-du-concept-du-concepteur-du-site-web_114360-26055.jpg"
            alt="Web design illustration"
            className="object-contain w-full max-h-112.5"
            loading="lazy"
          />
        </div>

      </section>
    </main>
  );
}
