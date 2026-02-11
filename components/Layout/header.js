import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "mailto:apply@calai.app", label: "Jobs" },
    { href: "/press", label: "Press" },
    { href: "/manage-subscription", label: "Manage Subscription" },
];

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="backdrop-blur-xl bg-white/20 sticky top-0 px-5 xl:px-0 py-4 z-50">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
                <div className="w-full">
                    <div className="flex items-center w-full justify-between">
                        <Link href="/" className="text-lg flex w-full lg:w-auto items-center justify-between gap-2">
                            <Image src="/logo/_image.svg" alt="Planify AI Logo" width={114} height={32} loading="lazy" />
                        </Link>
                        <button
                            type="button"
                            id="menu-button"
                            aria-label="Toggle menu"
                            aria-expanded={mobileMenuOpen}
                            className="block lg:hidden p-2 rounded-lg text-gray-800 hover:bg-zinc-100"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Navigation - Centered */}
                    <div className="hidden lg:flex justify-center absolute left-1/2 transform top-7 -translate-x-1/2 gap-[30px] text-base font-medium">
                        {navLinks.map(({ href, label }) =>
                            href.startsWith("mailto:") ? (
                                <a key={href} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
                            ) : (
                                <Link key={href} href={href}>{label}</Link>
                            )
                        )}
                    </div>

                    {/* Mobile Navigation */}
                    <div
                        id="mobile-menu"
                        className={`lg:hidden overflow-hidden transition-all duration-200 ${mobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"}`}
                    >
                        <ul className="flex flex-col text-lg">
                            {navLinks.map(({ href, label }) => (
                                <li key={href} className="py-2">
                                    {href.startsWith("mailto:") ? (
                                        <a href={href} target="_blank" rel="noopener noreferrer" className="block text-zinc-700">{label}</a>
                                    ) : (
                                        <Link href={href} className="block text-zinc-700" onClick={() => setMobileMenuOpen(false)}>{label}</Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                        <div className="w-full flex items-center mt-3 gap-4 scale-90">
                            <a href="https://apps.apple.com/us/app/cal-ai-calorie-tracker/id6480417616" target="_blank" rel="noopener noreferrer" aria-label="App Store">
                                <Image src="/logo/app-store.jpg" alt="App Store" width={141} height={43} />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.viraldevelopment.calai" target="_blank" rel="noopener noreferrer">
                                <Image src="/logo/googleplay.webp" alt="Google Play" width={141} height={43} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Get Started Button (Desktop) */}
                <div className="hidden lg:flex w-fit shrink-0 items-center gap-2">
                    <a href="https://apps.apple.com/us/app/cal-ai-calorie-tracker/id6480417616" target="_blank" rel="noopener noreferrer" aria-label="App Store" className="flex h-[50px] shrink-0 items-center [&_img]:h-[40px] [&_img]:w-auto [&_img]:object-contain">
                        <Image src="/logo/app-store.jpg" alt="App Store" width={220} height={50} />
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.viraldevelopment.calai" target="_blank" rel="noopener noreferrer" className="flex h-[50px] shrink-0 items-center [&_img]:h-[40px] [&_img]:w-auto [&_img]:object-contain">
                        <Image
                            src="/logo/googleplay.webp"
                            alt="Google Play"
                            width={220}
                            height={50}
                        />
                    </a>
                </div>
            </div>
        </header>
    );
}