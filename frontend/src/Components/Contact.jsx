export default function Contact() {
  return (
    <section
      id="contact"
      className="flex items-center justify-center px-6 py-12"
    >
      <div className="w-full md:w-4/5 lg:w-3/4 p-8 bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center">
        
        <div className="w-full md:w-1/2 pr-0 md:pr-8">
          <h1 className="text-4xl font-extrabold mb-8 font-roboto text-gray-800 text-center md:text-left">
            Contact Us
          </h1>
        <form action="/submit-contact" method="post">
          <div className="relative mb-4">
            <i className="fa-solid fa-user absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 pl-10 rounded-2xl shadow-md outline-none text-gray-700"
            />
          </div>

          <div className="relative mb-4">
            <i className="fa-solid fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 pl-10 rounded-2xl shadow-md outline-none text-gray-700"
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="mb-4 h-28 outline-none resize-none shadow-md p-4 w-full bg-white rounded-2xl text-gray-700"
          ></textarea>
        
          <button className="w-full font-semibold text-white bg-blue-400 rounded-2xl h-10 cursor-pointer hover:bg-blue-500 active:scale-[0.99] transition">
            Submit
          </button>
        </form>
        </div>

        <div className="w-3/4 md:w-1/2 mt-10 md:mt-0 flex items-center justify-center">
          <img
            className="w-full max-w-md drop-shadow-lg"
            src="https://cdni.iconscout.com/illustration/premium/thumb/contact-us-illustration-download-in-svg-png-gif-file-formats--fill-detail-filling-customer-service-finance-app-pack-people-illustrations-3766183.png"
            alt="Contact Us"
          />
        </div>

      </div>
    </section>
  );
}
