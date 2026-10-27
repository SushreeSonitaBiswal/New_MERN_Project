import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Explore Complaints', path: '/explore' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Civic Dashboard', path: '/citizen/dashboard' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.03)]">
      <div className="h-20 max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
        {/* Brand */}
        <div className="flex items-center gap-6 flex-shrink-0">
          <Link to="/" className="flex items-center gap-2 group focus:outline-none">
            <div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center transition-transform group-hover:scale-105">
              <span className="material-symbols-outlined text-[24px]">apartment</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-on-surface tracking-tight leading-tight group-hover:text-primary transition-colors">
                FixMyArea
              </span>
              <span className="text-[11px] text-on-surface-variant font-medium hidden sm:block">
                Better Neighborhoods Start With You
              </span>
            </div>
          </Link>

          {/* Nav Items */}
          <nav className="hidden xl:flex items-center gap-6 ml-2">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors py-1 ${
                    active
                      ? 'text-primary font-semibold border-b-2 border-primary'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block w-48 lg:w-60">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-on-surface-variant">
              <span className="material-symbols-outlined text-[18px]">search</span>
            </div>
            <input
              className="w-full h-10 pl-9 pr-3 rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-outline text-xs focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="Search complaints..."
              type="text"
            />
          </div>

          <Link
            to="/login"
            className="h-10 px-4 inline-flex items-center justify-center rounded-lg border border-outline-variant/60 bg-surface-container-lowest text-xs font-semibold text-on-surface hover:bg-surface-container-high transition-colors focus:outline-none"
          >
            Log In
          </Link>

          <Link
            to="/report"
            className="h-10 px-4 inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary-container text-white text-xs font-semibold shadow-sm hover:opacity-95 transition-all focus:outline-none"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>Report an Issue</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
