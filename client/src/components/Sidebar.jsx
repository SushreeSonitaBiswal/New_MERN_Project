import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar({ role = 'citizen' }) {
  const location = useLocation();

  const citizenNav = [
    { label: 'Dashboard', path: '/citizen/dashboard', icon: 'dashboard' },
    { label: 'Report Issue', path: '/report', icon: 'add_alert' },
    { label: 'My Complaints', path: '/citizen/my-complaints', icon: 'assignment' },
    { label: 'Notifications', path: '/notifications', icon: 'notifications' },
  ];

  const staffNav = [
    { label: 'Workbench', path: '/staff/workbench', icon: 'engineering' },
    { label: 'Completed Work', path: '/staff/history', icon: 'history' },
  ];

  const adminNav = [
    { label: 'Admin Management', path: '/admin/complaints', icon: 'admin_panel_settings' },
    { label: 'Staff & Workload', path: '/admin/staff', icon: 'group' },
    { label: 'Categories', path: '/admin/categories', icon: 'category' },
    { label: 'Analytics', path: '/admin/analytics', icon: 'query_stats' },
    { label: 'Settings', path: '/admin/settings', icon: 'settings' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-[250px] bg-surface-container-lowest z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-r border-outline-variant/30">
      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Brand */}
        <div className="p-4 flex items-center gap-2 border-b border-outline-variant/20">
          <div className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center font-bold text-lg">
            <span className="material-symbols-outlined text-[20px]">apartment</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm text-on-surface">FixMyArea</span>
            <span className="text-[10px] text-on-surface-variant tracking-wider uppercase font-medium">
              Civic Operations
            </span>
          </div>
        </div>

        {/* Status Chip */}
        <div className="px-4 py-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-high rounded-full w-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[11px] font-medium text-on-surface">Live Municipal Dispatch</span>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="px-3 py-2 space-y-4">
          <div>
            <span className="px-3 text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant/70">
              Citizen Services
            </span>
            <nav className="flex flex-col gap-1 mt-1">
              {citizenNav.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      active
                        ? 'bg-primary-container text-white shadow-sm font-semibold'
                        : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <span className="px-3 text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant/70">
              Staff & Dispatch
            </span>
            <nav className="flex flex-col gap-1 mt-1">
              {staffNav.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      active
                        ? 'bg-primary-container text-white shadow-sm font-semibold'
                        : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <span className="px-3 text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant/70">
              Municipal Admin
            </span>
            <nav className="flex flex-col gap-1 mt-1">
              {adminNav.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      active
                        ? 'bg-primary-container text-white shadow-sm font-semibold'
                        : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Footer Profile */}
      <div className="p-3 border-t border-outline-variant/20 flex flex-col gap-2">
        <Link
          to="/"
          className="flex items-center gap-2 p-2 rounded-lg text-xs text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          <span>Return to Public Home</span>
        </Link>
      </div>
    </aside>
  );
}
