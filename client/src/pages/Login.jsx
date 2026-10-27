import React from 'react';

export default function Login() {
  return (
    <div className="w-full min-h-screen">
      <main className="w-full"><div className="flex flex-col w-full py-8 md:py-16 px-4 items-center justify-center relative overflow-hidden">

<div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none"></div>
<div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none"></div>

<div className="w-full max-w-5xl bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden flex flex-col lg:flex-row relative z-10">

<div className="lg:w-5/12 bg-surface-container-low p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">

<div className="absolute inset-0 opacity-10 pointer-events-none">
<svg className="w-full h-full" height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="32" id="grid-auth" patternunits="userSpaceOnUse" width="32">
<path className="text-on-surface" d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid-auth)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="relative z-10">
<div className="flex items-center gap-3 mb-8">
<div className="w-11 h-11 rounded-lg bg-primary flex items-center justify-center text-on-primary shadow-sm">
<span className="material-symbols-outlined text-[24px]">shield_person</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">FixMyArea</span>
<span className="px-2 py-0.5 rounded-full bg-primary-fixed-dim/40 text-on-primary-fixed-variant font-label-sm text-label-sm uppercase tracking-wider">v2.4</span>
</div>
<p className="font-label-md text-label-md text-on-surface-variant">Civic Action & Dispatch Network</p>
</div>
</div>
<div className="space-y-4">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-primary font-label-md text-label-md">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Municipal Dispatch Status: Operational
          </span>
<h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight">
            Empowering cleaner, safer neighborhoods.
          </h2>
<p className="font-body-md text-body-md text-on-surface-variant">
            Connect directly with municipal public works departments, track incident lifecycles in real time, and audit civic infrastructure repairs.
          </p>
</div>
</div>

<div className="mt-8 relative z-10 space-y-3">

<div className="p-4 rounded-lg bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-on-primary-container/40 text-primary flex items-center justify-center">
<span className="material-symbols-outlined text-[18px]">verified</span>
</div>
<div className="min-w-0 flex-1">
<div className="flex justify-between items-center text-on-surface font-label-md text-label-md">
<span className="font-medium truncate">Pothole Repair #4829</span>
<span className="text-primary font-mono-data text-mono-data">RESOLVED</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant truncate">Sector 4 • 14 mins ago via Field Operations</p>
</div>
</div>

<div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm px-1 pt-2">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">lock</span> ISO 27001 & SOC-2 Certified
          </span>
<span className="font-mono-data text-mono-data">LATENCY: 24ms</span>
</div>
</div>
</div>

<div className="lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center bg-surface-container-lowest">

<div className="mb-6">
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-2">
          Sign in to FixMyArea
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant">
          Access your civic dashboard to report issues or dispatch field crews.
        </p>
</div>

<div className="mb-6">
<div aria-label="Sign-in role selector" className="p-1 rounded-lg bg-surface-container-low flex gap-1 items-center" role="tablist">
<button aria-selected="true" className="role-tab flex-1 py-2 px-3 rounded-md font-label-md text-label-md transition-all duration-150 flex items-center justify-center gap-2 bg-surface-container-lowest text-primary shadow-sm font-semibold" id="tab-resident" onclick="selectRole('resident')" role="tab" type="button">
<span className="material-symbols-outlined text-[18px]">home</span>
<span>Resident</span>
</button>
<button aria-selected="false" className="role-tab flex-1 py-2 px-3 rounded-md font-label-md text-label-md transition-all duration-150 flex items-center justify-center gap-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container" id="tab-staff" onclick="selectRole('staff')" role="tab" type="button">
<span className="material-symbols-outlined text-[18px]">engineering</span>
<span>Municipal Staff</span>
</button>
<button aria-selected="false" className="role-tab flex-1 py-2 px-3 rounded-md font-label-md text-label-md transition-all duration-150 flex items-center justify-center gap-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container" id="tab-admin" onclick="selectRole('admin')" role="tab" type="button">
<span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
<span>Admin</span>
</button>
</div>

<div className="mt-2.5 flex items-start gap-2 px-1">
<span className="material-symbols-outlined text-primary text-[16px] mt-0.5">info</span>
<p className="font-body-sm text-body-sm text-on-surface-variant" id="role-hint">
            Residents: Sign in with your registered phone or email to track community incident reports.
          </p>
</div>
</div>

<form className="space-y-4" id="auth-form" onsubmit="handleAuthSubmit(event)">

<div className="space-y-1.5">
<label className="block font-label-lg text-label-lg text-on-surface" htmlFor="identifier" id="label-identifier">
            Email address or Mobile number
          </label>
<div className="relative flex items-center">
<span className="material-symbols-outlined text-outline absolute left-3 pointer-events-none text-[20px]">
              contact_mail
            </span>
<input autoComplete="username" className="w-full h-11 pl-10 pr-4 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline-variant font-body-md text-body-md focus:bg-surface-container-low transition-colors duration-150 outline-none" id="identifier" name="identifier" placeholder="name@example.com or (555) 000-0000" required="" type="text"/>
</div>
</div>

<div className="space-y-1.5">
<label className="block font-label-lg text-label-lg text-on-surface" htmlFor="auth-password">
            Password
          </label>
<div className="relative flex items-center">
<span className="material-symbols-outlined text-outline absolute left-3 pointer-events-none text-[20px]">
              lock
            </span>
<input autoComplete="current-password" className="w-full h-11 pl-10 pr-12 rounded-lg bg-surface-container-lowest text-on-surface placeholder:text-outline-variant font-body-md text-body-md focus:bg-surface-container-low transition-colors duration-150 outline-none" id="auth-password" name="password" placeholder="••••••••" required="" type="password"/>
<button aria-label="Toggle password visibility" className="absolute right-2.5 w-8 h-8 rounded flex items-center justify-center text-outline hover:text-on-surface transition-colors" id="toggle-password-btn" onclick="togglePasswordVisibility()" type="button">
<span className="material-symbols-outlined text-[20px]" id="password-visibility-icon">visibility</span>
</button>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<label className="flex items-center gap-2.5 cursor-pointer select-none">
<input className="w-4 h-4 rounded text-primary focus:ring-0 focus:outline-none accent-primary cursor-pointer" id="remember-me" name="remember" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors">
              Remember me for 30 days
            </span>
</label>
<a className="font-label-lg text-label-lg text-primary hover:text-on-primary-fixed-variant transition-colors" href="#">
            Forgot password?
          </a>
</div>

<button className="w-full h-11 mt-2 rounded-lg bg-primary hover:bg-on-primary-fixed-variant text-on-primary font-label-lg text-label-lg transition-all duration-150 flex items-center justify-center gap-2 shadow-sm font-semibold group cursor-pointer" id="submit-button" type="submit">
<span id="btn-label-text">Sign In to Account</span>
<span className="material-symbols-outlined text-[20px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
</button>
</form>

<div className="mt-6">

<div className="relative flex items-center justify-center mb-6">
<div className="w-full h-px bg-surface-container-high"></div>
<span className="absolute px-3 bg-surface-container-lowest font-label-sm text-label-sm text-outline uppercase tracking-wider">
            Or sign in with verified civic identity
          </span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

<button className="h-11 px-4 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all flex items-center justify-center gap-2.5" onclick="triggerCivicSSO('GovPass')" type="button">
<div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-on-primary">
<span className="material-symbols-outlined text-[14px]">account_balance</span>
</div>
<span className="font-medium truncate">GovPass / CityID</span>
</button>

<button className="h-11 px-4 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-all flex items-center justify-center gap-2.5" onclick="triggerCivicSSO('Google')" type="button">

<svg className="w-4 h-4" viewbox="0 0 24 24">
<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"></path>
<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"></path>
</svg>
<span className="font-medium truncate">Google Account</span>
</button>
</div>
</div>

<div className="mt-8 pt-6 bg-transparent flex flex-col items-center text-center space-y-3">
<p className="font-body-md text-body-md text-on-surface-variant">
          Don't have an account yet? 
          <a className="font-semibold text-primary hover:text-on-primary-fixed-variant transition-colors ml-1" href="#">
            Register as a resident
          </a>
</p>
<div className="flex items-center justify-center gap-1.5 text-outline font-label-sm text-label-sm max-w-md">
<span className="material-symbols-outlined text-[14px]">encrypted</span>
<span>Protected by 256-bit Municipal Civic Data Encryption • <a className="hover:underline" href="#">Privacy Policy</a> & <a className="hover:underline" href="#">Terms</a></span>
</div>
</div>
</div>
</div>
</div>
</main>
    </div>
  );
}
