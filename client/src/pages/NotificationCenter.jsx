import React from 'react';

export default function NotificationCenter() {
  return (
    <div className="w-full min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-[250px] bg-surface-container-lowest z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex flex-col flex-1 overflow-y-auto"><div className="p-space-md flex items-center gap-space-sm"><img alt="FixMyArea Brand Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1UFgGY8YFJ_uSwMb-1C2HU22kFZeAM_us6EfAz1AkcobGX2c3hO7A9abO8q-2fUVCGSnQMlFgCnByOnW73UCwhkwPQFiPlDoCXK7_jT_FfOSE3R4xg6XvfiQmFTXgGaRxepr6XLVClA0xid1pDbNBiJ3TT9FiRpp2xrTLTGNBKVusmHnfiKoqjl7lupXWVZu7x-KPOqlCVcHESfpAH3sr7-VT_Ih5hjV37GaHkOAJc9bq1aUMuSui-e"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface">FixMyArea</span><span className="font-label-sm text-label-sm text-on-surface-variant">MUNICIPAL PORTAL</span></div></div><div className="px-space-md pb-space-sm"><div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high rounded-full"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-label-sm text-label-sm text-on-surface">Civic Portal • Live</span></div></div><nav className="flex flex-col gap-1 px-space-sm pt-space-xs" ><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">dashboard</span><span>Dashboard</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">add_alert</span><span>Report Issue</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">assignment</span><span>My Complaints</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">engineering</span><span>Staff Workbench</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">admin_panel_settings</span><span>Admin Management</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">query_stats</span><span>Analytics</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">settings</span><span>Settings</span></a></nav></div><div className="p-space-sm flex flex-col gap-space-sm"><div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-xs"><span className="material-symbols-outlined text-primary text-[20px] mt-0.5">support_agent</span><div><p className="font-label-md text-label-md text-on-surface">Municipal Helpline</p><p className="font-body-sm text-body-sm text-on-surface-variant">Dial 311 (24/7 Support)</p></div></div><div className="flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container transition-colors"><div className="flex items-center gap-space-xs"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZGa7KnneAmgBhAqMbqIy2I4VHeL9M975I-81ZM2iNC2kbBhU4GyPJykbhmeR3GAh2Ynhi6BpGOAy2kXPA6uOZu3_UK2232YOnpP0pOUhXfJtLsYsSgOI2eCz3AMrvE9bax2Tvk_eo-k4x5TqqD1FyWZb2oZCWWED82vVRo44yt2FD1IiAg_1YYE-0d9bSHVhsuBp3iUpBxVuKFGmDAVa1nRtfasLgyR0JGCvJmmZK_sfifpUe4Uo"/><div className="flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface">Marcus Vance</span><span className="font-label-sm text-label-sm text-on-surface-variant">Field Dispatcher</span></div></div><button className="text-on-surface-variant hover:text-on-surface" type="button"><span className="material-symbols-outlined text-[18px]">expand_more</span></button></div></div></aside><div className="pl-[250px]"><header className="fixed top-0 left-[250px] right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-md z-40 flex items-center justify-between px-space-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs text-on-surface-variant"><span className="material-symbols-outlined text-[18px]">location_city</span><span className="font-label-md text-label-md">FixMyArea</span><span className="material-symbols-outlined text-[14px]">chevron_right</span><div className="inline-flex items-center gap-1 bg-surface-container-low px-space-sm py-1 rounded-full text-on-surface"><span className="material-symbols-outlined text-primary text-[16px]">pin_drop</span><span className="font-label-md text-label-md">Oakwood District 4</span><span className="material-symbols-outlined text-[14px] text-on-surface-variant">arrow_drop_down</span></div></div><div className="relative w-80 lg:w-96"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">search</span><input className="w-full h-9 pl-9 pr-4 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search complaints by ID, street, or category..." type="text"/></div></div><div className="flex items-center gap-space-md"><button className="relative p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" type="button"><span className="material-symbols-outlined text-[22px]">notifications</span><span className="absolute top-1.5 right-1.5 w-4 h-4 bg-error text-on-error rounded-full font-label-sm text-[10px] flex items-center justify-center font-bold">3</span></button><a className="inline-flex items-center gap-space-xs px-space-md py-2 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-95 transition-all"  href="#"><span className="material-symbols-outlined text-[18px]">add</span><span>Report Problem</span></a><div className="flex items-center gap-space-xs pl-space-xs cursor-pointer"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZGa7KnneAmgBhAqMbqIy2I4VHeL9M975I-81ZM2iNC2kbBhU4GyPJykbhmeR3GAh2Ynhi6BpGOAy2kXPA6uOZu3_UK2232YOnpP0pOUhXfJtLsYsSgOI2eCz3AMrvE9bax2Tvk_eo-k4x5TqqD1FyWZb2oZCWWED82vVRo44yt2FD1IiAg_1YYE-0d9bSHVhsuBp3iUpBxVuKFGmDAVa1nRtfasLgyR0JGCvJmmZK_sfifpUe4Uo"/><span className="material-symbols-outlined text-[18px] text-on-surface-variant">keyboard_arrow_down</span></div></div></header><main className="w-full pt-16 bg-surface min-h-screen px-space-lg py-space-lg"><div className="flex flex-col w-full">
<div className="w-full max-w-[1440px] mx-auto flex flex-col gap-space-lg">

<div className="flex flex-col gap-space-xs">
<nav className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md">
<a className="hover:text-primary transition-colors" href="#">Portal</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<a className="hover:text-primary transition-colors" href="#">Account</a>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-on-surface font-semibold">Notification Center</span>
</nav>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pt-space-xs">
<div className="flex flex-col gap-1 max-w-2xl">
<div className="inline-flex items-center gap-2">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Notification Center &amp; Dispatch Alerts</h1>
<span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
              Live Stream
            </span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
            Real-time updates on ticket status changes, crew assignments, emergency civic alerts, and community sign-offs.
          </p>
</div>

<div className="flex items-center gap-space-sm shrink-0">
<button className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md shadow-sm" id="markAllBtn" type="button">
<span className="material-symbols-outlined text-[18px] text-primary">done_all</span>
<span>Mark All as Read</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant">tune</span>
<span>Settings</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-sm shadow-sm flex flex-col lg:flex-row items-center justify-between gap-space-md">

<div className="flex items-center gap-1 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0" id="filterTabs">
<button className="filter-tab inline-flex items-center gap-2 px-space-md py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md transition-all"  type="button">
<span>All Notifications</span>
<span className="px-1.5 py-0.5 rounded-full bg-on-primary/20 text-on-primary font-mono-data text-[11px]">8</span>
</button>
<button className="filter-tab inline-flex items-center gap-2 px-space-md py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-label-md text-label-md transition-all"  type="button">
<span>Status Updates</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface font-mono-data text-[11px]">4</span>
</button>
<button className="filter-tab inline-flex items-center gap-2 px-space-md py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-label-md text-label-md transition-all"  type="button">
<span>Dispatch Alerts</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface font-mono-data text-[11px]">2</span>
</button>
<button className="filter-tab inline-flex items-center gap-2 px-space-md py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface font-label-md text-label-md transition-all"  type="button">
<span>Ward Advisories</span>
<span className="px-1.5 py-0.5 rounded-full bg-surface-container text-on-surface font-mono-data text-[11px]">2</span>
</button>
</div>

<div className="flex items-center justify-between w-full lg:w-auto gap-space-md shrink-0">
<div className="relative w-full sm:w-64">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">search</span>
<input className="w-full h-9 pl-9 pr-3 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary shadow-inner" id="quickSearch" placeholder="Filter alerts or ticket IDs..." type="text"/>
</div>
<label className="inline-flex items-center gap-2 cursor-pointer select-none shrink-0 pl-space-xs">
<input className="sr-only peer" id="unreadToggle" type="checkbox"/>
<div className="w-9 h-5 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-defaultChecked={true}:after:translate-x-full peer-defaultChecked={true}:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-4 after:w-4 after:transition-all peer-defaultChecked={true}:bg-primary relative"></div>
<span className="font-label-md text-label-md text-on-surface">Unread only</span>
</label>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-8 flex flex-col gap-space-md">

<div className="bg-primary text-on-primary rounded-xl p-space-md shadow-md flex items-start justify-between gap-space-md relative overflow-hidden">
<div className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-white/5 pointer-events-none"></div>
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-[24px] text-primary-fixed mt-0.5">sensors</span>
<div className="flex flex-col gap-0.5">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary-fixed">Active Dispatch Stream</span>
<p className="font-headline-sm text-headline-sm text-on-primary">Oakwood Municipal Dispatch Sub-station #4</p>
<p className="font-body-sm text-body-sm text-primary-fixed/90">Automated geolocation pinging is active. ETA calculation calibrated with real-time field traffic telemetry.</p>
</div>
</div>
<div className="shrink-0 flex items-center gap-2 self-center">
<span className="inline-block w-2.5 h-2.5 rounded-full bg-primary-fixed animate-ping"></span>
<span className="font-mono-data text-mono-data text-primary-fixed">0.4s latency</span>
</div>
</div>

<div className="flex flex-col gap-space-sm" id="notificationsList">

<article className="notification-item group relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all duration-200"  >
<div className="flex items-start gap-space-md">
<div className="shrink-0 relative">
<div className="w-10 h-10 rounded-full bg-secondary-container/40 flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]" style={{"fontVariationSettings":"'FILL' 1"}}>local_shipping</span>
</div>
<span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-secondary ring-2 ring-surface-container-lowest"></span>
</div>
<div className="flex-1 flex flex-col gap-1 min-w-0">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                      DISPATCH ALERT
                    </span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Field Crew Dispatched to #FMA-8492</h2>
<span className="font-mono-data text-mono-data px-1.5 py-0.5 rounded bg-surface-container-low text-on-surface-variant">Oakwood 4th Ave</span>
</div>
<time className="font-mono-data text-mono-data text-on-surface-variant flex items-center gap-1 shrink-0">
<span className="material-symbols-outlined text-[14px]">schedule</span>
                    12 mins ago
                  </time>
</div>
<p className="font-body-md text-body-md text-on-surface-variant pr-2">
                  Public Works Hotbox Truck #04 has departed depot and is en route to <strong className="text-on-surface font-medium">4th Ave &amp; Elm St</strong>. Field operations crew assigned for asphalt patching and cold-mix trench remediation.
                </p>

<div className="mt-space-sm pt-space-xs flex flex-wrap items-center justify-between gap-space-sm bg-surface-container-low/60 rounded-lg p-space-sm">
<div className="flex items-center gap-space-md text-on-surface">
<div className="flex items-center gap-1 font-mono-data text-mono-data">
<span className="material-symbols-outlined text-secondary text-[16px]">navigation</span>
<span>ETA: <strong className="text-on-surface">18 minutes</strong></span>
</div>
<div className="flex items-center gap-1 font-body-sm text-body-sm text-on-surface-variant">
<span className="material-symbols-outlined text-[16px]">badge</span>
<span>Supervisor: C. Morales (Unit 4)</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<button className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md hover:opacity-95 transition-all" type="button">
<span className="material-symbols-outlined text-[16px]">location_searching</span>
<span>Track Crew</span>
</button>
<button className="p-1 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Dismiss" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>
</div>
</div>
</div>
</article>

<article className="notification-item group relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all duration-200"  >
<div className="flex items-start gap-space-md">
<div className="shrink-0 relative">
<div className="w-10 h-10 rounded-full bg-error-container/60 flex items-center justify-center text-error">
<span className="material-symbols-outlined text-[22px]" style={{"fontVariationSettings":"'FILL' 1"}}>warning</span>
</div>
<span className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-error ring-2 ring-surface-container-lowest animate-pulse"></span>
</div>
<div className="flex-1 flex flex-col gap-1 min-w-0">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                      CRITICAL WARD ADVISORY
                    </span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Emergency Boil Water Advisory — Ward 4</h2>
</div>
<time className="font-mono-data text-mono-data text-on-surface-variant flex items-center gap-1 shrink-0">
<span className="material-symbols-outlined text-[14px]">schedule</span>
                    45 mins ago
                  </time>
</div>
<p className="font-body-md text-body-md text-on-surface-variant pr-2">
                  Due to an emergency 16-inch water main replacement on <strong className="text-on-surface font-medium">Elmwood Terrace</strong>, hydraulic pressure dropped below standard thresholds. Residents in sub-zones 4A and 4B must boil municipal tap water for all consumption until laboratory test clearance.
                </p>
<div className="mt-space-sm flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-error bg-error-container/30 px-2 py-1 rounded">
<span className="material-symbols-outlined text-[14px]">water_drop</span>
                      Low Pressure Event #WP-2024-88
                    </span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Affected: ~1,240 households</span>
</div>
<div className="flex items-center gap-space-xs">
<a className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-md text-label-md transition-colors" href="#">
<span className="material-symbols-outlined text-[16px]">description</span>
<span>View Notice &amp; Safety Guide</span>
</a>
</div>
</div>
</div>
</div>
</article>

<article className="notification-item group relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all duration-200"  >
<div className="flex items-start gap-space-md">
<div className="shrink-0">
<div className="w-10 h-10 rounded-full bg-primary-fixed/40 flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]" style={{"fontVariationSettings":"'FILL' 1"}}>task_alt</span>
</div>
</div>
<div className="flex-1 flex flex-col gap-1 min-w-0">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      VERIFICATION REQUIRED
                    </span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Resolution Verification Requested for #FMA-8421</h2>
</div>
<time className="font-mono-data text-mono-data text-on-surface-variant flex items-center gap-1 shrink-0">
<span className="material-symbols-outlined text-[14px]">schedule</span>
                    2 hours ago
                  </time>
</div>
<p className="font-body-md text-body-md text-on-surface-variant pr-2">
                  Work has been completed by Senior Line Technician <strong className="text-on-surface font-medium">Dave Miller</strong>. High-pressure sodium ballast converted to energy-efficient LED fixture. Please inspect the streetlight illumination and submit your citizen satisfaction rating.
                </p>

<div className="mt-space-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-md p-space-sm rounded-lg bg-surface-container-low">
<div className="flex items-center gap-space-sm">
<img className="w-14 h-14 rounded-lg object-cover shadow-sm shrink-0"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIkWjeFf6WFSjvx8SYpRe1BBTSo3azmaswWhD-gYhvq9wHjqMXLfDtus2zwfWy1itLw4cZjiV6-SXRhq7Qh0K9w_SHNzrQBujSWB50um3UEBVTh1aB2yIzgH5xuaZnTmBF2WADiP9UMmxs2M2MsnsvZps75Zd_Ghu2LL9ZyUXaPYmWsxgFrxu5pE81YShGosZktUZbSxl-bmC_ou26bf-oJYy22sEp332wkjDX1z-d78q9hVU3Q2Y"/>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Field Completion Proof #FMA-8421.jpg</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Uploaded by Crew Unit #08 at 14:18 today</span>
</div>
</div>
<div className="flex items-center gap-2 w-full sm:w-auto justify-end">
<button className="inline-flex items-center gap-1 px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:opacity-95 transition-all" type="button">
<span className="material-symbols-outlined text-[16px]">hotel_class</span>
<span>Rate Repair Now</span>
</button>
</div>
</div>
</div>
</div>
</article>

<article className="notification-item group relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all duration-200"  >
<div className="flex items-start gap-space-md">
<div className="shrink-0">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-[22px]">assignment_ind</span>
</div>
</div>
<div className="flex-1 flex flex-col gap-1 min-w-0">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                      STATUS CHANGE
                    </span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Complaint #FMA-8488 Assigned to Sanitation Division</h2>
</div>
<time className="font-mono-data text-mono-data text-on-surface-variant flex items-center gap-1 shrink-0">
<span className="material-symbols-outlined text-[14px]">schedule</span>
                    Yesterday
                  </time>
</div>
<p className="font-body-md text-body-md text-on-surface-variant pr-2">
                  Triage completed by central automated routing. Bulk illegal dumping report assigned to <strong className="text-on-surface font-medium">Crew Unit #12B</strong>. Special hydraulic loader dispatch scheduled with pickup window confirmed within 12 hours.
                </p>
<div className="mt-space-sm flex items-center justify-between text-body-sm text-on-surface-variant">
<div className="flex items-center gap-space-md">
<span className="font-mono-data text-mono-data">Ticket Priority: Level 2 (Standard Bulk)</span>
<span className="hidden sm:inline">•</span>
<span className="hidden sm:inline">Route: Zone 3 Saturday Rotation</span>
</div>
<a className="font-label-md text-label-md text-primary hover:underline flex items-center gap-0.5" href="#">
<span>Audit Ticket Log</span>
<span className="material-symbols-outlined text-[14px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</article>

<article className="notification-item group relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all duration-200"  >
<div className="flex items-start gap-space-md">
<div className="shrink-0">
<div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">analytics</span>
</div>
</div>
<div className="flex-1 flex flex-col gap-1 min-w-0">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      COMMUNITY METRICS
                    </span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Monthly Neighborhood Civic Impact Report Ready</h2>
</div>
<time className="font-mono-data text-mono-data text-on-surface-variant flex items-center gap-1 shrink-0">
<span className="material-symbols-outlined text-[14px]">schedule</span>
                    3 days ago
                  </time>
</div>
<p className="font-body-md text-body-md text-on-surface-variant pr-2">
                  The October summary for <strong className="text-on-surface font-medium">Oakwood District</strong> is available. Our district achieved a <span className="text-primary font-semibold">96.2% on-time resolution</span> benchmark with 142 total public work tickets resolved.
                </p>

<div className="mt-space-sm p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
<div className="flex items-center gap-space-md">
<div className="flex flex-col">
<span className="font-mono-data text-mono-data text-primary font-bold">142</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Closed Tickets</span>
</div>
<div className="w-px h-8 bg-surface-container-highest"></div>
<div className="flex flex-col">
<span className="font-mono-data text-mono-data text-on-surface font-bold">2.4h</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Avg Triage Speed</span>
</div>
</div>

<div className="flex items-end gap-1 h-8 shrink-0">
<div className="w-1.5 h-3 bg-primary/40 rounded-t"></div>
<div className="w-1.5 h-4 bg-primary/40 rounded-t"></div>
<div className="w-1.5 h-6 bg-primary/60 rounded-t"></div>
<div className="w-1.5 h-5 bg-primary/60 rounded-t"></div>
<div className="w-1.5 h-7 bg-primary rounded-t"></div>
<div className="w-1.5 h-8 bg-primary rounded-t"></div>
</div>
</div>
</div>
</div>
</article>

<article className="notification-item group relative bg-surface-container-lowest rounded-xl p-space-md shadow-sm hover:shadow-md transition-all duration-200"  >
<div className="flex items-start gap-space-md">
<div className="shrink-0">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-[22px]">traffic</span>
</div>
</div>
<div className="flex-1 flex flex-col gap-1 min-w-0">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-2 flex-wrap">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                      SCHEDULED MAINTENANCE
                    </span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Scheduled Road Resurfacing Notice</h2>
</div>
<time className="font-mono-data text-mono-data text-on-surface-variant flex items-center gap-1 shrink-0">
<span className="material-symbols-outlined text-[14px]">schedule</span>
                    5 days ago
                  </time>
</div>
<p className="font-body-md text-body-md text-on-surface-variant pr-2">
                  Pine Street between <strong className="text-on-surface font-medium">10th and 14th Ave</strong> will be fully closed for asphalt milling and repaving on <strong className="text-on-surface font-medium">Saturday, Nov 2 (07:00 – 19:00)</strong>. Please relocate parked vehicles by 06:00 to prevent towing.
                </p>
<div className="mt-space-sm flex items-center justify-between text-body-sm text-on-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[16px] text-secondary">alt_route</span>
<span>Designated detour via Maple Blvd &amp; 16th St.</span>
</div>
<button className="font-label-md text-label-md text-on-surface hover:text-primary transition-colors" type="button">
                    Download Detour Map PDF
                  </button>
</div>
</div>
</div>
</article>
</div>

<div className="flex items-center justify-between py-space-sm px-space-md bg-surface-container-lowest rounded-xl shadow-sm text-body-sm text-on-surface-variant">
<span>Showing 6 of 8 total notifications in current cycle</span>
<div className="flex items-center gap-1">
<button className="px-3 py-1 rounded bg-surface-container-low hover:bg-surface-container font-label-md text-label-md text-on-surface disabled:opacity-50" disabled="">Previous</button>
<button className="px-3 py-1 rounded bg-surface-container hover:bg-surface-container-high font-label-md text-label-md text-on-surface">Next</button>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-space-md">

<div className="bg-gradient-to-br from-inverse-surface to-on-surface text-inverse-on-surface rounded-xl p-space-md shadow-md flex flex-col gap-space-sm relative overflow-hidden">
<div className="flex items-center justify-between">
<div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-error text-on-error font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
              BROADCAST ACTIVE
            </div>
<span className="material-symbols-outlined text-[20px] text-inverse-on-surface/60">cell_tower</span>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-headline-sm text-headline-sm text-inverse-on-surface font-semibold">Oakwood Municipal Dispatch Audio Stream</h3>
<p className="font-body-sm text-body-sm text-inverse-on-surface/80">
              Direct connection to 311 emergency alerts, weather siren dispatches, and public utility audio channels.
            </p>
</div>

<div className="bg-white/10 rounded-lg p-space-xs flex items-center justify-between gap-space-xs mt-space-xs backdrop-blur-sm">
<button className="w-8 h-8 rounded-full bg-primary-fixed text-on-primary-fixed flex items-center justify-center hover:opacity-95 transition-all" type="button">
<span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings":"'FILL' 1"}}>play_arrow</span>
</button>
<div className="flex flex-col flex-1 pl-1">
<span className="font-label-sm text-label-sm text-inverse-on-surface">Live Municipal Feed #311</span>
<span className="font-mono-data text-[10px] text-primary-fixed">Streaming Audio • 64 kbps</span>
</div>
<span className="material-symbols-outlined text-inverse-on-surface/70 text-[18px]">volume_up</span>
</div>
<div className="pt-space-xs border-t border-white/10 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-inverse-on-surface/70">Ward 4 Field Line</span>
<a className="font-mono-data text-mono-data text-primary-fixed hover:underline flex items-center gap-1" href="tel:311">
<span>Dial 311 Direct</span>
<span className="material-symbols-outlined text-[14px]">call</span>
</a>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[20px]">notifications_active</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Delivery Preferences</h3>
</div>
<a className="font-label-sm text-label-sm text-primary hover:underline" href="#">Edit All</a>
</div>
<div className="flex flex-col gap-space-sm divide-y-0">

<div className="flex items-center justify-between py-1">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">SMS Instant Alerts</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">+1 (555) •••-8821 • Active</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-defaultChecked={true}:after:translate-x-full peer-defaultChecked={true}:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-defaultChecked={true}:bg-primary"></div>
</label>
</div>

<div className="flex items-center justify-between py-1">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Email Daily Digest</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Daily at 6:00 PM</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-defaultChecked={true}:after:translate-x-full peer-defaultChecked={true}:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-defaultChecked={true}:bg-primary"></div>
</label>
</div>

<div className="flex items-center justify-between py-1">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Push Notifications</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Web browser desktop banner</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input defaultChecked={true} className="sr-only peer" type="checkbox"/>
<div className="w-8 h-4 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-defaultChecked={true}:after:translate-x-full peer-defaultChecked={true}:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-defaultChecked={true}:bg-primary"></div>
</label>
</div>

<div className="flex items-center justify-between py-1 bg-surface-container-low p-2 rounded-lg">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-error">campaign</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Ward Emergency Sirens</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Bypasses Do-Not-Disturb</span>
</div>
</div>
<span className="font-mono-data text-mono-data text-on-surface-variant font-bold px-2 py-0.5 bg-surface-container rounded">LOCKED</span>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">sms</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Recent SMS Logs</h3>
</div>
<span className="font-mono-data text-mono-data text-primary">3 sent this week</span>
</div>
<div className="flex flex-col gap-space-xs mt-1">

<div className="p-space-xs bg-surface-container-low rounded-lg flex flex-col gap-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface font-medium">To +1 (555) •••-8821</span>
<span className="font-mono-data text-on-surface-variant">12m ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                [FixMyArea] Truck #04 dispatched for ticket #FMA-8492 at 4th Ave. ETA 18m. Track: fma.link/t8492
              </p>
<div className="flex items-center gap-1 font-label-sm text-[10px] text-primary pt-0.5">
<span className="material-symbols-outlined text-[12px]">done_all</span>
<span>Carrier Delivered</span>
</div>
</div>

<div className="p-space-xs bg-surface-container-low rounded-lg flex flex-col gap-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface font-medium">To +1 (555) •••-8821</span>
<span className="font-mono-data text-on-surface-variant">45m ago</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                [CRITICAL ALERT] Boil water advisory active for Ward 4. Visit fma.city/ward4-water for safe protocols.
              </p>
<div className="flex items-center gap-1 font-label-sm text-[10px] text-primary pt-0.5">
<span className="material-symbols-outlined text-[12px]">done_all</span>
<span>Carrier Delivered</span>
</div>
</div>

<div className="p-space-xs bg-surface-container-low rounded-lg flex flex-col gap-1">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface font-medium">To +1 (555) •••-8821</span>
<span className="font-mono-data text-on-surface-variant">Oct 28</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                [FixMyArea] Pothole repair #FMA-8390 resolved. Reply R to review.
              </p>
<div className="flex items-center gap-1 font-label-sm text-[10px] text-primary pt-0.5">
<span className="material-symbols-outlined text-[12px]">done_all</span>
<span>Carrier Delivered</span>
</div>
</div>
</div>
<button className="w-full mt-1 py-1.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors text-center" type="button">
            Download Complete Audit Trail (.csv)
          </button>
</div>
</div>
</div>
</div>


</div></main></div>
    </div>
  );
}
