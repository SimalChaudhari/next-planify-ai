import React from "react";

export default function Card({
    title,
    href = "#",
    icon: Icon,
    iconClassName,
    iconBoxClassName = "w-24 h-24 text-violet-500",
    className = "",
}) {
    return (
        <div className="body h-full">

            <a className={`card wallet ${className}`.trim()} href={href}>
                <div className="overlay" />
                <p>&nbsp;&nbsp;</p>
                <div className="circle mt-3">
                    {Icon && <Icon className={iconClassName || iconBoxClassName} aria-hidden strokeWidth={1.25} />}
                </div>
                <p>{title || <>&nbsp;</>}</p>
            </a>

        </div>
    );
}
