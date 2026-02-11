import Image from "next/image";

const reviews = [
  {
    name: "pree.palmer",
    image: "/home/review1.jpeg",
    imageAlt: "pree.palmer testimonial",
    quote:
      '"im ngl I\'ve lost 17 lbs with it doesn\'t need to be exact it\'s pretty decent"',
  },
  {
    name: "Ordinary Tony",
    image: "/home/review2.jpg",
    imageAlt: "Ordinary Tony",
    quote: '"IVE BEEN BULKING FOR A YEAR STRAIGHT W APP FR 👏👏👏"',
  },
  {
    name: "2025weightlossa...",
    image: "/home/review3.jpeg",
    imageAlt: "2025weightlossa testimonial",
    quote:
      '"I love your app it helps me keep track of my food without overthinking everything and gives me a visual of my portions plus it\'s so aesthetic 💓"',
  },
  {
    name: "Mathias",
    image: "/home/review4.jpeg",
    imageAlt: "Mathias testimonial",
    quote: '"I started to use it yesterday and im already giving it 5⭐️"',
  },
  {
    name: "Ms Nsofor",
    image: null,
    initial: "D",
    quote:
      '"For people that want to control their calories @calai.app is the app for you 🙌🔥"',
  },
];

const cardClass =
  "w-80 bg-[#2D2934] p-8 rounded-2xl flex flex-col gap-4 hover:scale-105 transition-all duration-300 shadow-2xl border border-gray-700";

export default function ReviewsSection() {
  return (
    <section className="py-16 lg:py-40 px-4 bg-[#1E1A24] text-white">
      <div>
        <h2 className="text-center text-4xl lg:text-[48px] font-bold mb-12 lg:mb-16">
          Thousands of users talk about us
        </h2>
        <div className="max-w-6xl mx-auto flex flex-wrap gap-8 justify-center">
          {reviews.map(({ name, image, imageAlt, initial, quote }) => (
            <div key={name} className={cardClass}>
              <div className="flex items-center gap-4">
                {image ? (
                  <Image
                    src={image}
                    alt={imageAlt}
                    width={42}
                    height={42}
                    className="w-[42px] h-[42px] rounded-full object-cover"
                  />
                ) : (
                  <div className="w-[42px] h-[42px] rounded-full bg-gray-300 flex items-center justify-center shrink-0">
                    <span className="text-gray-500 text-2xl font-bold">
                      {initial}
                    </span>
                  </div>
                )}
                <p className="font-medium text-[20px]">{name}</p>
              </div>
              <p className="text-sm opacity-80">{quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
