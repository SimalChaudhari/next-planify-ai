import Image from "next/image";
import Link from "next/link";

function IconApple() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="23"
      viewBox="0 0 19 23"
      fill="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.7212 0C13.8259 1.36126 13.407 2.61776 12.5693 3.66496C11.7316 4.71206 10.5798 5.34036 9.21847 5.34036C9.11377 3.97906 9.53267 2.72256 10.3704 1.78011C11.2081 0.73299 12.4646 0.10471 13.7212 0ZM18.0144 7.74866C16.4438 8.69106 15.5013 10.3665 15.5013 12.1466C15.5013 14.1362 16.6532 16.021 18.538 16.6493C18.2239 17.8011 17.7003 18.9529 16.9673 19.8953C16.0249 21.3613 15.0825 22.7226 13.5118 22.7226C12.751 22.7226 12.2605 22.5015 11.7546 22.2735C11.216 22.0307 10.6601 21.7801 9.74217 21.7801C8.76767 21.7801 8.16977 22.0312 7.58757 22.2756C7.10637 22.4777 6.63597 22.6752 5.97247 22.7226C4.50657 22.7226 3.35467 21.1519 2.41227 19.7906C0.422771 16.9634 -1.04323 11.7278 0.946371 8.27226C1.88877 6.59686 3.66887 5.54976 5.65837 5.44506C6.47197 5.44506 7.25337 5.76756 7.94877 6.05466C8.50637 6.28476 9.00867 6.49216 9.42797 6.49216C9.79557 6.49216 10.2747 6.30096 10.828 6.08026C11.6933 5.73496 12.7401 5.31726 13.826 5.44506C15.5013 5.54976 17.072 6.38746 18.0144 7.74866Z"
        fill="#1E1A24"
      />
    </svg>
  );
}

function IconGooglePlay() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <path
        d="M3.13495 0.879883L12.6637 10.3399L15.2762 7.72738L3.7262 1.05863C3.5337 0.946914 3.32745 0.885039 3.13495 0.879883ZM2.33745 1.31988C2.25151 1.47285 2.19995 1.65332 2.19995 1.85613V20.2399C2.19995 20.3877 2.23089 20.52 2.28245 20.6386L12.0312 10.9586L2.33745 1.31988ZM16.0737 8.18113L13.2825 10.9586L16.0737 13.7224L19.4837 11.7699C19.9684 11.4897 20.0371 11.1339 20.0337 10.9449C20.0285 10.6321 19.8309 10.3399 19.4975 10.1611C19.207 10.0047 17.05 8.74832 16.0737 8.18113ZM12.6637 11.5774L3.05245 21.1061C3.21229 21.0975 3.38589 21.0632 3.54745 20.9686C3.92386 20.7504 11.5362 16.3486 11.5362 16.3486L15.29 14.1899L12.6637 11.5774Z"
        fill="black"
      />
    </svg>
  );
}

export default function RatingsSection() {
  return (
    <section className="py-16 lg:py-44 px-4 relative overflow-hidden">
      <Image
        src="/home/dark-gradient.png"
        alt=""
        fill
        className="object-cover"
        priority={false}
        aria-hidden
      />
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center relative z-10">
        <div className="flex items-center justify-center gap-16 w-full">
          <Image
            src="/home/wreath.svg"
            alt=""
            width={120}
            height={80}
            className="h-auto w-auto opacity-80"
            aria-hidden
          />
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-2">⭐⭐⭐⭐⭐</div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#1E1A24] mb-4">
              Over 100k 5-star ratings
            </h2>
            <div className="flex items-center justify-center gap-4 text-lg opacity-80">
              <div className="flex items-center gap-1">
                <IconApple />
                <span className="mt-1 ml-1">4.8/5</span>
              </div>
              <span className="opacity-50">•</span>
              <div className="flex items-center gap-1">
                <IconGooglePlay />
                <span className="mt-1 ml-1">4.7/5</span>
              </div>
            </div>
          </div>
          <Image
            src="/home/wreath.svg"
            alt=""
            width={120}
            height={80}
            className="h-auto w-auto opacity-80 transform -scale-x-100"
            aria-hidden
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-10 items-center">
          <Link
            href="https://apps.apple.com/us/app/cal-ai-calorie-tracker/id6480417616?ppid=0fdd527c-4a8a-4b3f-9db0-ee844938c041"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src="/logo/app-store.jpg"
              alt="Download on the App Store"
              width={135}
              height={41}
              className="h-[41px] w-auto [&_img]:h-[41px]"
            />
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=com.viraldevelopment.calai"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Image
              src="/logo/googleplay.webp"
              alt="Get it on Google Play"
              width={141}
              height={43}
              className="h-[43px] w-auto [&_img]:h-[43px]"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
