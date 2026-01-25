export default function LogoSlider() {
 const logos = [
  {
    img: "https://www.freepnglogos.com/uploads/javascript-png/javascript-vector-logo-yellow-png-transparent-javascript-vector-12.png",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    img: "https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png",
    url: "https://react.dev"
  },
  {
    img: "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/node_js_logo-freelogovectors.net_.png",
    url: "https://nodejs.org"
  },
  {
    img: "https://tse1.mm.bing.net/th/id/OIP.Cq3Bv0bbB4WIIekFUX3sNwHaED?rs=1&pid=ImgDetMain&o=7&rm=3",
    url: "https://expressjs.com"
  },
  {
    img: "https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Free-Image.png",
    url: "https://www.mongodb.com"
  },
  {
    img: "https://logospng.org/download/tailwind-css/tailwind-css-1024.png",
    url: "https://tailwindcss.com"
  },
  {
    img: "https://mui.com/static/logo.png",
    url: "https://mui.com"
  },
  {
    img: "https://static.vecteezy.com/system/resources/previews/025/732/714/original/google-fonts-logo-icon-free-vector.jpg",
    url: "https://fonts.google.com"
  },
  {
    img: "https://1.bp.blogspot.com/-9jhEkn_uApY/Xxx35kNQB1I/AAAAAAAAMKk/8Jrv75ClwUoh8bkUncTzOJIyH2rU6RkjQCLcBGAsYHQ/s1280/jwt.png",
    url: "https://www.jwt.io/"
  }
];


  return (
    <section className="w-full flex flex-col items-center justify-center">
      <h1 className="text-3xl font-extrabold text-gray-700 mb-4">
        <span className="text-red-500">Technologies</span> Used
      </h1>

      <div className="max-w-10/12 overflow-hidden bg-white py-6">
        <div className="flex w-max gap-12 logo-scroll cursor-pointer">
          {[...logos, ...logos].map((logo, i) => (
            <a
              href={logo.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={logo.img}
                alt="Technology logo"
                className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition"
              />
            </a>
          ))}
          {[...logos, ...logos].map((logo, i) => (
          <a
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={logo.img}
              alt="Technology logo"
              className="h-12 w-auto object-contain opacity-70 hover:opacity-100 transition"
            />
          </a>
          ))}
        </div>
        
      </div>
    </section>
  );
}
