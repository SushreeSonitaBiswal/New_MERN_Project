import React from 'react';

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.03)]"><div className="h-20 max-w-7xl mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-lg flex-shrink-0"><a className="flex items-center gap-space-sm group focus:outline-none"  href="#"><div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-headline-sm text-headline-sm transition-transform group-hover:scale-105"><span className="material-symbols-outlined text-[24px]">apartment</span></div><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-tight group-hover:text-primary transition-colors">FixMyArea</span><span className="font-label-sm text-label-sm text-on-surface-variant font-medium hidden sm:block">Better Neighborhoods Start With You</span></div></a><nav className="hidden xl:flex items-center gap-space-lg ml-space-sm" ><a aria-current="page" className="transition-colors text-primary font-semibold border-b-2 border-primary py-space-sm"  href="#">Home</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-sm"  href="#">Explore Complaints</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-sm"  href="#">How It Works</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-sm"  href="#">Civic Impact</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-sm"  href="#">FAQs</a></nav></div><div className="flex items-center gap-space-sm lg:gap-space-md"><div className="relative hidden md:block w-48 lg:w-60"><div className="absolute inset-y-0 left-0 pl-space-sm flex items-center pointer-events-none text-on-surface-variant"><span className="material-symbols-outlined text-[18px]">search</span></div><input className="w-full h-10 pl-9 pr-space-sm rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Search complaints..." type="text"/></div><div className="hidden lg:flex items-center gap-1 text-on-surface-variant hover:text-on-surface cursor-pointer px-space-xs py-space-xs rounded-lg hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-[18px]">language</span><span className="font-label-md text-label-md">EN</span><span className="material-symbols-outlined text-[16px]">expand_more</span></div><a className="h-10 px-space-md inline-flex items-center justify-center rounded-lg border border-outline-variant/60 bg-surface-container-lowest font-label-lg text-label-lg text-on-surface hover:bg-surface-container-high transition-colors focus:outline-none"  href="#">Log In</a><a className="h-10 px-space-md inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:opacity-95 transition-all focus:outline-none"  href="#"><span className="material-symbols-outlined text-[18px]">add_circle</span><span>Report an Issue</span></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full pt-20 flex-1 bg-background"><div className="flex flex-col w-full">

<section className="relative overflow-hidden bg-surface-container-lowest pb-space-xl">
<div className="absolute inset-0 pointer-events-none opacity-40 bg-[radial-gradient(#0f766e_1px,transparent_1px)] [background-size:24px_24px]"></div>
<div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
<div className="relative max-w-7xl mx-auto px-margin-mobile md:px-margin pt-space-xl md:pt-28">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

<div className="lg:col-span-7 flex flex-col space-y-space-md">
<div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface">
<span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
<span className="font-label-sm text-label-sm tracking-wider uppercase font-semibold">Decentralized Civic Oversight • Ward Central</span>
</div>
<h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-none">
            Better Neighborhoods <br className="hidden sm:inline"/>
<span className="text-primary-container">Start With You.</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Report local issues, track municipal repairs in real time, and hold public services accountable. From potholes to streetlights, your voice drives neighborhood transformation.
          </p>

<div className="pt-space-xs flex flex-wrap items-center gap-space-sm">
<a className="h-12 px-space-lg rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:opacity-95 transition-all inline-flex items-center gap-2"  href="#">
<span className="material-symbols-outlined text-[20px]">add_circle</span>
<span>Report a Problem</span>
</a>
<a className="h-12 px-space-lg rounded-lg bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-container-low transition-all inline-flex items-center gap-2" href="#quick-tracker">
<span className="material-symbols-outlined text-[20px] text-secondary">search</span>
<span>Track Existing Complaint</span>
</a>
</div>

<div className="pt-space-md max-w-xl" id="quick-tracker">
<form className="p-space-xs rounded-xl bg-surface-container-low shadow-sm flex flex-col sm:flex-row items-stretch sm:items-center gap-space-xs" id="tracker-form" onSubmit={(e) => e.preventDefault()}>
<div className="flex items-center flex-1 px-space-sm py-2 bg-surface-container-lowest rounded-lg">
<span className="material-symbols-outlined text-outline text-[20px] mr-2">tag</span>
<input className="w-full bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-outline focus:outline-none" id="tracking-input" placeholder="Enter Complaint ID (e.g. #FMA-8492) or street name..." required="" type="text"/>
</div>
<button className="h-10 px-space-md rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:opacity-90 transition-opacity flex items-center justify-center gap-1.5 flex-shrink-0" type="submit">
<span className="material-symbols-outlined text-[16px]">manage_search</span>
<span>Check Status</span>
</button>
</form>

<div className="hidden mt-space-sm p-space-sm rounded-lg bg-surface-container-lowest shadow-sm flex items-center justify-between" id="search-feedback">
<div className="flex items-center gap-space-sm">
<span className="w-2.5 h-2.5 rounded-full bg-secondary-container animate-ping"></span>
<div>
<p className="font-label-md text-label-md text-on-surface">Ticket #FMA-8492 • Active Field Crew Assigned</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Oakwood 5th Ave Storm Drain • ETA to repair: 4 hrs</p>
</div>
</div>
<a className="text-primary-container font-label-md text-label-md hover:underline"  href="#">Inspect Audit Log →</a>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">
<div className="relative rounded-2xl bg-surface-container p-space-md shadow-sm overflow-hidden">
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary-container text-[20px]">stream</span>
<span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-semibold">Live Municipal Dispatch</span>
</div>
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-secondary font-mono-data text-mono-data font-bold">14 Wards Online</span>
</div>

<div className="relative h-64 rounded-xl overflow-hidden shadow-inner mb-space-sm">
<div className="w-full h-full bg-cover bg-center"  style={{}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent flex items-end p-space-sm">
<div className="text-surface">
<span className="font-mono-data text-mono-data text-on-primary-container uppercase font-semibold">GPS Ward Cluster 04</span>
<p className="font-headline-sm text-headline-sm">Sector 9: Oakwood Central Crossing</p>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-space-xs font-mono-data text-mono-data">
<div className="p-space-sm bg-surface-container-lowest rounded-lg">
<span className="text-on-surface-variant block font-label-sm text-label-sm">Active Crew Dispatch</span>
<span className="text-on-surface font-headline-sm text-headline-sm font-semibold">47 Units</span>
</div>
<div className="p-space-sm bg-surface-container-lowest rounded-lg">
<span className="text-on-surface-variant block font-label-sm text-label-sm">Avg First Response</span>
<span className="text-primary-container font-headline-sm text-headline-sm font-semibold">18.4 Mins</span>
</div>
</div>
</div>
</div>
</div>

<div className="mt-space-xl pt-space-lg">
<div className="grid grid-cols-2 md:grid-cols-4 gap-space-md p-space-md rounded-2xl bg-surface-container-low shadow-sm">
<div className="flex flex-col items-center sm:items-start p-space-sm bg-surface-container-lowest rounded-xl">
<span className="font-headline-lg text-headline-lg text-primary-container">42,850+</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Issues Resolved Publicly</span>
</div>
<div className="flex flex-col items-center sm:items-start p-space-sm bg-surface-container-lowest rounded-xl">
<span className="font-headline-lg text-headline-lg text-secondary">28h</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Avg Resolution Time</span>
</div>
<div className="flex flex-col items-center sm:items-start p-space-sm bg-surface-container-lowest rounded-xl">
<span className="font-headline-lg text-headline-lg text-primary">98.4%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Resident Satisfaction</span>
</div>
<div className="flex flex-col items-center sm:items-start p-space-sm bg-surface-container-lowest rounded-xl">
<span className="font-headline-lg text-headline-lg text-on-surface">14</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Active Municipal Wards</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-space-xl bg-surface">
<div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
<div className="flex flex-col md:flex-row md:items-end justify-between pb-space-lg">
<div>
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">Public Workstreams</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">Direct Municipal Issue Routing</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Select a category to report incidents with immediate dispatch routing to municipal field teams.</p>
</div>
<a className="mt-space-sm md:mt-0 font-label-lg text-label-lg text-primary-container hover:underline inline-flex items-center gap-1"  href="#">
<span>View All 24 Departments</span>
<span className="material-symbols-outlined text-[16px]">arrow_forward</span>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">

<div className="group p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[28px]">handyman</span>
</div>
<span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                24 in progress
              </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary-container transition-colors">Potholes & Road Repairs</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
              Asphalt sinkholes, uneven pavement hazards, and structural roadway cracks with guaranteed 24-hour crew turnaround.
            </p>
</div>
<div className="pt-space-md flex items-center justify-between mt-space-sm bg-surface-container-low p-space-sm rounded-lg">
<span className="font-mono-data text-mono-data text-on-surface-variant">SLA: 24h Response</span>
<a className="font-label-md text-label-md text-primary-container font-semibold inline-flex items-center gap-1 hover:underline"  href="#">
<span>Quick Report</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</a>
</div>
</div>

<div className="group p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[28px]">delete_sweep</span>
</div>
<span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                18 in progress
              </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors">Garbage & Sanitation</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
              Uncollected dumpsters, public bin overflows, illegal fly-tipping, and hazardous litter remediation routes.
            </p>
</div>
<div className="pt-space-md flex items-center justify-between mt-space-sm bg-surface-container-low p-space-sm rounded-lg">
<span className="font-mono-data text-mono-data text-on-surface-variant">SLA: 12h Pickup</span>
<a className="font-label-md text-label-md text-primary font-semibold inline-flex items-center gap-1 hover:underline"  href="#">
<span>Quick Report</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</a>
</div>
</div>

<div className="group p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-high text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[28px]">light</span>
</div>
<span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary-fixed-dim"></span>
                9 in progress
              </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-secondary transition-colors">Broken Streetlights & Electrical</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
              Outages, sparking junction boxes, malfunctioning solar arrays, and high-priority nighttime corridor safety lights.
            </p>
</div>
<div className="pt-space-md flex items-center justify-between mt-space-sm bg-surface-container-low p-space-sm rounded-lg">
<span className="font-mono-data text-mono-data text-on-surface-variant">Priority: Public Safety</span>
<a className="font-label-md text-label-md text-secondary font-semibold inline-flex items-center gap-1 hover:underline"  href="#">
<span>Quick Report</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</a>
</div>
</div>

<div className="group p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-high text-tertiary flex items-center justify-center">
<span className="material-symbols-outlined text-[28px]">water_drop</span>
</div>
<span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                31 in progress
              </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-tertiary transition-colors">Water Supply & Drainage</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
              Subterranean main bursts, contaminated low-pressure zones, flooded curbs, and debris-clogged municipal catch basins.
            </p>
</div>
<div className="pt-space-md flex items-center justify-between mt-space-sm bg-surface-container-low p-space-sm rounded-lg">
<span className="font-mono-data text-mono-data text-on-surface-variant">SLA: 6h Emergency</span>
<a className="font-label-md text-label-md text-tertiary font-semibold inline-flex items-center gap-1 hover:underline"  href="#">
<span>Quick Report</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</a>
</div>
</div>

<div className="group p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-high text-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-[28px]">park</span>
</div>
<span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
                11 in progress
              </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary-container transition-colors">Damaged Public Parks & Signs</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
              Vandalized park benches, damaged playground swings, fallen traffic signs, and community perimeter fencing.
            </p>
</div>
<div className="pt-space-md flex items-center justify-between mt-space-sm bg-surface-container-low p-space-sm rounded-lg">
<span className="font-mono-data text-mono-data text-on-surface-variant">SLA: 48h Maintenance</span>
<a className="font-label-md text-label-md text-primary-container font-semibold inline-flex items-center gap-1 hover:underline"  href="#">
<span>Quick Report</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</a>
</div>
</div>

<div className="group p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
<div>
<div className="flex items-center justify-between pb-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container-high text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[28px]">traffic</span>
</div>
<span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                7 in progress
              </span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-secondary transition-colors">Traffic & Pedestrian Crosswalks</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
              Faded zebra crosswalk striping, pedestrian countdown button failures, curb ramp obstructions, and sign occlusions.
            </p>
</div>
<div className="pt-space-md flex items-center justify-between mt-space-sm bg-surface-container-low p-space-sm rounded-lg">
<span className="font-mono-data text-mono-data text-on-surface-variant">SLA: 36h Mobility</span>
<a className="font-label-md text-label-md text-secondary font-semibold inline-flex items-center gap-1 hover:underline"  href="#">
<span>Quick Report</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-space-xl bg-surface-container-low">
<div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
<div className="text-center max-w-2xl mx-auto pb-space-xl">
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">Accountability By Design</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">How FixMyArea Enforces Resolutions</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">From public snapshot to resident sign-off, every ticket follows an immutable civic audit trail.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md relative">

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-surface-container flex items-center justify-center rounded-bl-2xl font-mono-data text-mono-data font-bold text-on-surface-variant">
            01
          </div>
<div>
<div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[24px]">photo_camera</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Snap & Geotag</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
              Residents take an in-app photo. Automated device telemetry locks GPS coordinates, date, and micro-location accuracy.
            </p>
</div>
<div className="pt-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary-container font-semibold">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
              EXIF Verification
            </span>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-surface-container flex items-center justify-center rounded-bl-2xl font-mono-data text-mono-data font-bold text-on-surface-variant">
            02
          </div>
<div>
<div className="w-12 h-12 rounded-xl bg-secondary text-on-secondary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[24px]">route</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Municipal Dispatch</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
              AI classifier detects severity, categorizes asset type, and dispatches direct work orders into the local ward crew queue.
            </p>
</div>
<div className="pt-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-secondary font-semibold">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
              Ward API Handshake
            </span>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-surface-container flex items-center justify-center rounded-bl-2xl font-mono-data text-mono-data font-bold text-on-surface-variant">
            03
          </div>
<div>
<div className="w-12 h-12 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[24px]">verified</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Verified Repair</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
              Field engineers complete the physical intervention and upload mandatory timestamped completion photos on location.
            </p>
</div>
<div className="pt-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-semibold">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
              Tamper-evident Proof
            </span>
</div>
</div>

<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between relative overflow-hidden">
<div className="absolute top-0 right-0 w-16 h-16 bg-surface-container flex items-center justify-center rounded-bl-2xl font-mono-data text-mono-data font-bold text-on-surface-variant">
            04
          </div>
<div>
<div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center mb-space-md">
<span className="material-symbols-outlined text-[24px]">rate_review</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Citizen Sign-off</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-space-xs leading-relaxed">
              The reporting resident and ward neighbors inspect the repair and provide a 1-to-5 star quality rating to finalize public closing.
            </p>
</div>
<div className="pt-space-md">
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-primary font-semibold">
<span className="material-symbols-outlined text-[16px]">check_circle</span>
              Citizen Approved
            </span>
</div>
</div>
</div>
</div>
</section>

<section className="py-space-xl bg-surface">
<div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
<div className="flex flex-col md:flex-row md:items-end justify-between pb-space-lg">
<div>
<div className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded bg-surface-container-high text-primary-container font-mono-data text-mono-data font-bold mb-space-xs">
<span className="w-2 h-2 rounded-full bg-primary-container"></span>
            LIVE FEED
          </div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Recent Municipal Resolutions</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl">Public before/after verification streams from active ward maintenance teams in Oakwood District.</p>
</div>
<div className="mt-space-sm md:mt-0 flex items-center gap-space-xs">
<span className="font-mono-data text-mono-data text-on-surface-variant">Syncing: 12s ago</span>
<a className="font-label-md text-label-md px-space-md py-2 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"  href="#">
            Full Audit Log
          </a>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">

<div className="rounded-2xl bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col">
<div className="p-space-md flex items-center justify-between">
<span className="font-mono-data text-mono-data text-on-surface-variant font-bold">#FMA-8391 • Oakwood East</span>
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-surface-container text-primary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              Resolved in 18 hrs
            </span>
</div>
<div className="grid grid-cols-2 gap-1 px-space-md pb-space-md">
<div className="relative rounded-lg overflow-hidden h-36">
<img className="w-full h-full object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4CxKg-YgdDNokIs4Jvh7dpO-j_wBqUYlqfZ3ybaKPzbucvgnxER9iD6IXrg0q8GKYYsxzRKfpKvVY4bKdQmur1S-EnvvkpRGzHf0JybNACsIRdhBSRmbtGvwMS55Gv43SzBHbWSTr0TcD3OA0Xrkmn8qCy5-tbSCtnrSbGxufv3J75THCfJOtK1k4Q9X-xEi592r4MhemMFL3sefJFDLjOaUW0v6cMX7NEHYs376M6dQ9DdbLaas"/>
<span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-on-surface/80 text-surface font-label-sm text-label-sm font-bold">BEFORE</span>
</div>
<div className="relative rounded-lg overflow-hidden h-36">
<img className="w-full h-full object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpfgLMuf-iM82JyUi8kUJ3wjV0DKkWlWfdlDVtRJpqe3_qWlnFe95cyvUwTOZ5kSbwMkbx-162vqBPlMAWJ02dclYuPr8zI7hG3_CNk4kdU8GNfJEbIqRk0I-9lNvUgxB49ZLq-GAh7iyLa7j7KWL8a5VZT5y4-dchMyyK01jjj3aKNQfEOXJIyCimKCq0PEPTrjwoxvzv64tJMQaA_MFozVkgFpxf6NxVfNFDmRhpNHa2WkpE9t0"/>
<span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-bold">RESOLVED</span>
</div>
</div>
<div className="p-space-md pt-0 flex-1 flex flex-col justify-between">
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Asphalt Trench Resurfaced</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Ward Crew 3 patched a 4-foot deep fissure on Elm & 14th St after resident alert.</p>
</div>
<div className="pt-space-md mt-space-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-1 text-primary-container">
<span className="material-symbols-outlined text-[16px]">thumb_up</span>
<span>Verified by 42 neighbors</span>
</div>
<span>Ward 04 Dispatch</span>
</div>
</div>
</div>

<div className="rounded-2xl bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col">
<div className="p-space-md flex items-center justify-between">
<span className="font-mono-data text-mono-data text-on-surface-variant font-bold">#FMA-8344 • Oakwood Plaza</span>
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-surface-container text-primary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              Resolved in 9 hrs
            </span>
</div>
<div className="grid grid-cols-2 gap-1 px-space-md pb-space-md">
<div className="relative rounded-lg overflow-hidden h-36">
<img className="w-full h-full object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNmN3oFobhkocKfQgORpuEphXS-bfB7RdDxETDT2pDx76Sp4YEftkvLJpyHLcVodcNTEoD8dLY0xobwSQwMDL1e3Cfry7nKVGLweg1l1teCRO6XervaNzYOkEbyAJrEXbA46W0MBJ-QccalAS_UUa3lMJKpwV7OYEZUbm4fcQlfdQirmEAfpMzZ9ZunBap-NglY2UZRdsUrVtK-dZt0bexZlxg6AHqtApDCnriKTdDhmdJLY9xJVw"/>
<span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-on-surface/80 text-surface font-label-sm text-label-sm font-bold">BEFORE</span>
</div>
<div className="relative rounded-lg overflow-hidden h-36">
<img className="w-full h-full object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBI8BnAChHFQJXjHAcidBDTssZG5PweitDtgk_mXAtKO9abJOSb7DkdXlELfGBXzcITTVK7ROVVFghrV7nEvpykJ3MiLXfLtEozT3v220DwNcmcuHtV6AojjRq-AetyskSqLQ8Np357lvUV7UsEqmHj6GkELA-R52B0PTuvkYJIy1xp9L_x_mCPRBot2qPbM13zm_4wp_eX83TpEo-4oORuSRe9w7bwBEdCbWHRu1-unzdlZXIKsjQ"/>
<span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-bold">RESOLVED</span>
</div>
</div>
<div className="p-space-md pt-0 flex-1 flex flex-col justify-between">
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Public Walkway LED Replacement</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">High-efficiency LED fixture fitted along Maple Pedestrian Path, restoring night safety.</p>
</div>
<div className="pt-space-md mt-space-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-1 text-primary-container">
<span className="material-symbols-outlined text-[16px]">thumb_up</span>
<span>Verified by 89 neighbors</span>
</div>
<span>Electrical Div 2</span>
</div>
</div>
</div>

<div className="rounded-2xl bg-surface-container-lowest shadow-sm overflow-hidden flex flex-col">
<div className="p-space-md flex items-center justify-between">
<span className="font-mono-data text-mono-data text-on-surface-variant font-bold">#FMA-8290 • South Riverside</span>
<span className="inline-flex items-center gap-1 px-space-xs py-0.5 rounded-full bg-surface-container text-primary-container font-label-sm text-label-sm font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-primary-container"></span>
              Resolved in 14 hrs
            </span>
</div>
<div className="grid grid-cols-2 gap-1 px-space-md pb-space-md">
<div className="relative rounded-lg overflow-hidden h-36">
<img className="w-full h-full object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUqd_yYfjFaq6pePMDX8-2uCwD7BBPshmRGoh5uciMuAatzs7PhX2UqdUlKwJve9KQAOvxG_7eN2hu088KSUxNB0efHIE6EXGk-7hRflRea2eWBEw77VaWReXEHxBGZYy0aMg4j4IQUG9GhxooMHW8yCpe0SdDqcpJBvnnN-8Nh2pWK3krAJOxTBhxdjdAeW2ah_fBmImZEp62zh0xFX-mB6wAY0xb4wxba8XvVhBsMN-z5Yh21VU"/>
<span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-on-surface/80 text-surface font-label-sm text-label-sm font-bold">BEFORE</span>
</div>
<div className="relative rounded-lg overflow-hidden h-36">
<img className="w-full h-full object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKxPIuvZ99XW_qtQiInPg3DyF6YchmFzM5mmb0nvzz4JaPZOAa57ayKw8UE5o_ICWC9QMrvghCWNGHlaqdYuS-OGVJre8hfG7CEH_n2C-Piu3KZNCS5sFNfauvl2uBGImUYiU8Z8dpLB8x1sRNo0BViBjxCXnuHsNYLHKpu0JziqkuQb3E-0RIfdflyqnh-J2dHLVWY7PifG3N6AKeZepUdAur_qtlGGar2XkLMpYYjWHr68Vgmgk"/>
<span className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded bg-primary-container text-on-primary font-label-sm text-label-sm font-bold">RESOLVED</span>
</div>
</div>
<div className="p-space-md pt-0 flex-1 flex flex-col justify-between">
<div>
<h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Stormwater Catch Basin Cleared</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Sanitation crew cleared hydraulic blockages preventing residential basement seepage.</p>
</div>
<div className="pt-space-md mt-space-sm flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
<div className="flex items-center gap-1 text-primary-container">
<span className="material-symbols-outlined text-[16px]">thumb_up</span>
<span>Verified by 31 neighbors</span>
</div>
<span>Drainage Fleet 01</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-space-xl bg-surface-container-low">
<div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

<div className="lg:col-span-5 space-y-space-md">
<span className="font-label-sm text-label-sm text-primary uppercase font-bold tracking-widest">Public Accountability Ledger</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Community Impact & Civic Open Data</h2>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Every dollar allocated for municipal maintenance is tied to real citizen reports. FixMyArea syncs daily with Open311 standards to maintain complete municipal transparency.
          </p>
<div className="pt-space-xs space-y-space-xs">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container">
<span className="material-symbols-outlined text-[18px]">verified_user</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface font-medium">100% Immutable Public Audit Logs</span>
</div>
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[18px]">sync_alt</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Daily Direct API Sync with City Council Wards</span>
</div>
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-lg bg-surface-container-highest flex items-center justify-center text-tertiary">
<span className="material-symbols-outlined text-[18px]">query_stats</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface font-medium">Open Data CSV & GeoJSON Public Endpoints</span>
</div>
</div>
<div className="pt-space-sm">
<a className="h-10 px-space-md rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md inline-flex items-center gap-2 shadow-sm"  href="#">
<span className="material-symbols-outlined text-[18px] text-primary">analytics</span>
<span>Access Public Data Portal</span>
</a>
</div>
</div>

<div className="lg:col-span-7">
<div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm space-y-space-lg">
<div className="flex items-center justify-between pb-space-sm">
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Q2 Municipal Milestone Progress</h3>
<span className="font-mono-data text-mono-data text-on-surface-variant font-semibold">Fiscal Year 2025</span>
</div>

<div className="space-y-space-xs">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface flex items-center gap-1.5 font-semibold">
<span className="material-symbols-outlined text-[18px] text-primary-container">route</span>
                  Quarterly Road Resurfacing
                </span>
<span className="font-mono-data text-mono-data text-primary-container font-bold">84% (42.1 / 50 km)</span>
</div>
<div className="w-full h-3 rounded-full bg-surface-container overflow-hidden">
<div className="h-full rounded-full bg-primary-container transition-all duration-1000" style={{"width":"84%"}}></div>
</div>
<div className="flex justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Target: 50 Kilometers</span>
<span>Ward 01 - 07 Completed</span>
</div>
</div>

<div className="space-y-space-xs">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface flex items-center gap-1.5 font-semibold">
<span className="material-symbols-outlined text-[18px] text-secondary">lightbulb</span>
                  Streetlamp Smart LED Retrofit
                </span>
<span className="font-mono-data text-mono-data text-secondary font-bold">92% (1,380 / 1,500 units)</span>
</div>
<div className="w-full h-3 rounded-full bg-surface-container overflow-hidden">
<div className="h-full rounded-full bg-secondary transition-all duration-1000" style={{"width":"92%"}}></div>
</div>
<div className="flex justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Target: 1,500 Fixtures</span>
<span>Energy Savings: 41%</span>
</div>
</div>

<div className="space-y-space-xs">
<div className="flex items-center justify-between font-label-md text-label-md">
<span className="text-on-surface flex items-center gap-1.5 font-semibold">
<span className="material-symbols-outlined text-[18px] text-primary">nature_people</span>
                  Urban Canopy & Public Parks Reforestation
                </span>
<span className="font-mono-data text-mono-data text-primary font-bold">76% (760 / 1,000 trees)</span>
</div>
<div className="w-full h-3 rounded-full bg-surface-container overflow-hidden">
<div className="h-full rounded-full bg-primary transition-all duration-1000" style={{"width":"76%"}}></div>
</div>
<div className="flex justify-between text-on-surface-variant font-body-sm text-body-sm">
<span>Target: 1,000 Native Saplings</span>
<span>Park Areas Reclaimed: 14</span>
</div>
</div>

<div className="pt-space-sm p-space-sm rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-start sm:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest text-primary-container flex items-center justify-center font-bold">
<span className="material-symbols-outlined text-[20px]">account_balance</span>
</div>
<div>
<span className="font-label-md text-label-md text-on-surface block font-semibold">Citizen-Audited Ward Budget</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">$4.2M Municipal Maintenance Fund</span>
</div>
</div>
<span className="px-space-xs py-1 rounded bg-surface-container-lowest text-primary-container font-mono-data text-mono-data font-bold">99.1% Compliance</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-space-xl bg-surface-container-lowest relative overflow-hidden">
<div className="max-w-7xl mx-auto px-margin-mobile md:px-margin">
<div className="relative rounded-3xl bg-primary-container p-space-lg md:p-space-xl overflow-hidden shadow-lg text-on-primary">

<div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-on-primary/10 blur-2xl pointer-events-none"></div>
<div className="absolute top-0 right-1/4 w-40 h-40 rounded-full bg-surface-container-highest/10 blur-xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg">
<div className="max-w-2xl space-y-space-xs">
<span className="inline-flex items-center gap-1.5 px-space-xs py-0.5 rounded-full bg-on-primary/20 text-on-primary-container font-label-sm text-label-sm font-semibold uppercase tracking-wider">
<span className="w-2 h-2 rounded-full bg-on-primary-container animate-pulse"></span>
              Join 84,000+ Active Neighbors
            </span>
<h2 className="font-headline-lg text-headline-lg text-on-primary tracking-tight font-bold">
              Notice something broken on your street today?
            </h2>
<p className="font-body-lg text-body-lg text-on-primary/90 max-w-xl leading-relaxed">
              Snap a quick photo, tag the location, and let our verified public dispatch pipeline handle the rest. No phone queues. Zero bureaucratic delays.
            </p>
</div>
<div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm flex-shrink-0 w-full sm:w-auto">
<a className="h-12 px-space-lg rounded-xl bg-surface-container-lowest text-primary font-headline-sm text-headline-sm hover:bg-surface-container-low transition-all shadow-md flex items-center justify-center gap-2"  href="#">
<span className="material-symbols-outlined text-[20px] text-primary">add_a_photo</span>
<span>Submit a Free Civic Report</span>
</a>
</div>
</div>

<div className="relative z-10 mt-space-lg pt-space-md flex flex-wrap items-center gap-space-lg text-on-primary/80 font-label-sm text-label-sm">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">lock</span>
            Encrypted & Anonymous Reporting Available
          </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">notifications_active</span>
            SMS & Email Step-by-Step Status Updates
          </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">public</span>
            Open Source Civic Standards
          </span>
</div>
</div>
</div>
</section>
</div></main><footer className="w-full bg-surface-container-low border-t border-outline-variant/30 mt-auto"><div className="max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-xl"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-lg border-b border-outline-variant/30"><div className="space-y-space-sm"><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-headline-sm text-headline-sm"><span className="material-symbols-outlined text-[20px]">apartment</span></div><span className="font-headline-sm text-headline-sm text-on-surface font-semibold">FixMyArea</span></div><p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Independent civic infrastructure tracking and public transparency network. Connecting local residents with municipal teams for accountable community resolution.</p><div className="pt-space-xs"><span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm"><span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>Civic API Live Status: Operational</span></div></div><div className="space-y-space-sm"><h4 className="font-label-lg text-label-lg text-on-surface font-semibold tracking-wider uppercase">Emergency & Dispatch</h4><div className="space-y-space-xs"><div className="p-space-sm rounded-lg bg-surface-container-lowest border border-outline-variant/40"><div className="font-label-md text-label-md text-error font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">crisis_alert</span> Life-Threatening Urgent</div><p className="font-body-sm text-body-sm text-on-surface mt-0.5 font-mono-data text-mono-data font-bold">Dial 911 (Police / Fire / EMS)</p></div><div className="p-space-sm rounded-lg bg-surface-container-lowest border border-outline-variant/40"><div className="font-label-md text-label-md text-secondary font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">call</span> Municipal Non-Emergency</div><p className="font-body-sm text-body-sm text-on-surface mt-0.5 font-mono-data text-mono-data font-bold">Dial 311 (Ward Central Dispatch)</p></div></div></div><div className="space-y-space-sm"><h4 className="font-label-lg text-label-lg text-on-surface font-semibold tracking-wider uppercase">Civic Platform</h4><ul className="space-y-space-xs font-body-sm text-body-sm"><li className="flex items-center gap-1.5"><a className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"  href="#"><span className="material-symbols-outlined text-[16px]">query_stats</span> Open Data Civic Portal</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Public Audit Log</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Ward Resolution Metrics</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Municipal Integration Pipeline</a></li></ul></div><div className="space-y-space-sm"><h4 className="font-label-lg text-label-lg text-on-surface font-semibold tracking-wider uppercase">Governance & Legal</h4><ul className="space-y-space-xs font-body-sm text-body-sm"><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Privacy Policy</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Terms of Public Service</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Whistleblower Protection & FAQ</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Community Guidelines</a></li></ul></div></div><div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center sm:text-left"><p className="font-body-sm text-body-sm text-on-surface-variant">© 2025 FixMyArea. Public Trust Civic Initiative. All rights reserved.</p><div className="flex items-center gap-space-md font-label-md text-label-md text-on-surface-variant"><a className="hover:text-on-surface transition-colors"  href="#">Privacy</a><span>•</span><a className="hover:text-on-surface transition-colors"  href="#">Terms</a><span>•</span><a className="hover:text-on-surface transition-colors"  href="#">Open Data</a></div></div></div></footer>
    </div>
  );
}
