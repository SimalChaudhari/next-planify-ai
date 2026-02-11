/**
 * Planify AI logo: Apple icon (from brand SVG) + "Planify AI" text.
 * Replaces the former "Planify AI" wordmark so the latter reads "Planify AI".
 */
function AppleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 120 36"
      fill="none"
      className="h-full w-auto shrink-0"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.37409 27.4322C4.36549 35.6734 9.266 37.1706 14.5319 35.0299C14.6177 34.995 14.7102 34.976 14.8028 34.976H14.8542C14.9469 34.976 15.0396 34.9949 15.1256 35.0299C20.3914 37.1703 25.2918 35.6734 28.2831 27.432C33.5898 12.812 22.9699 7.93998 16.3236 11.4566C15.9692 8.26153 19.4242 5.24394 21.196 3.91269L19.8671 2.13764C18.5383 3.02502 16.7665 4.50435 16.3236 5.24394C14.9947 0.362015 9.08877 -0.0810175 6.57873 0.362742C5.69282 7.90658 11.0082 10.4213 13.6659 10.1255V11.4567C-0.065488 6.57537 -1.83728 20.7757 1.37409 27.4322Z"
        fill="#1E1A24"
      />
    </svg>
  );
}

export default function PlanifyAILogo({ className = "", size = "md" }) {
  const sizes = {
    sm: { icon: "h-6", text: "text-base" },
    md: { icon: "h-8", text: "text-lg" },
    lg: { icon: "h-9", text: "text-xl" },
  };
  const { icon: iconSize, text: textSize } = sizes[size] || sizes.md;

  return (
    <span
      className={`inline-flex items-center gap-2 ${className}`}
      aria-label="Planify AI"
    >
      <span className={`${iconSize} shrink-0 overflow-hidden`} style={{ width: "1.75em" }}>
        <AppleIcon />
      </span>
      <span className={`font-semibold text-[#1E1A24] ${textSize}`}>
        Planify AI
      </span>
    </span>
  );
}
