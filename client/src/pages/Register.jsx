import React from 'react';

export default function Register() {
  return (
    <div className="w-full min-h-screen">
      <main className="w-full"><div className="flex flex-col w-full py-8 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

<div className="lg:col-span-4 flex flex-col justify-between bg-primary text-on-primary rounded-xl p-8 relative overflow-hidden shadow-xl">
<div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-on-primary/5 pointer-events-none"></div>
<div className="absolute -left-12 bottom-20 w-44 h-44 rounded-full bg-on-primary/10 pointer-events-none"></div>
<div className="relative z-10">

<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-lg bg-surface-container-lowest flex items-center justify-center text-primary shadow-sm">
<span className="material-symbols-outlined text-[24px]">location_city</span>
</div>
<div>
<div className="font-headline-sm text-headline-sm font-semibold tracking-tight leading-none text-surface-container-lowest">FixMyArea</div>
<div className="font-label-sm text-label-sm text-on-primary-container uppercase tracking-wider mt-0.5">Municipal Civic Network</div>
</div>
</div>
<div className="space-y-4">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-on-primary/10 text-on-primary text-label-sm font-label-sm backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-on-primary-container"></span>
            Verified Resident Portal
          </div>
<h2 className="font-headline-lg text-headline-lg leading-tight text-surface-container-lowest">
            Direct action for everyday community upkeep.
          </h2>
<p className="font-body-md text-body-md text-surface-variant leading-relaxed">
            Report roadway hazards, broken street lamps, sanitation lapses, and park maintenance directly to municipal dispatchers.
          </p>
</div>

<div className="mt-8 p-4 rounded-xl bg-on-primary/10 backdrop-blur-sm space-y-3">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-surface-variant">Live Dispatch Rate</span>
<span className="font-mono-data text-mono-data text-on-primary-container">94.2%</span>
</div>
<div className="w-full bg-on-primary/20 h-1.5 rounded-full overflow-hidden">
<div className="bg-on-primary-container h-full rounded-full w-[94%]"></div>
</div>
<div className="flex items-center gap-2 pt-1">
<span className="material-symbols-outlined text-[16px] text-on-primary-container">verified</span>
<span className="font-body-sm text-body-sm text-surface-container-lowest">Avg 48h resolution for Ward repairs</span>
</div>
</div>
</div>

<div className="relative z-10 pt-8 mt-6">
<div className="relative rounded-xl overflow-hidden shadow-md">
<div className="bg-cover bg-center h-28 w-full"  style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuAvF8zEaWa4ujUYSYVoRxMVYmFhZKsPje9y_p9s1bahtjbIReVb8CkwHub7nPxud2I2LIR4osiFG9G8nj_Aqif3_97dB-rwq9Y9a1QaGpPhbGqfO38NUjAcLcO2yPddf4a4cOH2uCBNvGvzCOxb4DgtdO1-doxbKoMxwaM3OFpCDPakTAxxS4a9KypGaogzWT_ZfaRVecv951Nox0TTQWgaPK9yjXt0ZFdW3CZ0Ijm_SOHsD1Rnt0U')"}}></div>
<div className="p-3 bg-surface-container-lowest text-on-surface">
<p className="font-body-sm text-body-sm italic text-on-surface-variant">"Reporting our neighborhood park light outage took 2 minutes. Fixed within two days."</p>
<div className="mt-1 font-label-sm text-label-sm text-primary font-medium">— Marcus T., Ward 4 Resident</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8 bg-surface-container-lowest rounded-xl shadow-md p-6 sm:p-10 flex flex-col justify-between">
<div>

<div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-6">
<div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">Create your Resident Account</h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Join thousands of neighbors taking active pride in improving our local communities.</p>
</div>
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-label-sm self-start">
<span className="material-symbols-outlined text-[14px]">lock</span>
            Encrypted Signup
          </span>
</div>
<form className="space-y-6" id="signup-form" onsubmit="event.preventDefault(); handleFormSubmit();">

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="space-y-1.5">
<label className="block font-label-md text-label-md text-on-surface" htmlFor="legalName">Full Legal Name</label>
<div className="relative rounded-lg bg-surface-container-low focus-within:bg-surface-container-lowest transition-colors">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-outline pointer-events-none">person</span>
<input className="w-full bg-transparent pl-10 pr-3.5 py-2.5 rounded-lg text-on-surface placeholder:text-outline focus:outline-none font-body-md text-body-md" id="legalName" placeholder="e.g. Sarah Jenkins" required="" type="text"/>
</div>
</div>

<div className="space-y-1.5">
<label className="block font-label-md text-label-md text-on-surface" htmlFor="emailAddress">Email Address</label>
<div className="relative rounded-lg bg-surface-container-low focus-within:bg-surface-container-lowest transition-colors">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-outline pointer-events-none">mail</span>
<input className="w-full bg-transparent pl-10 pr-3.5 py-2.5 rounded-lg text-on-surface placeholder:text-outline focus:outline-none font-body-md text-body-md" id="emailAddress" placeholder="sarah.jenkins@example.com" required="" type="email"/>
</div>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="block font-label-md text-label-md text-on-surface" htmlFor="phoneNumber">Mobile Phone Number</label>
<span className="font-body-sm text-body-sm text-outline">SMS verification</span>
</div>
<div className="relative rounded-lg bg-surface-container-low focus-within:bg-surface-container-lowest transition-colors">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-outline pointer-events-none">smartphone</span>
<input className="w-full bg-transparent pl-10 pr-3.5 py-2.5 rounded-lg text-on-surface placeholder:text-outline focus:outline-none font-body-md text-body-md" id="phoneNumber" placeholder="+1 (555) 234-5678" required="" type="tel"/>
</div>
</div>

<div className="space-y-1.5">
<label className="block font-label-md text-label-md text-on-surface" htmlFor="wardSelect">Municipal Ward / Neighborhood</label>
<div className="relative rounded-lg bg-surface-container-low focus-within:bg-surface-container-lowest transition-colors">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-outline pointer-events-none">explore</span>
<select className="w-full bg-transparent pl-10 pr-9 py-2.5 rounded-lg text-on-surface focus:outline-none font-body-md text-body-md appearance-none cursor-pointer" id="wardSelect" required="">
<option disabled="" selected="" value="">Select your district / ward...</option>
<option value="ward-1">Ward 1 — Northside & Heights</option>
<option value="ward-2">Ward 2 — River Valley & Waterfront</option>
<option value="ward-3">Ward 3 — Downtown Civic Core</option>
<option value="ward-4">Ward 4 — Oakwood Historic District</option>
<option value="ward-5">Ward 5 — East End Commercial Corridor</option>
<option value="ward-6">Ward 6 — Southwest Hills & Greenway</option>
</select>
<span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[20px] text-outline pointer-events-none">expand_more</span>
</div>
</div>
</div>

<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="block font-label-md text-label-md text-on-surface" htmlFor="streetAddress">Primary Residential Street Address</label>
<span className="font-body-sm text-body-sm text-outline">Optional • Pinpoints local crew dispatch</span>
</div>
<div className="relative rounded-lg bg-surface-container-low focus-within:bg-surface-container-lowest transition-colors">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-outline pointer-events-none">home_pin</span>
<input className="w-full bg-transparent pl-10 pr-3.5 py-2.5 rounded-lg text-on-surface placeholder:text-outline focus:outline-none font-body-md text-body-md" id="streetAddress" placeholder="e.g. 742 Evergreen Terrace, Apt 4B" type="text"/>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="space-y-1.5">
<label className="block font-label-md text-label-md text-on-surface" htmlFor="passwordField">Create Password</label>
<div className="relative rounded-lg bg-surface-container-low focus-within:bg-surface-container-lowest transition-colors">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-outline pointer-events-none">lock_open</span>
<input className="w-full bg-transparent pl-10 pr-10 py-2.5 rounded-lg text-on-surface placeholder:text-outline focus:outline-none font-body-md text-body-md" id="passwordField" oninput="evaluatePasswordStrength(this.value)" placeholder="Create a strong password" required="" type="password"/>
<button aria-label="Toggle password visibility" className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface focus:outline-none" onclick="togglePasswordVisibility('passwordField', this)" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
</div>
</div>

<div className="space-y-1.5">
<label className="block font-label-md text-label-md text-on-surface" htmlFor="confirmPasswordField">Confirm Password</label>
<div className="relative rounded-lg bg-surface-container-low focus-within:bg-surface-container-lowest transition-colors">
<span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-[18px] text-outline pointer-events-none">check_circle</span>
<input className="w-full bg-transparent pl-10 pr-10 py-2.5 rounded-lg text-on-surface placeholder:text-outline focus:outline-none font-body-md text-body-md" id="confirmPasswordField" oninput="checkPasswordMatch()" placeholder="Re-enter password" required="" type="password"/>
<button aria-label="Toggle confirm password visibility" className="absolute right-3 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface focus:outline-none" onclick="togglePasswordVisibility('confirmPasswordField', this)" type="button">
<span className="material-symbols-outlined text-[18px]">visibility</span>
</button>
</div>
</div>
</div>

<div className="p-3 bg-surface-container-low rounded-lg space-y-2">
<div className="flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant">Security Evaluation:</span>
<span className="font-label-sm text-label-sm text-outline" id="strength-label">Enter minimum 8 characters</span>
</div>
<div className="grid grid-cols-4 gap-1.5 h-1.5">
<div className="rounded-full bg-surface-container-high transition-colors" id="meter-1"></div>
<div className="rounded-full bg-surface-container-high transition-colors" id="meter-2"></div>
<div className="rounded-full bg-surface-container-high transition-colors" id="meter-3"></div>
<div className="rounded-full bg-surface-container-high transition-colors" id="meter-4"></div>
</div>
<div className="flex items-center gap-1.5 text-body-sm font-body-sm text-outline">
<span className="material-symbols-outlined text-[14px]">info</span>
<span>Requires combination of letters, numbers, and special symbols</span>
</div>
</div>

<div className="space-y-3 pt-2">

<label className="flex items-start gap-3 cursor-pointer group select-none">
<input className="mt-1 w-4 h-4 rounded text-primary accent-primary cursor-pointer focus:ring-0" id="termsCheck" required="" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface leading-snug">
                I agree to the <a className="text-primary font-medium underline underline-offset-2" href="#">Terms of Civic Service</a> and <a className="text-primary font-medium underline underline-offset-2" href="#">Privacy Policy</a>, and verify that I am a bona fide resident or business operator in this municipality.
              </span>
</label>

<label className="flex items-start gap-3 cursor-pointer group select-none">
<input defaultChecked={true} className="mt-1 w-4 h-4 rounded text-primary accent-primary cursor-pointer focus:ring-0" id="smsCheck" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface leading-snug">
                Send me real-time SMS progress updates and urgent municipal public works advisories for my Ward. (Recommended)
              </span>
</label>
</div>

<div className="pt-2">
<button className="w-full bg-primary hover:bg-primary-container text-on-primary py-3 px-6 rounded-lg font-label-lg text-label-lg font-semibold flex items-center justify-center gap-2 shadow-sm transition-all hover:shadow focus:outline-none" id="submitButton" type="submit">
<span>Create Resident Account & Verify</span>
<span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>
</form>
</div>

<div className="mt-8 pt-6 bg-surface-container-low -mx-6 -mb-6 sm:-mx-10 sm:-mb-10 p-6 rounded-b-xl flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-2 text-on-surface-variant font-body-md text-body-md">
<span>Already registered?</span>
<a className="font-semibold text-primary hover:text-primary-container underline underline-offset-2" href="#">Log in here</a>
</div>
<div className="flex items-center gap-2 text-outline font-label-sm text-label-sm">
<span className="material-symbols-outlined text-[16px] text-primary">security</span>
<span>Official Public Works Partner • Non-Commercial</span>
</div>
</div>
</div>
</div>

<div className="mt-6 flex flex-wrap items-center justify-between gap-4 px-2 py-3 bg-surface-container-low rounded-lg text-on-surface-variant">
<div className="flex items-center gap-3">
<span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
<span className="font-label-md text-label-md font-semibold text-on-surface">Municipal Node Online:</span>
<span className="font-mono-data text-mono-data">City Dispatch Server #042-East</span>
</div>
<div className="flex items-center gap-6 font-body-sm text-body-sm text-outline">
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">verified_user</span>
        256-Bit SSL Encrypted
      </span>
<span className="inline-flex items-center gap-1">
<span className="material-symbols-outlined text-[16px]">apartment</span>
        Council Dist. Verified
      </span>
<a className="hover:text-primary text-on-surface-variant underline" href="#">Resident Helpdesk</a>
</div>
</div>
</div>
</main>
    </div>
  );
}
