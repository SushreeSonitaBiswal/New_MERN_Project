import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function CitizenDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [stats, setStats] = useState({
    totalReported: 14,
    inProgress: 2,
    resolved: 11,
    avgResolution: '2.4',
  });

  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);
        const [complaintsRes, analyticsRes] = await Promise.allSettled([
          api.get('/complaints'),
          api.get('/analytics/overview'),
        ]);

        if (complaintsRes.status === 'fulfilled' && complaintsRes.value.data.success) {
          const list = complaintsRes.value.data.data;
          if (list && list.length > 0) {
            setComplaints(list);
          }
        }

        if (analyticsRes.status === 'fulfilled' && analyticsRes.value.data.success) {
          const kpis = analyticsRes.value.data.data.kpis;
          if (kpis) {
            setStats({
              totalReported: kpis.totalReports || 14,
              inProgress: kpis.inProgressReports || 2,
              resolved: kpis.resolvedReports || 11,
              avgResolution: kpis.avgResolutionHours ? (kpis.avgResolutionHours / 24).toFixed(1) : '2.4',
            });
          }
        }
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Fallback demo complaints matching the exact screenshot if backend is empty
  const displayComplaints =
    complaints.length > 0
      ? complaints
      : [
          {
            _id: '1',
            ticketId: 'FMA-8492',
            status: 'in-progress',
            statusLabel: 'In Progress',
            categoryName: 'POTHOLE & ROADWORK',
            title: 'Large dangerous pothole near Oakwood High School crossing',
            description:
              'Deep road cavity spanning approx 3 feet across primary southbound lane. Causing traffic swerves near school crosswalk zone.',
            location: { address: '4th Ave & Elm St' },
            assignedText: 'Assigned: Road Crew Beta',
            timeAgo: 'Submitted 2 days ago',
          },
          {
            _id: '2',
            ticketId: 'FMA-8488',
            status: 'dispatched',
            statusLabel: 'Assigned',
            categoryName: 'WASTE MANAGEMENT',
            title: 'Overflowing municipal recycling dumpster attracting pests',
            description:
              'Cardboard and plastic bins have reached capacity over the holiday weekend. Bags spilling onto pedestrian walking pathway.',
            location: { address: '12 Maple St Park' },
            assignedText: 'Dispatched: Fleet #04',
            timeAgo: 'Submitted 3 days ago',
          },
          {
            _id: '3',
            ticketId: 'FMA-8421',
            status: 'resolved',
            statusLabel: 'Resolved',
            categoryName: 'STREETLIGHTS & ELECTRICAL',
            title: 'Broken pedestrian streetlight fixture flickering continuously',
            description:
              'Luminary head fixture replaced with high-efficiency LED pod and photocell sensor recalibrated. Completed on June 2.',
            location: { address: 'Corner of Pine & 7th' },
            assignedText: 'Audited by Inspector G. Lin',
            timeAgo: 'Submitted 1 week ago',
          },
        ];

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex font-sans antialiased">
      {/* 1. LEFT SIDEBAR */}
      <aside className="w-[260px] min-h-screen bg-white border-r border-[#e2e8f0] flex flex-col justify-between shrink-0 sticky top-0 h-screen z-30">
        <div className="flex flex-col">
          {/* Logo Header */}
          <div className="p-5 pb-3 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#005c55] text-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[20px]">apartment</span>
            </div>
            <div>
              <h1 className="font-bold text-sm tracking-tight text-[#0b1c30]">FixMyArea</h1>
              <p className="text-[10px] text-[#64748b] tracking-wider uppercase font-semibold">
                Municipal Portal
              </p>
            </div>
          </div>

          {/* Live Status Tag */}
          <div className="px-5 py-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eff4ff] rounded-full text-xs font-medium text-[#1e293b]">
              <span className="w-2 h-2 rounded-full bg-[#005c55] animate-pulse"></span>
              <span>Civic Portal • Live</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="px-3 py-3 space-y-1">
            <Link
              to="/citizen/dashboard"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-[#005c55] text-white font-medium text-xs shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">dashboard</span>
              <span>Dashboard</span>
            </Link>

            <Link
              to="/report"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[#475569] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-medium text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">notification_important</span>
              <span>Report Issue</span>
            </Link>

            <Link
              to="/citizen/my-complaints"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[#475569] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-medium text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">assignment</span>
              <span>My Complaints</span>
            </Link>

            <Link
              to="/staff/workbench"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[#475569] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-medium text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">engineering</span>
              <span>Staff Workbench</span>
            </Link>

            <Link
              to="/admin/complaints"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[#475569] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-medium text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
              <span>Admin Management</span>
            </Link>

            <Link
              to="/admin/analytics"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[#475569] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-medium text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">query_stats</span>
              <span>Analytics</span>
            </Link>

            <Link
              to="/admin/settings"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[#475569] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-medium text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">settings</span>
              <span>Settings</span>
            </Link>
          </nav>
        </div>

        {/* Sidebar Footer Cards */}
        <div className="p-4 space-y-3">
          {/* Helpline */}
          <div className="p-3 rounded-xl bg-[#eff4ff] border border-[#dbeafe] flex items-center gap-3">
            <span className="material-symbols-outlined text-[#006780] text-[22px]">
              headset_mic
            </span>
            <div>
              <p className="text-xs font-semibold text-[#0f172a]">Municipal Helpline</p>
              <p className="text-[11px] text-[#64748b]">Dial 311 (24/7 Support)</p>
            </div>
          </div>

          {/* User Profile Info */}
          <div className="p-2.5 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-[#005c55]/20"
              />
              <div>
                <p className="text-xs font-bold text-[#0f172a] leading-tight">
                  {user?.name || 'Sarah Jenkins'}
                </p>
                <p className="text-[10px] text-[#64748b]">
                  {user?.role === 'staff' ? 'Field Dispatcher' : 'Verified Resident'}
                </p>
              </div>
            </div>
            <span className="material-symbols-outlined text-[16px] text-[#94a3b8]">
              keyboard_arrow_down
            </span>
          </div>
        </div>
      </aside>

      {/* 2. MAIN APP CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* TOP NAVBAR */}
        <header className="h-16 bg-white border-b border-[#e2e8f0] px-8 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-[#64748b]">
              <span className="font-semibold text-[#0f172a]">FixMyArea</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#eff4ff] rounded-full text-[#005c55] font-semibold text-xs border border-[#dbeafe]">
                <span className="material-symbols-outlined text-[15px]">location_on</span>
                <span>Oakwood District 4</span>
                <span className="material-symbols-outlined text-[14px]">arrow_drop_down</span>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative w-80 ml-4 hidden md:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-[#94a3b8]">
                search
              </span>
              <input
                type="text"
                placeholder="Search complaints by ID, street, or category..."
                className="w-full h-9 pl-9 pr-4 rounded-lg bg-[#f1f5f9] text-xs text-[#0f172a] placeholder-[#94a3b8] focus:outline-none focus:ring-1 focus:ring-[#005c55] border-none"
              />
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            <Link
              to="/notifications"
              className="relative w-9 h-9 rounded-full bg-[#f8f9ff] border border-[#e2e8f0] flex items-center justify-center text-[#475569] hover:bg-[#f1f5f9] transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#e11d48] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                3
              </span>
            </Link>

            <Link
              to="/report"
              className="h-9 px-4 rounded-lg bg-[#005c55] hover:bg-[#004d47] text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">add</span>
              <span>Report Problem</span>
            </Link>

            <div className="flex items-center gap-1 cursor-pointer">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                alt="Avatar"
                className="w-8 h-8 rounded-full object-cover"
              />
              <span className="material-symbols-outlined text-[16px] text-[#64748b]">
                expand_more
              </span>
            </div>
          </div>
        </header>

        {/* DASHBOARD BODY */}
        <main className="p-8 max-w-[1400px] w-full mx-auto space-y-6">
          {/* Welcome Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#ecfdf5] text-[#065f46] text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10b981]"></span>
                  Ward 4 Citizen Portal
                </span>
                <span className="text-[11px] text-[#64748b]">• Verified Resident #CK-9912</span>
              </div>
              <h1 className="text-2xl font-bold text-[#0f172a] tracking-tight">
                Welcome back, {user?.name || 'Sarah Jenkins'}
              </h1>
              <p className="text-xs text-[#64748b] mt-0.5">
                Your local area:{' '}
                <span className="font-semibold text-[#334155]">
                  Oakwood Central & West Park Sector
                </span>
                . You have <span className="font-semibold text-[#005c55]">2 active tickets</span>{' '}
                currently being serviced by municipal crews.
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <Link
                to="/citizen/my-complaints"
                className="h-9 px-4 rounded-lg bg-white border border-[#cbd5e1] text-[#334155] font-semibold text-xs flex items-center gap-1.5 hover:bg-[#f8fafc] transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px] text-[#64748b]">
                  inventory_2
                </span>
                <span>Ticket Archive</span>
              </Link>
              <Link
                to="/report"
                className="h-9 px-4 rounded-lg bg-[#005c55] text-white font-semibold text-xs flex items-center gap-1.5 hover:bg-[#004d47] transition-all shadow-sm"
              >
                <span className="material-symbols-outlined text-[16px]">add</span>
                <span>Report New Problem</span>
              </Link>
            </div>
          </div>

          {/* 4 Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: Total Reported */}
            <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">
                  TOTAL REPORTED
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#eff4ff] text-[#006780] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">flag</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-[#0f172a]">
                    {stats.totalReported}
                  </span>
                  <span className="text-xs text-[#64748b] font-medium">issues</span>
                </div>
                <p className="text-[11px] text-[#059669] font-medium mt-3 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                  <span>+2 this month</span>
                  <span className="text-[#94a3b8] font-normal">Lifetime total</span>
                </p>
              </div>
            </div>

            {/* Card 2: In Progress */}
            <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">
                  IN PROGRESS
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#eff4ff] text-[#006780] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">pending_actions</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-[#0f172a]">
                    {String(stats.inProgress).padStart(2, '0')}
                  </span>
                  <span className="text-xs text-[#64748b] font-medium">under repair</span>
                </div>
                <div className="mt-3 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-[#e0f2fe] text-[#0369a1] text-[10px] font-bold">
                    Scheduled Today
                  </span>
                  <span className="text-[11px] text-[#64748b]">Oakwood Sector</span>
                </div>
              </div>
            </div>

            {/* Card 3: Resolved */}
            <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#64748b]">
                  RESOLVED
                </span>
                <div className="w-8 h-8 rounded-lg bg-[#ecfdf5] text-[#059669] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">check_circle</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-extrabold text-[#0f172a]">
                    {String(stats.resolved).padStart(2, '0')}
                  </span>
                  <span className="text-xs text-[#64748b] font-medium">resolved</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px]">
                  <span className="text-[#059669] font-semibold flex items-center gap-0.5">
                    <span className="material-symbols-outlined text-[14px]">verified</span> 91%
                    resolution rate
                  </span>
                  <span className="text-[#64748b]">3 pending sign-off</span>
                </div>
              </div>
            </div>

            {/* Card 4: Avg Resolution */}
            <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#64748b]">
                  <span>AVG. RESOLUTION</span>
                  <span className="material-symbols-outlined text-[14px] text-[#94a3b8]">info</span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-[#eff4ff] text-[#006780] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[18px]">schedule</span>
                </div>
              </div>
              <div className="mt-3">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#0f172a]">
                    {stats.avgResolution}
                  </span>
                  <span className="text-xs text-[#64748b] font-medium">Days</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px]">
                  <span className="text-[#059669] font-semibold">0.8d faster</span>
                  <span className="text-[#64748b]">than City Avg (3.2d)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Issue Shortcuts */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f172a]">
                <span className="material-symbols-outlined text-[#005c55] text-[18px]">bolt</span>
                <span>Quick Issue Shortcuts</span>
                <span className="font-normal text-[#64748b]">— Direct dispatch to field teams</span>
              </div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#64748b]">
                INSTANT FORMS
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
              <Link
                to="/report?category=pothole"
                className="p-3.5 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#005c55] transition-all flex items-center gap-3 shadow-sm group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#eff4ff] text-[#006780] flex items-center justify-center shrink-0 group-hover:bg-[#005c55] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">construction</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0f172a] group-hover:text-[#005c55] transition-colors">
                    Report Pothole
                  </p>
                  <p className="text-[10px] text-[#64748b]">Asphalt &amp; Roadways</p>
                </div>
              </Link>

              <Link
                to="/report?category=garbage"
                className="p-3.5 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#005c55] transition-all flex items-center gap-3 shadow-sm group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#eff4ff] text-[#006780] flex items-center justify-center shrink-0 group-hover:bg-[#005c55] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">delete_sweep</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0f172a] group-hover:text-[#005c55] transition-colors">
                    Garbage Accumulation...
                  </p>
                  <p className="text-[10px] text-[#64748b]">Sanitation Dept</p>
                </div>
              </Link>

              <Link
                to="/report?category=streetlight"
                className="p-3.5 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#005c55] transition-all flex items-center gap-3 shadow-sm group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#eff4ff] text-[#006780] flex items-center justify-center shrink-0 group-hover:bg-[#005c55] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">lightbulb</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0f172a] group-hover:text-[#005c55] transition-colors">
                    Streetlight Outage
                  </p>
                  <p className="text-[10px] text-[#64748b]">Electrical Grid</p>
                </div>
              </Link>

              <Link
                to="/report?category=water"
                className="p-3.5 rounded-xl bg-white border border-[#e2e8f0] hover:border-[#005c55] transition-all flex items-center gap-3 shadow-sm group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#eff4ff] text-[#006780] flex items-center justify-center shrink-0 group-hover:bg-[#005c55] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[20px]">water_drop</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-[#0f172a] group-hover:text-[#005c55] transition-colors">
                    Water Leakage
                  </p>
                  <p className="text-[10px] text-[#64748b]">Mains &amp; Hydrants</p>
                </div>
              </Link>
            </div>
          </div>

          {/* TWO COLUMN GRID: Left Tickets & Map | Right Feed & Impact */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* LEFT 8 COLS */}
            <div className="lg:col-span-8 space-y-6">
              {/* Complaints List Section */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h2 className="text-base font-bold text-[#0f172a]">
                      Active &amp; Recent Complaints
                    </h2>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-[#f1f5f9] text-[#475569] font-semibold">
                      {displayComplaints.length} entries
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="h-8 px-3 rounded-lg bg-white border border-[#cbd5e1] text-xs font-medium text-[#475569] flex items-center gap-1 hover:bg-[#f8fafc] shadow-sm">
                      <span className="material-symbols-outlined text-[15px]">filter_list</span>
                      <span>Filter</span>
                    </button>
                    <button className="h-8 px-3 rounded-lg bg-white border border-[#cbd5e1] text-xs font-medium text-[#475569] flex items-center gap-1 hover:bg-[#f8fafc] shadow-sm">
                      <span className="material-symbols-outlined text-[15px]">file_download</span>
                      <span>Export</span>
                    </button>
                  </div>
                </div>

                <p className="text-xs text-[#64748b] -mt-2">
                  Real-time status tracking and civic engineering dispatch logs
                </p>

                {/* Complaint Cards */}
                <div className="space-y-3.5">
                  {displayComplaints.map((item) => {
                    const isResolved =
                      item.status === 'resolved' || item.statusLabel === 'Resolved';
                    const isAssigned =
                      item.status === 'dispatched' || item.statusLabel === 'Assigned';
                    const isInProgress =
                      item.status === 'in-progress' || item.statusLabel === 'In Progress';

                    let badgeColor = 'bg-[#e0f2fe] text-[#0369a1]';
                    let dotColor = 'bg-[#0284c7]';
                    if (isResolved) {
                      badgeColor = 'bg-[#ecfdf5] text-[#059669]';
                      dotColor = 'bg-[#10b981]';
                    } else if (isAssigned) {
                      badgeColor = 'bg-[#ede9fe] text-[#6d28d9]';
                      dotColor = 'bg-[#7c3aed]';
                    }

                    return (
                      <div
                        key={item._id || item.ticketId}
                        className="bg-white p-5 rounded-2xl border border-[#e2e8f0] shadow-sm space-y-3 hover:border-[#cbd5e1] transition-all"
                      >
                        {/* Meta Tags Header */}
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-[#006780] font-mono text-[11px] bg-[#eff4ff] px-2 py-0.5 rounded">
                              #{item.ticketId}
                            </span>
                            <span
                              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${badgeColor}`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${dotColor}`}></span>
                              <span>{item.statusLabel || item.status}</span>
                            </span>
                            <span className="text-[10px] font-bold tracking-wider text-[#64748b] uppercase">
                              {item.categoryName || item.category?.name || 'MUNICIPAL REPAIR'}
                            </span>
                          </div>
                          <span className="text-[11px] text-[#94a3b8]">
                            {item.timeAgo || 'Recently updated'}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <div>
                          <h3 className="text-sm font-bold text-[#0f172a] hover:text-[#005c55] cursor-pointer">
                            {item.title}
                          </h3>
                          <p className="text-xs text-[#64748b] mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Card Bottom / Action */}
                        <div className="flex items-center justify-between pt-2 border-t border-[#f1f5f9] text-xs">
                          <div className="flex items-center gap-4 text-[#64748b] text-[11px]">
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-[14px] text-[#94a3b8]">
                                location_on
                              </span>
                              <span>{item.location?.address || 'Oakwood District'}</span>
                            </span>
                            <span className="flex items-center gap-1">
                              <span className="material-symbols-outlined text-[14px] text-[#94a3b8]">
                                group
                              </span>
                              <span>{item.assignedText || 'Assigned: Municipal Crew'}</span>
                            </span>
                          </div>

                          {isResolved ? (
                            <Link
                              to={`/track?ticket=${item.ticketId}`}
                              className="px-3 py-1.5 rounded-lg border border-[#e2e8f0] text-xs font-semibold text-[#0f172a] hover:bg-[#f8fafc] flex items-center gap-1"
                            >
                              <span className="material-symbols-outlined text-[14px] text-[#eab308]">
                                star
                              </span>
                              <span>Rate Service</span>
                            </Link>
                          ) : (
                            <Link
                              to={`/track?ticket=${item.ticketId}`}
                              className="px-3.5 py-1.5 rounded-lg bg-[#005c55] hover:bg-[#004d47] text-white text-xs font-semibold flex items-center gap-1 transition-colors"
                            >
                              <span>Track Details</span>
                              <span className="material-symbols-outlined text-[14px]">
                                arrow_forward
                              </span>
                            </Link>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Ward Inspection Hotspots Card */}
              <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#0f172a]">Ward Inspection Hotspots</h3>
                    <p className="text-xs text-[#64748b]">Live civic hazard radar across Sector 4</p>
                  </div>
                  <span className="text-[10px] text-[#64748b] font-medium bg-[#f1f5f9] px-2.5 py-1 rounded-full">
                    Updated 12m ago
                  </span>
                </div>

                {/* Map Mock Graphic */}
                <div className="h-48 rounded-xl bg-gradient-to-tr from-[#e2e8f0] to-[#f1f5f9] border border-[#cbd5e1] flex flex-col items-center justify-center relative overflow-hidden">
                  <div className="w-14 h-14 rounded-2xl bg-[#eff4ff] text-[#006780] flex items-center justify-center shadow-md">
                    <span className="material-symbols-outlined text-[32px]">map</span>
                  </div>

                  {/* Hotspot Floating Marker */}
                  <div className="absolute bottom-3 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#e2e8f0] flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] animate-ping"></span>
                      <span className="text-xs font-bold text-[#0f172a]">
                        Live Repair Unit En Route
                      </span>
                      <span className="text-[11px] text-[#64748b]">
                        ETA 22 minutes to 4th Ave &amp; Elm
                      </span>
                    </div>
                    <button className="px-3 py-1 bg-[#005c55] text-white text-xs font-semibold rounded-lg hover:bg-[#004d47] transition-all">
                      Open Map
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT 4 COLS */}
            <div className="lg:col-span-4 space-y-6">
              {/* Ward Activity Feed */}
              <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-3">
                  <div className="flex items-center gap-1.5 font-bold text-sm text-[#0f172a]">
                    <span className="material-symbols-outlined text-[18px] text-[#005c55]">
                      article
                    </span>
                    <span>Ward Activity Feed</span>
                  </div>
                  <span className="text-xs text-[#006780] font-semibold hover:underline cursor-pointer">
                    View All
                  </span>
                </div>

                <p className="text-xs text-[#64748b] -mt-2">
                  Recent neighborhood fixes verified by Oakwood district dispatch.
                </p>

                {/* Feed Item 1: Stormdrain */}
                <div className="space-y-2 border-b border-[#f1f5f9] pb-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0f172a]">Stormdrain Unblocked</span>
                    <span className="text-[10px] text-[#94a3b8]">Today, 10:15 AM</span>
                  </div>
                  <p className="text-xs text-[#64748b] leading-tight">
                    High Street culvert cleared of debris prior to forecasted rains.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="relative rounded-lg overflow-hidden border border-[#e2e8f0]">
                      <img
                        src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=300&q=80"
                        alt="Before fix"
                        className="h-20 w-full object-cover"
                      />
                      <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/70 text-white text-[9px] font-bold">
                        Before
                      </span>
                    </div>
                    <div className="relative rounded-lg overflow-hidden border border-[#e2e8f0]">
                      <img
                        src="https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=300&q=80"
                        alt="Resolved fix"
                        className="h-20 w-full object-cover"
                      />
                      <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-[#059669]/90 text-white text-[9px] font-bold">
                        Resolved
                      </span>
                    </div>
                  </div>
                </div>

                {/* Feed Item 2: Crosswalk */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#0f172a]">Crosswalk Repainting</span>
                    <span className="text-[10px] text-[#94a3b8]">Yesterday, 3:40 PM</span>
                  </div>
                  <p className="text-xs text-[#64748b] leading-tight">
                    Fresh thermal reflective paint applied across Oakwood Elementary crosswalk.
                  </p>
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <div className="relative rounded-lg overflow-hidden border border-[#e2e8f0]">
                      <img
                        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=300&q=80"
                        alt="Before crosswalk"
                        className="h-20 w-full object-cover"
                      />
                      <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-black/70 text-white text-[9px] font-bold">
                        Before
                      </span>
                    </div>
                    <div className="relative rounded-lg overflow-hidden border border-[#e2e8f0]">
                      <img
                        src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=300&q=80"
                        alt="Resolved crosswalk"
                        className="h-20 w-full object-cover"
                      />
                      <span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-[#059669]/90 text-white text-[9px] font-bold">
                        Resolved
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Community Impact Card */}
              <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 font-bold text-sm text-[#0f172a]">
                    <span className="material-symbols-outlined text-[18px] text-[#005c55]">
                      nature_people
                    </span>
                    <span>Community Impact</span>
                  </div>
                  <span className="text-[10px] font-bold tracking-wider uppercase text-[#64748b] bg-[#f1f5f9] px-2 py-0.5 rounded">
                    Q2 2025
                  </span>
                </div>

                <p className="text-xs text-[#64748b] -mt-2">
                  Cumulative civic restoration outcomes for Oakwood residents.
                </p>

                {/* Progress 1 */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0f172a]">Street Hazards Cleared</span>
                    <span className="font-bold text-[#005c55] text-sm">142</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#f1f5f9] overflow-hidden">
                    <div className="h-full bg-[#005c55] rounded-full" style={{ width: '82%' }}></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-[#94a3b8]">
                    <span>Goal: 175 tickets</span>
                    <span>82% Achieved</span>
                  </div>
                </div>

                {/* Progress 2 */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-[#0f172a]">Recycled Municipal Bulk</span>
                    <span className="font-bold text-[#006780] text-sm">88 Tons</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#f1f5f9] overflow-hidden">
                    <div className="h-full bg-[#006780] rounded-full" style={{ width: '73%' }}></div>
                  </div>
                  <div className="flex justify-between text-[10px] text-[#94a3b8]">
                    <span>Ward target: 120 Tons</span>
                    <span>73% of quarterly cap</span>
                  </div>
                </div>

                {/* Event Banner */}
                <div className="p-3.5 rounded-xl bg-[#005c55] text-white flex items-center justify-between mt-2">
                  <div>
                    <p className="text-[10px] uppercase font-semibold text-[#a3faef] tracking-wider">
                      Next Civic Clean-Up Day
                    </p>
                    <p className="text-xs font-bold mt-0.5">Saturday, June 14</p>
                    <p className="text-[10px] text-white/80">Oakwood Central Park Pavilion</p>
                  </div>
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                  </div>
                </div>
              </div>

              {/* Emergency Banner */}
              <div className="p-4 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fee2e2] text-[#dc2626] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">emergency</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0f172a]">
                      Emergency Gas or Water Line Break?
                    </p>
                    <p className="text-[11px] text-[#64748b]">
                      Do not file tickets. Contact central emergency dispatch.
                    </p>
                  </div>
                </div>
                <button className="px-3 py-1.5 rounded-lg bg-[#b91c1c] text-white font-bold text-xs hover:bg-[#991b1b] transition-colors shrink-0">
                  Dial 911
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
