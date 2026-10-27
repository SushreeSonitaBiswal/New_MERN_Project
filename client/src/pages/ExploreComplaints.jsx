import React from 'react';

export default function ExploreComplaints() {
  return (
    <div className="w-full min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_8px_rgba(0,0,0,0.03)]"><div className="h-20 max-w-7xl mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-space-md"><div className="flex items-center gap-space-lg flex-shrink-0"><a className="flex items-center gap-space-sm group focus:outline-none"  href="#"><div className="w-10 h-10 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-headline-sm text-headline-sm transition-transform group-hover:scale-105"><span className="material-symbols-outlined text-[24px]">apartment</span></div><div className="flex flex-col"><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight leading-tight group-hover:text-primary transition-colors">FixMyArea</span><span className="font-label-sm text-label-sm text-on-surface-variant font-medium hidden sm:block">Better Neighborhoods Start With You</span></div></a><nav className="hidden xl:flex items-center gap-space-lg ml-space-sm" ><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-sm"  href="#">Home</a><a aria-current="page" className="transition-colors text-primary font-semibold border-b-2 border-primary py-space-sm"  href="#">Explore Complaints</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-sm"  href="#">How It Works</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-sm"  href="#">Civic Impact</a><a className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors py-space-sm"  href="#">FAQs</a></nav></div><div className="flex items-center gap-space-sm lg:gap-space-md"><div className="relative hidden md:block w-48 lg:w-60"><div className="absolute inset-y-0 left-0 pl-space-sm flex items-center pointer-events-none text-on-surface-variant"><span className="material-symbols-outlined text-[18px]">search</span></div><input className="w-full h-10 pl-9 pr-space-sm rounded-lg bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-outline font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Search complaints..." type="text"/></div><div className="hidden lg:flex items-center gap-1 text-on-surface-variant hover:text-on-surface cursor-pointer px-space-xs py-space-xs rounded-lg hover:bg-surface-container transition-colors"><span className="material-symbols-outlined text-[18px]">language</span><span className="font-label-md text-label-md">EN</span><span className="material-symbols-outlined text-[16px]">expand_more</span></div><a className="h-10 px-space-md inline-flex items-center justify-center rounded-lg border border-outline-variant/60 bg-surface-container-lowest font-label-lg text-label-lg text-on-surface hover:bg-surface-container-high transition-colors focus:outline-none"  href="#">Log In</a><a className="h-10 px-space-md inline-flex items-center justify-center gap-1.5 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:opacity-95 transition-all focus:outline-none"  href="#"><span className="material-symbols-outlined text-[18px]">add_circle</span><span>Report an Issue</span></a><div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"><span className="material-symbols-outlined text-on-primary text-[18px]">person</span></div></div></div></header><main className="w-full pt-20 flex-1 bg-background"><div className="flex flex-col w-full">
<div className="w-full max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-lg space-y-space-lg">

<div className="flex flex-col gap-space-md">

<nav aria-label="Breadcrumb" className="flex items-center gap-2">
<a className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"  href="#">
<span className="material-symbols-outlined text-[15px]">home</span>
<span>Home</span>
</a>
<span className="text-outline-variant font-label-md text-label-md">/</span>
<span className="font-label-md text-label-md text-primary font-semibold">Explore Public Complaints</span>
<span className="text-outline-variant font-label-md text-label-md">/</span>
<span className="font-mono-data text-mono-data text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded-full">Ward 1 - 8 Live Stream</span>
</nav>

<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md">
<div className="max-w-2xl space-y-1">
<div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed-variant font-label-sm text-label-sm uppercase tracking-wider font-semibold">
<span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
            Public Audit & Dispatch Stream
          </div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Public Complaints & Resolution Explorer</h1>
<p className="font-body-md text-body-md text-on-surface-variant">Search, inspect, and verify real-time civic repair tickets across all municipal wards with cryptographic audit trails.</p>
</div>
<div className="flex items-center gap-2 self-start lg:self-auto flex-wrap">
<a className="h-9 px-3 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md inline-flex items-center gap-1.5 transition-colors shadow-sm"  href="#">
<span className="material-symbols-outlined text-[17px] text-primary">analytics</span>
<span>Ward Analytics</span>
</a>
<button className="h-9 px-3 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md inline-flex items-center gap-1.5 transition-colors shadow-sm" id="exportTopBtn">
<span className="material-symbols-outlined text-[17px] text-secondary">file_download</span>
<span>Export CSV</span>
</button>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="space-y-0.5">
<div className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium">Active In-Field</div>
<div className="font-headline-md text-headline-md text-on-surface font-bold">1,420</div>
<div className="font-mono-data text-mono-data text-secondary flex items-center gap-1 text-[11px]">
<span className="material-symbols-outlined text-[13px]">engineering</span> 42 Crews Dispatched
            </div>
</div>
<div className="w-10 h-10 rounded-lg bg-secondary-fixed/40 text-on-secondary-fixed-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">pending_actions</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="space-y-0.5">
<div className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium">Resolved (YTD)</div>
<div className="font-headline-md text-headline-md text-on-surface font-bold">12,890</div>
<div className="font-mono-data text-mono-data text-primary flex items-center gap-1 text-[11px]">
<span className="material-symbols-outlined text-[13px]">trending_up</span> +8.4% vs Last Year
            </div>
</div>
<div className="w-10 h-10 rounded-lg bg-primary-fixed/40 text-on-primary-fixed-variant flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">task_alt</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="space-y-0.5">
<div className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium">On-Time SLA</div>
<div className="font-headline-md text-headline-md text-on-surface font-bold">94.2%</div>
<div className="font-mono-data text-mono-data text-primary flex items-center gap-1 text-[11px]">
<span className="material-symbols-outlined text-[13px]">timer</span> Avg 26.4 hrs turnaround
            </div>
</div>
<div className="w-10 h-10 rounded-lg bg-surface-container-high text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">speed</span>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
<div className="space-y-0.5">
<div className="font-label-sm text-label-sm uppercase text-on-surface-variant font-medium">Highest Density</div>
<div className="font-headline-md text-headline-md text-on-surface font-bold">Ward 4</div>
<div className="font-mono-data text-mono-data text-on-surface-variant flex items-center gap-1 text-[11px]">
<span className="material-symbols-outlined text-[13px]">location_on</span> Oakwood North (318 Open)
            </div>
</div>
<div className="w-10 h-10 rounded-lg bg-error-container/60 text-error flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">hub</span>
</div>
</div>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">

<div className="grid grid-cols-1 md:grid-cols-12 gap-space-sm items-center">

<div className="md:col-span-5 relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px] pointer-events-none">search</span>
<input className="w-full h-10 pl-10 pr-9 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest transition-all" id="searchInput" placeholder="Search by keyword, street name, complaint ID (#FMA)..." type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant hover:text-on-surface hidden" id="clearSearch">
<span className="material-symbols-outlined text-[16px]">cancel</span>
</button>
</div>

<div className="md:col-span-3 relative">
<div className="relative">
<select className="w-full h-10 pl-3 pr-8 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm appearance-none focus:outline-none focus:bg-surface-container-lowest cursor-pointer" id="wardFilter">
<option value="all">All Wards (Municipal Wards 1-8)</option>
<option value="ward1">Ward 1 — Northside & Civic Center</option>
<option value="ward2">Ward 2 — River Valley & Docks</option>
<option value="ward3">Ward 3 — Maple Heights</option>
<option selected="" value="ward4">Ward 4 — Oakwood (High Volume)</option>
<option value="ward5">Ward 5 — Westgate Industrial</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">unfold_more</span>
</div>
</div>

<div className="md:col-span-2 relative">
<div className="relative">
<select className="w-full h-10 pl-3 pr-8 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm appearance-none focus:outline-none focus:bg-surface-container-lowest cursor-pointer" id="categoryFilter">
<option value="all">All Categories</option>
<option value="roads">Roads & Surface</option>
<option value="waste">Sanitation & Waste</option>
<option value="water">Water & Stormwater</option>
<option value="electrical">Lighting & Power</option>
<option value="parks">Parks & Forestry</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">tune</span>
</div>
</div>

<div className="md:col-span-2 relative">
<div className="relative">
<select className="w-full h-10 pl-3 pr-8 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm appearance-none focus:outline-none focus:bg-surface-container-lowest cursor-pointer" id="urgencyFilter">
<option value="all">All Urgency</option>
<option value="critical">Critical Hazard</option>
<option value="high">High Priority</option>
<option value="standard">Standard Priority</option>
</select>
<span className="material-symbols-outlined absolute right-2.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[18px]">emergency</span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pt-2 bg-surface-container-lowest">

<div className="flex items-center gap-1.5 flex-wrap" id="statusFilterPills">
<button className="status-pill active-pill h-8 px-3 rounded-full font-label-sm text-label-sm font-semibold transition-all bg-primary-container text-on-primary" >
            All Statuses (348)
          </button>
<button className="status-pill h-8 px-3 rounded-full font-label-sm text-label-sm font-medium transition-all bg-surface-container text-on-surface hover:bg-surface-container-high flex items-center gap-1.5" >
<span className="w-2 h-2 rounded-full bg-outline"></span>
            Reported (48)
          </button>
<button className="status-pill h-8 px-3 rounded-full font-label-sm text-label-sm font-medium transition-all bg-surface-container text-on-surface hover:bg-surface-container-high flex items-center gap-1.5" >
<span className="w-2 h-2 rounded-full bg-secondary"></span>
            In Progress (112)
          </button>
<button className="status-pill h-8 px-3 rounded-full font-label-sm text-label-sm font-medium transition-all bg-surface-container text-on-surface hover:bg-surface-container-high flex items-center gap-1.5" >
<span className="w-2 h-2 rounded-full bg-primary"></span>
            Resolved (188)
          </button>
</div>

<div className="flex items-center gap-2 self-end sm:self-auto">
<div className="flex items-center gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant hidden md:inline">Sort:</span>
<div className="relative">
<select className="h-8 pl-2 pr-7 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm appearance-none focus:outline-none cursor-pointer" id="sortBy">
<option value="recent">Most Recent First</option>
<option value="urgency">Highest Urgency</option>
<option value="resolution">Quickest Resolution</option>
<option value="upvotes">Most Citizen Confirmations</option>
</select>
<span className="material-symbols-outlined absolute right-1.5 top-1/2 -translate-y-1/2 text-outline pointer-events-none text-[15px]">expand_more</span>
</div>
</div>
<div className="flex items-center rounded-lg bg-surface-container-low p-0.5">
<button aria-label="Card View" className="w-7 h-7 rounded-md bg-surface-container-lowest text-primary flex items-center justify-center shadow-xs" id="viewGridBtn">
<span className="material-symbols-outlined text-[17px]">grid_view</span>
</button>
<button aria-label="Table View" className="w-7 h-7 rounded-md text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-colors" id="viewTableBtn">
<span className="material-symbols-outlined text-[17px]">table_rows</span>
</button>
</div>
</div>
</div>
</div>

<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm px-1">
<div className="flex items-center gap-2 flex-wrap">
<span className="font-mono-data text-mono-data font-semibold text-on-surface">Showing 6</span>
<span>of 348 verified neighborhood reports</span>
<span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
<span className="inline-flex items-center gap-1 text-[11px] font-mono-data bg-surface-container-high px-2 py-0.5 rounded">
<span className="material-symbols-outlined text-[12px] text-primary">verified_user</span> Public Ledger Synced 2m ago
        </span>
</div>
<button className="text-primary hover:underline font-label-sm text-label-sm flex items-center gap-1 cursor-pointer" id="resetFilters">
<span className="material-symbols-outlined text-[15px]">refresh</span> Reset Filters
      </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="complaintsGrid">

<article className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group" >

<div className="relative h-48 w-full overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGnuHshx3W8GMhQYHkijW2IvfQ0dUrytcJtEvyBSRT1Fm3GHG4rkWauKt7K2kY6fWSjg41dxbop2xIY4PZ-rVwN4TRRetjTca6lBO_36q7OgeMz2Hl0mi07nCn__G95bXQUk3GRlaz4wVsu7H4k2D3yKqOPMUXs38DDwKZG0VecAdKmTlKeBnAgoPCFS_Y5cucTaS_IoOeWjU3cQlokkkgg5k109V-53kW36CRHPQdiqCNFpct6Us"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent"></div>

<div className="absolute top-3 left-3 flex items-center gap-1.5">
<span className="font-mono-data text-mono-data font-bold text-on-primary bg-inverse-surface/80 backdrop-blur-md px-2 py-0.5 rounded text-[11px]">#FMA-9102</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-error text-on-error font-semibold px-2 py-0.5 rounded-full shadow-sm">
<span className="material-symbols-outlined text-[13px]">warning</span> Critical
            </span>
</div>

<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full font-label-sm text-label-sm font-semibold bg-secondary-container text-on-secondary-container shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              IN PROGRESS
            </span>
</div>

<div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-on-tertiary font-body-sm text-body-sm">
<span className="flex items-center gap-1 font-medium truncate drop-shadow-sm">
<span className="material-symbols-outlined text-[16px] text-secondary-fixed">pin_drop</span>
              742 Northridge Ave & 14th St
            </span>
<span className="font-mono-data text-mono-data text-[11px] bg-inverse-surface/60 px-1.5 py-0.5 rounded backdrop-blur-xs">Ward 4</span>
</div>
</div>

<div className="p-space-md flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-2">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="inline-flex items-center gap-1 text-primary font-medium">
<span className="material-symbols-outlined text-[14px]">remove_road</span> Roads & Surface
              </span>
<span>•</span>
<span>Logged 2 days ago</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors line-clamp-1">
              Deep sinkhole forming near storm drain
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              Subsurface soil depression eroding asphalt surrounding the central catch basin. Hazard cones deployed by neighboring residents to alert evening cyclists.
            </p>
</div>

<div className="space-y-space-sm pt-2 bg-surface-container-low rounded-lg p-2.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-secondary">engineering</span> Assigned Dispatch
              </span>
<span className="font-mono-data text-mono-data text-on-surface font-semibold">Dave K. (Roads Dept #4)</span>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-primary">schedule</span> Target Remediation
              </span>
<span className="font-mono-data text-mono-data text-secondary font-medium">Today by 17:00</span>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-1">
<button className="upvote-btn inline-flex items-center gap-1 text-on-surface-variant hover:text-primary bg-surface-container hover:bg-surface-container-high px-2.5 py-1 rounded-md transition-colors text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[15px]">thumb_up</span>
<span className="vote-count font-mono-data">34</span>
<span className="hidden sm:inline">Affected</span>
</button>
<button className="inline-flex items-center gap-1 text-on-surface-variant hover:text-on-surface bg-surface-container-low px-2 py-1 rounded-md transition-colors text-label-sm font-label-sm" title="Comments">
<span className="material-symbols-outlined text-[14px]">chat_bubble_outline</span>
<span className="font-mono-data">12</span>
</button>
</div>
<a className="font-label-sm text-label-sm font-semibold text-primary hover:text-primary-container inline-flex items-center gap-1 group/btn"  href="#">
<span>Inspect Audit</span>
<span className="material-symbols-outlined text-[15px] transition-transform group-hover/btn:translate-x-0.5">arrow_forward</span>
</a>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group" >
<div className="relative h-48 w-full overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmGmh8X1IsuXEzEicEVAeQiopBDxUUq5YpuV0TUTbLt6JJgnbtDa-6Voz003RVQvh1CtOXM4QQPi-dFIa1JfEMl7aiStW85v6wZH6HVty48_FbCb61CGxC3Lgt1kF8kP8kX6bGCpsmdnU6Jn_hzlmjqlc_gPKkjNbbR-giKrt7beWmR2h_y5I6bZxZIT-qmn9XO5MwJF8xzMDe2fpCQsvBVs7syGdJq7dKRo2fffoqY2XnjMlGPUY"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent"></div>
<div className="absolute top-3 left-3 flex items-center gap-1.5">
<span className="font-mono-data text-mono-data font-bold text-on-primary bg-inverse-surface/80 backdrop-blur-md px-2 py-0.5 rounded text-[11px]">#FMA-8492</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-secondary text-on-secondary font-semibold px-2 py-0.5 rounded-full shadow-sm">
<span className="material-symbols-outlined text-[13px]">priority_high</span> High
            </span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full font-label-sm text-label-sm font-semibold bg-secondary-container text-on-secondary-container shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              IN PROGRESS
            </span>
</div>
<div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-on-tertiary font-body-sm text-body-sm">
<span className="flex items-center gap-1 font-medium truncate drop-shadow-sm">
<span className="material-symbols-outlined text-[16px] text-secondary-fixed">pin_drop</span>
              Market Alleyway & 5th Avenue
            </span>
<span className="font-mono-data text-mono-data text-[11px] bg-inverse-surface/60 px-1.5 py-0.5 rounded backdrop-blur-xs">Ward 4</span>
</div>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-2">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="inline-flex items-center gap-1 text-primary font-medium">
<span className="material-symbols-outlined text-[14px]">delete_sweep</span> Waste Management
              </span>
<span>•</span>
<span>Logged 5 hours ago</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors line-clamp-1">
              Overflowing municipal recycling dumpster attracting pests
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              Commercial alley bin has exceeded maximum capacity for 4 days. Cardboard debris blocking back pedestrian fire exit corridor.
            </p>
</div>
<div className="space-y-space-sm pt-2 bg-surface-container-low rounded-lg p-2.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-secondary">local_shipping</span> Waste Hauler Unit
              </span>
<span className="font-mono-data text-mono-data text-on-surface font-semibold">Truck 12B (Downtown Enroute)</span>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-primary">schedule</span> Expected Pickup
              </span>
<span className="font-mono-data text-mono-data text-secondary font-medium">Within 2.5 hours</span>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-1">
<button className="upvote-btn inline-flex items-center gap-1 text-on-surface-variant hover:text-primary bg-surface-container hover:bg-surface-container-high px-2.5 py-1 rounded-md transition-colors text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[15px]">thumb_up</span>
<span className="vote-count font-mono-data">18</span>
<span className="hidden sm:inline">Affected</span>
</button>
<button className="inline-flex items-center gap-1 text-on-surface-variant hover:text-on-surface bg-surface-container-low px-2 py-1 rounded-md transition-colors text-label-sm font-label-sm" title="Comments">
<span className="material-symbols-outlined text-[14px]">chat_bubble_outline</span>
<span className="font-mono-data">5</span>
</button>
</div>
<a className="font-label-sm text-label-sm font-semibold text-primary hover:text-primary-container inline-flex items-center gap-1 group/btn"  href="#">
<span>Inspect Audit</span>
<span className="material-symbols-outlined text-[15px] transition-transform group-hover/btn:translate-x-0.5">arrow_forward</span>
</a>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group" >
<div className="relative h-48 w-full overflow-hidden bg-surface-container-high">

<div className="grid grid-cols-2 h-full w-full">
<div className="relative h-full overflow-hidden">
<img className="w-full h-full object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKDzIcNEoowJFgSuJWc4Fq4dih16uwmswWKu8SW4n3BCk0lToBQDIkhjIiZ6tW0JYrqHZG8ufYKYUyzGLRhvtTARTBY18JXPY-eeRjJHDBL5qwYZWPrFfcfXjpOF-QQbkoCKGk0HdFPYM17AS6kiIs2iX36aQK58amlBrN_UkER1IBa_g5hQPq_HyDPM6XuQ2oRcl6bWdOwwmmUFdytWklUvFnoqUwTlBFRFaUf45xSEvYU6KLMPU"/>
<span className="absolute bottom-2 left-2 bg-inverse-surface/80 text-on-tertiary font-label-sm text-label-sm px-1.5 py-0.5 rounded text-[10px] uppercase font-bold">Reported</span>
</div>
<div className="relative h-full overflow-hidden">
<img className="w-full h-full object-cover"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSEahKiZ7GSfGzlLqHllMZ6wpm19LudiRGkq5-Qf-lKHURLXA81kijeENR-peXHoTjtlQzYLDYffxYnddVvlMbfMxf_zEe4hAP9AavVgecJxKJT6gOesyVfLpYG-ATxHFfn0nfil_ZYx3JWWqBazx_FDUfrBJ8dj5Evev5Un9i61Dy0JKJ_mlD3xkZsQs_5ElDEbTzBJdy-gLAk2rsboIW9q00mpO8V7vg3VBKxHZ3sd0xOzpoSFo"/>
<span className="absolute bottom-2 right-2 bg-primary text-on-primary font-label-sm text-label-sm px-1.5 py-0.5 rounded text-[10px] uppercase font-bold">Fixed</span>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/70 via-transparent to-transparent pointer-events-none"></div>
<div className="absolute top-3 left-3 flex items-center gap-1.5">
<span className="font-mono-data text-mono-data font-bold text-on-primary bg-inverse-surface/80 backdrop-blur-md px-2 py-0.5 rounded text-[11px]">#FMA-8421</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-surface-container-lowest/90 text-on-surface font-semibold px-2 py-0.5 rounded-full shadow-sm">
<span className="material-symbols-outlined text-[13px] text-amber-500 fill-current" style={{"fontVariationSettings":"'FILL' 1"}}>star</span> 5.0
            </span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full font-label-sm text-label-sm font-semibold bg-primary-fixed text-on-primary-fixed-variant shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary"></span>
              RESOLVED
            </span>
</div>
<div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-on-tertiary font-body-sm text-body-sm">
<span className="flex items-center gap-1 font-medium truncate drop-shadow-sm">
<span className="material-symbols-outlined text-[16px] text-secondary-fixed">pin_drop</span>
              Oakwood Pedestrian Crossing
            </span>
<span className="font-mono-data text-mono-data text-[11px] bg-inverse-surface/60 px-1.5 py-0.5 rounded backdrop-blur-xs">Ward 4</span>
</div>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-2">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="inline-flex items-center gap-1 text-primary font-medium">
<span className="material-symbols-outlined text-[14px]">lightbulb</span> Electrical & Lighting
              </span>
<span>•</span>
<span>Resolved in 18 hrs</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors line-clamp-1">
              Broken pedestrian streetlight fixture flickering continuously
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              Sodium ballast failed causing severe strobe effect over elementary school crosswalk. Upgraded to high-efficiency LED fixture with automated photocell.
            </p>
</div>
<div className="space-y-space-sm pt-2 bg-surface-container-low rounded-lg p-2.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-primary">verified</span> Verified By
              </span>
<span className="font-mono-data text-mono-data text-on-surface font-semibold">Ward Inspector Chen</span>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-primary">rate_review</span> Citizen Audit Signoff
              </span>
<span className="font-mono-data text-mono-data text-primary font-medium">Approved by 4 Neighbors</span>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-1">
<span className="inline-flex items-center gap-1 text-primary bg-primary-fixed/30 px-2 py-1 rounded-md font-mono-data text-[11px] font-semibold">
<span className="material-symbols-outlined text-[14px]">done_all</span> Audit Certified
              </span>
</div>
<a className="font-label-sm text-label-sm font-semibold text-primary hover:text-primary-container inline-flex items-center gap-1 group/btn"  href="#">
<span>Inspect Audit</span>
<span className="material-symbols-outlined text-[15px] transition-transform group-hover/btn:translate-x-0.5">arrow_forward</span>
</a>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group" >
<div className="relative h-48 w-full overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZI-qmQuyunG80-uWbTjEHwHEiAKkH_SMb-YgUuofauzfoncAFn7yC4sj20gdZxKFMYFGSooXGhpy-AP8pC4q8cOjYoYmNy0zhcevDDPa2ZqdPkBxaNNnlOmb0ZvgvYef-JWxVYYkkqcCZvPkjFYgXqqshhKuvVhnZIqh-N-7YtVGaZ3_wtJfIXiHcF5BBh0IWKSCl0hywFDnt8SMPXwvguvjql3BVryCpyr3IyTqcy9kZILq7-AI"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent"></div>
<div className="absolute top-3 left-3 flex items-center gap-1.5">
<span className="font-mono-data text-mono-data font-bold text-on-primary bg-inverse-surface/80 backdrop-blur-md px-2 py-0.5 rounded text-[11px]">#FMA-8390</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-error text-on-error font-semibold px-2 py-0.5 rounded-full shadow-sm">
<span className="material-symbols-outlined text-[13px]">emergency</span> High SLA
            </span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full font-label-sm text-label-sm font-semibold bg-secondary-container text-on-secondary-container shadow-sm">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              IN PROGRESS
            </span>
</div>
<div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-on-tertiary font-body-sm text-body-sm">
<span className="flex items-center gap-1 font-medium truncate drop-shadow-sm">
<span className="material-symbols-outlined text-[16px] text-secondary-fixed">pin_drop</span>
              Riverfront Terrace, Block 300
            </span>
<span className="font-mono-data text-mono-data text-[11px] bg-inverse-surface/60 px-1.5 py-0.5 rounded backdrop-blur-xs">Ward 2</span>
</div>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-2">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="inline-flex items-center gap-1 text-primary font-medium">
<span className="material-symbols-outlined text-[14px]">water_drop</span> Waterworks & Mains
              </span>
<span>•</span>
<span>Logged 1 day ago</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors line-clamp-1">
              Low water pressure and discolored flow
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              Multiple residential units reporting rusty sediment and sub-20 PSI pressure following hydrant pressure testing in adjacent district.
            </p>
</div>
<div className="space-y-space-sm pt-2 bg-surface-container-low rounded-lg p-2.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-secondary">plumbing</span> Assigned Crew
              </span>
<span className="font-mono-data text-mono-data text-on-surface font-semibold">Hydro Unit 04 (Main Valve Flushing)</span>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-primary">science</span> Water Safety Test
              </span>
<span className="font-mono-data text-mono-data text-secondary font-medium">Chlorine & Turbidity Cleared</span>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-1">
<button className="upvote-btn inline-flex items-center gap-1 text-on-surface-variant hover:text-primary bg-surface-container hover:bg-surface-container-high px-2.5 py-1 rounded-md transition-colors text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[15px]">thumb_up</span>
<span className="vote-count font-mono-data">52</span>
<span className="hidden sm:inline">Affected</span>
</button>
<button className="inline-flex items-center gap-1 text-on-surface-variant hover:text-on-surface bg-surface-container-low px-2 py-1 rounded-md transition-colors text-label-sm font-label-sm" title="Comments">
<span className="material-symbols-outlined text-[14px]">chat_bubble_outline</span>
<span className="font-mono-data">23</span>
</button>
</div>
<a className="font-label-sm text-label-sm font-semibold text-primary hover:text-primary-container inline-flex items-center gap-1 group/btn"  href="#">
<span>Inspect Audit</span>
<span className="material-symbols-outlined text-[15px] transition-transform group-hover/btn:translate-x-0.5">arrow_forward</span>
</a>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group" >
<div className="relative h-48 w-full overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkXj6tf4dVVCmPEXrVk9FlquYK2rUywkeucON1hV3mzxDlROK1Wopl_-NFOccbshM57gSFW-oD2M4I_sfjq_e1BrvuGvKfL4SX_Er-q1Orqir-WCqhp9un-n5UjdwCdnBIODOZOMzsyLkHYpsWb3sGWyroh_fHMKeLHtNu23HufQymNrbjz5tX1H8jjF4iaSrwGogdAmwPbiUQGRvd4x2xNHY-VY7iI_CPLBDN-n8y6THntxX-BL8"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent"></div>
<div className="absolute top-3 left-3 flex items-center gap-1.5">
<span className="font-mono-data text-mono-data font-bold text-on-primary bg-inverse-surface/80 backdrop-blur-md px-2 py-0.5 rounded text-[11px]">#FMA-8211</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-surface-container-lowest/90 text-on-surface font-semibold px-2 py-0.5 rounded-full shadow-sm">
<span className="material-symbols-outlined text-[13px] text-primary">bolt</span> 14h Turnaround
            </span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full font-label-sm text-label-sm font-semibold bg-primary-fixed text-on-primary-fixed-variant shadow-sm">
<span className="w-2 h-2 rounded-full bg-primary"></span>
              RESOLVED
            </span>
</div>
<div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-on-tertiary font-body-sm text-body-sm">
<span className="flex items-center gap-1 font-medium truncate drop-shadow-sm">
<span className="material-symbols-outlined text-[16px] text-secondary-fixed">pin_drop</span>
              Maple Avenue at Elementary Rd
            </span>
<span className="font-mono-data text-mono-data text-[11px] bg-inverse-surface/60 px-1.5 py-0.5 rounded backdrop-blur-xs">Ward 3</span>
</div>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-2">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="inline-flex items-center gap-1 text-primary font-medium">
<span className="material-symbols-outlined text-[14px]">park</span> Parks & Forestry
              </span>
<span>•</span>
<span>Resolved 3 days ago</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors line-clamp-1">
              Fallen oak tree branch obstructing school bike lane
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              Sudden wind gust snapped a 12-foot branch hanging over the primary student cycling route. Full clearing, chipping, and safety limb inspection completed.
            </p>
</div>
<div className="space-y-space-sm pt-2 bg-surface-container-low rounded-lg p-2.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-primary">eco</span> Forestry Division
              </span>
<span className="font-mono-data text-mono-data text-on-surface font-semibold">Crew Unit B (Urban Arborists)</span>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-primary">verified</span> Inspection Result
              </span>
<span className="font-mono-data text-mono-data text-primary font-medium">Adjacent Canopy Certified Safe</span>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-1">
<button className="upvote-btn inline-flex items-center gap-1 text-on-surface-variant hover:text-primary bg-surface-container hover:bg-surface-container-high px-2.5 py-1 rounded-md transition-colors text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[15px]">thumb_up</span>
<span className="vote-count font-mono-data">29</span>
<span className="hidden sm:inline">Citizen Votes</span>
</button>
</div>
<a className="font-label-sm text-label-sm font-semibold text-primary hover:text-primary-container inline-flex items-center gap-1 group/btn"  href="#">
<span>Inspect Audit</span>
<span className="material-symbols-outlined text-[15px] transition-transform group-hover/btn:translate-x-0.5">arrow_forward</span>
</a>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col overflow-hidden group" >
<div className="relative h-48 w-full overflow-hidden bg-surface-container-high">
<img className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWdRjNJsZW8xsjo3H72DW3150T062LRcW3YYOqBdXeeO6wcTrFPPkiwV4CWLYNb8l1QBMU7F7iYpWsNphzc0TZeYwCmR4vawAegk1cF_AjUJYlk_PFRRMLC9B3rRDQdJ4djOs2UWN2_l4bXujgqJc3KwHHcQGvIklxE5akvmNt5s9Kdt16pY67wSwAUEoCZD5I0RWPR0_Th6fAHtjKiv5cAdnfZpwgGVNuPrTNDYqoKeSYYn_3GpA"/>
<div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/80 via-inverse-surface/20 to-transparent"></div>
<div className="absolute top-3 left-3 flex items-center gap-1.5">
<span className="font-mono-data text-mono-data font-bold text-on-primary bg-inverse-surface/80 backdrop-blur-md px-2 py-0.5 rounded text-[11px]">#FMA-7994</span>
<span className="inline-flex items-center gap-1 font-label-sm text-label-sm bg-surface-container-lowest/90 text-on-surface font-semibold px-2 py-0.5 rounded-full shadow-sm">
<span className="material-symbols-outlined text-[13px] text-secondary">accessible</span> ADA Priority
            </span>
</div>
<div className="absolute top-3 right-3">
<span className="inline-flex items-center gap-1.5 h-6 px-2.5 rounded-full font-label-sm text-label-sm font-semibold bg-surface-container-highest text-on-surface-variant shadow-sm">
<span className="w-2 h-2 rounded-full bg-outline"></span>
              REPORTED
            </span>
</div>
<div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-on-tertiary font-body-sm text-body-sm">
<span className="flex items-center gap-1 font-medium truncate drop-shadow-sm">
<span className="material-symbols-outlined text-[16px] text-secondary-fixed">pin_drop</span>
              Civic Library, Main Concourse
            </span>
<span className="font-mono-data text-mono-data text-[11px] bg-inverse-surface/60 px-1.5 py-0.5 rounded backdrop-blur-xs">Ward 1</span>
</div>
</div>
<div className="p-space-md flex-1 flex flex-col justify-between space-y-space-md">
<div className="space-y-2">
<div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
<span className="inline-flex items-center gap-1 text-primary font-medium">
<span className="material-symbols-outlined text-[14px]">domain</span> Public Infrastructure
              </span>
<span>•</span>
<span>Logged 3 hours ago</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors line-clamp-1">
              Damaged accessible ramp at municipal library entrance
            </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2">
              Concrete spalling has caused a 2-inch vertical lip at the ramp landing threshold, creating wheelchair wheel entrapment hazard and non-compliance with ADA access.
            </p>
</div>
<div className="space-y-space-sm pt-2 bg-surface-container-low rounded-lg p-2.5">
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-outline">assignment</span> Dispatch Status
              </span>
<span className="font-mono-data text-mono-data text-on-surface font-semibold">Triage Queue #08 (Ward 1)</span>
</div>
<div className="flex items-center justify-between font-label-sm text-label-sm">
<span className="text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-[15px] text-outline">schedule</span> SLA Assignment
              </span>
<span className="font-mono-data text-mono-data text-on-surface-variant font-medium">Pending engineering review</span>
</div>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center gap-1">
<button className="upvote-btn inline-flex items-center gap-1 text-on-surface-variant hover:text-primary bg-surface-container hover:bg-surface-container-high px-2.5 py-1 rounded-md transition-colors text-label-sm font-label-sm">
<span className="material-symbols-outlined text-[15px]">thumb_up</span>
<span className="vote-count font-mono-data">9</span>
<span className="hidden sm:inline">Affected</span>
</button>
<button className="inline-flex items-center gap-1 text-on-surface-variant hover:text-on-surface bg-surface-container-low px-2 py-1 rounded-md transition-colors text-label-sm font-label-sm" title="Comments">
<span className="material-symbols-outlined text-[14px]">chat_bubble_outline</span>
<span className="font-mono-data">1</span>
</button>
</div>
<a className="font-label-sm text-label-sm font-semibold text-primary hover:text-primary-container inline-flex items-center gap-1 group/btn"  href="#">
<span>Inspect Audit</span>
<span className="material-symbols-outlined text-[15px] transition-transform group-hover/btn:translate-x-0.5">arrow_forward</span>
</a>
</div>
</div>
</article>
</div>

<div className="hidden bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden" id="complaintsTableWrapper">
<div className="overflow-x-auto">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<th className="py-3 px-4">Ticket ID</th>
<th className="py-3 px-4">Subject & Location</th>
<th className="py-3 px-4">Ward</th>
<th className="py-3 px-4">Category</th>
<th className="py-3 px-4">Status</th>
<th className="py-3 px-4">Assigned Crew</th>
<th className="py-3 px-4 text-right">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-surface-container-high font-body-sm text-body-sm text-on-surface">
<tr className="hover:bg-surface-container-lowest/80 transition-colors">
<td className="py-3 px-4 font-mono-data font-bold text-primary">#FMA-9102</td>
<td className="py-3 px-4">
<div className="font-semibold text-on-surface">Deep sinkhole forming near storm drain</div>
<div className="text-[12px] text-on-surface-variant">742 Northridge Ave & 14th St</div>
</td>
<td className="py-3 px-4 font-mono-data">Ward 4</td>
<td className="py-3 px-4">Roads & Surface</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-secondary-container text-on-secondary-container">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> In Progress
                </span>
</td>
<td className="py-3 px-4 font-mono-data text-[12px]">Dave K. (Roads #4)</td>
<td className="py-3 px-4 text-right">
<a className="text-primary hover:underline font-label-sm font-semibold"  href="#">Inspect</a>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest/80 transition-colors">
<td className="py-3 px-4 font-mono-data font-bold text-primary">#FMA-8492</td>
<td className="py-3 px-4">
<div className="font-semibold text-on-surface">Overflowing municipal recycling dumpster</div>
<div className="text-[12px] text-on-surface-variant">Market Alleyway & 5th Avenue</div>
</td>
<td className="py-3 px-4 font-mono-data">Ward 4</td>
<td className="py-3 px-4">Waste Management</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-secondary-container text-on-secondary-container">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> In Progress
                </span>
</td>
<td className="py-3 px-4 font-mono-data text-[12px]">Truck 12B Dispatch</td>
<td className="py-3 px-4 text-right">
<a className="text-primary hover:underline font-label-sm font-semibold"  href="#">Inspect</a>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest/80 transition-colors">
<td className="py-3 px-4 font-mono-data font-bold text-primary">#FMA-8421</td>
<td className="py-3 px-4">
<div className="font-semibold text-on-surface">Broken pedestrian streetlight fixture</div>
<div className="text-[12px] text-on-surface-variant">Oakwood Pedestrian Crossing</div>
</td>
<td className="py-3 px-4 font-mono-data">Ward 4</td>
<td className="py-3 px-4">Electrical & Lighting</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-primary-fixed text-on-primary-fixed-variant">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Resolved
                </span>
</td>
<td className="py-3 px-4 font-mono-data text-[12px]">Ward Inspector Chen</td>
<td className="py-3 px-4 text-right">
<a className="text-primary hover:underline font-label-sm font-semibold"  href="#">Inspect</a>
</td>
</tr>
<tr className="hover:bg-surface-container-lowest/80 transition-colors">
<td className="py-3 px-4 font-mono-data font-bold text-primary">#FMA-8390</td>
<td className="py-3 px-4">
<div className="font-semibold text-on-surface">Low water pressure and discolored flow</div>
<div className="text-[12px] text-on-surface-variant">Riverfront Terrace, Block 300</div>
</td>
<td className="py-3 px-4 font-mono-data">Ward 2</td>
<td className="py-3 px-4">Waterworks & Mains</td>
<td className="py-3 px-4">
<span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-secondary-container text-on-secondary-container">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> In Progress
                </span>
</td>
<td className="py-3 px-4 font-mono-data text-[12px]">Hydro Unit 04</td>
<td className="py-3 px-4 text-right">
<a className="text-primary hover:underline font-label-sm font-semibold"  href="#">Inspect</a>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">

<div className="flex flex-col sm:flex-row sm:items-center gap-space-md w-full md:w-auto">
<div className="flex items-center gap-2">
<button className="h-9 px-3 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-sm text-label-sm inline-flex items-center gap-1.5 font-semibold" id="downloadCsvBtn">
<span className="material-symbols-outlined text-[16px] text-primary">download</span>
<span>Download Civic Data (.CSV)</span>
</button>
<a className="h-9 px-3 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors font-label-sm text-label-sm inline-flex items-center gap-1.5"  href="#">
<span className="material-symbols-outlined text-[16px] text-secondary">api</span>
<span>API Docs</span>
</a>
</div>
<span className="text-on-surface-variant font-mono-data text-mono-data text-[12px]">Showing 1-6 of 348 Reports</span>
</div>

<div className="flex items-center gap-1 self-center">
<button className="w-9 h-9 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high flex items-center justify-center transition-colors disabled:opacity-40" disabled="">
<span className="material-symbols-outlined text-[18px]">chevron_left</span>
</button>
<button className="w-9 h-9 rounded-lg bg-primary-container text-on-primary font-mono-data text-mono-data font-bold flex items-center justify-center">1</button>
<button className="w-9 h-9 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high font-mono-data text-mono-data flex items-center justify-center transition-colors">2</button>
<button className="w-9 h-9 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high font-mono-data text-mono-data flex items-center justify-center transition-colors">3</button>
<span className="px-1 text-on-surface-variant font-mono-data text-mono-data">...</span>
<button className="w-9 h-9 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high font-mono-data text-mono-data flex items-center justify-center transition-colors">58</button>
<button className="w-9 h-9 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container-high flex items-center justify-center transition-colors">
<span className="material-symbols-outlined text-[18px]">chevron_right</span>
</button>
</div>
</div>

<div className="rounded-xl p-space-lg bg-surface-container-low shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-lg">
<div className="flex items-start gap-space-md max-w-2xl">
<div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0">
<span className="material-symbols-outlined text-[26px]">policy</span>
</div>
<div className="space-y-1">
<h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Municipal Accountability Standard #2025-C</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">All public complaints are timestamped into the City Open Data Ledger. Municipal managers must log initial on-site triage within 24 hours of report ingestion.</p>
</div>
</div>
<div className="flex items-center gap-space-sm flex-shrink-0 w-full md:w-auto">
<a className="h-10 px-4 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-md text-label-md inline-flex items-center justify-center gap-1.5 transition-colors shadow-xs w-full md:w-auto"  href="#">
<span className="material-symbols-outlined text-[17px]">help_outline</span>
<span>Resolution Process FAQ</span>
</a>
<a className="h-10 px-4 rounded-lg bg-primary-container hover:opacity-95 text-on-primary font-label-md text-label-md inline-flex items-center justify-center gap-1.5 transition-all shadow-sm w-full md:w-auto"  href="#">
<span className="material-symbols-outlined text-[17px]">add_circle</span>
<span>Submit New Issue</span>
</a>
</div>
</div>
</div>
</div>
</main><footer className="w-full bg-surface-container-low border-t border-outline-variant/30 mt-auto"><div className="max-w-7xl mx-auto px-margin-mobile md:px-margin py-space-xl"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-lg border-b border-outline-variant/30"><div className="space-y-space-sm"><div className="flex items-center gap-space-sm"><div className="w-8 h-8 rounded-lg bg-primary-container text-on-primary-container flex items-center justify-center font-headline-sm text-headline-sm"><span className="material-symbols-outlined text-[20px]">apartment</span></div><span className="font-headline-sm text-headline-sm text-on-surface font-semibold">FixMyArea</span></div><p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Independent civic infrastructure tracking and public transparency network. Connecting local residents with municipal teams for accountable community resolution.</p><div className="pt-space-xs"><span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm"><span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>Civic API Live Status: Operational</span></div></div><div className="space-y-space-sm"><h4 className="font-label-lg text-label-lg text-on-surface font-semibold tracking-wider uppercase">Emergency & Dispatch</h4><div className="space-y-space-xs"><div className="p-space-sm rounded-lg bg-surface-container-lowest border border-outline-variant/40"><div className="font-label-md text-label-md text-error font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">crisis_alert</span> Life-Threatening Urgent</div><p className="font-body-sm text-body-sm text-on-surface mt-0.5 font-mono-data text-mono-data font-bold">Dial 911 (Police / Fire / EMS)</p></div><div className="p-space-sm rounded-lg bg-surface-container-lowest border border-outline-variant/40"><div className="font-label-md text-label-md text-secondary font-semibold flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">call</span> Municipal Non-Emergency</div><p className="font-body-sm text-body-sm text-on-surface mt-0.5 font-mono-data text-mono-data font-bold">Dial 311 (Ward Central Dispatch)</p></div></div></div><div className="space-y-space-sm"><h4 className="font-label-lg text-label-lg text-on-surface font-semibold tracking-wider uppercase">Civic Platform</h4><ul className="space-y-space-xs font-body-sm text-body-sm"><li className="flex items-center gap-1.5"><a className="text-on-surface-variant hover:text-primary transition-colors flex items-center gap-1"  href="#"><span className="material-symbols-outlined text-[16px]">query_stats</span> Open Data Civic Portal</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Public Audit Log</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Ward Resolution Metrics</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Municipal Integration Pipeline</a></li></ul></div><div className="space-y-space-sm"><h4 className="font-label-lg text-label-lg text-on-surface font-semibold tracking-wider uppercase">Governance & Legal</h4><ul className="space-y-space-xs font-body-sm text-body-sm"><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Privacy Policy</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Terms of Public Service</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Whistleblower Protection & FAQ</a></li><li><a className="text-on-surface-variant hover:text-primary transition-colors"  href="#">Community Guidelines</a></li></ul></div></div><div className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-center sm:text-left"><p className="font-body-sm text-body-sm text-on-surface-variant">© 2025 FixMyArea. Public Trust Civic Initiative. All rights reserved.</p><div className="flex items-center gap-space-md font-label-md text-label-md text-on-surface-variant"><a className="hover:text-on-surface transition-colors"  href="#">Privacy</a><span>•</span><a className="hover:text-on-surface transition-colors"  href="#">Terms</a><span>•</span><a className="hover:text-on-surface transition-colors"  href="#">Open Data</a></div></div></div></footer>
    </div>
  );
}
