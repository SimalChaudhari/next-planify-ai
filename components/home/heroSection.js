import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 mt-10 items-center">
      <div className="flex flex-col gap-4 w-fit mx-auto p-5 sm:p-0 -mt-10">
        {/* Loved by users badge */}
        <div className="flex items-center h-[42.5px] border border-[#c6c6c68f] rounded-full p-1.5 pr-3 text-xs gap-2 w-fit">
          <div className="flex sm:-space-x-3 -space-x-5">
            <Image
              src="/home/used-by-1.png"
              alt="Used by 1"
              width={38}
              height={38}
              className="rounded-full object-cover border-2 border-white z-10"
            />
            <Image
              src="/home/used-by-2.png"
              alt="Used by 2"
              width={38}
              height={38}
              className="rounded-full object-cover border-2 border-white z-20"
            />
            <Image
              src="/home/used-by-3.png"
              alt="Used by 3"
              width={38}
              height={38}
              className="rounded-full object-cover border-2 border-white z-30"
            />
          </div>
          <div className="font-medium sm:text-sm text-xs">
            Loved by 5M users with ⭐ 4.9 rating
          </div>
        </div>

        <h1 className="text-[52px] font-bold leading-tight">
          Meet Planify AI
          <br />
          <span className="font-medium">
            Track your calories
            <br />
            with just a picture
          </span>
        </h1>

        <p className="opacity-60 text-base font-normal max-w-[510px]">
          Meet Planify AI, the AI-powered app for easy calorie tracking. Snap a
          photo, scan a barcode, or describe your meal and get instant calorie
          and nutrient info.
        </p>

        <div className="flex sm:flex-row flex-col gap-4">
          <a
            href="https://apps.apple.com/us/app/cal-ai-calorie-tracker/id6480417616"
            className="block"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download on the App Store"
          >
            <Image
              src="/logo/app-store.jpg"
              alt="Download on the App Store"
              width={162}
              height={50}
              className="h-[50px] w-auto object-contain"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.viraldevelopment.calai"
            className="block"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get it on Google Play"
          >
            <Image
              src="/logo/googleplay.webp"
              alt="Get it on Google Play"
              width={170}
              height={60}
              className="h-[50px] w-auto object-contain"
            />
          </a>
        </div>
      </div>

      <div className="overflow-hidden sm:overflow-visible mx-auto pb-40 sm:pb-0">
        <Image
          src="/home/hero-image.png"
          alt="Hero preview"
          width={700}
          height={700}
          className="h-full w-full object-contain"
        />
      </div>
    </main>
  );
}
