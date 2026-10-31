import React from 'react';
import Layout from '../components/Layout';

export default function ReportsAnalytics() {
  return (
    <Layout title="Reports & Analytics" breadcrumb="Municipal Telemetry & Indices" portalType="admin">
      <div className="flex flex-col w-full gap-8">


<section className="flex flex-col xl:flex-row xl:items-end justify-between gap-space-lg">
<div className="flex flex-col gap-space-xs max-w-2xl">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
        Municipal Reports &amp; Civic Analytics
      </h1>
<p className="font-body-md text-body-md text-on-surface-variant">
        Cross-ward resolution performance, SLA compliance indices, citizen satisfaction, and departmental turnaround benchmarks.
      </p>
</div>

<div className="flex flex-wrap items-center gap-space-sm">

<div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-2 rounded-lg shadow-sm">
<span className="material-symbols-outlined text-primary text-[18px]">calendar_today</span>
<div className="flex flex-col text-left">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Timeframe</span>
<span className="font-label-md text-label-md text-on-surface">Oct 1 – Oct 31, 2024</span>
</div>
<span className="material-symbols-outlined text-outline-variant text-[16px] ml-1">expand_more</span>
</div>

<div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-2 rounded-lg shadow-sm">
<span className="material-symbols-outlined text-secondary text-[18px]">domain</span>
<div className="flex flex-col text-left">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Jurisdiction</span>
<span className="font-label-md text-label-md text-on-surface">All Wards (1–8)</span>
</div>
<span className="material-symbols-outlined text-outline-variant text-[16px] ml-1">expand_more</span>
</div>

<div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-2 rounded-lg shadow-sm">
<span className="material-symbols-outlined text-tertiary text-[18px]">construction</span>
<div className="flex flex-col text-left">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Department</span>
<span className="font-label-md text-label-md text-on-surface">Public Works</span>
</div>
<span className="material-symbols-outlined text-outline-variant text-[16px] ml-1">expand_more</span>
</div>

<div className="flex items-center gap-space-xs">
<button className="inline-flex items-center gap-space-xs px-space-md py-2 bg-surface-container-lowest text-on-surface rounded-lg font-label-md text-label-md shadow-sm hover:bg-surface-container-low transition-all" type="button">
<span className="material-symbols-outlined text-on-surface-variant text-[18px]">picture_as_pdf</span>
<span>PDF Audit</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-md py-2 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-95 transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">file_download</span>
<span>Export GeoJSON/CSV</span>
</button>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Total Issues Logged</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">3,842</span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">inbox</span>
</div>
</div>
<div className="mt-space-md flex flex-col gap-space-xs">
<div className="flex items-center justify-between text-body-sm">
<span className="inline-flex items-center text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">trending_up</span>
            +12.4% vs prev period
          </span>
<span className="font-mono-data text-mono-data text-on-surface-variant">94.1% capture</span>
</div>
<div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{"width":"94.1%"}}></div>
</div>
</div>
</div>

<div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Mean Time to Resolution</span>
<span className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">26.4 hrs</span>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">speed</span>
</div>
</div>
<div className="mt-space-md flex items-center justify-between">
<span className="inline-flex items-center text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">arrow_downward</span>
          -4.2 hrs turnaround
        </span>
<span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
          Within Target
        </span>
</div>
</div>

<div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">On-Time SLA Compliance</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">96.2%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant font-normal">/ 95.0% Goal</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[22px]">verified</span>
</div>
</div>
<div className="mt-space-md flex items-center justify-between text-body-sm">
<span className="font-mono-data text-mono-data text-on-surface-variant">142 urgent resolved</span>
<div className="inline-flex items-center gap-1 text-primary font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span>+1.2% delta</span>
</div>
</div>
</div>

<div className="relative overflow-hidden bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col justify-between">
<div className="flex items-start justify-between">
<div className="flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Citizen CSAT Rating</span>
<div className="flex items-baseline gap-space-xs">
<span className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">4.82</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">/ 5.0</span>
</div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[22px]">sentiment_very_satisfied</span>
</div>
</div>
<div className="mt-space-md flex items-center justify-between">
<span className="font-mono-data text-mono-data text-on-surface-variant">1,894 verified surveys</span>
<span className="inline-flex items-center text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px]">add</span>0.30 MoM
        </span>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-7 flex flex-col gap-space-lg">

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Complaint Volume &amp; Resolution Velocity</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Daily reported incidents mapped against completed public works field orders.</p>
</div>

<div className="inline-flex p-1 bg-surface-container-low rounded-lg gap-1">
<button className="px-space-sm py-1 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-xs" type="button">All</button>
<button className="px-space-sm py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors" type="button">Potholes</button>
<button className="px-space-sm py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors" type="button">Sanitation</button>
<button className="px-space-sm py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors" type="button">Lighting</button>
</div>
</div>

<div className="flex items-center gap-space-lg text-body-sm pt-space-xs">
<div className="flex items-center gap-space-xs">
<span className="w-3 h-3 rounded-sm bg-primary"></span>
<span className="font-label-md text-label-md text-on-surface">Resolved Tickets (3,694)</span>
</div>
<div className="flex items-center gap-space-xs">
<span className="w-3 h-3 rounded-sm bg-surface-container-high"></span>
<span className="font-label-md text-label-md text-on-surface">Inflow Submissions (3,842)</span>
</div>
<div className="flex items-center gap-space-xs ml-auto">
<span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
<span className="font-mono-data text-mono-data text-error">Oct 17 Rain Surge (+38%)</span>
</div>
</div>

<div className="w-full h-64 relative mt-space-sm">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 700 220">

<line stroke="#E2E8F0" stroke-dasharray="3,3" strokeWidth="1" x1="0" x2="700" y1="40" y2="40"></line>
<line stroke="#E2E8F0" stroke-dasharray="3,3" strokeWidth="1" x1="0" x2="700" y1="90" y2="90"></line>
<line stroke="#E2E8F0" stroke-dasharray="3,3" strokeWidth="1" x1="0" x2="700" y1="140" y2="140"></line>
<line stroke="#E2E8F0" strokeWidth="1" x1="0" x2="700" y1="190" y2="190"></line>

<defs>
<lineargradient id="resolvedGradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" stopColor="#005c55" stopOpacity="0.25"></stop>
<stop offset="100%" stopColor="#005c55" stopOpacity="0.0"></stop>
</lineargradient>
</defs>


<rect fill="#DCE9FF" height="110" rx="3" width="16" x="35" y="80"></rect>
<rect fill="#DCE9FF" height="135" rx="3" width="16" x="75" y="55"></rect>
<rect fill="#DCE9FF" height="120" rx="3" width="16" x="115" y="70"></rect>
<rect fill="#DCE9FF" height="145" rx="3" width="16" x="155" y="45"></rect>

<rect fill="#DCE9FF" height="160" rx="3" width="16" x="215" y="30"></rect>
<rect fill="#BA1A1A" fill-opacity="0.3" height="175" rx="3" width="16" x="255" y="15"></rect>
<rect fill="#DCE9FF" height="150" rx="3" width="16" x="295" y="40"></rect>
<rect fill="#DCE9FF" height="130" rx="3" width="16" x="335" y="60"></rect>

<rect fill="#DCE9FF" height="115" rx="3" width="16" x="395" y="75"></rect>
<rect fill="#DCE9FF" height="100" rx="3" width="16" x="435" y="90"></rect>
<rect fill="#DCE9FF" height="125" rx="3" width="16" x="475" y="65"></rect>
<rect fill="#DCE9FF" height="140" rx="3" width="16" x="515" y="50"></rect>

<rect fill="#DCE9FF" height="105" rx="3" width="16" x="575" y="85"></rect>
<rect fill="#DCE9FF" height="95" rx="3" width="16" x="615" y="95"></rect>
<rect fill="#DCE9FF" height="80" rx="3" width="16" x="655" y="110"></rect>

<path d="M 43,105 Q 125,75 223,45 T 263,30 T 343,70 T 443,100 T 523,60 T 663,120 L 663,190 L 43,190 Z" fill="url(#resolvedGradient)"></path>

<path d="M 43,105 Q 125,75 223,45 T 263,30 T 343,70 T 443,100 T 523,60 T 663,120" fill="none" stroke="#005c55" strokeLinecap="round" strokeWidth="3"></path>

<circle cx="263" cy="30" fill="#005c55" r="4.5" stroke="#FFFFFF" strokeWidth="2"></circle>
<circle cx="523" cy="60" fill="#005c55" r="4.5" stroke="#FFFFFF" strokeWidth="2"></circle>

<g transform="translate(240, -4)">
<rect fill="#213145" height="18" rx="4" width="70" x="-10" y="0"></rect>
<text fill="#ffffff" font-family="Inter" font-size="9" font-weight="600" text-anchor="middle" x="25" y="12">Peak: 312 Incidents</text>
</g>
</svg>
</div>
<div className="flex justify-between items-center text-on-surface-variant font-mono-data text-mono-data pt-space-xs border-t-0">
<span>Oct 01</span>
<span>Oct 08</span>
<span>Oct 15</span>
<span>Oct 22</span>
<span>Oct 29</span>
<span>Nov 01</span>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
<div className="p-space-lg flex items-center justify-between pb-space-md">
<div className="flex flex-col">
<h2 className="font-headline-md text-headline-md text-on-surface">Ward-by-Ward SLA &amp; Performance Matrix</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Comparative analysis across administrative council districts.</p>
</div>
<div className="flex items-center gap-space-xs">
<button className="p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">filter_list</span>
</button>
<button className="p-1.5 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">fullscreen</span>
</button>
</div>
</div>
<div className="overflow-x-auto w-full">
<table className="w-full text-left text-on-surface">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
<th className="py-3 px-space-md">Ward / Jurisdiction</th>
<th className="py-3 px-space-sm">Councilor / Lead</th>
<th className="py-3 px-space-sm text-right">Total Logged</th>
<th className="py-3 px-space-sm text-right">Active Crews</th>
<th className="py-3 px-space-sm text-right">Avg MTTR</th>
<th className="py-3 px-space-sm text-right">SLA %</th>
<th className="py-3 px-space-sm text-center">CSAT</th>
<th className="py-3 px-space-md text-right">Health Status</th>
</tr>
</thead>
<tbody className="divide-y-0 text-body-md font-body-md">

<tr className="hover:bg-surface-container transition-colors">
<td className="py-3 px-space-md font-semibold text-on-surface flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                  Ward 1 - Downtown Core
                </td>
<td className="py-3 px-space-sm text-on-surface-variant font-body-sm">Elena Rostova</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">682</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">14</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">18.2 hrs</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data font-semibold text-primary">98.4%</td>
<td className="py-3 px-space-sm text-center font-mono-data text-mono-data">4.9</td>
<td className="py-3 px-space-md text-right">
<span className="inline-flex items-center px-space-xs py-0.5 rounded-full text-label-sm font-label-sm bg-primary-fixed text-on-primary-fixed-variant">Optimal</span>
</td>
</tr>

<tr className="hover:bg-surface-container transition-colors">
<td className="py-3 px-space-md font-semibold text-on-surface flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                  Ward 2 - Riverside North
                </td>
<td className="py-3 px-space-sm text-on-surface-variant font-body-sm">David Chen</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">490</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">8</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">22.0 hrs</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data font-semibold text-primary">97.1%</td>
<td className="py-3 px-space-sm text-center font-mono-data text-mono-data">4.8</td>
<td className="py-3 px-space-md text-right">
<span className="inline-flex items-center px-space-xs py-0.5 rounded-full text-label-sm font-label-sm bg-primary-fixed text-on-primary-fixed-variant">Optimal</span>
</td>
</tr>

<tr className="hover:bg-surface-container transition-colors">
<td className="py-3 px-space-md font-semibold text-on-surface flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Ward 3 - East Industrial
                </td>
<td className="py-3 px-space-sm text-on-surface-variant font-body-sm">Kareem Al-Sayed</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">340</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">6</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">29.4 hrs</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data font-semibold text-secondary">94.8%</td>
<td className="py-3 px-space-sm text-center font-mono-data text-mono-data">4.6</td>
<td className="py-3 px-space-md text-right">
<span className="inline-flex items-center px-space-xs py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed-variant">Normal</span>
</td>
</tr>

<tr className="bg-surface-container-high/60 hover:bg-surface-container-high transition-colors">
<td className="py-3 px-space-md font-semibold text-on-surface flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
                  Ward 4 - Oakwood Hills
                </td>
<td className="py-3 px-space-sm text-on-surface-variant font-body-sm">Marcus Vance (Acting)</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data font-bold">784</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">11</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data text-error font-bold">38.6 hrs</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data font-semibold text-error">91.2%</td>
<td className="py-3 px-space-sm text-center font-mono-data text-mono-data">4.5</td>
<td className="py-3 px-space-md text-right">
<span className="inline-flex items-center px-space-xs py-0.5 rounded-full text-label-sm font-label-sm bg-error-container text-on-error-container">Backlog</span>
</td>
</tr>

<tr className="hover:bg-surface-container transition-colors">
<td className="py-3 px-space-md font-semibold text-on-surface flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                  Ward 5 - West Suburbs
                </td>
<td className="py-3 px-space-sm text-on-surface-variant font-body-sm">Sarah Jenkins</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">412</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">7</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">24.1 hrs</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data font-semibold text-primary">97.8%</td>
<td className="py-3 px-space-sm text-center font-mono-data text-mono-data">4.9</td>
<td className="py-3 px-space-md text-right">
<span className="inline-flex items-center px-space-xs py-0.5 rounded-full text-label-sm font-label-sm bg-primary-fixed text-on-primary-fixed-variant">Optimal</span>
</td>
</tr>

<tr className="hover:bg-surface-container transition-colors">
<td className="py-3 px-space-md font-semibold text-on-surface flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Ward 6 - Highland Park
                </td>
<td className="py-3 px-space-sm text-on-surface-variant font-body-sm">Thomas Weber</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">320</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">5</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">25.5 hrs</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data font-semibold text-secondary">96.0%</td>
<td className="py-3 px-space-sm text-center font-mono-data text-mono-data">4.8</td>
<td className="py-3 px-space-md text-right">
<span className="inline-flex items-center px-space-xs py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed-variant">Normal</span>
</td>
</tr>

<tr className="hover:bg-surface-container transition-colors">
<td className="py-3 px-space-md font-semibold text-on-surface flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Ward 7 - South Meadows
                </td>
<td className="py-3 px-space-sm text-on-surface-variant font-body-sm">Patricia O'Neil</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">484</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">9</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">27.0 hrs</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data font-semibold text-secondary">95.4%</td>
<td className="py-3 px-space-sm text-center font-mono-data text-mono-data">4.7</td>
<td className="py-3 px-space-md text-right">
<span className="inline-flex items-center px-space-xs py-0.5 rounded-full text-label-sm font-label-sm bg-secondary-fixed text-on-secondary-fixed-variant">Normal</span>
</td>
</tr>

<tr className="hover:bg-surface-container transition-colors">
<td className="py-3 px-space-md font-semibold text-on-surface flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                  Ward 8 - University Quarter
                </td>
<td className="py-3 px-space-sm text-on-surface-variant font-body-sm">Leon Gutierrez</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">330</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">5</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data">21.8 hrs</td>
<td className="py-3 px-space-sm text-right font-mono-data text-mono-data font-semibold text-primary">98.1%</td>
<td className="py-3 px-space-sm text-center font-mono-data text-mono-data">4.9</td>
<td className="py-3 px-space-md text-right">
<span className="inline-flex items-center px-space-xs py-0.5 rounded-full text-label-sm font-label-sm bg-primary-fixed text-on-primary-fixed-variant">Optimal</span>
</td>
</tr>
</tbody>
</table>
</div>
<div className="p-space-md bg-surface-container-low/40 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<span>Showing 8 of 8 administrative wards • Live sync 2 mins ago</span>
<a className="text-primary hover:underline font-medium inline-flex items-center gap-1" href="#">
<span>Download CSV breakdown</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Recent Field Closure Verifications</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Automated before-and-after photographic telemetry audited by AI inspect-nodes.</p>
</div>
<span className="font-label-sm text-label-sm px-space-sm py-1 rounded bg-surface-container text-on-surface font-semibold">
            GPS Verified
          </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
<div className="group relative rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJNlFrvF4Rbz6fZBAahxtfbPptAk0RSATCBeXzvEHXp9SZVwXNOSEnP0dNS8t78PrnWXP5FUgnB774QJ1k5C6zP888ECOpfks4l5ZJiYD1gOVEBHyyhrkP9M2Ao5JTh75LeE39B0pk5fm7SZU3JFMB_ejudCH3ZHQaRSo-VuMbd2omQSTOv82NM1_VBZQWIe1BCBp85aa5UQ8NNr0A5Obq6txciZ41hMaT_wAsPiCJORQNAqwzCGE"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-transparent to-transparent flex flex-col justify-end p-space-md text-inverse-on-surface">
<span className="font-label-sm text-label-sm text-primary-fixed">RESOLVED • INC-2024-8891</span>
<p className="font-label-md text-label-md truncate">Pothole Repair – 4th Ave &amp; Pine Boulevard</p>
<span className="font-mono-data text-mono-data text-outline-variant text-[11px]">Time to repair: 4.8 hrs • Ward 4</span>
</div>
</div>
<div className="group relative rounded-lg overflow-hidden bg-surface-container">
<img className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAq_pye0eRVjyRjmWIC6zZjgNGFe8Oc517QqmiOHVmx6cZroLHJ6H-RE9AVlNTCbWmo3yU8LYWRANUMw1CFF1OkttUUQMvPtbqX0MaRTqAfz_jfVH0V4UViCo5EJiX_iYjL2TwEFyBM8TsFh5qUjvk-UFK0eQCK8WuSzh74K_mwOXpHXO9JTKYvOmk1lnBzSFZ83iMdSfrpw8VbOpRDHlRy9cCVXx3Ug6LapItThV_aazUWRTRBbuQ"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/90 via-transparent to-transparent flex flex-col justify-end p-space-md text-inverse-on-surface">
<span className="font-label-sm text-label-sm text-secondary-fixed">IN PROGRESS • INC-2024-9042</span>
<p className="font-label-md text-label-md truncate">Catch Basin Overflow Clearing – Elm Creek</p>
<span className="font-mono-data text-mono-data text-outline-variant text-[11px]">Crew 4-B Active • Ward 4 Bottleneck</span>
</div>
</div>
</div>
</section>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-lg">

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface">Departmental Workload</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Ticket distribution &amp; active field fleet allocations.</p>
</div>
<span className="material-symbols-outlined text-outline-variant text-[20px]">donut_large</span>
</div>

<div className="flex flex-col sm:flex-row items-center gap-space-lg py-space-sm">

<div className="relative w-36 h-36 flex-shrink-0">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 100 100">

<circle cx="50" cy="50" fill="transparent" r="45" stroke="#005c55" stroke-dasharray="96.1 282.7" stroke-dashoffset="0" strokeWidth="10"></circle>

<circle cx="50" cy="50" fill="transparent" r="45" stroke="#006780" stroke-dasharray="73.5 282.7" stroke-dashoffset="-96.1" strokeWidth="10"></circle>

<circle cx="50" cy="50" fill="transparent" r="45" stroke="#0047bf" stroke-dasharray="50.8 282.7" stroke-dashoffset="-169.6" strokeWidth="10"></circle>

<circle cx="50" cy="50" fill="transparent" r="45" stroke="#0f766e" stroke-dasharray="39.5 282.7" stroke-dashoffset="-220.4" strokeWidth="10"></circle>

<circle cx="50" cy="50" fill="transparent" r="45" stroke="#bdc9c6" stroke-dasharray="22.6 282.7" stroke-dashoffset="-259.9" strokeWidth="10"></circle>
</svg>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">3,842</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Reports</span>
</div>
</div>

<div className="flex flex-col gap-space-xs w-full">
<div className="flex items-center justify-between text-body-sm">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
<span className="font-label-md text-label-md text-on-surface">Roads &amp; Surface</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-mono-data text-mono-data font-semibold text-on-surface">34%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">24 crews</span>
</div>
</div>
<div className="flex items-center justify-between text-body-sm">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
<span className="font-label-md text-label-md text-on-surface">Sanitation &amp; Waste</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-mono-data text-mono-data font-semibold text-on-surface">26%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">18 crews</span>
</div>
</div>
<div className="flex items-center justify-between text-body-sm">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-tertiary"></span>
<span className="font-label-md text-label-md text-on-surface">Electrical &amp; Lighting</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-mono-data text-mono-data font-semibold text-on-surface">18%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">12 crews</span>
</div>
</div>
<div className="flex items-center justify-between text-body-sm">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-primary-container"></span>
<span className="font-label-md text-label-md text-on-surface">Water &amp; Drainage</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-mono-data text-mono-data font-semibold text-on-surface">14%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">9 crews</span>
</div>
</div>
<div className="flex items-center justify-between text-body-sm">
<div className="flex items-center gap-space-xs">
<span className="w-2.5 h-2.5 rounded-full bg-outline-variant"></span>
<span className="font-label-md text-label-md text-on-surface">Parks &amp; Public Space</span>
</div>
<div className="flex items-center gap-space-sm">
<span className="font-mono-data text-mono-data font-semibold text-on-surface">8%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">5 crews</span>
</div>
</div>
</div>
</div>
<div className="pt-space-xs">
<div className="bg-surface-container-low p-space-sm rounded-lg flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Total Deployed Personnel:</span>
<span className="font-mono-data text-mono-data font-bold text-on-surface">68 Mobile Response Units</span>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="w-2 h-2 rounded-full bg-error animate-ping"></span>
<h2 className="font-headline-md text-headline-md text-on-surface">SLA Breach Risk &amp; Bottlenecks</h2>
</div>
<span className="font-label-sm text-label-sm px-space-xs py-0.5 rounded-full bg-error-container text-on-error-container font-semibold">
            3 Active Anomalies
          </span>
</div>
<div className="flex flex-col gap-space-sm">

<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1 transition-all hover:bg-surface-container">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-error text-[18px]">water_damage</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Ward 4 Stormwater Backlog</span>
</div>
<span className="font-mono-data text-mono-data text-error font-bold">+18.4 hrs delay</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Heavy rain runoff exceeded culvert capacity at 4 locations. Drain vac equipment bottlenecked; 2 supplemental units requested from Ward 2.
            </p>
<div className="mt-1 flex items-center justify-between text-[11px] font-mono-data text-on-surface-variant">
<span>Impacted: 42 open tickets</span>
<a className="text-primary hover:underline font-semibold" href="#">Dispatch Reinforcement →</a>
</div>
</div>

<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1 transition-all hover:bg-surface-container">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[18px]">build</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Bucket Truck Mechanical Outage</span>
</div>
<span className="font-mono-data text-mono-data text-secondary font-bold">Div #2 Offline</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              High-mast streetlight fixes suspended along Oakridge Expressway. Maintenance estimated completion: Tomorrow at 08:00 AM.
            </p>
<div className="mt-1 flex items-center justify-between text-[11px] font-mono-data text-on-surface-variant">
<span>Impacted: 19 streetlight tickets</span>
<a className="text-primary hover:underline font-semibold" href="#">View Fleet Log →</a>
</div>
</div>

<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1 transition-all hover:bg-surface-container">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-outline text-[18px]">local_fire_department</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Asphalt Hotbox Maintenance</span>
</div>
<span className="font-mono-data text-mono-data text-outline font-bold">Scheduled Down</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Routine bi-weekly heating recalibration. Surface patch response capacity operating at 65% capacity until 17:00.
            </p>
<div className="mt-1 flex items-center justify-between text-[11px] font-mono-data text-on-surface-variant">
<span>Impacted: Non-critical potholes</span>
<span className="text-on-surface-variant font-medium">Reopening 17:00 UTC</span>
</div>
</div>
</div>
</section>

<section className="bg-white rounded-xl p-6 border border-slate-200 shadow-2xs flex flex-col gap-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[#005c55] text-[20px]">verified</span>
<h2 className="text-sm font-bold text-slate-900">Public Transparency &amp; Audit</h2>
</div>
<p className="text-xs text-slate-500">
All resolved civic issues and response turnaround reports are compiled for public record and state compliance.
</p>

<div className="p-3 bg-slate-50 rounded-lg flex items-center justify-between text-xs">
<span className="text-slate-600 font-medium">Last Monthly Audit Report</span>
<span className="text-emerald-600 font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Verified &amp; Archived
</span>
</div>

<button className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#005c55] hover:bg-[#004d47] text-white rounded-lg text-xs font-semibold shadow-2xs transition-colors cursor-pointer" type="button" onClick={() => alert('Downloading official municipal audit report...')}>
<span className="material-symbols-outlined text-[16px]">download</span>
<span>Download Official Audit Report</span>
</button>
</section>

<section className="bg-gradient-to-br from-primary-container to-primary rounded-xl p-space-lg text-on-primary shadow-sm flex flex-col gap-space-sm relative overflow-hidden">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary-container">Weekly Automation</span>
<span className="material-symbols-outlined text-on-primary-container text-[20px]">mark_email_read</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-primary">Executive Digest Ready</h3>
<p className="font-body-sm text-body-sm text-on-primary/90">
          Weekly ward dispatch synopsis scheduled for City Manager transmission at Friday 18:00 EST. 
        </p>
<div className="pt-space-xs flex items-center justify-between text-body-sm">
<span className="font-mono-data text-mono-data text-on-primary-container">8 Recipients queued</span>
<button className="text-on-primary font-semibold hover:underline text-label-sm inline-flex items-center gap-1" type="button">
<span>Preview Email</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</button>
      </div>
    </section>
  </div>
</div>
</div>
    </Layout>
  );
}

