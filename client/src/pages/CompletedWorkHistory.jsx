import React, { useState } from 'react';
import Layout from '../components/Layout';

const COMPLETED_RECORDS = [
  {
    ticketId: 'FMA-8421',
    category: 'STREETLIGHT & ELECTRICAL',
    location: 'Oakwood District 4 • 842 Elmhurst Blvd at 5th Ave',
    resolvedDate: 'Oct 25, 2024 • 14:22 EST',
    crew: 'Dave Miller (Lighting Crew EMU-01)',
    duration: '3h 12m',
    beforeImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD-AC7h3YVhfeOGcpSqXbaptQDzSKuedcmmLdiuFTe6rkoGImduEZa9AZip5NJGoBb0OPL7iCKZvUsa5WqU98TqUcdMFJb0uRuFmbwBriZ2K36q40fuwsKvLzzCpPc_-WNN6MWau2R_EvWkHf87nplpYrw7_ndX7Iw_Xq0eg4xcLAU7ygLOj-91OJDbfYR-ZEZWFGgAuH9FGkXHBTH7PH3Px2b8VDBaTFLPlt8UwJqia9cqacb5-x4',
    afterImg:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDev61XTE--ci5r8XPsFgr0_GBdr0zaFqKRIy4nci5wHgMgU5ZWG8NVy8UYkHlXL7eCqi2jJ7Kw6m_aDh35mvN8zcAXhLuAu_FPnHPLyNUc_xKc-aLncKNgf219WjpuwvNm9y89zimJG_PWf45hQF6aiGb7HZofka4HKMU9MLBnK4VXx_nCKkTL51p5supnT8eqo-t1sK92eSuF5r8d5u8idjvmUUw6mF30W8M5fecf0UnJ0QhRStA',
    beforeDesc: 'Shattered sodium vapor fixture, zero illumination.',
    afterDesc: 'Converted to modular 65W LED luminaire. 35 Lux verified.',
    materials: ['65W Modular Luminaire', 'Heavy-Duty Bracket', 'Weatherproof Sealant'],
    citizenRating: 5.0,
    citizenComment: '"Super fast repair! Street is bright and safe again for evening pedestrians."',
  },
  {
    ticketId: 'FMA-8390',
    category: 'POTHOLE & ROAD REPAIR',
    location: 'Ward 2 • 312 Grand Ave near 2nd St',
    resolvedDate: 'Oct 24, 2024 • 11:45 EST',
    crew: 'Carlos Morales (Road Crew Hotbox 04)',
    duration: '2h 40m',
    beforeImg:
      'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=600&q=80',
    afterImg:
      'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=600&q=80',
    beforeDesc: 'Deep 8-inch pothole creating lane hazard during rain.',
    afterDesc: 'Excavated edge, cold-mix asphalt tamped and sealed smooth.',
    materials: ['Asphalt Cold Patch (4 Bags)', 'Bituminous Tack Coat', 'Plate Compactor'],
    citizenRating: 4.8,
    citizenComment: '"Road is completely smooth now. Thank you for fixing it within 24 hours."',
  },
  {
    ticketId: 'FMA-8355',
    category: 'WATER MAINS & DRAINAGE',
    location: 'Ward 3 • Culvert at Meadowbrook Rd',
    resolvedDate: 'Oct 22, 2024 • 16:30 EST',
    crew: 'Sarah Chen (Hydro-Vac Team Alpha)',
    duration: '4h 05m',
    beforeImg:
      'https://images.unsplash.com/photo-1541888946425-d0fbb18086f6?auto=format&fit=crop&w=600&q=80',
    afterImg:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    beforeDesc: 'Storm runoff culvert blocked by fallen branches and debris.',
    afterDesc: 'Culvert cleared with hydro-jet suction. Flow restored to 45 GPM.',
    materials: ['Hydro-Vac Cleanout', 'Debris Mesh Replacement'],
    citizenRating: 5.0,
    citizenComment: '"Prevents our street from flooding every time it rains. Excellent work!"',
  },
];

export default function CompletedWorkHistory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRecord, setSelectedRecord] = useState(COMPLETED_RECORDS[0]);

  const filtered = COMPLETED_RECORDS.filter(
    (r) =>
      r.ticketId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.crew.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout title="Completed Work History" breadcrumb="Completed Work History" portalType="staff">
      <div className="flex flex-col w-full pb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
              <span>Staff Portal</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-[#005c55] font-semibold">Completed Work</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Completed Work History &amp; Evidence
            </h1>
            <p className="text-sm text-slate-600 mt-1">
              Review closed field work orders, before and after photo proof, used materials, and citizen feedback.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors shadow-xs"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">print</span>
              <span>Print Summary</span>
            </button>
          </div>
        </div>

        {/* 4 Summary Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Completed Tickets</span>
              <span className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                <span className="material-symbols-outlined text-[20px]">task_alt</span>
              </span>
            </div>
            <div className="text-2xl font-bold text-slate-900">142</div>
            <p className="text-xs text-slate-500 mt-1">This month across all wards</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Avg Repair Time</span>
              <span className="p-2 rounded-lg bg-teal-50 text-[#005c55]">
                <span className="material-symbols-outlined text-[20px]">timer</span>
              </span>
            </div>
            <div className="text-2xl font-bold text-slate-900">3.2 hrs</div>
            <p className="text-xs text-emerald-600 font-medium mt-1">Within SLA targets</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Photo Proof Rate</span>
              <span className="p-2 rounded-lg bg-sky-50 text-sky-600">
                <span className="material-symbols-outlined text-[20px]">photo_camera</span>
              </span>
            </div>
            <div className="text-2xl font-bold text-slate-900">100%</div>
            <p className="text-xs text-slate-500 mt-1">Before &amp; after verified</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Citizen CSAT</span>
              <span className="p-2 rounded-lg bg-amber-50 text-amber-600">
                <span className="material-symbols-outlined text-[20px]">star</span>
              </span>
            </div>
            <div className="text-2xl font-bold text-slate-900">4.9 / 5.0</div>
            <p className="text-xs text-slate-500 mt-1">Average resident rating</p>
          </div>
        </div>

        {/* Search */}
        <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs mb-6">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-slate-400">
              search
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by ticket ID (e.g. FMA-8421), category, crew, or address..."
              className="w-full h-10 pl-9 pr-3 rounded-xl bg-slate-50 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#005c55]/20 focus:bg-white border border-transparent focus:border-slate-300 transition-all"
            />
          </div>
        </div>

        {/* Work Cards List */}
        <div className="flex flex-col gap-6">
          {filtered.length === 0 ? (
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 text-center">
              <span className="material-symbols-outlined text-[36px] text-slate-400">search_off</span>
              <p className="text-sm font-semibold text-slate-700 mt-2">No completed work found</p>
              <p className="text-xs text-slate-500 mt-0.5">Try searching with another keyword.</p>
            </div>
          ) : (
            filtered.map((record) => (
              <div
                key={record.ticketId}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-sm transition-all"
              >
                {/* Card Header */}
                <div className="bg-slate-50 p-4 border-b border-slate-200/70 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 font-mono text-xs font-bold text-slate-900">
                      #{record.ticketId}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold">
                      Completed &amp; Verified
                    </span>
                    <span className="text-xs text-slate-600 font-medium flex items-center gap-1">
                      <span className="material-symbols-outlined text-[15px] text-slate-400">location_on</span>
                      {record.location}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{record.resolvedDate}</span>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Before & After Photos (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col gap-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[18px] text-[#005c55]">photo_library</span>
                        <span>Field Photo Verification</span>
                      </span>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* Before */}
                        <div className="relative rounded-xl overflow-hidden bg-slate-100 h-52 group">
                          <img
                            src={record.beforeImg}
                            alt="Before Repair"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-rose-600 text-white text-[10px] font-bold uppercase">
                            Before Repair
                          </span>
                          <p className="absolute bottom-2 left-2 right-2 text-white text-xs leading-snug">
                            {record.beforeDesc}
                          </p>
                        </div>

                        {/* After */}
                        <div className="relative rounded-xl overflow-hidden bg-slate-100 h-52 group">
                          <img
                            src={record.afterImg}
                            alt="After Repair"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent"></div>
                          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#005c55] text-white text-[10px] font-bold uppercase">
                            After Repair
                          </span>
                          <p className="absolute bottom-2 left-2 right-2 text-white text-xs leading-snug">
                            {record.afterDesc}
                          </p>
                        </div>
                      </div>

                      {/* Materials List */}
                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 mt-1">
                        <span className="text-[11px] font-bold text-slate-600 uppercase tracking-wider block mb-1.5">
                          Equipment &amp; Materials Used
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {record.materials.map((m, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-medium"
                            >
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Crew Info & Resident Feedback (5 cols) */}
                    <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                      {/* Crew details */}
                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                        <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Crew Assignment
                          </span>
                          <span className="text-xs font-semibold text-[#005c55]">Time: {record.duration}</span>
                        </div>
                        <div className="text-xs space-y-1">
                          <p className="font-semibold text-slate-800">{record.crew}</p>
                          <p className="text-slate-500">{record.category}</p>
                        </div>
                      </div>

                      {/* Citizen Feedback */}
                      <div className="p-4 rounded-xl bg-emerald-50/50 border border-emerald-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                            Citizen Review
                          </span>
                          <div className="flex items-center gap-1 text-amber-500">
                            <span className="material-symbols-outlined text-[16px] fill-current">star</span>
                            <span className="text-xs font-bold text-slate-800">{record.citizenRating} / 5.0</span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-700 italic leading-relaxed">
                          {record.citizenComment}
                        </p>
                      </div>

                      {/* Status stamp */}
                      <div className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-600">
                        <span className="material-symbols-outlined text-emerald-600 text-[18px]">verified</span>
                        <span>Quality inspector sign-off complete</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}
