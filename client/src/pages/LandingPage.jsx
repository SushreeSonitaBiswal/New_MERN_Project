import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import Logo from '../components/Logo';

export default function LandingPage() {
  const [stats, setStats] = useState({
    resolved: '12,480+',
    avgHours: '28h',
    satisfaction: '98%',
    activeCitizens: '45k+',
  });

  const [categories, setCategories] = useState([]);
  const [searchTicket, setSearchTicket] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catsRes, analyticsRes] = await Promise.allSettled([
          api.get('/categories'),
          api.get('/analytics/overview'),
        ]);

        if (catsRes.status === 'fulfilled' && catsRes.value.data.success) {
          setCategories(catsRes.value.data.data);
        }

        if (analyticsRes.status === 'fulfilled' && analyticsRes.value.data.success) {
          const kpis = analyticsRes.value.data.data.kpis;
          if (kpis) {
            setStats({
              resolved: kpis.resolvedReports ? `${kpis.resolvedReports + 12000}+` : '12,480+',
              avgHours: kpis.avgResolutionHours ? `${kpis.avgResolutionHours}h` : '28h',
              satisfaction: kpis.resolutionRate || '98%',
              activeCitizens: '45k+',
            });
          }
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col font-sans antialiased selection:bg-[#005c55] selection:text-white">
      {/* 1. TOP NAVIGATION BAR */}
      <header className="h-20 bg-white/90 backdrop-blur-md border-b border-[#e2e8f0] px-8 flex items-center justify-between sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3 group">
            <Logo className="w-10 h-10" />
            <div>
              <span className="text-xl font-bold tracking-tight text-[#0f172a]">FixMyArea</span>
              <p className="text-[10px] text-[#64748b] tracking-wider uppercase font-semibold">
                Civic Transparency Network
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#475569]">
            <Link to="/" className="text-[#005c55] font-bold">
              Home
            </Link>
            <Link to="/explore" className="hover:text-[#005c55] transition-colors">
              Explore Complaints
            </Link>
            <Link to="/how-it-works" className="hover:text-[#005c55] transition-colors">
              How It Works
            </Link>
            <Link to="/citizen/dashboard" className="hover:text-[#005c55] transition-colors">
              Citizen Portal
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="h-10 px-4 rounded-xl border border-[#cbd5e1] text-xs font-semibold text-[#334155] hover:bg-[#f8fafc] transition-colors flex items-center justify-center"
          >
            Sign In
          </Link>

          <Link
            to="/report"
            className="h-10 px-5 rounded-xl bg-[#005c55] hover:bg-[#004d47] text-white text-xs font-bold shadow-md shadow-[#005c55]/20 flex items-center gap-1.5 transition-all"
          >
            <span className="material-symbols-outlined text-[18px]">add_circle</span>
            <span>Report a Problem</span>
          </Link>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden pt-16 pb-20 px-8 bg-gradient-to-b from-white to-[#f8f9ff]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#eff4ff] border border-[#dbeafe] text-[#006780] text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#005c55] animate-pulse"></span>
              <span>Decentralized Civic Oversight • Ward Central</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-[1.15]">
              Better Neighborhoods <br />
              <span className="text-[#005c55]">Start With You.</span>
            </h1>

            <p className="text-base text-[#475569] leading-relaxed max-w-xl">
              Report local civic issues, track municipal engineering repairs in real time, and hold public services accountable. From potholes to streetlights, your voice drives transformation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/report"
                className="h-12 px-6 rounded-xl bg-[#005c55] hover:bg-[#004d47] text-white font-bold text-sm shadow-lg shadow-[#005c55]/25 flex items-center gap-2 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">add_alert</span>
                <span>Report an Issue</span>
              </Link>

              <Link
                to="/explore"
                className="h-12 px-6 rounded-xl bg-white border border-[#cbd5e1] text-[#334155] font-semibold text-sm hover:bg-[#f8fafc] flex items-center gap-2 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-[20px] text-[#006780]">travel_explore</span>
                <span>Explore City Issues</span>
              </Link>
            </div>

            {/* Quick Ticket Tracker Input */}
            <div className="pt-4 max-w-lg">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (searchTicket.trim()) {
                    window.location.href = `/track?ticket=${encodeURIComponent(searchTicket.trim())}`;
                  }
                }}
                className="p-1.5 rounded-2xl bg-white border border-[#cbd5e1] shadow-md flex items-center gap-2"
              >
                <span className="material-symbols-outlined pl-3 text-[#94a3b8] text-[20px]">search</span>
                <input
                  type="text"
                  value={searchTicket}
                  onChange={(e) => setSearchTicket(e.target.value)}
                  placeholder="Enter Ticket ID (e.g. FMA-4829)..."
                  className="flex-1 h-10 bg-transparent text-xs text-[#0f172a] focus:outline-none placeholder-[#94a3b8]"
                />
                <button
                  type="submit"
                  className="h-10 px-5 rounded-xl bg-[#006780] hover:bg-[#005266] text-white font-semibold text-xs transition-all cursor-pointer shrink-0"
                >
                  Track Live
                </button>
              </form>
            </div>
          </div>

          {/* Right Hero Graphic Card */}
          <div className="lg:col-span-5 relative">
            <div className="p-6 rounded-3xl bg-white border border-[#e2e8f0] shadow-2xl space-y-5 relative z-10">
              <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#eff4ff] text-[#006780] flex items-center justify-center font-bold">
                    <span className="material-symbols-outlined text-[22px]">location_city</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-[#0f172a]">Oakwood District 4</h3>
                    <p className="text-[11px] text-[#64748b]">Active Dispatch Monitor</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#ecfdf5] text-[#059669] text-[10px] font-bold">
                  98% Resolved
                </span>
              </div>

              {/* Sample Ticket Preview */}
              <div className="p-4 rounded-2xl bg-[#f8fafc] border border-[#e2e8f0] space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="font-mono font-bold text-[#006780]">#FMA-4829</span>
                  <span className="px-2 py-0.5 rounded bg-[#ecfdf5] text-[#059669] font-bold text-[10px]">
                    RESOLVED IN 18H
                  </span>
                </div>
                <h4 className="text-xs font-bold text-[#0f172a]">
                  Dangerous 3-ft asphalt depression near High School crosswalk
                </h4>
                <p className="text-[11px] text-[#64748b]">
                  Repaved and compacted with heavy thermal asphalt by Highway Division Crew #4.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#eff4ff] border border-[#dbeafe]">
                  <p className="text-[10px] text-[#64748b] font-bold uppercase">Avg Dispatch</p>
                  <p className="text-lg font-extrabold text-[#005c55] mt-0.5">18 Mins</p>
                </div>
                <div className="p-3 rounded-xl bg-[#eff4ff] border border-[#dbeafe]">
                  <p className="text-[10px] text-[#64748b] font-bold uppercase">Public Audit</p>
                  <p className="text-lg font-extrabold text-[#006780] mt-0.5">100% Open</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-[#76dcff]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-[#9cf2e8]/30 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* 3. METRICS BANNER */}
      <section className="border-y border-[#e2e8f0] bg-white py-10 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-3xl lg:text-4xl font-extrabold text-[#005c55]">{stats.resolved}</p>
            <p className="text-xs text-[#64748b] font-semibold mt-1">Issues Resolved</p>
          </div>
          <div>
            <p className="text-3xl lg:text-4xl font-extrabold text-[#006780]">{stats.avgHours}</p>
            <p className="text-xs text-[#64748b] font-semibold mt-1">Average Turnaround</p>
          </div>
          <div>
            <p className="text-3xl lg:text-4xl font-extrabold text-[#005c55]">{stats.satisfaction}</p>
            <p className="text-xs text-[#64748b] font-semibold mt-1">Resolution Rate</p>
          </div>
          <div>
            <p className="text-3xl lg:text-4xl font-extrabold text-[#0f172a]">{stats.activeCitizens}</p>
            <p className="text-xs text-[#64748b] font-semibold mt-1">Participating Residents</p>
          </div>
        </div>
      </section>

      {/* 4. MUNICIPAL SERVICE CATEGORIES */}
      <section className="py-20 px-8 max-w-6xl mx-auto w-full space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#005c55]">Service Coverage</span>
          <h2 className="text-3xl font-extrabold text-[#0f172a]">What Issues Can You Report?</h2>
          <p className="text-xs text-[#64748b]">
            Direct pipelines connect citizen reports to municipal departments with committed SLAs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: 'construction',
              title: 'Potholes & Roads',
              dept: 'Highway Division',
              desc: 'Cracked asphalt, missing manhole covers, deep road craters, and bridge joints.',
              sla: '24 Hours SLA',
            },
            {
              icon: 'lightbulb',
              title: 'Streetlights & Electrical',
              dept: 'Lighting Bureau',
              desc: 'Flickering streetlights, damaged lamp posts, dark crosswalks, and exposed wiring.',
              sla: '48 Hours SLA',
            },
            {
              icon: 'delete_sweep',
              title: 'Waste & Sanitation',
              dept: 'Environment Dept',
              desc: 'Illegal dumping sites, overflowing commercial dumpsters, and missed collection routes.',
              sla: '36 Hours SLA',
            },
            {
              icon: 'water_drop',
              title: 'Water & Sewage Leaks',
              dept: 'Water Authority',
              desc: 'Burst main pipelines, contaminated storm runoff, and sunken catch basins.',
              sla: '12 Hours SLA',
            },
            {
              icon: 'park',
              title: 'Trees & Parks',
              dept: 'Urban Forestry',
              desc: 'Fallen branches on roadways, obstructed regulatory street signs, and dangerous limbs.',
              sla: '72 Hours SLA',
            },
            {
              icon: 'traffic',
              title: 'Signage & Traffic Signals',
              dept: 'Transportation Div',
              desc: 'Defective traffic lights, bent stop signs, and missing speed limit markers.',
              sla: '24 Hours SLA',
            },
          ].map((cat, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm hover:shadow-md hover:border-[#005c55] transition-all space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-[#eff4ff] text-[#006780] flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[24px]">{cat.icon}</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm text-[#0f172a]">{cat.title}</h3>
                  <p className="text-[11px] text-[#006780] font-semibold">{cat.dept}</p>
                </div>
                <p className="text-xs text-[#64748b] leading-relaxed">{cat.desc}</p>
              </div>

              <div className="pt-3 border-t border-[#f1f5f9] flex items-center justify-between text-xs">
                <span className="font-bold text-[#059669] text-[11px]">{cat.sla}</span>
                <Link
                  to={`/report?category=${encodeURIComponent(cat.title)}`}
                  className="font-bold text-[#005c55] hover:underline flex items-center gap-1"
                >
                  <span>Report</span>
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="mt-auto bg-white border-t border-[#e2e8f0] py-10 px-8 text-xs text-[#64748b]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Logo className="w-6 h-6" />
            <span className="font-bold text-[#0f172a]">FixMyArea Municipal Operations</span>
            <span>• Open Civic Transparency</span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <Link to="/how-it-works" className="hover:text-[#005c55]">
              Documentation
            </Link>
            <Link to="/login" className="hover:text-[#005c55]">
              Staff Dispatch Portal
            </Link>
            <Link to="/admin/complaints" className="hover:text-[#005c55]">
              Municipal Admin
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
