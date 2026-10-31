import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function StaffWorkbench() {
  const [step, setStep] = useState(3);
  const [fieldNotes, setFieldNotes] = useState(
    'Detailed work log: 250kg cold mix asphalt applied, compacted with pneumatic tamper, safety markings repainted. Tested for vehicle clearance and surface water gradient drainage.'
  );
  const [resolved, setResolved] = useState(false);

  return (
    <Layout title="Staff Workbench" breadcrumb="Active Dispatch Incident" portalType="staff">
      {/* 1. TOP OPERATIONAL STATUS BAR */}
      <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        <div className="space-y-2">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Live Field Dispatch
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1f5f9] text-[#475569] text-xs font-medium">
              <span className="material-symbols-outlined text-[16px]">domain</span>
              Oakwood Public Works & Roads
            </span>
            <span className="font-mono text-xs font-bold text-[#005c55] bg-[#eff4ff] px-2.5 py-1 rounded-md border border-[#dbeafe]">
              Crew #PW-04
            </span>
          </div>

          <h1 className="text-2xl font-bold text-[#0f172a] tracking-tight">
            Staff Workbench — Active Task Resolution
          </h1>
          <p className="text-xs text-[#64748b]">
            High-precision dispatch console with geocoded telemetry, photographic audit log, and chain-of-custody verification.
          </p>
        </div>

        {/* Shift KPIs */}
        <div className="flex items-center gap-4 bg-[#f8fafc] border border-[#e2e8f0] p-3 rounded-xl shrink-0 self-start lg:self-auto">
          <div className="px-3 text-left">
            <span className="text-[11px] text-[#64748b] block font-medium">Shift Progress</span>
            <span className="text-base font-bold text-[#0f172a]">5 / 7 Tasks Done</span>
          </div>
          <div className="w-px h-8 bg-[#cbd5e1]" />
          <div className="px-3 text-left">
            <span className="text-[11px] text-[#64748b] block font-medium">Avg Resolution</span>
            <span className="text-base font-bold text-[#005c55]">2.4 hrs</span>
          </div>
          <div className="w-px h-8 bg-[#cbd5e1]" />
          <button
            type="button"
            className="p-2 rounded-lg bg-white border border-[#cbd5e1] text-[#475569] hover:bg-[#f1f5f9] hover:text-[#0f172a] transition-colors cursor-pointer"
            title="Sync Telemetry"
          >
            <span className="material-symbols-outlined text-[18px]">sync</span>
          </button>
        </div>
      </div>

      {/* 2. URGENT SLA WARNING BANNER */}
      <div className="bg-gradient-to-r from-red-50 via-red-50/50 to-white border border-red-200 p-5 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[26px]">fmd_bad</span>
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-mono text-xs font-bold bg-red-100 text-red-800 px-2.5 py-0.5 rounded">
                #FMA-8492
              </span>
              <span className="text-xs uppercase font-bold text-red-700 tracking-wide">
                Hazard Level 1 (Severe)
              </span>
              <span className="text-xs text-[#64748b]">• Dispatched 3h 12m ago</span>
            </div>
            <h2 className="text-base font-bold text-[#0f172a] mt-1">
              Severe asphalt crater & broken curb hazard
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white/90 border border-red-200 px-4 py-2.5 rounded-xl shrink-0">
          <div className="text-right">
            <span className="text-[10px] font-bold uppercase tracking-wider text-red-600 flex items-center gap-1 justify-end">
              <span className="material-symbols-outlined text-[14px]">timer</span>
              Critical SLA Target
            </span>
            <span className="font-mono text-sm font-bold text-[#0f172a] block">
              03h : 48m : 12s remaining
            </span>
          </div>
          <div className="w-10 h-10 rounded-full border-3 border-red-500 border-t-transparent flex items-center justify-center text-xs font-bold text-red-700">
            82%
          </div>
        </div>
      </div>

      {/* 3. TWO-COLUMN OPERATIONAL WORKBENCH GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Dossier & Location & Citizen Photos (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Complaint Dossier */}
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-[#f1f5f9]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#005c55] text-[20px]">badge</span>
                <h3 className="font-bold text-sm text-[#0f172a]">Incident Dossier</h3>
              </div>
              <span className="text-[10px] font-mono font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                PRIORITY_URGENT
              </span>
            </div>

            {/* Resident Card */}
            <div className="p-3.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#005c55] text-white flex items-center justify-center font-bold text-sm">
                  SJ
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-xs text-[#0f172a]">Sarah J.</span>
                    <span className="material-symbols-outlined text-[14px] text-emerald-600" title="Verified Resident">
                      verified
                    </span>
                  </div>
                  <p className="text-[11px] text-[#64748b]">Resident • Ward 4 Oakwood</p>
                  <p className="text-[10px] text-[#005c55] font-semibold mt-0.5 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[12px]">phone_iphone</span>
                    Phone Verified (+1 ••• ••• 8192)
                  </p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-[#94a3b8] block">Filed On</span>
                <span className="text-xs font-semibold text-[#0f172a]">Oct 24, 10:14 AM</span>
              </div>
            </div>

            {/* Incident Location Map Card */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-[#0f172a] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[#006780] text-[16px]">location_on</span>
                  4th Ave & Elm St, Oakwood
                </span>
                <span className="font-mono text-[11px] text-[#64748b]">42.3314° N, 83.0458° W</span>
              </div>
              <div className="relative rounded-xl overflow-hidden h-44 bg-slate-200 group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBPPK1rKW_TbtLXCPFJ55sdkp6qpJ6FJzEIco2ChrzoT26o1xE0agCOCrBP8kf2lB5jmUDv1oca7u1RbYsxPGaxsvQq2YXmbEAXR8hauSP0iymPrCcV3-oy3w2PNBCjhOOc-plTAqox6LVXztqdvZnzMTku7mV5Rw1Z-lCvGsrKZRo_OHBo6fAIyg1hfQcDOQXYfkNX2FNLtZN16JL9OmHboS4LFMEi_GejQi7Q15CNs450SowxnU"
                  alt="Incident Location Map"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end justify-between p-3">
                  <span className="text-white text-xs font-medium flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">near_me</span>
                    0.4 miles from depot
                  </span>
                  <a
                    href="#directions"
                    onClick={(e) => e.preventDefault()}
                    className="h-8 px-3 rounded-lg bg-[#005c55] hover:bg-[#004d47] text-white text-xs font-semibold flex items-center gap-1 shadow-sm transition-all"
                  >
                    <span className="material-symbols-outlined text-[14px]">directions</span>
                    <span>Turn-by-Turn</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Citizen Uploaded Photos */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-[#0f172a] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[#005c55] text-[16px]">photo_library</span>
                  Citizen Uploads (2 Images)
                </span>
                <span className="text-[11px] text-[#64748b]">GPS EXIF Verified</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl overflow-hidden border border-[#e2e8f0] bg-[#f8fafc]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUbJrba45db-ZH8n2cIlOjc_7gfkbqS4iu8ATZZvlPK6YlRbK_xrhaAlW4v0yMMbk2vl-8a93BRdnJ8VHhGiMyaA86ncro7dLinEWUMvpfPCkU7PebMAqAM_jkryBAC3sSBU-p_XmeaOhe6g7fVQUDk9zc0yhNO6ifSzVw2ww4jfUqKnf0lOqojeLBuz2bnPik_ztsRq-Oj0Uf5WPHCTouSDtPmwUGTjmU7fTQSKwxk-U0brIfPFw"
                    alt="Citizen Upload 1"
                    className="w-full h-32 object-cover"
                  />
                  <p className="p-2 text-[10px] text-[#64748b] truncate font-medium">
                    Damaged pavement depth ~14cm
                  </p>
                </div>
                <div className="rounded-xl overflow-hidden border border-[#e2e8f0] bg-[#f8fafc]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9oRendbgj7YDM57qbz8vRB_8KKwV53gixCmA3Clxu8g1gb6HieFOmSFlLyyB3e31r2htjWcJe2BHA1CoOQjowG9RkubhjhUrgm1ohSxrWh1n-9zHBZDRBnS7tN3Z-PhdLLbXUKfl-nvAe81Z1rJUDkU96klitxe8o0WnyblcuG7gh8YVxKQccH9urBxKogOQi0HQ_SUbYFEgGJqkkA62h7iRp1IXoXmjmqfmM4f-XdKlm5NuiMl4"
                    alt="Citizen Upload 2"
                    className="w-full h-32 object-cover"
                  />
                  <p className="p-2 text-[10px] text-[#64748b] truncate font-medium">
                    Water pooling & curb fracture
                  </p>
                </div>
              </div>
            </div>

            {/* Audit & Dispatch Timeline */}
            <div className="space-y-3 pt-2">
              <span className="font-bold text-xs text-[#0f172a] flex items-center gap-1">
                <span className="material-symbols-outlined text-[#005c55] text-[16px]">history</span>
                Audit & Dispatch Timeline
              </span>
              <div className="relative pl-5 border-l-2 border-[#e2e8f0] space-y-4 text-xs">
                <div className="relative">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#005c55] ring-4 ring-white absolute -left-[26px] top-1" />
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#0f172a]">Reported via Citizen App</span>
                    <span className="font-mono text-[10px] text-[#94a3b8]">10:14 AM</span>
                  </div>
                  <p className="text-[11px] text-[#64748b]">Validated by municipal geofence</p>
                </div>

                <div className="relative">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#005c55] ring-4 ring-white absolute -left-[26px] top-1" />
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#0f172a]">Assigned to Crew #PW-04</span>
                    <span className="font-mono text-[10px] text-[#94a3b8]">10:28 AM</span>
                  </div>
                  <p className="text-[11px] text-[#64748b]">Auto-routed by dispatch rule</p>
                </div>

                <div className="relative">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-white absolute -left-[26px] top-1" />
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#0f172a]">Physical Inspection Completed</span>
                    <span className="font-mono text-[10px] text-[#94a3b8]">10:52 AM</span>
                  </div>
                  <p className="text-[11px] text-[#64748b]">Field lead confirmed road base repair</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Workflow Steps & Evidence Photos & Notes (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm space-y-6">
            {/* Operational Workflow Stepper */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-[#0f172a] flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#005c55] text-[20px]">sync_alt</span>
                  Operational Workflow State
                </h3>
                <span className="text-xs text-[#64748b]">Step {step} of 3</span>
              </div>

              <div className="grid grid-cols-3 gap-2 bg-[#f8fafc] p-1.5 rounded-xl border border-[#e2e8f0]">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    step === 1
                      ? 'bg-[#005c55] text-white shadow-sm'
                      : 'text-[#64748b] hover:bg-white hover:text-[#0f172a]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">navigation</span>
                  <span>1. En Route</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    step === 2
                      ? 'bg-[#005c55] text-white shadow-sm'
                      : 'text-[#64748b] hover:bg-white hover:text-[#0f172a]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">construction</span>
                  <span>2. On Site</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className={`py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                    step === 3
                      ? 'bg-[#005c55] text-white shadow-sm'
                      : 'text-[#64748b] hover:bg-white hover:text-[#0f172a]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  <span>3. Completed</span>
                </button>
              </div>
            </div>

            {/* Chain-of-Evidence Before & After Photo Proof */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-sm text-[#0f172a]">Resolution Chain-of-Evidence</h4>
                  <p className="text-xs text-[#64748b]">
                    Photographic proof captured on site for the municipal audit log.
                  </p>
                </div>
                <button
                  type="button"
                  className="text-xs font-semibold text-[#005c55] hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">add_a_photo</span>
                  <span>Upload More</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Before Work Photo */}
                <div className="rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-3 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold uppercase tracking-wider text-red-600 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-500" />
                      Before Work (Arrival)
                    </span>
                    <span className="font-mono text-[11px] bg-white border border-[#e2e8f0] px-2 py-0.5 rounded font-semibold text-[#0f172a]">
                      10:45 AM
                    </span>
                  </div>
                  <div className="relative h-44 rounded-lg overflow-hidden bg-slate-200">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTLPhrz7XQ0DGPECWWmEHmX72iUJKAFLMV-r2ANTgpPvwSy9-eg44jnh-Q4PUFOLmcwMSF5XZW-30DNWa_TZkNrmZBuWWw5y-fJ4We0tO8QEhan3yXcJbmYDBrm6-oeSCW-b_R18swRym6JKuo-hdK4SulXWwcXfu8SoK3ccXNEkEYFmk7uCHkzBli8BepQxxxjZ0W34J8XUpTWdS2DL-4Vg8va-miPCKk4tVvCt-YVmSuxnAj7kw"
                      alt="Before Work"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-slate-900/80 text-white text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px] text-red-400">pin_drop</span>
                      GPS: Lat 42.3314
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#64748b]">
                    <span>Inspector: Vance, M. (#41)</span>
                    <span className="text-emerald-700 font-semibold">Verified Valid</span>
                  </div>
                </div>

                {/* After Work Photo */}
                <div className="rounded-xl border border-emerald-200 bg-emerald-50/20 p-3 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold uppercase tracking-wider text-emerald-700 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      After Work (Repaired)
                    </span>
                    <span className="font-mono text-[11px] bg-white border border-emerald-200 px-2 py-0.5 rounded font-semibold text-emerald-800">
                      02:15 PM
                    </span>
                  </div>
                  <div className="relative h-44 rounded-lg overflow-hidden bg-slate-200">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6y-_CQiVBCj1k7M3Sph5_wbomsNr2-2VdGVLtdnJj9FdmJl9yZPpico-vzsD60jcLUfUUT9xgBqlTEKeSSt6DDrmcsluoH6IcusGlO3Uh0D4-e3NFw9PB1Lh7RdwnC6vthaTEZ8YOurSKcEZKoKTX6unYhh07k48U-1LjuqOE14uvzcxAtoi7m6-lhGUYI2BEMcdaw881p7RfQIQiNyg4HPFQzrlfvhk_GWDadvwIkQJTSBqXQ6s"
                      alt="After Work"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-slate-900/80 text-white text-[10px] font-mono px-2 py-0.5 rounded backdrop-blur-xs flex items-center gap-1">
                      <span className="material-symbols-outlined text-[12px] text-emerald-400">verified</span>
                      QC Signature: Captured
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#64748b]">
                    <span>Compaction: 98.4%</span>
                    <span className="text-emerald-700 font-bold">Standard Passed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Field Resolution Notes */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="field-notes" className="text-xs font-bold text-[#0f172a] flex items-center gap-1">
                  <span className="material-symbols-outlined text-[#005c55] text-[16px]">edit_note</span>
                  Field Resolution Notes
                </label>
                <span className="text-[11px] text-[#94a3b8]">{fieldNotes.length} / 500 chars</span>
              </div>
              <textarea
                id="field-notes"
                rows="3"
                value={fieldNotes}
                onChange={(e) => setFieldNotes(e.target.value)}
                className="w-full p-3 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-xs text-[#0f172a] focus:outline-none focus:border-[#005c55] focus:bg-white resize-none transition-all leading-relaxed"
              />
            </div>

            {/* Materials & Equipment Log */}
            <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#0f172a] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#006780] text-[16px]">inventory</span>
                  Materials & Resource Log
                </span>
                <button type="button" className="text-[11px] font-semibold text-[#005c55] hover:underline cursor-pointer">
                  Edit Breakdown
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-2.5 rounded-lg bg-white border border-[#e2e8f0] flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#eff4ff] text-[#005c55] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">group</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#94a3b8] block">Labor Roster</span>
                    <span className="text-xs font-bold text-[#0f172a]">2 Crew Members</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-[#e2e8f0] flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#eff4ff] text-[#005c55] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">timer</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#94a3b8] block">Time On Site</span>
                    <span className="text-xs font-bold text-[#0f172a]">3.5 Total Hrs</span>
                  </div>
                </div>

                <div className="p-2.5 rounded-lg bg-white border border-[#e2e8f0] flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#eff4ff] text-[#005c55] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-[#94a3b8] block">Equipment</span>
                    <span className="text-xs font-bold text-[#0f172a]">Dept Truck #12</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 border-t border-[#f1f5f9]">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="px-3.5 py-2 rounded-xl border border-[#cbd5e1] bg-white hover:bg-[#f8fafc] text-xs font-semibold text-[#334155] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">find_in_page</span>
                  <span>Secondary Inspection</span>
                </button>
                <button
                  type="button"
                  className="px-3.5 py-2 rounded-xl border border-[#cbd5e1] bg-white hover:bg-[#f8fafc] text-xs font-semibold text-[#334155] flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">save</span>
                  <span>Save Draft Log</span>
                </button>
              </div>

              <button
                type="button"
                onClick={() => setResolved(true)}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer ${
                  resolved
                    ? 'bg-emerald-600 text-white'
                    : 'bg-[#005c55] hover:bg-[#004d47] text-white active:scale-95'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">
                  {resolved ? 'task_alt' : 'check_circle'}
                </span>
                <span>{resolved ? 'Resolution Confirmed & Citizen Notified' : 'Mark as Resolved & Notify Citizen'}</span>
              </button>
            </div>
          </div>

          {/* Safety Compliance Footer */}
          <div className="bg-white rounded-xl p-4 border border-[#e2e8f0] shadow-sm flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#005c55] text-[20px]">health_and_safety</span>
              <span className="text-[#334155] font-medium">
                Safety Protocol Cleared: Traffic control signs retrieved, pavement dry-tested, citizen notification ready.
              </span>
            </div>
            <span className="text-[#005c55] font-bold shrink-0 flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">done_all</span>
              100% Compliant
            </span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
