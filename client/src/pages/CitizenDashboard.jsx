import React from 'react';

export default function CitizenDashboard() {
  return (
    <div className="w-full min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-[250px] bg-surface-container-lowest z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex flex-col flex-1 overflow-y-auto"><div className="p-space-md flex items-center gap-space-sm"><img alt="FixMyArea Brand Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1UFgGY8YFJ_uSwMb-1C2HU22kFZeAM_us6EfAz1AkcobGX2c3hO7A9abO8q-2fUVCGSnQMlFgCnByOnW73UCwhkwPQFiPlDoCXK7_jT_FfOSE3R4xg6XvfiQmFTXgGaRxepr6XLVClA0xid1pDbNBiJ3TT9FiRpp2xrTLTGNBKVusmHnfiKoqjl7lupXWVZu7x-KPOqlCVcHESfpAH3sr7-VT_Ih5hjV37GaHkOAJc9bq1aUMuSui-e"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface">FixMyArea</span><span className="font-label-sm text-label-sm text-on-surface-variant">MUNICIPAL PORTAL</span></div></div><div className="px-space-md pb-space-sm"><div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high rounded-full"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-label-sm text-label-sm text-on-surface">Civic Portal • Live</span></div></div><nav className="flex flex-col gap-1 px-space-sm pt-space-xs" ><a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-2 transition-colors bg-primary-container text-on-primary font-label-lg rounded-lg"  href="#"><span className="material-symbols-outlined text-[20px]">dashboard</span><span>Dashboard</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">add_alert</span><span>Report Issue</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">assignment</span><span>My Complaints</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">engineering</span><span>Staff Workbench</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">admin_panel_settings</span><span>Admin Management</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">query_stats</span><span>Analytics</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">settings</span><span>Settings</span></a></nav></div><div className="p-space-sm flex flex-col gap-space-sm"><div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-xs"><span className="material-symbols-outlined text-primary text-[20px] mt-0.5">support_agent</span><div><p className="font-label-md text-label-md text-on-surface">Municipal Helpline</p><p className="font-body-sm text-body-sm text-on-surface-variant">Dial 311 (24/7 Support)</p></div></div><div className="flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container transition-colors"><div className="flex items-center gap-space-xs"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZGa7KnneAmgBhAqMbqIy2I4VHeL9M975I-81ZM2iNC2kbBhU4GyPJykbhmeR3GAh2Ynhi6BpGOAy2kXPA6uOZu3_UK2232YOnpP0pOUhXfJtLsYsSgOI2eCz3AMrvE9bax2Tvk_eo-k4x5TqqD1FyWZb2oZCWWED82vVRo44yt2FD1IiAg_1YYE-0d9bSHVhsuBp3iUpBxVuKFGmDAVa1nRtfasLgyR0JGCvJmmZK_sfifpUe4Uo"/><div className="flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface">Marcus Vance</span><span className="font-label-sm text-label-sm text-on-surface-variant">Field Dispatcher</span></div></div><button className="text-on-surface-variant hover:text-on-surface" type="button"><span className="material-symbols-outlined text-[18px]">expand_more</span></button></div></div></aside><div className="pl-[250px]"><header className="fixed top-0 left-[250px] right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-md z-40 flex items-center justify-between px-space-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs text-on-surface-variant"><span className="material-symbols-outlined text-[18px]">location_city</span><span className="font-label-md text-label-md">FixMyArea</span><span className="material-symbols-outlined text-[14px]">chevron_right</span><div className="inline-flex items-center gap-1 bg-surface-container-low px-space-sm py-1 rounded-full text-on-surface"><span className="material-symbols-outlined text-primary text-[16px]">pin_drop</span><span className="font-label-md text-label-md">Oakwood District 4</span><span className="material-symbols-outlined text-[14px] text-on-surface-variant">arrow_drop_down</span></div></div><div className="relative w-80 lg:w-96"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">search</span><input className="w-full h-9 pl-9 pr-4 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search complaints by ID, street, or category..." type="text"/></div></div><div className="flex items-center gap-space-md"><button className="relative p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" type="button"><span className="material-symbols-outlined text-[22px]">notifications</span><span className="absolute top-1.5 right-1.5 w-4 h-4 bg-error text-on-error rounded-full font-label-sm text-[10px] flex items-center justify-center font-bold">3</span></button><a className="inline-flex items-center gap-space-xs px-space-md py-2 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-95 transition-all"  href="#"><span className="material-symbols-outlined text-[18px]">add</span><span>Report Problem</span></a><div className="flex items-center gap-space-xs pl-space-xs cursor-pointer"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZGa7KnneAmgBhAqMbqIy2I4VHeL9M975I-81ZM2iNC2kbBhU4GyPJykbhmeR3GAh2Ynhi6BpGOAy2kXPA6uOZu3_UK2232YOnpP0pOUhXfJtLsYsSgOI2eCz3AMrvE9bax2Tvk_eo-k4x5TqqD1FyWZb2oZCWWED82vVRo44yt2FD1IiAg_1YYE-0d9bSHVhsuBp3iUpBxVuKFGmDAVa1nRtfasLgyR0JGCvJmmZK_sfifpUe4Uo"/><span className="material-symbols-outlined text-[18px] text-on-surface-variant">keyboard_arrow_down</span></div></div></header><main className="w-full pt-16 bg-surface min-h-screen px-space-lg py-space-lg"><div className="flex flex-col w-full gap-space-lg">
<div className="relative overflow-hidden rounded-xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md">
<div className="relative z-10 flex flex-col gap-1 max-w-2xl">
<div className="flex items-center gap-space-xs">
<span className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-primary-fixed/40 text-on-primary-fixed-variant font-label-sm text-label-sm">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Ward 4 Citizen Portal
        </span>
<span className="font-mono-data text-mono-data text-on-surface-variant">• Verified Resident #CK-9912</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mt-1">
        Welcome back, Sarah Jenkins
      </h1>
<p className="font-body-md text-body-md text-on-surface-variant">
        Your local area: <span className="font-semibold text-on-surface">Oakwood Central &amp; West Park Sector</span>. You have <span className="text-primary font-semibold">2 active tickets</span> currently being serviced by municipal crews.
      </p>
</div>
<div className="relative z-10 flex items-center gap-space-sm self-start md:self-auto shrink-0">
<button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-lg text-label-lg shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">history</span>
<span>Ticket Archive</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary hover:opacity-95 transition-all font-label-lg text-label-lg shadow-sm" type="button">
<span className="material-symbols-outlined text-[20px]">add_circle</span>
<span>+ Report New Problem</span>
</button>
</div>
<div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-primary-fixed/20 blur-3xl pointer-events-none"></div>
<div className="absolute right-48 -bottom-16 w-48 h-48 rounded-full bg-secondary-fixed/20 blur-2xl pointer-events-none"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md">
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Total Reported</span>
<div className="w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">flag</span>
</div>
</div>
<div className="mt-4 flex items-baseline gap-space-xs">
<span className="font-display-hero text-display-hero text-on-surface">14</span>
<span className="font-label-md text-label-md text-on-surface-variant">issues</span>
</div>
<div className="mt-3 pt-3 flex items-center justify-between text-on-surface-variant font-mono-data text-mono-data">
<span className="inline-flex items-center gap-1 text-primary font-semibold">
<span className="material-symbols-outlined text-[16px]">arrow_upward</span>
          +2 this month
        </span>
<span>Lifetime total</span>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">In Progress</span>
<div className="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined text-[20px]">pending_actions</span>
</div>
</div>
<div className="mt-4 flex items-baseline gap-space-xs">
<span className="font-display-hero text-display-hero text-on-surface">02</span>
<span className="font-label-md text-label-md text-on-surface-variant">under repair</span>
</div>
<div className="mt-3 pt-3 flex items-center justify-between text-on-surface-variant font-mono-data text-mono-data">
<span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-semibold text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          Scheduled Today
        </span>
<span>Oakwood Sector</span>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Resolved</span>
<div className="w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">task_alt</span>
</div>
</div>
<div className="mt-4 flex items-baseline gap-space-xs">
<span className="font-display-hero text-display-hero text-on-surface">11</span>
<span className="font-label-md text-label-md text-on-surface-variant">resolved</span>
</div>
<div className="mt-3 pt-3 flex items-center justify-between text-on-surface-variant font-mono-data text-mono-data">
<span className="inline-flex items-center gap-1 text-primary font-semibold">
<span className="material-symbols-outlined text-[16px]">verified</span>
          91% resolution rate
        </span>
<span>3 pending sign-off</span>
</div>
</div>
<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-1">
<span className="font-label-md text-label-md uppercase tracking-wider text-on-surface-variant">Avg. Resolution</span>
<div className="group relative cursor-pointer flex items-center">
<span className="material-symbols-outlined text-[16px] text-on-surface-variant">info</span>
<div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:block w-48 p-2 rounded-lg bg-inverse-surface text-inverse-on-surface font-body-sm text-body-sm shadow-xl z-30">
              Calculated based on timestamp from intake dispatch to final field supervisor verification.
            </div>
</div>
</div>
<div className="w-9 h-9 rounded-lg bg-surface-container-low flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[20px]">timelapse</span>
</div>
</div>
<div className="mt-4 flex items-baseline gap-space-xs">
<span className="font-display-hero text-display-hero text-on-surface">2.4</span>
<span className="font-label-md text-label-md text-on-surface-variant">Days</span>
</div>
<div className="mt-3 pt-3 flex items-center justify-between text-on-surface-variant font-mono-data text-mono-data">
<span className="text-primary font-semibold">0.8d faster</span>
<span>than City Avg (3.2d)</span>
</div>
</div>
</div>
<div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between px-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">bolt</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Quick Issue Shortcuts</span>
<span className="font-body-sm text-body-sm text-on-surface-variant hidden sm:inline">— Direct dispatch to field teams</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Instant Forms</span>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
<button className="flex items-center gap-space-sm p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all text-left group" type="button">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
<span className="material-symbols-outlined text-[22px]">car_crash</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">Report Pothole</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Asphalt &amp; Roadways</span>
</div>
</button>
<button className="flex items-center gap-space-sm p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all text-left group" type="button">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-sm">
<span className="material-symbols-outlined text-[22px]">delete_sweep</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">Garbage Accumulation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Sanitation Dept</span>
</div>
</button>
<button className="flex items-center gap-space-sm p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all text-left group" type="button">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary group-hover:scale-110 transition-transform shadow-sm">
<span className="material-symbols-outlined text-[22px]">lightbulb</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">Streetlight Outage</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Electrical Grid</span>
</div>
</button>
<button className="flex items-center gap-space-sm p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container transition-all text-left group" type="button">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-secondary group-hover:scale-110 transition-transform shadow-sm">
<span className="material-symbols-outlined text-[22px]">water_damage</span>
</div>
<div className="flex flex-col min-w-0">
<span className="font-label-lg text-label-lg text-on-surface truncate">Water Leakage</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Mains &amp; Hydrants</span>
</div>
</button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
<div className="lg:col-span-8 flex flex-col gap-space-md">
<div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-lg">
<div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-md gap-space-sm">
<div>
<div className="flex items-center gap-2">
<h2 className="font-headline-md text-headline-md text-on-surface">Active &amp; Recent Complaints</h2>
<span className="px-2 py-0.5 rounded-full bg-surface-container-high font-mono-data text-label-sm text-on-surface">3 entries</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Real-time status tracking and civic engineering dispatch logs</p>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">filter_list</span>
<span>Filter</span>
</button>
<button className="px-space-sm py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px]">download</span>
<span>Export</span>
</button>
</div>
</div>
<div className="flex flex-col gap-space-sm">
<div className="p-space-md rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors shadow-sm flex flex-col gap-space-sm">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-mono-data text-mono-data font-semibold text-primary px-2 py-0.5 rounded bg-surface-container-lowest shadow-xs">#FMA-8492</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  In Progress
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Pothole &amp; Roadwork</span>
</div>
<span className="font-mono-data text-mono-data text-on-surface-variant">Submitted 2 days ago</span>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-headline-sm text-headline-sm text-on-surface">
                Large dangerous pothole near Oakwood High School crossing
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Deep road cavity spanning approx 3 feet across primary southbound lane. Causing traffic swerves near school crosswalk zone.
              </p>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between pt-space-xs gap-space-sm">
<div className="flex items-center gap-space-md flex-wrap text-on-surface-variant font-body-sm text-body-sm">
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                  4th Ave &amp; Elm St
                </span>
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">group</span>
                  Assigned: Road Crew Beta
                </span>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-1.5 rounded-lg bg-primary-container text-on-primary hover:opacity-95 font-label-md text-label-md shadow-sm transition-all flex items-center gap-1" type="button">
<span>Track Details</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</button>
</div>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors shadow-sm flex flex-col gap-space-sm">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-mono-data text-mono-data font-semibold text-primary px-2 py-0.5 rounded bg-surface-container-lowest shadow-xs">#FMA-8488</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                  Assigned
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Waste Management</span>
</div>
<span className="font-mono-data text-mono-data text-on-surface-variant">Submitted 3 days ago</span>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-headline-sm text-headline-sm text-on-surface">
                Overflowing municipal recycling dumpster attracting pests
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Cardboard and plastic bins have reached capacity over the holiday weekend. Bags spilling onto pedestrian walking pathway.
              </p>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between pt-space-xs gap-space-sm">
<div className="flex items-center gap-space-md flex-wrap text-on-surface-variant font-body-sm text-body-sm">
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                  12 Maple St Park
                </span>
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">local_shipping</span>
                  Dispatched: Fleet #04
                </span>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-md text-label-md transition-all flex items-center gap-1" type="button">
<span>Track Details</span>
<span className="material-symbols-outlined text-[16px]">open_in_new</span>
</button>
</div>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low/70 hover:bg-surface-container-low transition-colors shadow-sm flex flex-col gap-space-sm">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs flex-wrap">
<span className="font-mono-data text-mono-data font-semibold text-primary px-2 py-0.5 rounded bg-surface-container-lowest shadow-xs">#FMA-8421</span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary-fixed/40 text-on-primary-fixed-variant font-label-md text-label-md">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                  Resolved
                </span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Streetlights &amp; Electrical</span>
</div>
<span className="font-mono-data text-mono-data text-on-surface-variant">Submitted 1 week ago</span>
</div>
<div className="flex flex-col gap-1">
<h3 className="font-headline-sm text-headline-sm text-on-surface">
                Broken pedestrian streetlight fixture flickering continuously
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
                Luminary head fixture replaced with high-efficiency LED pod and photocell sensor recalibrated. Completed on June 2.
              </p>
</div>
<div className="flex flex-col sm:flex-row sm:items-center justify-between pt-space-xs gap-space-sm">
<div className="flex items-center gap-space-md flex-wrap text-on-surface-variant font-body-sm text-body-sm">
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                  Corner of Pine &amp; 7th
                </span>
<span className="inline-flex items-center gap-1 text-primary">
<span className="material-symbols-outlined text-[16px]">verified</span>
                  Audited by Inspector G. Lin
                </span>
</div>
<div className="flex items-center gap-space-xs">
<button className="px-space-md py-1.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-high font-label-md text-label-md shadow-xs transition-all flex items-center gap-1" type="button">
<span className="material-symbols-outlined text-[16px] text-secondary">star_half</span>
<span>Rate Service</span>
</button>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Ward Inspection Hotspots</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Live civic hazard radar across Sector 4</p>
</div>
<span className="inline-flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container font-mono-data text-label-sm text-on-surface">
            Updated 12m ago
          </span>
</div>
<div className="w-full h-56 bg-cover bg-center rounded-xl shadow-inner relative overflow-hidden flex items-end p-space-md"  style={{"backgroundImage":"url('https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg')"}}>
<div className="relative z-10 w-full p-space-sm rounded-lg bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="w-3 h-3 rounded-full bg-secondary animate-ping"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Live Repair Unit En Route</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">ETA 22 minutes to 4th Ave &amp; Elm</span>
</div>
</div>
<button className="px-space-sm py-1 rounded bg-primary-container text-on-primary font-label-sm text-label-sm" type="button">
              Open Map
            </button>
</div>
</div>
</div>
</div>
<div className="lg:col-span-4 flex flex-col gap-space-lg">
<div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-[20px]">feed</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Ward Activity Feed</h3>
</div>
<span className="font-label-sm text-label-sm text-primary cursor-pointer hover:underline">View All</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant -mt-2">Recent neighborhood fixes verified by Oakwood district dispatch.</p>
<div className="flex flex-col gap-space-md">
<div className="flex flex-col gap-space-xs p-space-sm rounded-lg bg-surface-container-low/50">
<div className="flex items-center justify-between text-on-surface-variant font-mono-data text-label-sm">
<span className="font-semibold text-on-surface">Stormdrain Unblocked</span>
<span>Today, 10:15 AM</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">High Street culvert cleared of debris prior to forecasted rains.</p>
<div className="grid grid-cols-2 gap-space-xs mt-1">
<div className="relative rounded-lg overflow-hidden group">
<img className="w-full h-24 object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-hKysXsZtnCy4C9MOM_Z-_Niiz-GlOFHZfAzidIYy8wlNoV0SyWa3aW3p6MJkG3-LUITyOmGUb64bpCjSt2f_XTkFLXW3749NVsnijtZ0QZTxmvC1DNY589LaioQLOzOHNm7q7VDEE6n5YydIE-cp_Oa1EIIHnfDyB5AceK0GQl_LrUc59bjv2GD4K6KRtrLDnsiSYXeWq__5U5_sBS48BJcID8BZaWPT3r4XLsO0j7NjiQ6CXzs"/>
<span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-[10px]">Before</span>
</div>
<div className="relative rounded-lg overflow-hidden group">
<img className="w-full h-24 object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6_6wTtSMQwuuBRbvku0_A3w5EHPVeVzittH0BQ0SlZKKgdGk94ZPlSNUq0YTpLJ0gpRND43av_WKdTEChBjuQpUEPul0MAcpHh8eL7KLvuK8CJCslM2D9mpldobVDhlMwADAyRNuR3dmhB0nG6Ia7C3RBn8Ph-7LbYJ6VPewT8n62l9VbpE-L8eOYAw8DBMtYWFUOZuRIXzjRTnSkr-phAtHS--p4tx04wc32PgpjVkHcII0AvCE"/>
<span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-primary/90 text-on-primary font-label-sm text-[10px]">Resolved</span>
</div>
</div>
</div>
<div className="flex flex-col gap-space-xs p-space-sm rounded-lg bg-surface-container-low/50">
<div className="flex items-center justify-between text-on-surface-variant font-mono-data text-label-sm">
<span className="font-semibold text-on-surface">Crosswalk Repainting</span>
<span>Yesterday, 3:40 PM</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface">Fresh thermal reflective paint applied across Oakwood Elementary crosswalk.</p>
<div className="grid grid-cols-2 gap-space-xs mt-1">
<div className="relative rounded-lg overflow-hidden group">
<img className="w-full h-24 object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCCObYf127PTvDxcrTqURVhaTLv3FqhBj2O8nEeJWBBTSZrkQay7cnYw2d62byghKi-fEsDdVa3NUrUcr1QAKFS-OynGWeJYUmnHAtQml9xCEfCO8kwD9gDhCMj6nIhh_3nCNAQTCTfEjAwhX1ZnYZ90Y0TRCeRjbA-2tY0Rj41XcmbxwjendGX3bOyIK22b21fHnSMOimDdChclBTbCtOy6qk1a2GGuUd74n2B-_W22Jfv4RtAJA"/>
<span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-inverse-surface/80 text-inverse-on-surface font-label-sm text-[10px]">Before</span>
</div>
<div className="relative rounded-lg overflow-hidden group">
<img className="w-full h-24 object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAb_laLVV6CgsUXkj712TgVRXspPtABgfgXVyY1QpOvdQQxNzq1CMhkkD05NKMaKGaTh7xvgsRpNx9V4aZDox7bviRXAQJYRMD6ZtkyDHCxairylvlFIwsF4FJORwY86B7SDClG_Xf0cwQANanufE4Ho0oeV2vGrSpFTssgy8jCf-NmobcJb4zAS15eqLJBWHJsOtoUWufCbkFYZEDiOBvI9FhBNQkjfJ8LGwm2UyY9qUx5NE6wTVA"/>
<span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-primary/90 text-on-primary font-label-sm text-[10px]">Resolved</span>
</div>
</div>
</div>
</div>
</div>
<div className="rounded-xl bg-surface-container-lowest shadow-sm p-space-lg flex flex-col gap-space-md">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-[20px]">eco</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Community Impact</h3>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container font-mono-data">Q2 2025</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant -mt-2">Cumulative civic restoration outcomes for Oakwood residents.</p>
<div className="flex flex-col gap-space-md">
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Street Hazards Cleared</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">142</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
<div className="h-full bg-primary-container rounded-full" style={{"width":"82%"}}></div>
</div>
<div className="flex items-center justify-between font-mono-data text-body-sm text-on-surface-variant">
<span>Goal: 175 tickets</span>
<span>82% Achieved</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-2">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Recycled Municipal Bulk</span>
<span className="font-headline-sm text-headline-sm text-secondary font-bold">88 Tons</span>
</div>
<div className="w-full h-2 rounded-full bg-surface-container-high overflow-hidden">
<div className="h-full bg-secondary rounded-full" style={{"width":"73%"}}></div>
</div>
<div className="flex items-center justify-between font-mono-data text-body-sm text-on-surface-variant">
<span>Ward target: 120 Tons</span>
<span>73% of quarterly cap</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-primary-container text-on-primary flex items-center justify-between shadow-sm">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-primary-container">Next Civic Clean-Up Day</span>
<span className="font-headline-sm text-headline-sm">Saturday, June 14</span>
<span className="font-body-sm text-body-sm text-on-primary-container/90">Oakwood Central Park Pavilion</span>
</div>
<button className="w-10 h-10 rounded-lg bg-surface-container-lowest text-primary flex items-center justify-center shadow-xs hover:bg-surface-container-low transition-colors shrink-0" type="button">
<span className="material-symbols-outlined text-[20px]">calendar_add_on</span>
</button>
</div>
</div>
</div>
<div className="rounded-xl bg-surface-container-low p-space-md flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shadow-xs">
<span className="material-symbols-outlined text-[18px]">emergency</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Emergency Gas or Water Line Break?</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Do not file tickets. Contact central emergency dispatch.</span>
</div>
</div>
<button className="px-space-sm py-1 rounded bg-error text-on-error font-label-md text-label-md shrink-0 hover:opacity-90" type="button">
          Dial 911
        </button>
</div>
</div>
</div>
</div></main></div>
    </div>
  );
}
