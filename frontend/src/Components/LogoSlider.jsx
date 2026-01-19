export default function LogoSlider() {
  const logos = [
    "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
    "https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png",
    "https://www.liblogo.com/img-logo/no6273n555-node-js-logo-node-js-logo-nodejs-free-vector-graphic-on-liblogo.png",
    "https://tse1.mm.bing.net/th/id/OIP.Cq3Bv0bbB4WIIekFUX3sNwHaED?rs=1&pid=ImgDetMain&o=7&rm=3",
    "https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Free-Image.png",
    "https://logospng.org/download/tailwind-css/tailwind-css-1024.png",
    "https://mui.com/static/logo.png",
    "https://static.vecteezy.com/system/resources/previews/025/732/714/original/google-fonts-logo-icon-free-vector.jpg"
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-extrabold text-gray-700 mb-4">
        <span className="text-red-500">Technologies</span> Used
      </h1>

      <div className="max-w-10/12 overflow-hidden bg-white py-6">
        <div className="flex w-max gap-12 logo-scroll cursor-pointer">
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Technology logo"
              className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition"
            />
          ))}
          {[...logos, ...logos].map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Technology logo"
              className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition"
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}
