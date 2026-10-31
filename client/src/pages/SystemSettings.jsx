import React from 'react';
import Layout from '../components/Layout';

export default function SystemSettings() {
  return (
    <Layout title="System Settings" breadcrumb="Global Municipal Configuration" portalType="admin">
      <div className="flex flex-col w-full pb-16">



<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-md mb-space-xl">
<div>
<div className="flex items-center gap-space-xs text-on-surface-variant font-label-md text-label-md uppercase tracking-wider mb-space-xs">
<span>Admin Console</span>
<span className="material-symbols-outlined text-[14px]">chevron_right</span>
<span className="text-primary font-semibold">Settings &amp; Security</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">System &amp; Municipal Configuration</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1 max-w-3xl">
        Global municipal controls, dispatch automation thresholds, SLA escalation rules, and data privacy policies.
      </p>
</div>

<div className="flex items-center gap-space-sm shrink-0">
<button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">history</span>
<span>Audit Trail Log</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors shadow-sm" type="button">
<span className="material-symbols-outlined text-[18px]">restart_alt</span>
<span>Reset Defaults</span>
</button>
<button className="inline-flex items-center gap-space-xs px-space-lg py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md shadow-md hover:opacity-95 transition-all" id="save-settings-btn" type="button">
<span className="material-symbols-outlined text-[18px]">verified</span>
<span>Save System Settings</span>
</button>
</div>
</div>

<div className="mb-space-xl overflow-x-auto pb-1">
<div className="flex items-center gap-space-xs min-w-max p-1 bg-surface-container-low rounded-xl">
<button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md shadow-sm transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">domain</span>
<span>General &amp; Municipal Org</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">rule</span>
<span>Complaint &amp; SLA Rules</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">smart_toy</span>
<span>Dispatch &amp; AI Classification</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">lock_person</span>
<span>Citizen Privacy &amp; Anonymity</span>
</button>
<button className="flex items-center gap-space-xs px-space-md py-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all" type="button">
<span className="material-symbols-outlined text-[18px]">shield</span>
<span>Security &amp; Access Control</span>
</button>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-7 flex flex-col gap-space-lg">

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="p-2 rounded-lg bg-surface-container text-primary">
<span className="material-symbols-outlined text-[22px]">location_city</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Municipal Organization Profile</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Core territorial jurisdiction parameters and civic routing identification.</p>
</div>
</div>
<span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface">
<span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            Charter Verified
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface">Municipality Entity Name</label>
<input className="h-10 px-3 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20" type="text" value="Oakwood Metropolitan District (Ward 1 - 8)"/>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface">City Jurisdiction Code</label>
<div className="relative">
<input className="w-full h-10 px-3 rounded-lg bg-surface-container font-mono-data text-mono-data text-on-surface cursor-not-allowed" readonly="" type="text" value="MUN-OAK-2025"/>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">lock</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface">Municipal 311 Helpline Line</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">phone_in_talk</span>
<input className="w-full h-10 pl-9 pr-3 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20" type="text" value="(555) 311-CIVIC (24/7 Monitored Dispatch)"/>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface">Operating Timezone &amp; Shifts</label>
<select className="h-10 px-3 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20">
<option selected="">Eastern Time (US &amp; Canada) — 24/7 Dispatch</option>
<option>Central Time (US &amp; Canada) — Day Shift Only</option>
<option>Pacific Time (US &amp; Canada) — 24/7 Dispatch</option>
</select>
</div>

<div className="flex flex-col gap-1.5 md:col-span-2">
<label className="font-label-md text-label-md text-on-surface">Central Headquarters &amp; Depot Address</label>
<div className="relative">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant">pin_drop</span>
<input className="w-full h-10 pl-9 pr-3 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20" type="text" value="450 Civic Center Plaza, Suite 300, Oakwood, NY 10451"/>
</div>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm mt-1">
<span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">info</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Life-Safety Emergency Routing</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">
              The municipal portal automatically embeds <em>"Dial 911 for Life-Threatening Emergencies"</em> on civic report headers and citizen confirmation notices.
            </span>
</div>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="p-2 rounded-lg bg-surface-container text-primary">
<span className="material-symbols-outlined text-[22px]">timer</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Complaint Triage &amp; SLA Configuration</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Turnaround thresholds, breach notifications, and ward contractor handoffs.</p>
</div>
</div>
<span className="font-mono-data text-mono-data text-primary bg-primary/10 px-2.5 py-1 rounded-md">Policy: Strict v3</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">

<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface">Default Incident SLA Deadline</label>
<select className="h-10 px-3 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20">
<option>12 Hours (High Density Priority)</option>
<option selected="">24 Hours from Verified Submission</option>
<option>36 Hours (Standard Civic Metric)</option>
<option>48 Hours (Extended Public Works)</option>
</select>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface">Citizen Resolution Contest Window</label>
<select className="h-10 px-3 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20">
<option>24 Hours after marked resolved</option>
<option>48 Hours after marked resolved</option>
<option selected="">72 Hours (Recommended statutory standard)</option>
<option>7 Days for structural repairs</option>
</select>
</div>
</div>

<div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[18px] text-secondary">warning</span>
<span className="font-label-md text-label-md text-on-surface">SLA Amber Warning Threshold</span>
</div>
<span className="font-mono-data text-mono-data text-secondary font-semibold" id="sla-slider-value">75% elapsed SLA</span>
</div>
<input className="w-full accent-primary h-2 bg-surface-container rounded-lg cursor-pointer" id="sla-slider" max="90" min="50" onChange={() => {}} type="range" defaultValue="75" />
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>50% (Early Flag)</span>
<span>75% (Standard Municipal Trigger)</span>
<span>90% (Critical Escalation)</span>
</div>
</div>

<div className="flex flex-col gap-space-sm pt-space-xs">

<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-start gap-space-sm pr-space-md">
<span className="material-symbols-outlined text-error text-[20px] mt-0.5">campaign</span>
<div>
<p className="font-label-md text-label-md text-on-surface">Critical Hazard Audio &amp; SMS Flash Escalation</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sound acoustic alert on dispatch workbench and push emergency SMS to designated Ward Field Inspector.</p>
</div>
</div>
<input defaultChecked={true} className="w-5 h-5 accent-primary rounded cursor-pointer shrink-0" type="checkbox"/>
</label>

<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-start gap-space-sm pr-space-md">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">nightlight</span>
<div>
<p className="font-label-md text-label-md text-on-surface">Automated Swing-Shift &amp; Contractor Handover</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Re-route overnight emergency tickets (after 20:00 EST) directly to on-call infrastructure contractors.</p>
</div>
</div>
<input defaultChecked={true} className="w-5 h-5 accent-primary rounded cursor-pointer shrink-0" type="checkbox"/>
</label>
</div>
</section>

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="p-2 rounded-lg bg-surface-container text-primary">
<span className="material-symbols-outlined text-[22px]">radar</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Automated Dispatch &amp; Computer Vision</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">AI-assisted photo verification, proximity clustering, and autonomous queue routing.</p>
</div>
</div>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
  Intelligent Dispatch Active
</span>
</div>

<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-start gap-space-sm pr-space-md">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">document_scanner</span>
<div>
<p className="font-label-md text-label-md text-on-surface">AI Photographic Inspection &amp; Anti-Spam Validation</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Analyze resident uploads for road hazards, debris type, duplicate angles, and cross-reference with municipal visual database.</p>
</div>
</div>
<input defaultChecked={true} className="w-5 h-5 accent-primary rounded cursor-pointer shrink-0" type="checkbox"/>
</label>

<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-start gap-space-sm pr-space-md">
<span className="material-symbols-outlined text-primary text-[20px] mt-0.5">local_shipping</span>
<div>
<p className="font-label-md text-label-md text-on-surface">Crew Proximity &amp; Equipment Auto-Assignment</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Autonomous routing to closest on-duty unit bearing certified remediation tools (e.g., asphalt patcher, bucket truck).</p>
</div>
</div>
<input defaultChecked={true} className="w-5 h-5 accent-primary rounded cursor-pointer shrink-0" type="checkbox"/>
</label>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md mt-1">

<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface">Duplicate Clustering Geo-Radius</label>
<div className="flex items-center gap-2">
<input className="h-10 w-24 px-3 rounded-lg bg-surface-container-low font-body-md text-body-md text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/20" type="number" value="50"/>
<span className="font-body-sm text-body-sm text-on-surface-variant">Meters (Clusters ≤ 2 hours window)</span>
</div>
</div>

<div className="flex flex-col gap-1.5">
<label className="font-label-md text-label-md text-on-surface">Confidence Threshold for Auto-Approval</label>
<div className="flex items-center gap-2">
<input className="h-10 w-24 px-3 rounded-lg bg-surface-container-low font-mono-data text-mono-data text-on-surface text-center focus:outline-none focus:ring-2 focus:ring-primary/20" type="text" value="92%"/>
<span className="font-body-sm text-body-sm text-on-surface-variant">Minimum match before queue bypass</span>
</div>
</div>
</div>
</section>
</div>

<div className="lg:col-span-5 flex flex-col gap-space-lg">

<section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-sm">
<div className="p-2 rounded-lg bg-surface-container text-primary">
<span className="material-symbols-outlined text-[22px]">enhanced_encryption</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Citizen Privacy &amp; Data Sanitization</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Privacy Act protocols and public ledger scrubbing rules.</p>
</div>
</div>
</div>

<div className="flex flex-col gap-space-sm">
<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-start gap-space-sm pr-2">
<span className="material-symbols-outlined text-primary text-[18px] mt-0.5">remove_moderator</span>
<div>
<p className="font-label-md text-label-md text-on-surface">Automatic EXIF Metadata Scrubbing</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Strip private camera hashes, altitude, and device identifiers from images prior to publication.</p>
</div>
</div>
<input defaultChecked={true} className="w-5 h-5 accent-primary rounded cursor-pointer shrink-0" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-start gap-space-sm pr-2">
<span className="material-symbols-outlined text-primary text-[18px] mt-0.5">visibility_off</span>
<div>
<p className="font-label-md text-label-md text-on-surface">Anonymous Civic Submissions</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Permit verified constituents to log tickets without displaying names on the open neighborhood timeline.</p>
</div>
</div>
<input defaultChecked={true} className="w-5 h-5 accent-primary rounded cursor-pointer shrink-0" type="checkbox"/>
</label>
<label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-start gap-space-sm pr-2">
<span className="material-symbols-outlined text-primary text-[18px] mt-0.5">phonelink_lock</span>
<div>
<p className="font-label-md text-label-md text-on-surface">Field Crew Masking</p>
<p className="font-body-sm text-body-sm text-on-surface-variant">Citizen phone/email hidden from third-party contractors; routed through masked dispatch lines.</p>
</div>
</div>
<input defaultChecked={true} className="w-5 h-5 accent-primary rounded cursor-pointer shrink-0" type="checkbox"/>
</label>
</div>
<div className="grid grid-cols-2 gap-space-sm pt-space-xs">
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface">Max Upload Size</span>
<span className="font-mono-data text-mono-data bg-surface-container-low p-2 rounded-lg text-on-surface">10 MB / Photo (Max 4)</span>
</div>
<div className="flex flex-col gap-1">
<span className="font-label-md text-label-md text-on-surface">Statutory Retention</span>
<span className="font-mono-data text-mono-data bg-surface-container-low p-2 rounded-lg text-on-surface">7 Years (State Act)</span>
</div>
</div>
</section>
</div>
</div>
</div>
    </Layout>
  );
}

