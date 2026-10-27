import React from 'react';

export default function StaffWorkbench() {
  return (
    <div className="w-full min-h-screen">
      <aside className="fixed left-0 top-0 h-full w-[250px] bg-surface-container-lowest z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex flex-col flex-1 overflow-y-auto"><div className="p-space-md flex items-center gap-space-sm"><img alt="FixMyArea Brand Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1UFgGY8YFJ_uSwMb-1C2HU22kFZeAM_us6EfAz1AkcobGX2c3hO7A9abO8q-2fUVCGSnQMlFgCnByOnW73UCwhkwPQFiPlDoCXK7_jT_FfOSE3R4xg6XvfiQmFTXgGaRxepr6XLVClA0xid1pDbNBiJ3TT9FiRpp2xrTLTGNBKVusmHnfiKoqjl7lupXWVZu7x-KPOqlCVcHESfpAH3sr7-VT_Ih5hjV37GaHkOAJc9bq1aUMuSui-e"/><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface">FixMyArea</span><span className="font-label-sm text-label-sm text-on-surface-variant">MUNICIPAL PORTAL</span></div></div><div className="px-space-md pb-space-sm"><div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-surface-container-high rounded-full"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span><span className="font-label-sm text-label-sm text-on-surface">Civic Portal • Live</span></div></div><nav className="flex flex-col gap-1 px-space-sm pt-space-xs" ><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">dashboard</span><span>Dashboard</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">add_alert</span><span>Report Issue</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">assignment</span><span>My Complaints</span></a><a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-2 transition-colors bg-primary-container text-on-primary font-label-lg rounded-lg"  href="#"><span className="material-symbols-outlined text-[20px]">engineering</span><span>Staff Workbench</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">admin_panel_settings</span><span>Admin Management</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">query_stats</span><span>Analytics</span></a><a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-lg text-label-lg"  href="#"><span className="material-symbols-outlined text-[20px]">settings</span><span>Settings</span></a></nav></div><div className="p-space-sm flex flex-col gap-space-sm"><div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-xs"><span className="material-symbols-outlined text-primary text-[20px] mt-0.5">support_agent</span><div><p className="font-label-md text-label-md text-on-surface">Municipal Helpline</p><p className="font-body-sm text-body-sm text-on-surface-variant">Dial 311 (24/7 Support)</p></div></div><div className="flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container transition-colors"><div className="flex items-center gap-space-xs"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZGa7KnneAmgBhAqMbqIy2I4VHeL9M975I-81ZM2iNC2kbBhU4GyPJykbhmeR3GAh2Ynhi6BpGOAy2kXPA6uOZu3_UK2232YOnpP0pOUhXfJtLsYsSgOI2eCz3AMrvE9bax2Tvk_eo-k4x5TqqD1FyWZb2oZCWWED82vVRo44yt2FD1IiAg_1YYE-0d9bSHVhsuBp3iUpBxVuKFGmDAVa1nRtfasLgyR0JGCvJmmZK_sfifpUe4Uo"/><div className="flex flex-col text-left"><span className="font-label-md text-label-md text-on-surface">Marcus Vance</span><span className="font-label-sm text-label-sm text-on-surface-variant">Field Dispatcher</span></div></div><button className="text-on-surface-variant hover:text-on-surface" type="button"><span className="material-symbols-outlined text-[18px]">expand_more</span></button></div></div></aside><div className="pl-[250px]"><header className="fixed top-0 left-[250px] right-0 h-16 bg-surface-container-lowest/90 backdrop-blur-md z-40 flex items-center justify-between px-space-lg shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="flex items-center gap-space-md"><div className="flex items-center gap-space-xs text-on-surface-variant"><span className="material-symbols-outlined text-[18px]">location_city</span><span className="font-label-md text-label-md">FixMyArea</span><span className="material-symbols-outlined text-[14px]">chevron_right</span><div className="inline-flex items-center gap-1 bg-surface-container-low px-space-sm py-1 rounded-full text-on-surface"><span className="material-symbols-outlined text-primary text-[16px]">pin_drop</span><span className="font-label-md text-label-md">Oakwood District 4</span><span className="material-symbols-outlined text-[14px] text-on-surface-variant">arrow_drop_down</span></div></div><div className="relative w-80 lg:w-96"><span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">search</span><input className="w-full h-9 pl-9 pr-4 rounded-lg bg-surface-container-low font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search complaints by ID, street, or category..." type="text"/></div></div><div className="flex items-center gap-space-md"><button className="relative p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" type="button"><span className="material-symbols-outlined text-[22px]">notifications</span><span className="absolute top-1.5 right-1.5 w-4 h-4 bg-error text-on-error rounded-full font-label-sm text-[10px] flex items-center justify-center font-bold">3</span></button><a className="inline-flex items-center gap-space-xs px-space-md py-2 bg-primary-container text-on-primary rounded-lg font-label-md text-label-md shadow-sm hover:opacity-95 transition-all"  href="#"><span className="material-symbols-outlined text-[18px]">add</span><span>Report Problem</span></a><div className="flex items-center gap-space-xs pl-space-xs cursor-pointer"><img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZGa7KnneAmgBhAqMbqIy2I4VHeL9M975I-81ZM2iNC2kbBhU4GyPJykbhmeR3GAh2Ynhi6BpGOAy2kXPA6uOZu3_UK2232YOnpP0pOUhXfJtLsYsSgOI2eCz3AMrvE9bax2Tvk_eo-k4x5TqqD1FyWZb2oZCWWED82vVRo44yt2FD1IiAg_1YYE-0d9bSHVhsuBp3iUpBxVuKFGmDAVa1nRtfasLgyR0JGCvJmmZK_sfifpUe4Uo"/><span className="material-symbols-outlined text-[18px] text-on-surface-variant">keyboard_arrow_down</span></div></div></header><main className="w-full pt-16 bg-surface min-h-screen px-space-lg py-space-lg"><div className="flex flex-col w-full gap-y-space-lg">

<section className="flex flex-col md:flex-row md:items-center justify-between gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
<div className="flex flex-col gap-space-xs">
<div className="flex items-center gap-space-sm flex-wrap">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-semibold bg-primary-fixed/40 text-on-primary-fixed-variant px-2.5 py-1 rounded-full flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          Live Dispatch
        </span>
<span className="font-label-md text-label-md px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">apartment</span>
          Department: Oakwood Public Works &amp; Roads
        </span>
<span className="font-mono-data text-mono-data px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-semibold">
          Crew #PW-04
        </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface font-bold tracking-tight mt-1">
        Staff Workbench — Active Task Resolution
      </h1>
<p className="font-body-md text-body-md text-on-surface-variant">
        High-density operational dispatch console with geocoded telemetry, citizen media validation, and chain-of-custody evidence upload.
      </p>
</div>

<div className="flex items-center gap-space-md self-start md:self-auto bg-surface-container-low p-space-sm rounded-lg">
<div className="flex flex-col px-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant">Shift Progress</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-bold">5 / 7 Done</span>
</div>
<div className="w-px h-8 bg-surface-variant"></div>
<div className="flex flex-col px-space-sm">
<span className="font-label-sm text-label-sm text-on-surface-variant">Avg Resolution Time</span>
<span className="font-headline-sm text-headline-sm text-primary font-bold">2.4h</span>
</div>
<div className="w-px h-8 bg-surface-variant"></div>
<button className="p-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors" title="Sync Telemetry" type="button">
<span className="material-symbols-outlined text-[20px]">sync</span>
</button>
</div>
</section>

<section className="bg-gradient-to-r from-error/15 via-error/10 to-transparent p-space-md rounded-xl flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm">
<div className="flex items-center gap-space-md">
<div className="w-12 h-12 rounded-xl bg-error text-on-error flex items-center justify-center shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[26px]">fmd_bad</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-space-sm">
<span className="font-mono-data text-mono-data bg-error-container text-on-error-container font-bold px-2 py-0.5 rounded">#FMA-8492</span>
<span className="font-label-sm text-label-sm uppercase font-bold text-error tracking-wide">Hazard Level 1</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">• Dispatched 3h 12m ago</span>
</div>
<div className="font-headline-md text-headline-md text-on-surface font-bold mt-0.5">
          Severe asphalt crater &amp; broken curb hazard
        </div>
</div>
</div>

<div className="flex items-center gap-space-lg bg-surface-container-lowest/80 backdrop-blur-sm px-space-md py-space-sm rounded-lg shrink-0">
<div className="flex flex-col items-end">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-error font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">timer</span>
          Critical SLA Target
        </span>
<span className="font-headline-sm text-headline-sm text-on-surface font-black" id="sla-countdown">03h : 48m : 12s remaining</span>
</div>
<div className="relative w-12 h-12 flex items-center justify-center">
<svg className="w-12 h-12 -rotate-90" viewbox="0 0 36 36">
<path className="text-surface-variant" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-error" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="82, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<span className="absolute font-label-sm text-label-sm font-bold text-on-surface">82%</span>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">

<div className="lg:col-span-5 flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">badge</span>
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">Complaint Dossier</h2>
</div>
<span className="font-label-sm text-label-sm bg-surface-container text-on-surface-variant px-2 py-0.5 rounded font-mono">PRIORITY_URGENT</span>
</div>

<div className="bg-surface-container-low p-space-md rounded-lg flex items-start justify-between">
<div className="flex items-start gap-space-sm">
<div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center font-headline-sm font-bold shrink-0">
              SJ
            </div>
<div className="flex flex-col">
<div className="flex items-center gap-space-xs">
<span className="font-label-lg text-label-lg font-bold text-on-surface">Sarah J.</span>
<span className="material-symbols-outlined text-[16px] text-primary" title="Identity Verified">verified</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Resident • Ward 4 Oakwood</span>
<span className="font-label-sm text-label-sm text-primary font-medium mt-0.5 flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">phone_iphone</span> Phone Verified (+1 ••• ••• 8192)
              </span>
</div>
</div>
<div className="text-right">
<span className="font-label-sm text-label-sm text-on-surface-variant block">Filed On</span>
<span className="font-label-md text-label-md font-semibold text-on-surface block">Oct 24, 10:14 AM</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold flex items-center gap-1">
<span className="material-symbols-outlined text-secondary text-[18px]">place</span>
              4th Ave &amp; Elm St, Oakwood
            </span>
<span className="font-mono-data text-mono-data text-on-surface-variant">42.3314° N, 83.0458° W</span>
</div>
<div className="relative rounded-xl overflow-hidden shadow-sm group">
<div className="w-full h-48 bg-cover bg-center"  style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuDBPPK1rKW_TbtLXCPFJ55sdkp6qpJ6FJzEIco2ChrzoT26o1xE0agCOCrBP8kf2lB5jmUDv1oca7u1RbYsxPGaxsvQq2YXmbEAXR8hauSP0iymPrCcV3-oy3w2PNBCjhOOc-plTAqox6LVXztqdvZnzMTku7mV5Rw1Z-lCvGsrKZRo_OHBo6fAIyg1hfQcDOQXYfkNX2FNLtZN16JL9OmHboS4LFMEi_GejQi7Q15CNs450SowxnU')"}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/70 via-transparent to-transparent flex items-end justify-between p-space-md">
<div className="text-surface font-label-md flex items-center gap-1">
<span className="material-symbols-outlined text-[18px]">near_me</span>
<span>Distance: 0.4 miles from depot</span>
</div>
<a className="px-space-md py-1.5 bg-primary text-on-primary font-label-md text-label-md rounded-lg shadow-md hover:bg-primary-container hover:text-on-primary-container transition-all flex items-center gap-1" href="#navigate">
<span className="material-symbols-outlined text-[16px]">directions</span>
<span>Turn-by-Turn</span>
</a>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-tertiary text-[18px]">perm_media</span>
              Citizen Uploads (2 Images)
            </span>
<span className="font-label-sm text-label-sm text-on-surface-variant">EXIF verified at site</span>
</div>
<div className="grid grid-cols-2 gap-space-sm">
<div className="flex flex-col gap-1">
<div className="relative rounded-lg overflow-hidden h-36 bg-surface-container">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUbJrba45db-ZH8n2cIlOjc_7gfkbqS4iu8ATZZvlPK6YlRbK_xrhaAlW4v0yMMbk2vl-8a93BRdnJ8VHhGiMyaA86ncro7dLinEWUMvpfPCkU7PebMAqAM_jkryBAC3sSBU-p_XmeaOhe6g7fVQUDk9zc0yhNO6ifSzVw2ww4jfUqKnf0lOqojeLBuz2bnPik_ztsRq-Oj0Uf5WPHCTouSDtPmwUGTjmU7fTQSKwxk-U0brIfPFw"/>
<span className="absolute bottom-1.5 left-1.5 bg-inverse-surface/80 text-inverse-on-surface px-1.5 py-0.5 rounded text-[10px] font-mono">IMG_8492_01.JPG</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Damaged pavement depth ~14cm</span>
</div>
<div className="flex flex-col gap-1">
<div className="relative rounded-lg overflow-hidden h-36 bg-surface-container">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9oRendbgj7YDM57qbz8vRB_8KKwV53gixCmA3Clxu8g1gb6HieFOmSFlLyyB3e31r2htjWcJe2BHA1CoOQjowG9RkubhjhUrgm1ohSxrWh1n-9zHBZDRBnS7tN3Z-PhdLLbXUKfl-nvAe81Z1rJUDkU96klitxe8o0WnyblcuG7gh8YVxKQccH9urBxKogOQi0HQ_SUbYFEgGJqkkA62h7iRp1IXoXmjmqfmM4f-XdKlm5NuiMl4"/>
<span className="absolute bottom-1.5 left-1.5 bg-inverse-surface/80 text-inverse-on-surface px-1.5 py-0.5 rounded text-[10px] font-mono">IMG_8492_02.JPG</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant truncate">Water pooling &amp; curb fracture</span>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">
<span className="font-label-md text-label-md font-bold text-on-surface flex items-center gap-1">
<span className="material-symbols-outlined text-primary text-[18px]">history_edu</span>
            Audit &amp; Dispatch Timeline
          </span>
<div className="relative flex flex-col gap-space-md pl-6 before:content-[''] before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-variant">

<div className="relative flex items-start justify-between">
<span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-surface-container-lowest"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Reported via Citizen App</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Validated by AI geofence filter</span>
</div>
<span className="font-mono-data text-mono-data text-on-surface-variant">10:14 AM</span>
</div>

<div className="relative flex items-start justify-between">
<span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-primary ring-4 ring-surface-container-lowest"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Assigned to Crew #PW-04</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Auto-routed: High traffic priority</span>
</div>
<span className="font-mono-data text-mono-data text-on-surface-variant">10:28 AM</span>
</div>

<div className="relative flex items-start justify-between">
<span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-secondary ring-4 ring-surface-container-lowest"></span>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-semibold text-on-surface">Physical Inspection Completed</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Field lead confirmed structural road base repair needed</span>
</div>
<span className="font-mono-data text-mono-data text-on-surface-variant">10:52 AM</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[24px]">local_shipping</span>
</div>
<div className="flex flex-col">
<span className="font-label-md text-label-md font-bold text-on-surface">Public Works Truck #12</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Equipped with Heated Hotbox &amp; Plate Compactor</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-primary font-bold bg-primary-fixed/50 px-2 py-1 rounded">ON-BOARD</span>
</div>
</div>

<div className="lg:col-span-7 flex flex-col gap-space-lg">

<div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-lg">

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<h2 className="font-headline-sm text-headline-sm text-on-surface font-bold flex items-center gap-1.5">
<span className="material-symbols-outlined text-primary text-[22px]">published_with_changes</span>
              Operational Workflow State
            </h2>
<span className="font-label-sm text-label-sm text-on-surface-variant">Step 3 of 3</span>
</div>

<div className="grid grid-cols-3 gap-space-xs bg-surface-container-low p-1.5 rounded-xl">
<button className="flex items-center justify-center gap-1.5 py-2 px-space-xs rounded-lg text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">navigation</span>
<span>1. En Route</span>
</button>
<button className="flex items-center justify-center gap-1.5 py-2 px-space-xs rounded-lg text-on-surface-variant font-label-md text-label-md hover:bg-surface-container transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">construction</span>
<span>2. On Site / In Progress</span>
</button>
<button className="flex items-center justify-center gap-1.5 py-2 px-space-xs rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-sm transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">task_alt</span>
<span className="font-bold">3. Work Completed</span>
</button>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">Resolution Chain-of-Evidence</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Tamper-evident photographic verification for public audit log</span>
</div>
<button className="font-label-md text-label-md text-primary flex items-center gap-1 hover:underline" type="button">
<span className="material-symbols-outlined text-[18px]">add_a_photo</span>
<span>Add More</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="bg-surface-container-low rounded-xl p-space-sm flex flex-col gap-space-xs">
<div className="flex items-center justify-between px-1">
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-on-surface-variant flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-error"></span>
                  Before Work (Arrival)
                </span>
<span className="font-mono-data text-mono-data text-on-surface font-semibold bg-surface-container px-2 py-0.5 rounded">
                  10:45 AM
                </span>
</div>
<div className="relative h-44 rounded-lg overflow-hidden bg-surface-container group">
<img className="w-full h-full object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTLPhrz7XQ0DGPECWWmEHmX72iUJKAFLMV-r2ANTgpPvwSy9-eg44jnh-Q4PUFOLmcwMSF5XZW-30DNWa_TZkNrmZBuWWw5y-fJ4We0tO8QEhan3yXcJbmYDBrm6-oeSCW-b_R18swRym6JKuo-hdK4SulXWwcXfu8SoK3ccXNEkEYFmk7uCHkzBli8BepQxxxjZ0W34J8XUpTWdS2DL-4Vg8va-miPCKk4tVvCt-YVmSuxnAj7kw"/>
<div className="absolute bottom-2 left-2 bg-on-surface/85 backdrop-blur-sm text-surface text-[11px] px-2 py-0.5 rounded font-mono flex items-center gap-1">
<span className="material-symbols-outlined text-[12px] text-error">pin_drop</span>
                  GPS: Locked • Lat 42.3314
                </div>
</div>
<div className="flex items-center justify-between px-1 text-on-surface-variant font-body-sm text-body-sm">
<span>Inspector: Vance, M. (#41)</span>
<span className="text-primary font-medium">Verified Valid</span>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-sm flex flex-col gap-space-xs">
<div className="flex items-center justify-between px-1">
<span className="font-label-sm text-label-sm font-bold uppercase tracking-wider text-primary font-semibold flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                  After Work (Repaired)
                </span>
<span className="font-mono-data text-mono-data text-primary font-bold bg-primary-fixed/50 px-2 py-0.5 rounded">
                  02:15 PM
                </span>
</div>
<div className="relative h-44 rounded-lg overflow-hidden bg-surface-container group">
<img className="w-full h-full object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6y-_CQiVBCj1k7M3Sph5_wbomsNr2-2VdGVLtdnJj9FdmJl9yZPpico-vzsD60jcLUfUUT9xgBqlTEKeSSt6DDrmcsluoH6IcusGlO3Uh0D4-e3NFw9PB1Lh7RdwnC6vthaTEZ8YOurSKcEZKoKTX6unYhh07k48U-1LjuqOE14uvzcxAtoi7m6-lhGUYI2BEMcdaw881p7RfQIQiNyg4HPFQzrlfvhk_GWDadvwIkQJTSBqXQ6s"/>
<div className="absolute bottom-2 left-2 bg-on-surface/85 backdrop-blur-sm text-surface text-[11px] px-2 py-0.5 rounded font-mono flex items-center gap-1">
<span className="material-symbols-outlined text-[12px] text-primary">verified_user</span>
                  QC Signature: Captured
                </div>
<button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-surface/90 text-on-surface flex items-center justify-center hover:bg-surface shadow" title="Replace Photo" type="button">
<span className="material-symbols-outlined text-[16px]">flip_camera_ios</span>
</button>
</div>
<div className="flex items-center justify-between px-1 text-on-surface-variant font-body-sm text-body-sm">
<span>Compaction: 98.4%</span>
<span className="text-primary font-bold">Standard Passed</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<label className="font-headline-sm text-headline-sm font-bold text-on-surface flex items-center gap-1.5" htmlFor="resolution-notes">
<span className="material-symbols-outlined text-primary text-[20px]">edit_note</span>
              Field Resolution Notes
            </label>
<span className="font-label-sm text-label-sm text-on-surface-variant">Character count: 128 / 500</span>
</div>
<div className="relative">
<textarea className="w-full p-space-md rounded-xl bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none shadow-inner" id="resolution-notes" rows="4">Detailed work log: 250kg cold mix asphalt applied, compacted with pneumatic tamper, safety markings repainted. Tested for vehicle clearance and surface water gradient drainage.</textarea>
<div className="absolute bottom-3 right-3 flex items-center gap-1">
<button className="p-1 text-on-surface-variant hover:text-on-surface rounded bg-surface-container hover:bg-surface-container-high transition-colors" title="Speech to text dictation" type="button">
<span className="material-symbols-outlined text-[18px]">mic</span>
</button>
<button className="p-1 text-on-surface-variant hover:text-on-surface rounded bg-surface-container hover:bg-surface-container-high transition-colors" title="Insert Standard Template" type="button">
<span className="material-symbols-outlined text-[18px]">post_add</span>
</button>
</div>
</div>
</div>

<div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md font-bold text-on-surface uppercase tracking-wide flex items-center gap-1.5">
<span className="material-symbols-outlined text-secondary text-[18px]">inventory</span>
              Materials &amp; Labor Log
            </span>
<button className="font-label-sm text-label-sm text-primary font-semibold hover:underline" type="button">Edit Breakdown</button>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm">
<div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-sm shadow-sm">
<div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">group</span>
</div>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface-variant">Labor Roster</span>
<span className="font-label-md text-label-md font-bold text-on-surface">2 crew members</span>
</div>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-sm shadow-sm">
<div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">schedule</span>
</div>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface-variant">Time On Site</span>
<span className="font-label-md text-label-md font-bold text-on-surface">3.5 total hrs</span>
</div>
</div>
<div className="bg-surface-container-lowest p-space-sm rounded-lg flex items-center gap-space-sm shadow-sm">
<div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[20px]">fire_truck</span>
</div>
<div className="flex flex-col">
<span className="font-body-sm text-body-sm text-on-surface-variant">Equipment Utilized</span>
<span className="font-label-md text-label-md font-bold text-on-surface">Dept Truck #12</span>
</div>
</div>
</div>
</div>

<div className="pt-space-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-space-md border-t-0">
<div className="flex items-center gap-space-sm">
<button className="px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md flex items-center gap-1.5 justify-center" type="button">
<span className="material-symbols-outlined text-[18px]">find_in_page</span>
<span>Request Secondary Inspection</span>
</button>
<button className="px-space-md py-2.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md flex items-center gap-1.5 justify-center" type="button">
<span className="material-symbols-outlined text-[18px]">save</span>
<span>Save Field Log</span>
</button>
</div>

<button className="px-space-lg py-3 rounded-xl bg-primary-container text-on-primary hover:opacity-95 font-label-lg text-label-lg font-bold shadow-md flex items-center justify-center gap-2 transition-transform active:scale-95 group" id="resolve-btn" type="button">
<span className="material-symbols-outlined text-[20px] group-hover:rotate-12 transition-transform">check_circle</span>
<span>Mark as Resolved &amp; Notify Citizen</span>
</button>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[22px]">health_and_safety</span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Safety Protocols Cleared: Traffic control signs removed, storm drains debris-free, citizen notification queue ready.</span>
</div>
<div className="flex items-center gap-1 text-primary shrink-0 font-label-sm text-label-sm font-bold">
<span className="material-symbols-outlined text-[18px]">done_all</span>
<span>100% Compliant</span>
</div>
</div>
</div>
</div>
</div>
</main></div>
    </div>
  );
}
