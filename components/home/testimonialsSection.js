import Image from "next/image";

const testimonials = [
  {
    href: "https://www.instagram.com/reel/DI4l3TiPJUQ/",
    ariaLabel: "View Jeremiah Jones testimonial video",
    image: "/home/jeremiah.jpg",
    imageAlt: "Jeremiah Jones testimonial",
    name: "Jeremiah Jones",
    quote:
      "Make a healthier choice for your latenight snack and use the Planify AI app to track your calories",
  },
  {
    href: "https://www.instagram.com/reel/DGrQlrhOXjy/",
    ariaLabel: "View Kadin Kerns testimonial video",
    image: "/home/jacked2.png",
    imageAlt: "Kadin Kerns testimonial",
    name: "Kadin Kerns",
    quote: "Looking good as usual and my calories are too with Planify AI 🔥",
  },
  {
    href: "https://www.instagram.com/reel/DDNnKQGSLe4/",
    ariaLabel: "View Dawson Gibbs testimonial video",
    image: "/home/dawson.png",
    imageAlt: "Dawson Gibbs testimonial",
    name: "Dawson Gibbs",
    quote:
      "Track with Planify AI app, if you're not tracking your calories while going for your goals then you're doing it all wrong.",
  },
  {
    href: "#",
    ariaLabel: "View Jeremiah Jones testimonial video",
    image: "/home/jacked3.png",
    imageAlt: "Jeremiah Jones testimonial",
    name: "Brian Wallack",
    quote: "Planify AI can literally track anything 🤯",
  },
  {
    href: "https://www.instagram.com/reel/DIojs7AszIX/",
    ariaLabel: "View Hussein Farhat testimonial video",
    image: "/home/jacked1.png",
    imageAlt: "Hussein Farhat testimonial",
    name: "Hussein Farhat",
    quote:
      "If you're tracking your calories and macros correctly with Planify AI, you can get away with eating almost anything and still get in shape as long as it matches your daily goals.",
  },
  {
    href: "https://www.instagram.com/reel/DHPBOhAJZ5C/",
    ariaLabel: "View Alex Eubank testimonial video",
    image: "/home/jacked4.png",
    imageAlt: "Alex Eubank testimonial",
    name: "Alex Eubank",
    quote:
      "Planify AI is literally the best calorie tracker. Fastest and most accurate I've ever used.",
  },
];

function TestimonialCard({ href, ariaLabel, image, imageAlt, name, quote }) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      target={href === "#" ? undefined : "_blank"}
      rel={href === "#" ? undefined : "noopener noreferrer"}
      className="block"
    >
      <div className="relative rounded-3xl overflow-hidden shadow-lg group">
        <Image
          src={image}
          alt={imageAlt}
          width={400}
          height={500}
          className="w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-black/20 backdrop-blur-md rounded-b-2xl text-white border border-[#cfcfcf79] rounded-md m-4">
          <p className="text-4xl font-bold text-blue-400 -mt-2 -mb-5">&quot;</p>
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-sm font-light opacity-90">{quote}</p>
        </div>
      </div>
    </a>
  );
}

export default function TestimonialsSection() {
  const col1 = testimonials.slice(0, 2);
  const col2 = testimonials.slice(2, 4);
  const col3 = testimonials.slice(4, 6);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[21px] mt-40 px-4 max-w-screen-xl mx-auto">
      <div className="flex flex-col gap-[21px]">
        {col1.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
      <div className="md:-translate-y-20 translate-y-0 flex flex-col gap-[21px]">
        {col2.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
      <div className="flex flex-col gap-[21px]">
        {col3.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </div>
  );
}
