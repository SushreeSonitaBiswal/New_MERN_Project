import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import { useAuth } from '../context/AuthContext';

export default function Layout({ children, title, subtitle, breadcrumb, activeNav, portalType }) {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Determine current portal role context (explicit prop or current user's role, default: citizen)
  const currentRole = portalType || user?.role || (location.pathname.startsWith('/admin') ? 'admin' : location.pathname.startsWith('/staff') ? 'staff' : 'citizen');

  // Role-specific Navigation Configurations (3 Completely Distinct Working Models)
  const navConfigs = {
    citizen: {
      portalName: 'Citizen Services',
      portalBadge: 'Public Resident Portal',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      badgeDot: 'bg-emerald-500',
      homePath: '/citizen/dashboard',
      primaryAction: {
        label: 'Report Issue',
        path: '/report',
        icon: 'add_circle',
      },
      items: [
        { label: 'My Dashboard', path: '/citizen/dashboard', icon: 'dashboard', desc: 'Personal civic overview' },
        { label: 'Report Incident', path: '/report', icon: 'add_alert', desc: 'Submit new civic issue' },
        { label: 'My Complaints', path: '/citizen/my-complaints', icon: 'assignment', desc: 'Track your reported tickets' },
        { label: 'Track by ID', path: '/track', icon: 'travel_explore', desc: 'Audit & verify resolution' },
        { label: 'Notification Center', path: '/notifications', icon: 'notifications', desc: 'Live alerts & updates' },
      ],
    },
    staff: {
      portalName: 'Field Crew Dispatch',
      portalBadge: 'Municipal Field Terminal',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
      badgeDot: 'bg-blue-500',
      homePath: '/staff/workbench',
      primaryAction: {
        label: 'Log Field Work',
        path: '/staff/workbench',
        icon: 'construction',
      },
      items: [
        { label: 'Staff Workbench', path: '/staff/workbench', icon: 'engineering', desc: 'Active dispatch & resolution' },
        { label: 'Completed Work History', path: '/staff/history', icon: 'history', desc: 'Audit-locked work proofs' },
        { label: 'Dispatch Alerts', path: '/notifications', icon: 'notifications_active', desc: 'Urgent sector dispatches' },
      ],
    },
    admin: {
      portalName: 'Command & Control',
      portalBadge: 'Central Administration',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
      badgeDot: 'bg-purple-500',
      homePath: '/admin/complaints',
      primaryAction: {
        label: 'Dispatch Crew',
        path: '/admin/complaints',
        icon: 'send_to_mobile',
      },
      items: [
        { label: 'Complaint Queue', path: '/admin/complaints', icon: 'admin_panel_settings', desc: 'Central triage & dispatch' },
        { label: 'Staff & Workload', path: '/admin/staff', icon: 'group', desc: 'Fleet telemetry & load levelling' },
        { label: 'Incident Categories', path: '/admin/categories', icon: 'category', desc: 'SLA thresholds & AI routing' },
        { label: 'Reports & Analytics', path: '/admin/analytics', icon: 'query_stats', desc: 'Municipal telemetry & KPIs' },
        { label: 'System Settings', path: '/admin/settings', icon: 'settings', desc: 'API keys & automation engine' },
      ],
    },
  };

  const activeConfig = navConfigs[currentRole] || navConfigs.citizen;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex font-sans antialiased">
      {/* 1. FIXED ROLE-SPECIFIC SIDEBAR (260px) */}
      <aside className="w-[260px] h-screen bg-white border-r border-[#e2e8f0] flex flex-col justify-between shrink-0 fixed top-0 left-0 z-40 shadow-sm select-none">
        <div className="flex flex-col flex-1 overflow-y-auto">
          {/* Brand Header */}
          <Link
            to={activeConfig.homePath}
            className="h-16 px-5 flex items-center gap-3 border-b border-[#f1f5f9] hover:bg-[#f8fafc] transition-colors group"
          >
            <Logo className="w-8 h-8" />
            <div className="flex flex-col">
              <span className="font-bold text-sm text-[#0f172a] tracking-tight group-hover:text-[#005c55] transition-colors leading-tight">
                FixMyArea
              </span>
              <span className="text-[10px] text-[#64748b] tracking-wider uppercase font-semibold">
                {activeConfig.portalName}
              </span>
            </div>
          </Link>

          {/* Role Badge Indicator */}
          <div className="px-4 py-2">
            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs border ${activeConfig.badgeColor}`}>
              <span className={`w-2 h-2 rounded-full ${activeConfig.badgeDot}`} />
              <span className="font-semibold text-[11px] tracking-wide uppercase">
                {currentRole.toUpperCase()} PORTAL
              </span>
            </div>
          </div>

          {/* Dedicated Role Navigation */}
          <div className="px-3 py-1">
            <span className="px-3 text-[10px] font-bold uppercase tracking-wider text-[#94a3b8] block mb-2">
              Navigation Menu
            </span>
            <nav className="space-y-1">
              {activeConfig.items.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                      active
                        ? 'bg-[#005c55] text-white font-semibold shadow-sm'
                        : 'text-[#475569] hover:bg-[#f1f5f9] hover:text-[#0f172a]'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[19px] shrink-0">{item.icon}</span>
                    <div className="flex flex-col truncate">
                      <span className="truncate">{item.label}</span>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Role-Specific User Profile & Sign Out */}
        <div className="p-3 border-t border-[#f1f5f9] bg-[#fafafa]">
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-[#e2e8f0] shadow-2xs">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-[#005c55]/10 text-[#005c55] flex items-center justify-center font-bold text-xs shrink-0">
                {user?.name ? user.name.slice(0, 2).toUpperCase() : currentRole === 'admin' ? 'AD' : currentRole === 'staff' ? 'MV' : 'SJ'}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-semibold text-xs text-[#0f172a] truncate">
                  {user?.name || (currentRole === 'admin' ? 'Admin Officer' : currentRole === 'staff' ? 'Marcus Vance' : 'Resident Citizen')}
                </span>
                <span className="text-[10px] text-[#64748b] truncate capitalize font-medium">
                  {user?.role ? `${user.role} Account` : `${currentRole} session`}
                </span>
              </div>
            </div>
            <button
              onClick={handleLogout}
              title="Sign Out / Switch Portal"
              className="text-[#94a3b8] hover:text-[#ef4444] p-1.5 rounded-lg hover:bg-[#fef2f2] transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px]">logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* 2. MAIN VIEW CONTAINER (Shifted by 260px) */}
      <div className="flex-1 flex flex-col min-w-0 ml-[260px]">
        {/* Fixed Top Header (h-16) */}
        <header className="h-16 bg-white/95 backdrop-blur-md border-b border-[#e2e8f0] px-8 flex items-center justify-between sticky top-0 z-30 shadow-2xs">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs text-[#64748b]">
            <span className="text-[#0f172a] font-semibold">{activeConfig.portalName}</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#005c55] font-semibold">{breadcrumb || title || 'Console'}</span>
          </div>

          {/* Quick Search and Action Controls */}
          <div className="flex items-center gap-4">
            <div className="relative w-64 md:w-80">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-[#94a3b8]">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  currentRole === 'admin'
                    ? 'Search all complaints, staff, categories...'
                    : currentRole === 'staff'
                    ? 'Search assigned work orders, streets...'
                    : 'Search complaints, status, keywords...'
                }
                className="w-full h-9 pl-9 pr-3 rounded-lg bg-[#f8fafc] border border-[#e2e8f0] text-xs text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:border-[#005c55] focus:bg-white transition-all"
              />
            </div>

            <Link
              to="/notifications"
              className="relative p-2 rounded-lg text-[#64748b] hover:bg-[#f1f5f9] hover:text-[#0f172a] transition-colors"
              title="Notifications"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white" />
            </Link>

            <Link
              to={activeConfig.primaryAction.path}
              className="h-9 px-3.5 rounded-lg bg-[#005c55] hover:bg-[#004d47] text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-[16px]">{activeConfig.primaryAction.icon}</span>
              <span>{activeConfig.primaryAction.label}</span>
            </Link>
          </div>
        </header>

        {/* Page Content Body */}
        <main className="p-8 max-w-[1500px] w-full mx-auto space-y-6">
          {children}
        </main>
      </div>
    </div>
  );
}
