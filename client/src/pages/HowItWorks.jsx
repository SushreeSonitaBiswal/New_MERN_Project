import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

export default function HowItWorks() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const FAQS = [
    {
      q: 'How do you stop false, duplicate, or prank reports?',
      a: 'FixMyArea runs automated validation checks: GPS sensor verification, perceptual photo matching within 50 meters, and automatic duplicate grouping. If someone has already flagged the same pothole or hazard, your report upvotes the existing ticket rather than creating duplicate dispatches.',
    },
    {
      q: 'Is my personal contact information visible to contractors or city workers?',
      a: 'No. You can submit reports pseudonymously. Only municipal supervisors have administrative access to contact details if clarification is needed. Phone numbers, personal email addresses, and residential info are never published on the public tracker.',
    },
    {
      q: 'What happens when a municipal agency misses its SLA deadline?',
      a: 'If a work order exceeds its SLA target (e.g., 24 hours for potholes, 6 hours for water line breaks), the ticket is automatically escalated to the Ward Superintendent and highlighted on the admin command board with high urgency.',
    },
    {
      q: 'Can a repair be closed without photographic proof?',
      a: 'No. City crews cannot mark a task as "Resolved" without uploading GPS-stamped photo proof showing the completed repair. In addition, the citizen who reported the issue is prompted for a 1–5 star sign-off to confirm satisfaction.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col font-sans antialiased selection:bg-[#005c55] selection:text-white">
      {/* Top Navigation */}
      <header className="h-20 bg-white/90 backdrop-blur-md border-b border-[#e2e8f0] px-6 lg:px-12 flex items-center justify-between sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="w-10 h-10" />
          <div>
            <span className="text-xl font-bold tracking-tight text-[#0f172a]">FixMyArea</span>
            <p className="text-[10px] text-[#64748b] tracking-wider uppercase font-semibold">
              Civic Transparency Network
            </p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-[#475569]">
          <Link to="/" className="hover:text-[#005c55] transition-colors">
            Home
          </Link>
          <Link to="/explore" className="hover:text-[#005c55] transition-colors">
            Explore Complaints
          </Link>
          <Link to="/how-it-works" className="text-[#005c55] font-bold">
            How It Works
          </Link>
          <Link to="/track" className="hover:text-[#005c55] transition-colors">
            Track Ticket
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-[#475569] hover:bg-[#f1f5f9] transition-colors"
          >
            Log In
          </Link>
          <Link
            to="/report"
            className="px-4 py-2 rounded-xl bg-[#005c55] hover:bg-[#004742] text-white text-xs font-bold transition-all shadow-sm flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[16px]">add_circle</span>
            <span>Report an Issue</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-5xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#005c55] text-xs font-semibold mb-4">
          <span className="w-2 h-2 rounded-full bg-[#005c55]"></span>
          <span>Transparent Municipal Issue Resolution</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight">
          How FixMyArea Enforces Civic Accountability
        </h1>

        <p className="text-sm sm:text-base text-[#64748b] max-w-2xl mx-auto mt-4 leading-relaxed">
          From your smartphone photo to municipal crew dispatch and tamper-evident repair sign-off, see how our 4-step lifecycle ensures no neighborhood issue is overlooked.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
          <Link
            to="/report"
            className="px-5 py-2.5 rounded-xl bg-[#005c55] hover:bg-[#004742] text-white font-bold text-xs shadow-md transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px]">add_location_alt</span>
            <span>Report an Issue Now</span>
          </Link>
          <Link
            to="/explore"
            className="px-5 py-2.5 rounded-xl bg-white border border-[#e2e8f0] text-slate-800 hover:bg-slate-50 font-bold text-xs shadow-xs transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-[18px] text-slate-500">manage_search</span>
            <span>Explore Public Complaints</span>
          </Link>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 text-left">
          <div className="p-4 rounded-2xl bg-white border border-[#e2e8f0] shadow-xs">
            <span className="text-[11px] text-slate-500 block uppercase font-medium">Avg Ward Triage</span>
            <span className="text-xl font-bold text-[#005c55] mt-1 block">14.2 min</span>
            <span className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#005c55]">speed</span> Sub-hour SLA
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#e2e8f0] shadow-xs">
            <span className="text-[11px] text-slate-500 block uppercase font-medium">Duplicate Filter</span>
            <span className="text-xl font-bold text-slate-900 mt-1 block">99.4%</span>
            <span className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#005c55]">hub</span> Geoclustered
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#e2e8f0] shadow-xs">
            <span className="text-[11px] text-slate-500 block uppercase font-medium">Photo Proof Rate</span>
            <span className="text-xl font-bold text-slate-900 mt-1 block">100%</span>
            <span className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#005c55]">verified</span> Verified GPS &amp; Photo
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#e2e8f0] shadow-xs">
            <span className="text-[11px] text-slate-500 block uppercase font-medium">Citizen CSAT</span>
            <span className="text-xl font-bold text-[#005c55] mt-1 block">4.82 / 5</span>
            <span className="text-[11px] text-slate-400 mt-0.5 flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#005c55]">star</span> Post-repair reviews
            </span>
          </div>
        </div>
      </section>

      {/* 4-Step Lifecycle */}
      <section className="max-w-5xl mx-auto px-6 py-12 w-full">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#005c55]">End-to-End Civic Process</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
            The 4-Step Lifecycle of a Verified Hazard
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1.5">
            Every incident traverses a simple, transparent state machine from submission to signed repair.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Step 1 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-lg bg-teal-50 text-[#005c55] font-bold text-xs">
                  STEP 01
                </span>
                <span className="text-xs font-medium text-slate-500">Intake &amp; Geotagging</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Snap, Geotag &amp; Submit</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Take a quick photo of the issue. The platform automatically pins the GPS location and validates municipal boundaries to assign the correct ward.
              </p>
            </div>
            <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2 text-xs text-slate-700">
              <span className="material-symbols-outlined text-[#005c55] text-[18px]">satellite_alt</span>
              <span>GPS Geofencing under 50m precision</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-lg bg-sky-50 text-sky-700 font-bold text-xs">
                  STEP 02
                </span>
                <span className="text-xs font-medium text-slate-500">Triage &amp; Dispatch</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Automated Dispatch &amp; SLA Timer</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Tickets are categorized and routed to active municipal crews (roads, sanitation, water, or lighting) with an active SLA countdown clock.
              </p>
            </div>
            <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2 text-xs text-slate-700">
              <span className="material-symbols-outlined text-[#005c55] text-[18px]">timer</span>
              <span>Standard 24-hr &amp; Emergency 6-hr countdowns</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 font-bold text-xs">
                  STEP 03
                </span>
                <span className="text-xs font-medium text-slate-500">Field Repair</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Verified Repair &amp; Photo Proof</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Field technicians execute the repair on site, log materials used, and submit matching "After" photos to document completion.
              </p>
            </div>
            <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2 text-xs text-slate-700">
              <span className="material-symbols-outlined text-[#005c55] text-[18px]">photo_camera</span>
              <span>Before &amp; After photo comparison required</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-xs">
                  STEP 04
                </span>
                <span className="text-xs font-medium text-slate-500">Citizen Review</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900">Citizen Sign-off &amp; Public Log</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                The reporting resident is notified and rates the repair quality (1 to 5 stars). The ticket is permanently archived in the public audit record.
              </p>
            </div>
            <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2 text-xs text-slate-700">
              <span className="material-symbols-outlined text-[#005c55] text-[18px]">star</span>
              <span>Transparent resident ratings &amp; feedback</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto px-6 py-12 w-full">
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[#005c55]">Frequently Asked Questions</span>
          <h2 className="text-2xl font-bold text-slate-900 mt-1">Everything You Need to Know</h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-3 cursor-pointer hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 text-sm">{faq.q}</span>
                  <span
                    className={`material-symbols-outlined text-slate-400 text-[20px] transition-transform ${
                      isOpen ? 'rotate-180 text-[#005c55]' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-white border-t border-[#e2e8f0] py-8 px-6 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-semibold text-slate-800">
            <Logo className="w-6 h-6" />
            <span>FixMyArea Civic Platform</span>
          </div>
          <p>© 2025 FixMyArea. Public Transparency Network. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-600">
            <Link to="/explore" className="hover:text-[#005c55]">
              Explore
            </Link>
            <Link to="/track" className="hover:text-[#005c55]">
              Track
            </Link>
            <Link to="/report" className="hover:text-[#005c55]">
              Report
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
