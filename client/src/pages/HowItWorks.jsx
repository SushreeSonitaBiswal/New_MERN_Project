import React from 'react';

export default function HowItWorks() {
  return (
    <div className="w-full min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.03)]"><div className="h-20 max-w-7xl mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-lg flex-shrink-0"><a className="flex items-center gap-space-sm group focus:outline-none"  href="#"><div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-headline-sm text-headline-sm transition-transform group-hover:scale-105"><span className="material-symbols-outlined text-[24px]">apartment</span></div><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-tight group-hover:text-primary transition-colors">FixMyArea</span><span className="font-label-sm text-label-sm text-on-surface-variant font-medium hidden sm:block">Better Neighborhoods Start With You</span></div></a><nav className="hidden xl:flex items-center gap-space-lg ml-space-sm" ><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-sm"  href="#">Home</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-sm"  href="#">Explore Complaints</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-sm"  href="#">How It Works</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-sm"  href="#">Civic Impact</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-sm"  href="#">FAQs</a></nav></div><div className="flex items-center gap-space-sm lg:gap-space-md"><div className="relative hidden md:block w-48 lg:w-60"><div className="absolute inset-y-0 left-0 pl-space-sm flex items-center pointer-events-none text-on-surface-variant"><span className="material-symbols-outlined text-[18px]">search</span></div><input className="w-full h-10 pl-9 pr-space-sm rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Search complaints..." type="text"/></div><div className="hidden lg:flex items-center gap-1 text-on-surface-variant hover:text-on-surface cursor-pointer px-space-xs py-space-xs rounded-lg hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-[18px]">language</span><span className="font-label-md text-label-md">EN</span><span className="material-symbols-outlined text-[16px]">expand_more</span></div><a className="h-10 px-space-md inline-flex items-center justify-center rounded-lg border border-outline-variant/60 bg-surface-container-lowest font-label-lg text-label-lg text-on-surface hover:bg-surface-container-high transition-colors focus:outline-none"  href="#">Log In</a><a className="h-10 px-space-md inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:opacity-95 transition-all focus:outline-none"  href="#"><span className="material-symbols-outlined text-[18px]">add_circle</span><span>Report an Issue</span></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full pt-20 flex-1 bg-background"><div className="flex flex-col w-full">

<div className="relative w-full overflow-hidden">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[72rem] h-[28rem] bg-gradient-to-b from-secondary-fixed/25 via-primary-fixed-dim/15 to-transparent rounded-full blur-3xl pointer-events-none"></div>

<section className="relative max-w-7xl mx-auto px-margin-mobile md:px-margin pt-space-xl pb-space-xl md:pt-24 md:pb-20">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-space-md">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-on-surface shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-mono-data text-mono-data text-on-surface-variant font-medium tracking-tight">Open311 Pipeline Certified • Protocol v4.2.0 Active</span>
</div>

<h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-on-surface tracking-tight leading-tight">
          How FixMyArea Enforces Civic Accountability
        </h1>

<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          From your smartphone photo to municipal crew dispatch and tamper-evident repair sign-off, see how our 4-step lifecycle ensures no neighborhood issue is overlooked.
        </p>

<div className="flex flex-wrap items-center justify-center gap-space-sm pt-space-sm">
<a className="h-11 px-space-lg inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all"  href="#">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings":"'FILL' 1"}}>add_location_alt</span>
<span>Report an Issue Now</span>
</a>
<a className="h-11 px-space-lg inline-flex items-center justify-center gap-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-container-low transition-all"  href="#">
<span className="material-symbols-outlined text-[20px]">manage_search</span>
<span>Explore Public Complaints</span>
</a>
</div>

<div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-space-lg text-left">
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
<div className="font-mono-data text-mono-data text-on-surface-variant">Avg Ward Triage</div>
<div className="font-headline-md text-headline-md text-primary mt-1 font-semibold">14.2 min</div>
<div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[14px] text-primary">speed</span> Sub-hour SLA trigger
            </div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
<div className="font-mono-data text-mono-data text-on-surface-variant">Duplicate Suppression</div>
<div className="font-headline-md text-headline-md text-on-surface mt-1 font-semibold">99.4%</div>
<div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[14px] text-primary">hub</span> Spatial geoclustering
            </div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
<div className="font-mono-data text-mono-data text-on-surface-variant">Audit Proof Rate</div>
<div className="font-headline-md text-headline-md text-on-surface mt-1 font-semibold">100%</div>
<div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[14px] text-primary">verified</span> SHA-256 EXIF hash
            </div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm">
<div className="font-mono-data text-mono-data text-on-surface-variant">Citizen Satisfaction</div>
<div className="font-headline-md text-headline-md text-primary mt-1 font-semibold">4.82 / 5</div>
<div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1 mt-0.5">
<span className="material-symbols-outlined text-[14px] text-primary">star</span> Post-repair sign-offs
            </div>
</div>
</div>
</div>
</section>
</div>

<section className="max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-xl w-full">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-xl">
<div>
<div className="font-mono-data text-mono-data text-primary uppercase font-bold tracking-wider">End-to-End Civic Architecture</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">The 4-Step Lifecycle of a Verified Hazard</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
        Every incident traverses a tamper-evident state machine engineered to eradicate bureaucratic limbo and guarantee field transparency.
      </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg relative">

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between relative group hover:shadow-lg transition-all">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="px-3 py-1 rounded-full bg-surface-container-high text-primary font-mono-data text-mono-data font-bold">
              STEP 01
            </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Intake &amp; Geospatial Lock
            </span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Snap, Geotag &amp; Submit</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Automated EXIF validation extracts sensor timestamp and orientation. GPS geofencing locks the exact municipal ward boundary under 50m, dynamically merging identical submissions into community cluster threads while preserving user privacy through zero-knowledge reporting.
            </p>
</div>

<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<div className="p-space-sm rounded-lg bg-surface-container-low">
<div className="flex items-center gap-1.5 text-primary font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">satellite_alt</span>
<span>&lt;50m Accuracy</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Dual-band GNSS cross-reference rejects spoofed coordinates instantly.</p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low">
<div className="flex items-center gap-1.5 text-primary font-label-md text-label-md">
<span className="material-symbols-outlined text-[18px]">security</span>
<span>Privacy Shield</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Facial auto-blurring and anonymized citizen pseudonym keys.</p>
</div>
</div>
</div>

<div className="mt-space-lg rounded-lg overflow-hidden bg-surface-container relative">
<img className="w-full h-48 object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_7ER8ElixEwIlcBc_lcMbr5DNVGnUZuKt2mFbN2oF3Z1D6MU3QHy4NVKP2FiHNY1-q4aUfN9Ev5zwG5PjN5qh9dQzul869pCU7wiUVcv_xD0mu7jMe7ROFmot_c-CQ8aytEuasvAs0xmLUH8cgy_dg3ir0gZ7vsFGIv-Z68nBgznlaA-hV6bSvN1q9V3KnTq-YR7yMXuvwqGNhsvk6qBGkB8rHPSFkjkk8fU809waT0gGBZC-G4E"/>
<div className="absolute bottom-2 left-2 right-2 p-2 rounded-lg bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span className="font-mono-data text-mono-data text-on-surface font-medium truncate">EXIF: 40.7128° N, 74.0060° W • 10:14:02 UTC</span>
</div>
<span className="font-label-sm text-label-sm text-primary uppercase font-bold">Validated</span>
</div>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between relative group hover:shadow-lg transition-all">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="px-3 py-1 rounded-full bg-surface-container-high text-primary font-mono-data text-mono-data font-bold">
              STEP 02
            </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> SLA Timer Active
            </span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Automated Municipal Triage &amp; SLA Dispatch</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              AI computer vision categorizes asphalt depth, exposed conduit hazard, or flooding volume within seconds. Work orders automatically route to on-duty ward fleets via Open311 with an immutable countdown SLA clock visible on public dashboards.
            </p>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Live Municipal Work-Order Routing</span>
<span className="font-mono-data text-mono-data text-primary font-bold">Ward 04 Dispatch Fleet</span>
</div>

<div className="w-full bg-surface-container-highest rounded-full h-2 overflow-hidden">
<div className="bg-primary h-2 rounded-full w-3/4"></div>
</div>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>Classifier: Severe Road Void</span>
<span>Binding Clock: 17h 42m remaining</span>
</div>
</div>
</div>

<div className="mt-space-lg p-space-md rounded-lg bg-surface-container-low flex flex-col justify-center">
<div className="flex items-center justify-between mb-2">
<span className="font-label-md text-label-md text-on-surface font-semibold">Ward Dispatch Queue Response</span>
<span className="font-mono-data text-mono-data text-primary">SLA Compliance: 98.2%</span>
</div>
<svg className="w-full h-28 text-primary" fill="none" stroke="currentColor" viewbox="0 0 500 100">
<path d="M0,80 Q70,75 140,40 T280,30 T420,15 L500,10" fill="none" strokeLinecap="round" strokeWidth="3"></path>
<path d="M0,80 Q70,75 140,40 T280,30 T420,15 L500,10 L500,100 L0,100 Z" fill="currentColor" fill-opacity="0.08"></path>
<circle className="fill-surface-container-lowest stroke-primary" cx="140" cy="40" r="4" strokeWidth="2"></circle>
<circle className="fill-surface-container-lowest stroke-primary" cx="280" cy="30" r="4" strokeWidth="2"></circle>
<circle className="fill-surface-container-lowest stroke-primary" cx="420" cy="15" r="4" strokeWidth="2"></circle>
</svg>
<div className="flex justify-between text-on-surface-variant font-mono-data text-[10px] mt-1 pt-1">
<span>Intake (0m)</span>
<span>AI Classify (1.5m)</span>
<span>Crew Paged (6m)</span>
<span>Truck En Route (14m)</span>
</div>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between relative group hover:shadow-lg transition-all">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="px-3 py-1 rounded-full bg-surface-container-high text-primary font-mono-data text-mono-data font-bold">
              STEP 03
            </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed-variant font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Field Work Validated
            </span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Verified Field Repair &amp; Evidence Capture</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Certified municipal engineers and utility contractors log GPS-stamped before-and-after proof. Material batch numbers, square footage restored, and thermal compaction tests are sealed cryptographically to block premature contractor billing.
            </p>
</div>
<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<div className="p-space-sm rounded-lg bg-surface-container-low">
<div className="font-mono-data text-mono-data font-bold text-on-surface">Batch Sign-Off</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Asphalt Type-C Hot Mix • 420kg logged</p>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low">
<div className="font-mono-data text-mono-data font-bold text-on-surface">Crew Badge ID</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Ward Public Works Unit #842-Alpha</p>
</div>
</div>
</div>

<div className="mt-space-lg grid grid-cols-2 gap-2">
<div className="relative rounded-lg overflow-hidden h-44 bg-surface-container">
<img className="w-full h-full object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjH-vzO9of90hilS1u4JVUmFP5dyG1WXmX093lu_FC0FNiZ1I_WLcJwZNQ9fqTsDziFS1NXuV5pUKR9_vwVI_MytY_TXd2nc20xV4MuMClrycVpvzxViHsxIrsbabfWyUIJ4hmnIfiZ7EXD0c7N6uQVZr8zZOGXfA6P1qQVxPDBOgJd0YvtLCj__FbWguJ2hUA_Vp-0nzdTQrksJiptPc_0Z40IAAsD4x__5H-ivBg48iQlcekQiw"/>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-error text-on-error font-mono-data text-[11px] font-bold">BEFORE</span>
</div>
<div className="relative rounded-lg overflow-hidden h-44 bg-surface-container">
<img className="w-full h-full object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVqb4Qc69TXi-hA1efcRoLu9Zce4XbR4I9YAOOSpdHBxqBi-1aflYiAT-QTdA7ZPFeKWu2G_-IH73DEPY7Ds37v2g4DQAISoRQIzgXCgV5reuY-dGbsXpZr9weXrnD7KqBhSAdSthvGuyheOnKrfG0KJLk-pSOc6eWP60Ht4U4yyJ5FhsCk_556p8jNG41a-3tNo5Hq8m9OnsDQCGGlt51XtTCtXyLqK-ZT90eNUrUCGz21-oBWbo"/>
<span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-primary text-on-primary font-mono-data text-[11px] font-bold">AFTER REPAIR</span>
</div>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between relative group hover:shadow-lg transition-all">
<div className="space-y-space-md">
<div className="flex items-center justify-between">
<span className="px-3 py-1 rounded-full bg-surface-container-high text-primary font-mono-data text-mono-data font-bold">
              STEP 04
            </span>
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Public Ledger Seal
            </span>
</div>
<div>
<h3 className="font-headline-md text-headline-md text-on-surface font-semibold">Citizen Sign-off &amp; Public Ledger Audit</h3>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
              Accountability doesn't end when the truck leaves. The citizen who originated the report receives an automated inspection prompt to rate quality (1–5 stars). Rejections automatically reset SLA escalations to ward supervisors.
            </p>
</div>

<div className="p-space-md rounded-lg bg-surface-container-low space-y-space-xs">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface font-semibold">Resident Inspection Protocol</span>
<span className="font-mono-data text-mono-data text-primary font-bold">Verified Sign-off #CR-9482</span>
</div>
<div className="flex items-center gap-1 text-primary pt-1">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings":"'FILL' 1"}}>star</span>
<span className="font-mono-data text-mono-data text-on-surface font-bold ml-2">5.0 Confirmed</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant italic">"Curb was fully restored, water drains properly without pooling. Quickest turnaround this year."</p>
</div>
</div>

<div className="mt-space-lg p-space-md rounded-lg bg-surface-container flex items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm min-w-0">
<div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[22px]">policy</span>
</div>
<div className="min-w-0">
<div className="font-mono-data text-mono-data font-bold text-on-surface truncate">Ledger Block #8,491,204</div>
<div className="font-mono-data text-[11px] text-on-surface-variant truncate">SHA-256: 7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1f...</div>
</div>
</div>
<a className="px-space-sm py-1.5 rounded-lg bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-sm hover:bg-surface-bright flex-shrink-0" href="#">
            Verify Hash
          </a>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-7xl mx-auto px-margin-mobile md:px-margin space-y-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
<div>
<div className="font-mono-data text-mono-data text-primary uppercase font-bold tracking-wider">MUNICIPAL PERFORMANCE STANDARD</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">Real-Time SLA Benchmarks &amp; Commitments</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Binding Service Level Agreements ratified by City Council. Crews failing resolution windows trigger automatic ward audit flags.
        </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-space-md hover:shadow-md transition-shadow">
<div>
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-lg bg-secondary-fixed text-on-secondary-fixed-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">minor_crash</span>
</div>
<span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-mono-data text-mono-data font-bold">
                24h Target
              </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-space-md">Potholes &amp; Asphalt</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Carriageway pits, loose aggregate, surface trenching, and shoulder depressions.</p>
</div>
<div className="pt-space-sm space-y-2">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Live Compliance</span>
<span className="font-mono-data text-mono-data font-bold text-primary">97.8%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full w-[97.8%]"></div>
</div>
<div className="font-mono-data text-[11px] text-on-surface-variant">Avg Recorded: 14.2 Hours</div>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-space-md hover:shadow-md transition-shadow">
<div>
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-lg bg-secondary-fixed text-on-secondary-fixed-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">light</span>
</div>
<span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-mono-data text-mono-data font-bold">
                18h Target
              </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-space-md">Streetlight &amp; Electrical</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Dark arterial spans, flashing LED luminaires, exposed ground wire junctions.</p>
</div>
<div className="pt-space-sm space-y-2">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Live Compliance</span>
<span className="font-mono-data text-mono-data font-bold text-primary">99.1%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full w-[99.1%]"></div>
</div>
<div className="font-mono-data text-[11px] text-on-surface-variant">Avg Recorded: 11.4 Hours</div>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-space-md hover:shadow-md transition-shadow">
<div>
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-lg bg-error-container text-on-error-container flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">water_damage</span>
</div>
<span className="px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-mono-data text-mono-data font-bold">
                6h Emergency
              </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-space-md">Water Mains &amp; Drainage</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Pressure ruptures, stormwater sewer backups, manhole overflows, contamination.</p>
</div>
<div className="pt-space-sm space-y-2">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Live Compliance</span>
<span className="font-mono-data text-mono-data font-bold text-primary">96.4%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full w-[96.4%]"></div>
</div>
<div className="font-mono-data text-[11px] text-on-surface-variant">Avg Recorded: 3.1 Hours</div>
</div>
</div>

<div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-space-md hover:shadow-md transition-shadow">
<div>
<div className="flex items-center justify-between">
<div className="w-10 h-10 rounded-lg bg-secondary-fixed text-on-secondary-fixed-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[22px]">delete_sweep</span>
</div>
<span className="px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-mono-data text-mono-data font-bold">
                12h Target
              </span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mt-space-md">Sanitation &amp; Garbage</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Illegal fly-tipping, uncollected green waste, hazardous commercial spillage.</p>
</div>
<div className="pt-space-sm space-y-2">
<div className="flex justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant">Live Compliance</span>
<span className="font-mono-data text-mono-data font-bold text-primary">98.6%</span>
</div>
<div className="w-full bg-surface-container rounded-full h-1.5 overflow-hidden">
<div className="bg-primary h-1.5 rounded-full w-[98.6%]"></div>
</div>
<div className="font-mono-data text-[11px] text-on-surface-variant">Avg Recorded: 7.9 Hours</div>
</div>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[28px]">query_stats</span>
<div>
<div className="font-headline-sm text-headline-sm text-on-surface font-semibold">Want to export Raw Municipal Response Logs?</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">City SLA metrics are synced publicly every 5 minutes under the Open Data Civic Charter.</div>
</div>
</div>
<a className="h-10 px-space-md rounded-lg bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 hover:bg-surface-container transition-colors whitespace-nowrap"  href="#">
<span className="material-symbols-outlined text-[18px]">download</span>
<span>Download GeoJSON &amp; CSV</span>
</a>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto px-margin-mobile md:px-margin py-space-xl w-full">
<div className="text-center space-y-space-xs mb-space-lg">
<div className="font-mono-data text-mono-data text-primary uppercase font-bold tracking-wider">FREQUENTLY ASKED QUESTIONS</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Reporting, Tracking &amp; Escalation Protocols</h2>
<p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
        Everything you need to know about civic tracking, contractor accountability, and whistleblower security.
      </p>
</div>

<div className="space-y-space-sm" id="faq-accordion">

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm cursor-pointer transition-all faq-card" onclick="toggleFaq(this)">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">help_outline</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-medium">How do you stop false, duplicate, or prank reports?</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-[22px] transition-transform faq-icon">expand_more</span>
</div>
<div className="faq-content hidden pt-space-sm mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
          FixMyArea runs a multi-stage validation check: GPS sensor authenticity verification, image perceptual hashing to match nearby cluster submissions within 50 meters, and automated duplicate grouping. If someone else already flagged the same pothole, your submission instantly upvotes that active ticket rather than creating redundant dispatch requests.
        </div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm cursor-pointer transition-all faq-card" onclick="toggleFaq(this)">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">lock_person</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-medium">Is my identity visible to city contractors or ward managers?</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-[22px] transition-transform faq-icon">expand_more</span>
</div>
<div className="faq-content hidden pt-space-sm mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
          No. You have the option to submit with complete pseudonymity. While our system validates that the report is submitted by an authentic resident using zero-knowledge device proofs, personal phone numbers, names, and home addresses are never exposed to contractors or visible on the public audit logs.
        </div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm cursor-pointer transition-all faq-card" onclick="toggleFaq(this)">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">timer_off</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-medium">What happens when a municipal agency misses its SLA deadline?</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-[22px] transition-transform faq-icon">expand_more</span>
</div>
<div className="faq-content hidden pt-space-sm mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
          If a work order exceeds its binding time limit (e.g. 24 hours for asphalt, 6 hours for emergency water breaches), the ticket status automatically turns red and is elevated to the Ward Superintendent, District Council Office, and the publicly accessible Municipal Audit Dashboard. Local media and community councils receive real-time RSS SLA breach digests.
        </div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm cursor-pointer transition-all faq-card" onclick="toggleFaq(this)">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-[20px]">rate_review</span>
<span className="font-headline-sm text-headline-sm text-on-surface font-medium">What happens if a contractor uploads a fake or poor-quality repair?</span>
</div>
<span className="material-symbols-outlined text-on-surface-variant text-[22px] transition-transform faq-icon">expand_more</span>
</div>
<div className="faq-content hidden pt-space-sm mt-space-sm font-body-md text-body-md text-on-surface-variant leading-relaxed">
          City crews cannot mark an issue "Resolved" without submitting cryptographic GPS-stamped photo evidence matching the original angle. Furthermore, the reporting citizen and nearby neighbors are prompted for a 1–5 star sign-off. If a repair receives less than 3 stars, payment sign-off is held in municipal escrow and an independent supervisor inspection is automatically scheduled.
        </div>
</div>
</div>

<div className="mt-space-xl p-space-xl rounded-xl bg-primary text-on-primary shadow-xl relative overflow-hidden">

<div className="absolute -right-12 -bottom-12 w-64 h-64 rounded-full bg-primary-container/40 blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-space-lg text-center md:text-left">
<div className="space-y-space-xs max-w-xl">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-on-primary/10 text-on-primary font-mono-data text-mono-data">
<span className="material-symbols-outlined text-[16px]">groups</span>
<span>Neighborhood Collective Action</span>
</div>
<h3 className="font-headline-lg text-headline-lg text-on-primary font-semibold">Join 84,000+ Active Residents Keeping Our Wards Accountable</h3>
<p className="font-body-md text-body-md text-on-primary/80">
            FixMyArea is free, open source, and legally recognized by municipal public works authorities across 14 council regions.
          </p>
</div>
<div className="flex flex-col sm:flex-row items-center gap-space-sm flex-shrink-0">
<a className="h-11 px-space-lg rounded-lg bg-surface-container-lowest text-primary font-label-lg text-label-lg shadow-md hover:bg-surface-bright flex items-center justify-center gap-2 transition-all"  href="#">
<span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings":"'FILL' 1"}}>add_circle</span>
<span>Report an Issue</span>
</a>
<a className="h-11 px-space-md rounded-lg bg-on-primary/15 text-on-primary font-label-lg text-label-lg hover:bg-on-primary/25 flex items-center justify-center transition-all"  href="#">
<span>Browse Active Wards</span>
</a>
</div>
</div>
</div>
</section>


</div></main><footer className="w-full bg-surface-container-low border-t border-outline-variant/30 mt-auto"><div className="max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-xl"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-lg border-b border-outline-variant/30"><div className="space-y-space-sm"><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-headline-sm text-headline-sm"><span className="material-symbols-outlined text-[20px]">apartment</span></div><span className="font-headline-sm text-headline-sm text-on-surface font-semibold">FixMyArea</span></div><p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Independent civic infrastructure tracking and public transparency network. Connecting local residents with municipal teams for accountable community resolution.</p><div className="pt-space-xs"><span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm"><span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>Civic API Live Status: Operational</span></div></div><div className="space-y-space-sm"><h4 className="font-label-lg text-label-lg text-on-surface font-semibold tracking-wider uppercase">Emergency &amp; Dispatch</h4><div className="space-y-space-xs"><div className="p-space-sm rounded-lg bg-surface-container-lowest border border-outline-variant/40"><div className="font-label-md text-label-md text-error font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">crisis_alert</span> Life-Threatening Urgent</div><p className="font-body-sm text-body-sm text-on-surface mt-0.5 font-mono-data text-mono-data font-bold">Dial 911 (Police / Fire / EMS)</p></div><div className="p-space-sm rounded-lg bg-surface-container-lowest border border-outline-variant/40"><div className="font-label-md text-label-md text-secondary font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">call</span> Municipal Non-Emergency</div><p className="font-body-sm text-body-sm text-on-surface mt-0.5 font-mono-data text-mono-data font-bold">Dial 311 (Ward Central Dispatch)</p></div></div></div><div className="space-y-space-sm"><h4 className="font-label-lg text-label-lg text-on-surface font-semibold tracking-wider uppercase">Civic Platform</h4><ul className="space-y-space-xs font-body-sm text-body-sm"><li className="flex items-center gap-1.5"><a className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"  href="#"><span className="material-symbols-outlined text-[16px]">query_stats</span> Open Data Civic Portal</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Public Audit Log</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Ward Resolution Metrics</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Municipal Integration Pipeline</a></li></ul></div><div className="space-y-space-sm"><h4 className="font-label-lg text-label-lg text-on-surface font-semibold tracking-wider uppercase">Governance &amp; Legal</h4><ul className="space-y-space-xs font-body-sm text-body-sm"><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Privacy Policy</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Terms of Public Service</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Whistleblower Protection &amp; FAQ</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Community Guidelines</a></li></ul></div></div><div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center sm:text-left"><p className="font-body-sm text-body-sm text-on-surface-variant">© 2025 FixMyArea. Public Trust Civic Initiative. All rights reserved.</p><div className="flex items-center gap-space-md font-label-md text-label-md text-on-surface-variant"><a className="hover:text-on-surface transition-colors"  href="#">Privacy</a><span>•</span><a className="hover:text-on-surface transition-colors"  href="#">Terms</a><span>•</span><a className="hover:text-on-surface transition-colors"  href="#">Open Data</a></div></div></div></footer>
    </div>
  );
}
