import React from 'react';

export default function CategoryManagement() {
  return (
    <div className="w-full min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-[250px] bg-surface-container-lowest z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex flex-col flex-1 overflow-y-auto"><div className="p-space-md flex items-center gap-space-sm"><img alt="FixMyArea Brand Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1UFgGY8YFJ_uSwMb-1C2HU22kFZeAM_us6EfAz1AkcobGX2c3hO7A9abO8q-2fUVCGSnQMlFgCnByOnW73UCwhkwPQFiPlDoCXK7_jT_FfOSE3R4xg6XvfiQmFTXgGaRxepr6XLVClA0xid1pDbNBiJ3TT9FiRpp2xrTLTGNBKVusmHnfiKoqjl7lupXWVZu7x-KPOqlCVcHESfpAH3sr7-VT_Ih5hjV37GaHkOAJc9bq1aUMuSui-e"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface">FixMyArea</span><span className="font-label-sm text-label-sm text-on-surface-variant">MUNICIPAL PORTAL</span></div></div><div className="px-space-md pb-space-sm"><div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high rounded-full"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-label-sm text-label-sm text-on-surface">Civic Portal • Live</span></div></div><nav className="flex flex-col gap-1 px-space-sm pt-space-xs" ><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">dashboard</span><span>Dashboard</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">add_alert</span><span>Report Issue</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">assignment</span><span>My Complaints</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">engineering</span><span>Staff Workbench</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">admin_panel_settings</span><span>Admin Management</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">query_stats</span><span>Analytics</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">settings</span><span>Settings</span></a></nav></div><div className="p-space-sm flex flex-col gap-space-sm"><div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-xs"><span className="material-symbols-outlined text-primary text-[20px] mt-0.5">support_agent</span><div><p className="font-label-md text-label-md text-on-surface">Municipal Helpline</p><p className="font-body-sm text-body-sm text-on-surface-variant">Dial 311 (24/7 Support)</p></div></div><div className="flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container transition-colors"><div className="flex items-center gap-space-xs"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZGa7KnneAmgBhAqMbqIy2I4VHeL9M975I-81ZM2iNC2kbBhU4GyPJykbhmeR3GAh2Ynhi6BpGOAy2kXPA6uOZu3_UK2232YOnpP0pOUhXfJtLsYsSgOI2eCz3AMrvE9bax2Tvk_eo-k4x5TqqD1FyWZb2oZCWWED82vVRo44yt2FD1IiAg_1YYE-0d9bSHVhsuBp3iUpBxVuKFGmDAVa1nRtfasLgyR0JGCvJmmZK_sfifpUe4Uo"/><div className="flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface">Marcus Vance</span><span className="font-label-sm text-label-sm text-on-surface-variant">Field Dispatcher</span></div></div><button className="text-on-surface-variant hover:text-on-surface" type="button"><span className="material-symbols-outlined text-[18px]">expand_more</span></button></div></div></aside><div className="pl-[250px]"><header className="fixed top-0 left-[250px] right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-md z-40 flex items-center justify-between px-space-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs text-on-surface-variant"><span className="material-symbols-outlined text-[18px]">location_city</span><span className="font-label-md text-label-md">FixMyArea</span><span className="material-symbols-outlined text-[14px]">chevron_right</span><div className="inline-flex items-center gap-1 bg-surface-container-low px-space-sm py-1 rounded-full text-on-surface"><span className="material-symbols-outlined text-primary text-[16px]">pin_drop</span><span className="font-label-md text-label-md">Oakwood District 4</span><span className="material-symbols-outlined text-[14px] text-on-surface-variant">arrow_drop_down</span></div></div><div className="relative w-80 lg:w-96"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">search</span><input className="w-full h-9 pl-9 pr-4 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search complaints by ID, street, or category..." type="text"/></div></div><div className="flex items-center gap-space-md"><button className="relative p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" type="button"><span className="material-symbols-outlined text-[22px]">notifications</span><span className="absolute top-1.5 right-1.5 w-4 h-4 bg-error text-on-error rounded-full font-label-sm text-[10px] flex items-center justify-center font-bold">3</span></button><a className="inline-flex items-center gap-space-xs px-space-md py-2 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-95 transition-all"  href="#"><span className="material-symbols-outlined text-[18px]">add</span><span>Report Problem</span></a><div className="flex items-center gap-space-xs pl-space-xs cursor-pointer"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZGa7KnneAmgBhAqMbqIy2I4VHeL9M975I-81ZM2iNC2kbBhU4GyPJykbhmeR3GAh2Ynhi6BpGOAy2kXPA6uOZu3_UK2232YOnpP0pOUhXfJtLsYsSgOI2eCz3AMrvE9bax2Tvk_eo-k4x5TqqD1FyWZb2oZCWWED82vVRo44yt2FD1IiAg_1YYE-0d9bSHVhsuBp3iUpBxVuKFGmDAVa1nRtfasLgyR0JGCvJmmZK_sfifpUe4Uo"/><span className="material-symbols-outlined text-[18px] text-on-surface-variant">keyboard_arrow_down</span></div></div></header><main className="w-full pt-16 bg-surface min-h-screen px-space-lg py-space-lg"><div className="flex flex-col w-full">

<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg mb-space-xl">
<div className="flex flex-col gap-space-xs max-w-3xl">
<div className="flex items-center gap-2 text-on-surface-variant font-label-md text-label-md">
<span className="hover:text-primary transition-colors cursor-pointer">Admin Console</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="hover:text-primary transition-colors cursor-pointer">System Configuration</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Category Management</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
        Category &amp; Routing Management
      </h1>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
        Configure civic issue categories, SLA response thresholds, department routing rules, and automated crew dispatch protocols across municipal service sectors.
      </p>
</div>

<div className="flex flex-wrap items-center gap-space-sm">
<button className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-all shadow-sm font-label-lg text-label-lg group" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary transition-colors">tune</span>
<span>Test AI Classifier</span>
</button>
<button className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-low transition-all shadow-sm font-label-lg text-label-lg group" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary transition-colors">file_download</span>
<span>Export Rules</span>
<span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">JSON/CSV</span>
</button>
<button className="inline-flex items-center gap-2 px-space-lg py-2.5 rounded-lg bg-primary text-on-primary hover:opacity-95 transition-all shadow-sm font-label-lg text-label-lg cursor-pointer" type="button">
<span className="material-symbols-outlined text-[18px]">add_circle</span>
<span>New Category</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-lg mb-space-xl">

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary-fixed/30 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Active Taxonomy</span>
<span className="p-2 rounded-lg bg-surface-container text-primary">
<span className="material-symbols-outlined text-[20px]">category</span>
</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-display-hero text-[2rem] leading-none text-on-surface">18</span>
<span className="font-label-lg text-label-lg text-on-surface-variant">Active</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
<span>6 Primary, 12 Sub-categories</span>
</p>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-mono-data text-mono-data">
<span>Routing Status</span>
<span className="font-semibold text-primary">100% Routed</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-secondary-fixed/40 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Average SLA Target</span>
<span className="p-2 rounded-lg bg-surface-container text-secondary">
<span className="material-symbols-outlined text-[20px]">timer</span>
</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-display-hero text-[2rem] leading-none text-on-surface">24.5</span>
<span className="font-label-lg text-label-lg text-on-surface-variant">hrs</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2 flex items-center gap-1">
<span className="material-symbols-outlined text-primary text-[16px]">arrow_downward</span>
<span className="text-primary font-semibold">-3.5h</span>
<span>ahead of 28h municipal target</span>
</p>
</div>

<div className="mt-space-md pt-space-xs flex items-center justify-between">
<span className="font-mono-data text-mono-data text-on-surface-variant">7-day Trend</span>
<svg className="w-20 h-5 text-primary" fill="none" viewbox="0 0 100 24">
<path d="M0 20 L20 16 L40 18 L60 11 L80 13 L100 5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
</svg>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-tertiary-fixed/30 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Automated Dispatch</span>
<span className="p-2 rounded-lg bg-surface-container text-tertiary">
<span className="material-symbols-outlined text-[20px]">smart_toy</span>
</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-display-hero text-[2rem] leading-none text-on-surface">92.4%</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
          Zero-touch automated field assignment
        </p>
</div>
<div className="mt-space-md pt-space-xs">
<div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="h-full bg-primary rounded-full" style={{"width":"92.4%"}}></div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col justify-between relative overflow-hidden group hover:shadow-md transition-shadow">
<div className="absolute -right-6 -bottom-6 w-24 h-24 bg-primary-fixed/20 rounded-full blur-xl pointer-events-none group-hover:scale-125 transition-transform duration-500"></div>
<div className="flex items-center justify-between mb-space-md">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Quality Standard</span>
<span className="p-2 rounded-lg bg-surface-container text-primary">
<span className="material-symbols-outlined text-[20px]">verified</span>
</span>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="font-display-hero text-[2rem] leading-none text-on-surface">4.8</span>
<span className="font-label-lg text-label-lg text-on-surface-variant">/ 5.0</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
          Citizen post-closure resolution sign-off
        </p>
</div>
<div className="mt-space-md pt-space-xs flex items-center justify-between text-on-surface-variant font-mono-data text-mono-data">
<span>Required threshold</span>
<span className="font-semibold text-on-surface">Min 4.5</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm mb-space-lg flex flex-col xl:flex-row items-stretch xl:items-center justify-between gap-space-md">

<div className="relative flex-1 min-w-[280px]">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">search</span>
<input className="w-full h-10 pl-10 pr-4 rounded-lg bg-surface font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:bg-surface-container-low transition-colors" id="categorySearchInput" placeholder="Search categories by keyword, department, or fleet tag..." type="text"/>
</div>

<div className="flex flex-wrap items-center gap-space-sm">

<div className="relative">
<select className="appearance-none h-10 pl-3 pr-8 rounded-lg bg-surface font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors cursor-pointer focus:outline-none">
<option>All Departments</option>
<option>Public Works &amp; Transportation</option>
<option>Waste Management &amp; Sanitation</option>
<option>Electrical &amp; Lighting Division</option>
<option>Municipal Waterworks &amp; Sewers</option>
<option>Parks &amp; Recreation Division</option>
<option>Traffic Engineering &amp; Safety</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant pointer-events-none">expand_more</span>
</div>

<div className="relative">
<select className="appearance-none h-10 pl-3 pr-8 rounded-lg bg-surface font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors cursor-pointer focus:outline-none">
<option>All SLA Windows</option>
<option>Emergency (SLA &lt; 6h)</option>
<option>High Priority (SLA &lt; 18h)</option>
<option>Standard (SLA 24h - 48h)</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant pointer-events-none">expand_more</span>
</div>

<div className="relative">
<select className="appearance-none h-10 pl-3 pr-8 rounded-lg bg-surface font-label-md text-label-md text-on-surface hover:bg-surface-container-low transition-colors cursor-pointer focus:outline-none">
<option>Status: Active (18)</option>
<option>Status: Maintenance (2)</option>
<option>Status: Archived (5)</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant pointer-events-none">expand_more</span>
</div>

<div className="flex items-center bg-surface p-1 rounded-lg">
<button className="p-1.5 rounded-md bg-surface-container-lowest text-primary shadow-sm transition-all" id="viewGridBtn" title="Bento Card View" type="button">
<span className="material-symbols-outlined text-[20px]">grid_view</span>
</button>
<button className="p-1.5 rounded-md text-on-surface-variant hover:text-on-surface transition-all" id="viewTableBtn" title="Tabular Matrix View" type="button">
<span className="material-symbols-outlined text-[20px]">table_rows</span>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 2xl:grid-cols-12 gap-space-lg items-start">

<div className="2xl:col-span-8 flex flex-col gap-space-md">

<div className="category-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all relative overflow-hidden cursor-pointer selected-ring ring-2 ring-primary" >
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-md">
<div className="flex items-start sm:items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[26px]">construction</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-mono-data text-mono-data text-on-surface-variant uppercase tracking-wider">#CAT-01</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                  Active Routing
                </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[13px] text-primary">bolt</span> AI Auto-Route
                </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface tracking-tight mt-0.5">
                Potholes &amp; Asphalt Degradation
              </h3>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-auto">
<button className="px-3 py-1.5 rounded-lg bg-surface text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md" type="button">
              Edit SLA
            </button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md p-space-md rounded-lg bg-surface mb-space-md">
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Department</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block truncate">Public Works &amp; Transport</span>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">SLA Target</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-label-md text-label-md text-on-surface font-semibold">24h Standard</span>
<span className="font-label-sm text-label-sm text-error font-medium">(8h Critical)</span>
</div>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Assigned Fleet</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block truncate">PW-Roads (Hotbox 04)</span>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Monthly Vol / Success</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block">1,248 rpts · 97.2%</span>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs text-on-surface-variant font-body-sm text-body-sm">
<div className="flex flex-wrap items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container font-mono-data text-[11px] text-on-surface-variant">GPS-Bound &lt;50m</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-mono-data text-[11px] text-on-surface-variant">Computer Vision Verified</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-mono-data text-[11px] text-on-surface-variant">Citizen Follow-up Req</span>
</div>
<span className="text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
            Rules configured (4 active triggers) <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</span>
</div>
</div>

<div className="category-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all relative overflow-hidden cursor-pointer" >
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-md">
<div className="flex items-start sm:items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[26px]">delete_sweep</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-mono-data text-mono-data text-on-surface-variant uppercase tracking-wider">#CAT-02</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Active Routing
                </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[13px] text-primary">scale</span> Volume Weighting
                </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface tracking-tight mt-0.5">
                Garbage Accumulation &amp; Illegal Dumping
              </h3>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-auto">
<button className="px-3 py-1.5 rounded-lg bg-surface text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md" type="button">
              Edit SLA
            </button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md p-space-md rounded-lg bg-surface mb-space-md">
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Department</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block truncate">Waste Mgmt &amp; Sanitation</span>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">SLA Target</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-label-md text-label-md text-on-surface font-semibold">12h Target</span>
<span className="font-label-sm text-label-sm text-error font-medium">(4h Biohazard)</span>
</div>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Assigned Fleet</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block truncate">Sanitation Unit + Dumpers</span>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Monthly Vol / Success</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block">942 rpts · 98.1%</span>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs text-on-surface-variant font-body-sm text-body-sm">
<div className="flex flex-wrap items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container font-mono-data text-[11px] text-on-surface-variant">Auto-Volume Detection</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-mono-data text-[11px] text-on-surface-variant">Bio-Hazard Tier Check</span>
</div>
<span className="text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
            Rules configured (3 active triggers) <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</span>
</div>
</div>

<div className="category-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all relative overflow-hidden cursor-pointer" >
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-md">
<div className="flex items-start sm:items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[26px]">lightbulb</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-mono-data text-mono-data text-on-surface-variant uppercase tracking-wider">#CAT-03</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Active Routing
                </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[13px] text-primary">electric_bolt</span> Substation Sync
                </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface tracking-tight mt-0.5">
                Streetlight Outages &amp; Electrical Hazards
              </h3>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-auto">
<button className="px-3 py-1.5 rounded-lg bg-surface text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md" type="button">
              Edit SLA
            </button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md p-space-md rounded-lg bg-surface mb-space-md">
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Department</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block truncate">Electrical &amp; Lighting Div</span>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">SLA Target</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-label-md text-label-md text-on-surface font-semibold">18h Standard</span>
<span className="font-label-sm text-label-sm text-error font-medium">(2h Exposed Wires)</span>
</div>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Assigned Fleet</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block truncate">Aerial Bucket Units 01-06</span>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Monthly Vol / Success</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block">615 rpts · 95.8%</span>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs text-on-surface-variant font-body-sm text-body-sm">
<div className="flex flex-wrap items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container font-mono-data text-[11px] text-on-surface-variant">Grid Telemetry Match</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-mono-data text-[11px] text-on-surface-variant">Night Dispatch Available</span>
</div>
<span className="text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
            Rules configured (5 active triggers) <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</span>
</div>
</div>

<div className="category-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all relative overflow-hidden cursor-pointer" >
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-md">
<div className="flex items-start sm:items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[26px]">water_damage</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-mono-data text-mono-data text-on-surface-variant uppercase tracking-wider">#CAT-04</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Active Routing
                </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[13px]">emergency</span> High Consequence
                </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface tracking-tight mt-0.5">
                Water Mains, Hydrant &amp; Drainage Bursts
              </h3>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-auto">
<button className="px-3 py-1.5 rounded-lg bg-surface text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md" type="button">
              Edit SLA
            </button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md p-space-md rounded-lg bg-surface mb-space-md">
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Department</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block truncate">Waterworks &amp; Sewers</span>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">SLA Target</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-label-md text-label-md text-on-surface font-semibold">6h Emergency</span>
<span className="font-label-sm text-label-sm text-error font-medium">(1h Low PSI)</span>
</div>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Assigned Fleet</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block truncate">Hydro-Excavation &amp; Valves</span>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Monthly Vol / Success</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block">480 rpts · 99.0%</span>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs text-on-surface-variant font-body-sm text-body-sm">
<div className="flex flex-wrap items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container font-mono-data text-[11px] text-on-surface-variant">SCADA Pressure Linked</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-mono-data text-[11px] text-on-surface-variant">Instant GIS Shuts</span>
</div>
<span className="text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
            Rules configured (6 active triggers) <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</span>
</div>
</div>

<div className="category-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all relative overflow-hidden cursor-pointer" >
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-md">
<div className="flex items-start sm:items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[26px]">park</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-mono-data text-mono-data text-on-surface-variant uppercase tracking-wider">#CAT-05</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Active Routing
                </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[13px]">person_check</span> Manual Triage
                </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface tracking-tight mt-0.5">
                Damaged Public Parks &amp; Playground Equipment
              </h3>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-auto">
<button className="px-3 py-1.5 rounded-lg bg-surface text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md" type="button">
              Edit SLA
            </button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md p-space-md rounded-lg bg-surface mb-space-md">
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Department</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block truncate">Parks &amp; Recreation Div</span>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">SLA Target</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-label-md text-label-md text-on-surface font-semibold">48h Standard</span>
<span className="font-label-sm text-label-sm text-error font-medium">(12h Child Hazard)</span>
</div>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Assigned Fleet</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block truncate">Groundskeeper + Fab Crew</span>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Monthly Vol / Success</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block">320 rpts · 93.4%</span>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs text-on-surface-variant font-body-sm text-body-sm">
<div className="flex flex-wrap items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container font-mono-data text-[11px] text-on-surface-variant">Safety Inspector Gate</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-mono-data text-[11px] text-on-surface-variant">Asset Tag Verified</span>
</div>
<span className="text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
            Rules configured (2 active triggers) <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</span>
</div>
</div>

<div className="category-card bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all relative overflow-hidden cursor-pointer" >
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md mb-space-md">
<div className="flex items-start sm:items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[26px]">traffic</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-mono-data text-mono-data text-on-surface-variant uppercase tracking-wider">#CAT-06</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Active Routing
                </span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[13px] text-primary">sensors</span> Sensor Trigger
                </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface tracking-tight mt-0.5">
                Pedestrian Crosswalks &amp; Traffic Signal Malfunction
              </h3>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-auto">
<button className="px-3 py-1.5 rounded-lg bg-surface text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md" type="button">
              Edit SLA
            </button>
<button className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md p-space-md rounded-lg bg-surface mb-space-md">
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Department</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block truncate">Traffic Engineering &amp; Safety</span>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">SLA Target</span>
<div className="flex items-center gap-1.5 mt-0.5">
<span className="font-label-md text-label-md text-on-surface font-semibold">16h Standard</span>
<span className="font-label-sm text-label-sm text-error font-medium">(4h School Zone)</span>
</div>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Assigned Fleet</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block truncate">Traffic Electronics Team</span>
</div>
<div>
<span className="block font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Monthly Vol / Success</span>
<span className="font-label-md text-label-md text-on-surface font-semibold mt-0.5 block">237 rpts · 96.5%</span>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs text-on-surface-variant font-body-sm text-body-sm">
<div className="flex flex-wrap items-center gap-1.5">
<span className="px-2 py-0.5 rounded bg-surface-container font-mono-data text-[11px] text-on-surface-variant">Intersection ID Bind</span>
<span className="px-2 py-0.5 rounded bg-surface-container font-mono-data text-[11px] text-on-surface-variant">School Zone Proximity Priority</span>
</div>
<span className="text-primary font-label-sm text-label-sm font-semibold flex items-center gap-1">
            Rules configured (4 active triggers) <span className="material-symbols-outlined text-[16px]">chevron_right</span>
</span>
</div>
</div>
</div>

<div className="2xl:col-span-4 sticky top-20 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm relative">

<div className="flex items-center justify-between pb-space-sm border-b border-surface-container mb-space-md">
<div className="flex items-center gap-2">
<span className="p-1.5 rounded-md bg-primary/10 text-primary">
<span className="material-symbols-outlined text-[18px]">rule_settings</span>
</span>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface leading-snug">Quick SLA Matrix</h2>
<span className="font-mono-data text-[11px] text-on-surface-variant" id="activeCategoryCode">Potholes &amp; Asphalt (#CAT-01)</span>
</div>
</div>
<span className="inline-flex items-center px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-primary font-semibold">
            Operational
          </span>
</div>

<form className="flex flex-col gap-space-md" id="routingConfigForm" onSubmit={(e) => e.preventDefault()}>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold">Category Label</label>
<input className="h-10 px-3 rounded-lg bg-surface font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-low transition-colors" type="text" value="Potholes &amp; Asphalt Degradation"/>
</div>

<div className="flex flex-col gap-2">
<label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold flex items-center justify-between">
<span>SLA Response Thresholds</span>
<span className="text-on-surface-variant lowercase font-normal">hours to initial dispatch</span>
</label>
<div className="grid grid-cols-3 gap-2">
<div className="p-2.5 rounded-lg bg-surface flex flex-col">
<span className="font-label-sm text-[11px] text-on-surface-variant">Tier 1: Low</span>
<div className="flex items-center mt-1">
<input className="w-full bg-transparent font-headline-sm text-headline-sm text-on-surface focus:outline-none" type="number" value="48"/>
<span className="text-on-surface-variant text-label-sm font-label-sm">h</span>
</div>
</div>
<div className="p-2.5 rounded-lg bg-surface flex flex-col">
<span className="font-label-sm text-[11px] text-on-surface-variant">Tier 2: Med</span>
<div className="flex items-center mt-1">
<input className="w-full bg-transparent font-headline-sm text-headline-sm text-on-surface focus:outline-none" type="number" value="24"/>
<span className="text-on-surface-variant text-label-sm font-label-sm">h</span>
</div>
</div>
<div className="p-2.5 rounded-lg bg-surface flex flex-col">
<span className="font-label-sm text-[11px] text-error font-medium">Tier 3: Hazard</span>
<div className="flex items-center mt-1">
<input className="w-full bg-transparent font-headline-sm text-headline-sm text-error focus:outline-none" type="number" value="8"/>
<span className="text-error text-label-sm font-label-sm">h</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-2 pt-space-xs">
<label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold">Citizen Evidence Protocol</label>
<div className="flex flex-col gap-2 bg-surface p-space-sm rounded-lg">
<label className="flex items-center justify-between text-body-sm font-body-sm text-on-surface cursor-pointer select-none">
<span className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">photo_camera</span>
<span>Geotagged Photo Mandatory</span>
</span>
<input defaultChecked={true} className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
</label>
<label className="flex items-center justify-between text-body-sm font-body-sm text-on-surface cursor-pointer select-none">
<span className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">my_location</span>
<span>Geofence Validation (&lt;50m)</span>
</span>
<input defaultChecked={true} className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
</label>
<label className="flex items-center justify-between text-body-sm font-body-sm text-on-surface cursor-pointer select-none">
<span className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-primary">notes</span>
<span>Min 20 Characters Description</span>
</span>
<input defaultChecked={true} className="w-4 h-4 rounded text-primary accent-primary cursor-pointer" type="checkbox"/>
</label>
</div>
</div>

<div className="flex flex-col gap-2">
<label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold">Auto-Escalation Engine</label>
<div className="p-space-sm rounded-lg bg-surface flex flex-col gap-2">
<div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface">
<span className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span>If unassigned after 90m:</span>
</span>
<span className="font-label-sm text-label-sm font-semibold text-primary">Alert Crew Lead</span>
</div>
<div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface">
<span className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-error"></span>
<span>If SLA breach &lt; 2h:</span>
</span>
<span className="font-label-sm text-label-sm font-semibold text-error">Escalate to Vance, M.</span>
</div>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold">Primary Municipal Fleet</label>
<select className="w-full h-10 px-3 rounded-lg bg-surface font-body-md text-body-md text-on-surface focus:outline-none focus:bg-surface-container-low transition-colors">
<option selected="">Crew PW-Roads (Hotbox &amp; Tamper Units)</option>
<option>Rapid Sanitation Unit 03</option>
<option>Aerial Bucket EMU-01</option>
<option>Water Hydro-Excavation Alpha</option>
</select>
</div>

<div className="flex items-center justify-end gap-space-sm pt-space-sm border-t border-surface-container">
<button className="px-space-md py-2 rounded-lg bg-surface text-on-surface-variant hover:text-on-surface transition-colors font-label-md text-label-md" type="button">
              Reset Defaults
            </button>
<button className="px-space-lg py-2 rounded-lg bg-primary text-on-primary hover:opacity-95 transition-all shadow-sm font-label-md text-label-md flex items-center gap-1.5 cursor-pointer" id="saveConfigBtn" type="button">
<span className="material-symbols-outlined text-[16px]">save</span>
<span>Save Category Matrix</span>
</button>
</div>
</form>

<div className="hidden mt-space-md p-space-sm rounded-lg bg-surface-container-high text-on-surface text-body-sm font-body-sm items-center gap-2 transition-all" id="saveToast">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span>Category routing parameters updated successfully across dispatchers.</span>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm">
<div className="flex items-center justify-between mb-space-sm">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">psychology</span>
<span className="font-label-lg text-label-lg font-semibold text-on-surface">Auto-Classifier Accuracy</span>
</div>
<span className="font-mono-data text-mono-data text-primary font-semibold">v3.4 Production</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-sm">
          FixMyArea computer vision tags pothole depth, debris cubic feet, and live power hazards with zero supervisor intervention.
        </p>
<div className="flex items-center justify-between text-body-sm font-body-sm">
<span className="text-on-surface-variant">Triage Accuracy</span>
<span className="font-semibold text-on-surface">98.4% Confidence</span>
</div>
<div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden mt-1.5">
<div className="h-full bg-primary rounded-full" style={{"width":"98.4%"}}></div>
</div>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
}
