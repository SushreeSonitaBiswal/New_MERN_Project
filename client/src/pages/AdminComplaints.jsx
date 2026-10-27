import React from 'react';

export default function AdminComplaints() {
  return (
    <div className="w-full min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-[250px] bg-surface-container-lowest z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex flex-col flex-1 overflow-y-auto"><div className="p-space-md flex items-center gap-space-sm"><img alt="FixMyArea Brand Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1UFgGY8YFJ_uSwMb-1C2HU22kFZeAM_us6EfAz1AkcobGX2c3hO7A9abO8q-2fUVCGSnQMlFgCnByOnW73UCwhkwPQFiPlDoCXK7_jT_FfOSE3R4xg6XvfiQmFTXgGaRxepr6XLVClA0xid1pDbNBiJ3TT9FiRpp2xrTLTGNBKVusmHnfiKoqjl7lupXWVZu7x-KPOqlCVcHESfpAH3sr7-VT_Ih5hjV37GaHkOAJc9bq1aUMuSui-e"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface">FixMyArea</span><span className="font-label-sm text-label-sm text-on-surface-variant">MUNICIPAL PORTAL</span></div></div><div className="px-space-md pb-space-sm"><div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high rounded-full"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-label-sm text-label-sm text-on-surface">Civic Portal • Live</span></div></div><nav className="flex flex-col gap-1 px-space-sm pt-space-xs" ><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">dashboard</span><span>Dashboard</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">add_alert</span><span>Report Issue</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">assignment</span><span>My Complaints</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">engineering</span><span>Staff Workbench</span></a><a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-2 transition-colors bg-primary-container text-on-primary font-label-lg rounded-lg"  href="#"><span className="material-symbols-outlined text-[20px]">admin_panel_settings</span><span>Admin Management</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">query_stats</span><span>Analytics</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">settings</span><span>Settings</span></a></nav></div><div className="p-space-sm flex flex-col gap-space-sm"><div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-xs"><span className="material-symbols-outlined text-primary text-[20px] mt-0.5">support_agent</span><div><p className="font-label-md text-label-md text-on-surface">Municipal Helpline</p><p className="font-body-sm text-body-sm text-on-surface-variant">Dial 311 (24/7 Support)</p></div></div><div className="flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container transition-colors"><div className="flex items-center gap-space-xs"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZGa7KnneAmgBhAqMbqIy2I4VHeL9M975I-81ZM2iNC2kbBhU4GyPJykbhmeR3GAh2Ynhi6BpGOAy2kXPA6uOZu3_UK2232YOnpP0pOUhXfJtLsYsSgOI2eCz3AMrvE9bax2Tvk_eo-k4x5TqqD1FyWZb2oZCWWED82vVRo44yt2FD1IiAg_1YYE-0d9bSHVhsuBp3iUpBxVuKFGmDAVa1nRtfasLgyR0JGCvJmmZK_sfifpUe4Uo"/><div className="flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface">Marcus Vance</span><span className="font-label-sm text-label-sm text-on-surface-variant">Field Dispatcher</span></div></div><button className="text-on-surface-variant hover:text-on-surface" type="button"><span className="material-symbols-outlined text-[18px]">expand_more</span></button></div></div></aside><div className="pl-[250px]"><header className="fixed top-0 left-[250px] right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-md z-40 flex items-center justify-between px-space-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs text-on-surface-variant"><span className="material-symbols-outlined text-[18px]">location_city</span><span className="font-label-md text-label-md">FixMyArea</span><span className="material-symbols-outlined text-[14px]">chevron_right</span><div className="inline-flex items-center gap-1 bg-surface-container-low px-space-sm py-1 rounded-full text-on-surface"><span className="material-symbols-outlined text-primary text-[16px]">pin_drop</span><span className="font-label-md text-label-md">Oakwood District 4</span><span className="material-symbols-outlined text-[14px] text-on-surface-variant">arrow_drop_down</span></div></div><div className="relative w-80 lg:w-96"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">search</span><input className="w-full h-9 pl-9 pr-4 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search complaints by ID, street, or category..." type="text"/></div></div><div className="flex items-center gap-space-md"><button className="relative p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" type="button"><span className="material-symbols-outlined text-[22px]">notifications</span><span className="absolute top-1.5 right-1.5 w-4 h-4 bg-error text-on-error rounded-full font-label-sm text-[10px] flex items-center justify-center font-bold">3</span></button><a className="inline-flex items-center gap-space-xs px-space-md py-2 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-95 transition-all"  href="#"><span className="material-symbols-outlined text-[18px]">add</span><span>Report Problem</span></a><div className="flex items-center gap-space-xs pl-space-xs cursor-pointer"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZGa7KnneAmgBhAqMbqIy2I4VHeL9M975I-81ZM2iNC2kbBhU4GyPJykbhmeR3GAh2Ynhi6BpGOAy2kXPA6uOZu3_UK2232YOnpP0pOUhXfJtLsYsSgOI2eCz3AMrvE9bax2Tvk_eo-k4x5TqqD1FyWZb2oZCWWED82vVRo44yt2FD1IiAg_1YYE-0d9bSHVhsuBp3iUpBxVuKFGmDAVa1nRtfasLgyR0JGCvJmmZK_sfifpUe4Uo"/><span className="material-symbols-outlined text-[18px] text-on-surface-variant">keyboard_arrow_down</span></div></div></header><main className="w-full pt-16 bg-surface min-h-screen px-space-lg py-space-lg"><div className="flex flex-col w-full gap-space-lg">

<section className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex flex-col">
<div className="flex items-center gap-space-xs text-primary font-mono-data text-mono-data uppercase">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span>Central Municipal Command / Ward 04 Dispatch</span>
</div>
<div className="flex items-baseline gap-space-sm mt-1">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Complaint Management &amp; Dispatch Console</h1>
<span className="font-label-md text-label-md px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-mono-data">
          348 Active Records
        </span>
</div>
</div>

<div className="flex items-center gap-space-sm">
<div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-lowest rounded-lg shadow-sm text-on-surface-variant font-mono-data text-mono-data">
<span className="material-symbols-outlined text-primary text-[18px]">sync</span>
<span>SLA Auto-sync: <strong>42s</strong></span>
</div>
<button className="inline-flex items-center gap-space-xs px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container-low text-on-surface font-label-md text-label-md rounded-lg shadow-sm transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">download</span>
<span>Audit Log</span>
</button>
<button className="inline-flex items-center gap-space-xs px-3 py-1.5 bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:opacity-90 transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">bolt</span>
<span>Emergency Broadcast</span>
</button>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm relative overflow-hidden flex flex-col justify-between">
<div className="absolute right-0 top-0 w-24 h-24 bg-error-container/40 rounded-full blur-2xl pointer-events-none"></div>
<div className="flex items-center justify-between relative z-10">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Triage Queue</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest animate-ping"></span>
          Requires Action
        </span>
</div>
<div className="flex items-baseline justify-between mt-3 relative z-10">
<div>
<span className="font-display-hero text-display-hero text-error leading-none">18</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Unassigned Reports</p>
</div>
<div className="w-12 h-12 rounded-lg bg-error-container/60 flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[26px]">emergency_home</span>
</div>
</div>
<div className="mt-3 pt-2 flex items-center justify-between text-on-surface-variant font-mono-data text-mono-data">
<span>6 breach threat (&lt;3h)</span>
<span className="text-error font-semibold">+4 past hour</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Field Operations</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm">
          Active Deploy
        </span>
</div>
<div className="flex items-baseline justify-between mt-3">
<div>
<span className="font-display-hero text-display-hero text-on-surface leading-none">64</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Crews Active In-Field</p>
</div>
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[26px]">engineering</span>
</div>
</div>
<div className="mt-3 pt-2 flex items-center justify-between text-on-surface-variant font-mono-data text-mono-data">
<span>Avg SLA resolution: 4.8h</span>
<span className="text-secondary font-semibold">12 teams live</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Quality Audits</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
          Post-Fix
        </span>
</div>
<div className="flex items-baseline justify-between mt-3">
<div>
<span className="font-display-hero text-display-hero text-on-surface leading-none">29</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Pending Sign-off</p>
</div>
<div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[26px]">fact_check</span>
</div>
</div>
<div className="mt-3 pt-2 flex items-center justify-between text-on-surface-variant font-mono-data text-mono-data">
<span>Citizen verification: 78%</span>
<span className="text-primary font-semibold">9 photo proofs</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Shift Closure</span>
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm">
          Target +14%
        </span>
</div>
<div className="flex items-baseline justify-between mt-3">
<div>
<span className="font-display-hero text-display-hero text-primary-container leading-none">42</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Resolved Today</p>
</div>
<div className="w-12 h-12 rounded-lg bg-primary-fixed/30 flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[26px]">task_alt</span>
</div>
</div>
<div className="mt-3 pt-2 flex items-center justify-between text-on-surface-variant font-mono-data text-mono-data">
<span>98.2% SLA compliance</span>
<span className="text-primary-container font-semibold">24h turnaround</span>
</div>
</div>
</section>

<section className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-space-md">

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm items-center">

<div className="md:col-span-4 relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
<input className="w-full h-10 pl-9 pr-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary shadow-inner" placeholder="Filter by ID, keywords, citizen name, GPS..." type="text" value="sinkhole"/>
</div>

<div className="md:col-span-8 flex flex-wrap items-center gap-space-xs lg:justify-end">

<div className="inline-flex items-center gap-1 px-3 py-2 bg-surface-container-low rounded-lg text-on-surface font-label-md text-label-md cursor-pointer hover:bg-surface-container">
<span className="text-on-surface-variant">Category:</span>
<span className="font-semibold">All Categories</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>

<div className="inline-flex items-center gap-1 px-3 py-2 bg-surface-container-high rounded-lg text-on-surface font-label-md text-label-md cursor-pointer">
<span className="text-on-surface-variant">Ward:</span>
<span className="font-semibold text-primary">Ward 4 - Oakwood</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>

<div className="inline-flex items-center gap-1 px-3 py-2 bg-surface-container-low rounded-lg text-on-surface font-label-md text-label-md cursor-pointer hover:bg-surface-container">
<span className="text-on-surface-variant">Status:</span>
<span className="font-semibold">All Statuses</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>

<div className="inline-flex items-center gap-1 px-3 py-2 bg-error-container/60 rounded-lg text-on-surface font-label-md text-label-md cursor-pointer">
<span className="text-on-error-container">Priority:</span>
<span className="font-bold text-error">High &amp; Urgent</span>
<span className="material-symbols-outlined text-[16px] text-error">expand_more</span>
</div>

<div className="inline-flex items-center gap-1.5 px-3 py-2 bg-surface-container-low rounded-lg text-on-surface font-label-md text-label-md cursor-pointer hover:bg-surface-container">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">calendar_today</span>
<span>Last 7 Days</span>
<span className="material-symbols-outlined text-[16px]">expand_more</span>
</div>

<button className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" title="Reset Filters" type="button">
<span className="material-symbols-outlined text-[18px]">filter_alt_off</span>
</button>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-space-sm pt-2 bg-surface-container-low/60 -mx-space-md -mb-space-md px-space-md py-2.5 rounded-b-xl">
<div className="flex items-center gap-space-sm text-on-surface-variant font-mono-data text-mono-data">
<span className="flex items-center gap-1.5 bg-primary-fixed text-on-primary-fixed font-semibold px-2 py-0.5 rounded">
<span className="material-symbols-outlined text-[14px]">check_box</span>
<span>3 items selected</span>
</span>
<span className="hidden md:inline text-on-surface-variant">•</span>
<span className="hidden md:inline">Showing 1 - 6 of 348 complaints</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="inline-flex items-center gap-1 px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md rounded shadow-sm transition-all" type="button">
<span className="material-symbols-outlined text-[16px]">group_add</span>
<span>Bulk Assign</span>
</button>
<button className="inline-flex items-center gap-1 px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md rounded shadow-sm transition-all" type="button">
<span className="material-symbols-outlined text-[16px]">published_with_changes</span>
<span>Batch Status</span>
</button>
<button className="inline-flex items-center gap-1 px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md rounded shadow-sm transition-all" type="button">
<span className="material-symbols-outlined text-[16px]">file_download</span>
<span>Export CSV</span>
</button>
</div>
</div>
</section>

<section className="grid grid-cols-1 xl:grid-cols-12 gap-space-lg items-start">

<div className="xl:col-span-8 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-md text-label-md uppercase tracking-wider">
<th className="py-3 px-3 w-10 text-center">
<input defaultChecked={true} className="w-4 h-4 rounded text-primary focus:ring-primary accent-primary" type="checkbox"/>
</th>
<th className="py-3 px-3">Ticket ID</th>
<th className="py-3 px-4 min-w-[220px]">Incident Details</th>
<th className="py-3 px-3">Ward</th>
<th className="py-3 px-3">Priority</th>
<th className="py-3 px-3">Status</th>
<th className="py-3 px-3">Assigned Crew</th>
<th className="py-3 px-3">SLA Status</th>
<th className="py-3 px-3 text-right">Action</th>
</tr>
</thead>
<tbody className="font-body-sm text-body-sm divide-y-0 text-on-surface">

<tr className="bg-surface-container-high/40 hover:bg-surface-container-high transition-colors font-medium">
<td className="py-3.5 px-3 text-center">
<input defaultChecked={true} className="w-4 h-4 rounded text-primary accent-primary" type="checkbox"/>
</td>
<td className="py-3.5 px-3">
<a className="font-mono-data text-mono-data text-primary underline underline-offset-2 font-bold flex items-center gap-1" href="#">
                  #FMA-9102
                  <span className="material-symbols-outlined text-[13px]">open_in_new</span>
</a>
<span className="font-label-sm text-label-sm text-on-surface-variant">Roads • Surface</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-start gap-2">
<div className="w-7 h-7 rounded bg-error-container/60 text-error flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">report</span>
</div>
<div className="min-w-0">
<p className="font-semibold text-on-surface truncate">Deep sinkhole forming near storm drain</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">482 Elmwood Terrace • Reported by J. Miller</p>
</div>
</div>
</td>
<td className="py-3.5 px-3 whitespace-nowrap">
<span className="font-mono-data text-mono-data text-on-surface">Ward 4</span>
<span className="block text-on-surface-variant font-label-sm text-label-sm">Oakwood North</span>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm uppercase font-bold tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest"></span>
                  Urgent
                </span>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                  Reported
                </span>
</td>
<td className="py-3.5 px-3 whitespace-nowrap">
<span className="inline-flex items-center gap-1 px-2 py-1 bg-error-container/60 text-error rounded font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-[14px]">person_off</span>
                  Unassigned
                </span>
</td>
<td className="py-3.5 px-3 whitespace-nowrap">
<div className="flex flex-col">
<span className="text-error font-bold font-mono-data text-mono-data flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">timer</span>
                    2h remaining
                  </span>
<span className="text-on-surface-variant text-[10px]">Breach at 16:30</span>
</div>
</td>
<td className="py-3.5 px-3 text-right whitespace-nowrap">
<button className="p-1 text-primary hover:bg-surface-container rounded transition-colors" title="Quick Assign" type="button">
<span className="material-symbols-outlined text-[20px]">assignment_ind</span>
</button>
<button className="p-1 text-on-surface-variant hover:text-on-surface rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3.5 px-3 text-center">
<input defaultChecked={true} className="w-4 h-4 rounded text-primary accent-primary" type="checkbox"/>
</td>
<td className="py-3.5 px-3">
<a className="font-mono-data text-mono-data text-primary underline underline-offset-2 font-bold" href="#">
                  #FMA-9088
                </a>
<span className="font-label-sm text-label-sm text-on-surface-variant">Sanitation</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-start gap-2">
<div className="w-7 h-7 rounded bg-surface-container-high text-secondary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">delete_sweep</span>
</div>
<div className="min-w-0">
<p className="font-semibold text-on-surface truncate">Overflowing dumpster blocking pedestrian ramp</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Commercial Row &amp; 9th Ave • Merchant Assoc</p>
</div>
</div>
</td>
<td className="py-3.5 px-3 whitespace-nowrap">
<span className="font-mono-data text-mono-data text-on-surface">Ward 4</span>
<span className="block text-on-surface-variant font-label-sm text-label-sm">Downtown Hub</span>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  High
                </span>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  In Progress
                </span>
</td>
<td className="py-3.5 px-3 whitespace-nowrap">
<div className="flex items-center gap-1.5">
<img alt="Marcus Vance" className="w-6 h-6 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZGa7KnneAmgBhAqMbqIy2I4VHeL9M975I-81ZM2iNC2kbBhU4GyPJykbhmeR3GAh2Ynhi6BpGOAy2kXPA6uOZu3_UK2232YOnpP0pOUhXfJtLsYsSgOI2eCz3AMrvE9bax2Tvk_eo-k4x5TqqD1FyWZb2oZCWWED82vVRo44yt2FD1IiAg_1YYE-0d9bSHVhsuBp3iUpBxVuKFGmDAVa1nRtfasLgyR0JGCvJmmZK_sfifpUe4Uo"/>
<div>
<p className="font-label-sm text-label-sm text-on-surface">Marcus Vance</p>
<p className="font-body-sm text-[10px] text-on-surface-variant leading-none">Public Works</p>
</div>
</div>
</td>
<td className="py-3.5 px-3 whitespace-nowrap">
<div className="flex flex-col">
<span className="text-secondary font-medium font-mono-data text-mono-data">5h 40m left</span>
<span className="text-on-surface-variant text-[10px]">On Track</span>
</div>
</td>
<td className="py-3.5 px-3 text-right whitespace-nowrap">
<button className="p-1 text-on-surface-variant hover:text-on-surface rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3.5 px-3 text-center">
<input defaultChecked={true} className="w-4 h-4 rounded text-primary accent-primary" type="checkbox"/>
</td>
<td className="py-3.5 px-3">
<a className="font-mono-data text-mono-data text-primary underline underline-offset-2 font-bold" href="#">
                  #FMA-8954
                </a>
<span className="font-label-sm text-label-sm text-on-surface-variant">Electrical</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-start gap-2">
<div className="w-7 h-7 rounded bg-surface-container-high text-primary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">lightbulb</span>
</div>
<div className="min-w-0">
<p className="font-semibold text-on-surface truncate">Exposed wiring at pedestrian crosswalk signal</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Oakwood Blvd at 12th • School Zone Flag</p>
</div>
</div>
</td>
<td className="py-3.5 px-3 whitespace-nowrap">
<span className="font-mono-data text-mono-data text-on-surface">Ward 4</span>
<span className="block text-on-surface-variant font-label-sm text-label-sm">Highland Park</span>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm uppercase font-bold">
<span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest"></span>
                  Urgent
                </span>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  Assigned
                </span>
</td>
<td className="py-3.5 px-3 whitespace-nowrap">
<div className="flex items-center gap-1.5">
<div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center text-[10px] font-bold text-on-primary-fixed">DK</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface">Dave K.</p>
<p className="font-body-sm text-[10px] text-on-surface-variant leading-none">Road Electrical</p>
</div>
</div>
</td>
<td className="py-3.5 px-3 whitespace-nowrap">
<div className="flex flex-col">
<span className="text-on-surface-variant font-mono-data text-mono-data">1h 10m left</span>
<span className="text-error font-bold text-[10px]">Priority Dispatch</span>
</div>
</td>
<td className="py-3.5 px-3 text-right whitespace-nowrap">
<button className="p-1 text-on-surface-variant hover:text-on-surface rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3.5 px-3 text-center">
<input className="w-4 h-4 rounded text-primary accent-primary" type="checkbox"/>
</td>
<td className="py-3.5 px-3">
<a className="font-mono-data text-mono-data text-primary underline underline-offset-2 font-bold" href="#">
                  #FMA-8891
                </a>
<span className="font-label-sm text-label-sm text-on-surface-variant">Parks &amp; Rec</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-start gap-2">
<div className="w-7 h-7 rounded bg-surface-container-high text-on-surface-variant flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">park</span>
</div>
<div className="min-w-0">
<p className="font-semibold text-on-surface truncate">Fallen tree limb impeding bike transit path</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Greenway Sector B • Resident Hotline</p>
</div>
</div>
</td>
<td className="py-3.5 px-3 whitespace-nowrap">
<span className="font-mono-data text-mono-data text-on-surface">Ward 4</span>
<span className="block text-on-surface-variant font-label-sm text-label-sm">River Valley</span>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm uppercase font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                  Medium
                </span>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-primary-fixed/40 text-primary font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Resolved
                </span>
</td>
<td className="py-3.5 px-3 whitespace-nowrap">
<div className="flex items-center gap-1.5">
<div className="w-6 h-6 rounded-full bg-secondary-fixed flex items-center justify-center text-[10px] font-bold text-on-secondary-fixed">ER</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface">Elena Ruiz</p>
<p className="font-body-sm text-[10px] text-on-surface-variant leading-none">Forestry Crew</p>
</div>
</div>
</td>
<td className="py-3.5 px-3 whitespace-nowrap">
<span className="text-primary font-bold font-mono-data text-mono-data">Closed</span>
<span className="block text-on-surface-variant text-[10px]">Verified 11:20</span>
</td>
<td className="py-3.5 px-3 text-right whitespace-nowrap">
<button className="p-1 text-on-surface-variant hover:text-on-surface rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>

<tr className="hover:bg-surface-container-low transition-colors">
<td className="py-3.5 px-3 text-center">
<input className="w-4 h-4 rounded text-primary accent-primary" type="checkbox"/>
</td>
<td className="py-3.5 px-3">
<a className="font-mono-data text-mono-data text-primary underline underline-offset-2 font-bold" href="#">
                  #FMA-8842
                </a>
<span className="font-label-sm text-label-sm text-on-surface-variant">Waterworks</span>
</td>
<td className="py-3.5 px-4">
<div className="flex items-start gap-2">
<div className="w-7 h-7 rounded bg-surface-container-high text-secondary flex items-center justify-center shrink-0 mt-0.5">
<span className="material-symbols-outlined text-[16px]">water_damage</span>
</div>
<div className="min-w-0">
<p className="font-semibold text-on-surface truncate">Low pressure &amp; discoloration in municipal mainline</p>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Maple Heights Block 3 • Multi-reporter (5)</p>
</div>
</div>
</td>
<td className="py-3.5 px-3 whitespace-nowrap">
<span className="font-mono-data text-mono-data text-on-surface">Ward 4</span>
<span className="block text-on-surface-variant font-label-sm text-label-sm">Maple Heights</span>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm uppercase font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  High
                </span>
</td>
<td className="py-3.5 px-3">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  In Progress
                </span>
</td>
<td className="py-3.5 px-3 whitespace-nowrap">
<div className="flex items-center gap-1.5">
<div className="w-6 h-6 rounded-full bg-primary-fixed flex items-center justify-center text-[10px] font-bold text-on-primary-fixed">DK</div>
<div>
<p className="font-label-sm text-label-sm text-on-surface">Dave K.</p>
<p className="font-body-sm text-[10px] text-on-surface-variant leading-none">Roads &amp; Mainlines</p>
</div>
</div>
</td>
<td className="py-3.5 px-3 whitespace-nowrap">
<div className="flex flex-col">
<span className="text-secondary font-medium font-mono-data text-mono-data">8h 15m left</span>
<span className="text-on-surface-variant text-[10px]">Telemetry Active</span>
</div>
</td>
<td className="py-3.5 px-3 text-right whitespace-nowrap">
<button className="p-1 text-on-surface-variant hover:text-on-surface rounded transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">more_vert</span>
</button>
</td>
</tr>
</tbody>
</table>
</div>

<div className="p-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-sm font-label-md text-label-md">
<span className="text-on-surface-variant">Displaying 1 to 5 of 348 complaints (Filtered: Ward 4, Active/High)</span>
<div className="flex items-center gap-1">
<button className="px-3 py-1 rounded bg-surface-container-lowest text-on-surface shadow-sm disabled:opacity-40" disabled="" type="button">Previous</button>
<button className="px-3 py-1 rounded bg-primary text-on-primary font-bold shadow-sm" type="button">1</button>
<button className="px-3 py-1 rounded bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container" type="button">2</button>
<button className="px-3 py-1 rounded bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container" type="button">3</button>
<span className="px-2 text-on-surface-variant">...</span>
<button className="px-3 py-1 rounded bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container" type="button">70</button>
<button className="px-3 py-1 rounded bg-surface-container-lowest text-on-surface shadow-sm hover:bg-surface-container" type="button">Next</button>
</div>
</div>
</div>

<div className="xl:col-span-4 bg-surface-container-lowest rounded-xl shadow-lg p-space-md flex flex-col gap-space-md sticky top-20">

<div className="flex items-start justify-between">
<div className="flex flex-col">
<div className="flex items-center gap-1.5 text-error font-mono-data text-mono-data font-bold">
<span className="material-symbols-outlined text-[16px]">priority_high</span>
<span>CRITICAL DISPATCH CONSOLE</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">Quick Staff Assignment</h2>
</div>
<button className="p-1 rounded-full text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">close</span>
</button>
</div>

<div className="p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-mono-data text-mono-data font-bold text-primary">#FMA-9102</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-error text-on-error font-bold">URGENT</span>
</div>
<p className="font-headline-sm text-headline-sm text-on-surface font-semibold leading-snug">
          Deep sinkhole forming near storm drain
        </p>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Location: <strong>482 Elmwood Terrace</strong> (Oakwood North Ward)
        </p>

<div className="grid grid-cols-2 gap-space-xs mt-1">
<div className="relative rounded-lg overflow-hidden h-24 bg-surface-container">
<img className="w-full h-full object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjwzDRI2tPWuqLKEcD9UHwMyasYrl57tj4OO8XHB4wlH5NO1uzl38U1AUOEaBSUOs-fE1lAJRkiGGYmD6pQncj3CerNWOhtgGc4ckWnwON1U65cjWDCs-4sV6VcV7rkXLRfVUcuCH1vn1GGgWdWuI0y2bHR9lJL-vaGuD5QHs1S1IxBQZjK4-N_F3Y6Q-6sy3k_pPHKjKXBCLVDk0NBbQfm2l7Rq4TrwzTl7IHjsw-dI4JFT9JX5s"/>
<span className="absolute bottom-1 left-1 font-label-sm text-[10px] px-1.5 py-0.5 bg-inverse-surface/80 text-inverse-on-surface rounded backdrop-blur-sm">Field Evidence #1</span>
</div>
<div className="w-full h-24 bg-cover bg-center rounded-lg relative overflow-hidden"  style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuALgTk4pzJ9ycfY0reCqVykxEZqtUApBEN--9I5Jm3jK8IHFtKVSa6vUzL_VR26gSssauCbQS3T5cPIzVKErsXJwtpLwGbfmt57vMkAfMiwlhcCsqR8ejb1z6HNDQdf5MjyjOzZ8SKwQGMaoaTuhtr4lC9lY0X3AEHzQgg5e9BQ50JPNGiv7yHCRShsTRCqZ61nPMa7yvhRjNH2dQYFmO3-xvthw6V31ZXPI308Uq2UCNhWLM6zD9o')"}}>
<div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
<span className="absolute top-1 right-1 p-1 bg-surface-container-lowest/90 rounded text-primary">
<span className="material-symbols-outlined text-[14px]">pin_drop</span>
</span>
</div>
</div>

<div className="mt-1 flex items-center justify-between bg-error-container/60 px-2.5 py-1.5 rounded text-on-error-container font-mono-data text-mono-data font-medium">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-error">warning</span>
            SLA Breach Limit:
          </span>
<span className="font-bold text-error">01h 58m 22s</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
          Eligible On-Duty Personnel (Ward 4 Proximity)
        </label>

<div className="p-space-sm rounded-lg bg-surface-container-high/60 flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center font-bold text-sm">
                DK
              </div>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
                  Dave K.
                  <span className="material-symbols-outlined text-primary text-[14px]">verified</span>
</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Roads Dept • Heavy Equipment</p>
</div>
</div>
<button className="px-2.5 py-1 bg-primary text-on-primary font-label-sm text-label-sm rounded-lg shadow-sm font-semibold flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[14px]">check</span>
              Selected
            </button>
</div>

<div className="flex flex-col gap-1 mt-1 font-mono-data text-mono-data">
<div className="flex justify-between text-on-surface-variant text-[11px]">
<span>Current Workload (3 active tickets)</span>
<span className="text-primary font-bold">85% Availability</span>
</div>
<div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="bg-primary h-full rounded-full" style={{"width":"25%"}}></div>
</div>
<p className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[12px] text-primary">navigation</span>
              Current vehicle location: 1.2 miles away on 10th Ave
            </p>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center font-bold text-sm">
                ER
              </div>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold">Elena Ruiz</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sanitation / Forestry • Rapid Crew</p>
</div>
</div>
<button className="px-2.5 py-1 bg-surface-container-lowest text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm rounded-lg shadow-sm font-medium" type="button">
              Select
            </button>
</div>

<div className="flex flex-col gap-1 mt-1 font-mono-data text-mono-data">
<div className="flex justify-between text-on-surface-variant text-[11px]">
<span>Current Workload (7 active tickets)</span>
<span className="text-error font-bold">Busy (High Queue)</span>
</div>
<div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="bg-error h-full rounded-full" style={{"width":"88%"}}></div>
</div>
<p className="text-[11px] text-on-surface-variant flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[12px] text-on-surface-variant">navigation</span>
              Current vehicle location: 4.8 miles away (Sector C)
            </p>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors flex flex-col gap-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<img alt="Marcus Vance" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZGa7KnneAmgBhAqMbqIy2I4VHeL9M975I-81ZM2iNC2kbBhU4GyPJykbhmeR3GAh2Ynhi6BpGOAy2kXPA6uOZu3_UK2232YOnpP0pOUhXfJtLsYsSgOI2eCz3AMrvE9bax2Tvk_eo-k4x5TqqD1FyWZb2oZCWWED82vVRo44yt2FD1IiAg_1YYE-0d9bSHVhsuBp3iUpBxVuKFGmDAVa1nRtfasLgyR0JGCvJmmZK_sfifpUe4Uo"/>
<div>
<p className="font-label-md text-label-md text-on-surface font-semibold">Marcus Vance</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Public Works Dispatcher &amp; Lead</p>
</div>
</div>
<button className="px-2.5 py-1 bg-surface-container-lowest text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm rounded-lg shadow-sm font-medium" type="button">
              Select
            </button>
</div>
<div className="flex flex-col gap-1 mt-1 font-mono-data text-mono-data">
<div className="flex justify-between text-on-surface-variant text-[11px]">
<span>Current Workload (4 tickets)</span>
<span className="text-secondary font-bold">Moderate (50%)</span>
</div>
<div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" style={{"width":"50%"}}></div>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-semibold">Emergency Priority Lock</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Overrules standard queue and pings sirens</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-surface-container-high peer-focus:outline-none rounded-full peer peer-defaultChecked={true}:after:translate-x-full peer-defaultChecked={true}:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-5 after:w-5 after:transition-all peer-defaultChecked={true}:bg-primary-container"></div>
</label>
</div>

<div className="flex flex-col gap-1">
<label className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
          Internal Instructions for Crew
        </label>
<textarea className="w-full p-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary shadow-inner resize-none" placeholder="E.g., Coordinate traffic control with Ward 4 squad before excavating..." rows="3">Requires barrier tape and asphalt cold-patch vehicle immediately. Divert westbound bus lane 14.</textarea>
</div>

<div className="flex items-center gap-space-sm pt-2">
<button className="w-full py-2.5 px-4 bg-primary-container text-on-primary font-label-md text-label-md rounded-lg shadow-sm hover:opacity-95 transition-all flex items-center justify-center gap-2 font-semibold" type="button">
<span className="material-symbols-outlined text-[18px]">send</span>
<span>Confirm Assignment to Dave K.</span>
</button>
</div>
<p className="font-label-sm text-[11px] text-center text-on-surface-variant">
        Audit recorded by Dispatcher Marcus Vance • Timestamp logged to municipal ledger
      </p>
</div>
</section>
</div></main></div>
    </div>
  );
}
