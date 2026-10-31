import React from 'react';

export default function Logo({ className = "w-10 h-10", showText = false, textClassName = "text-xl", subtext = true }) {
  return (
    <div className="flex items-center gap-3">
      <div className={`${className} flex-shrink-0 transition-transform group-hover:scale-105 duration-200`}>
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          <defs>
            <linearGradient id="logo-fma-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00695f" />
              <stop offset="100%" stopColor="#004d40" />
            </linearGradient>
            <linearGradient id="logo-fma-accent" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2dd4bf" />
              <stop offset="100%" stopColor="#14b8a6" />
            </linearGradient>
          </defs>

          {/* Squircle container */}
          <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#logo-fma-grad)" />

          {/* Skyline Architecture */}
          <path d="M12 33V22C12 21.45 12.45 21 13 21H18C18.55 21 19 21.45 19 22V33H12Z" fill="#ffffff" fillOpacity="0.32" />
          <path d="M19 33V17C19 16.45 19.45 16 20 16H28C28.55 16 29 16.45 29 17V33H19Z" fill="#ffffff" fillOpacity="0.5" />
          <path d="M29 33V24C29 23.45 29.45 23 30 23H35C35.55 23 36 23.45 36 24V33H29Z" fill="#ffffff" fillOpacity="0.32" />

          {/* Ground Baseline */}
          <rect x="10" y="33" width="28" height="2.5" rx="1.25" fill="#ffffff" fillOpacity="0.75" />

          {/* Civic Location Beacon */}
          <path d="M24 9C20.6863 9 18 11.6863 18 15C18 19.4 23.2 24.8 23.42 25.02C23.74 25.34 24.26 25.34 24.58 25.02C24.8 24.8 30 19.4 30 15C30 11.6863 27.3137 9 24 9Z" fill="url(#logo-fma-accent)" />
          <circle cx="24" cy="14.8" r="2.6" fill="#ffffff" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-bold tracking-tight text-on-surface leading-tight ${textClassName}`}>
            FixMyArea
          </span>
          {subtext && (
            <span className="text-[10px] text-on-surface-variant font-medium tracking-wider uppercase">
              Civic Infrastructure Network
            </span>
          )}
        </div>
      )}
    </div>
  );
}
