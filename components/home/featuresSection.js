import Image from "next/image";
import { useState } from "react";

const features = [
  {
    title: "Track Your Food With Just a Picture",
    description:
      "Snap a photo with Planify AI, and your phone's depth sensor calculates food volume. Our AI then analyzes and breaks down your meal to determine calories, protein, carbs, and fat.",
    image: "/home/analyzed.png",
    imageAlt: "Track Your Food With Just a Picture preview",
  },
  {
    title: "Search Our Database of over 1 million foods",
    description:
      "Quickly find and log foods from our extensive database. Search by name, brand, or scan barcodes for instant nutritional information.",
    image: "/home/search-food-db.png",
    imageAlt: "Search Our Database of over 1 million foods preview",
  },
  {
    title: "Complete Progress Tracking and AI suggestions",
    description:
      "Monitor your weight, measurements, and nutrition goals. Get personalized AI suggestions to stay on track and optimize your diet.",
    image: "/home/food-db.png",
    imageAlt: "Complete Progress Tracking and AI suggestions preview",
  },
  {
    title: "Keep track of your water and daily exercise",
    description:
      "Log your water intake and daily exercise effortlessly. Planify AI helps you stay hydrated and active, integrating seamlessly with your fitness routine.",
    image: "/home/water.png",
    imageAlt: "Keep track of your water and daily exercise preview",
  },
];

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = features[activeIndex];

  return (
    <section className="py-16 lg:py-24 px-4">
      <h2 className="text-center text-4xl mt-36 lg:text-[48px] font-medium mb-12 lg:mb-16">
        What does Planify AI include?
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
        <div className="relative mx-auto lg:mx-0">
          <Image
            id="feature-phone-img"
            src={active.image}
            alt={active.imageAlt}
            width={350}
            height={400}
            className="w-[300px] lg:w-[350px] h-auto transition-opacity duration-300 ease-in-out mx-auto"
          />
          <div
            id="feature-dots"
            className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 flex space-x-2"
          >
            {features.map((_, i) => (
              <button
                key={i}
                type="button"
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-gray-800" : "bg-gray-300"
                }`}
                aria-label={`Go to feature: ${features[i].title}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
        <div id="feature-list" className="flex flex-col gap-4 lg:gap-6">
          {features.map((feature, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                i === activeIndex
                  ? "border-black bg-gray-100 scale-105"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <h3 className="text-lg lg:text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm lg:text-base opacity-70">
                {feature.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
