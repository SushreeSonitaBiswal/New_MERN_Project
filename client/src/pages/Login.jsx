import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [role, setRole] = useState('resident');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (role === 'admin') {
        navigate('/admin/complaints');
      } else if (role === 'staff') {
        navigate('/staff/workbench');
      } else {
        navigate('/citizen/dashboard');
      }
    }, 600);
  };

  return (
    <div className="w-full min-h-screen bg-background flex flex-col justify-center items-center py-10 px-4 relative overflow-hidden font-sans">
      {/* Decorative Gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="w-full max-w-5xl bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row relative z-10 border border-outline-variant/30">
        {/* Left Side: Branding & Info */}
        <div className="lg:w-5/12 bg-surface-container-low p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-outline-variant/20">
          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-[24px]">shield_person</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-on-surface tracking-tight">FixMyArea</span>
                  <span className="px-2 py-0.5 rounded-full bg-primary-fixed-dim/40 text-on-primary-fixed-variant text-[10px] font-bold uppercase tracking-wider">
                    v2.4
                  </span>
                </div>
                <p className="text-xs text-on-surface-variant">Civic Action & Dispatch Network</p>
              </div>
            </Link>

            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-primary text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Municipal Dispatch Status: Operational
              </span>
              <h2 className="text-2xl font-bold text-on-surface leading-tight">
                Empowering cleaner, safer neighborhoods.
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Connect directly with municipal public works departments, track incident lifecycles in real time, and audit civic infrastructure repairs.
              </p>
            </div>
          </div>

          <div className="mt-8 relative z-10 space-y-3">
            <div className="p-4 rounded-xl bg-surface-container-lowest/90 backdrop-blur-sm shadow-sm flex items-center gap-3 border border-outline-variant/20">
              <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[20px]">verified</span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex justify-between items-center text-on-surface text-xs font-semibold">
                  <span className="truncate">Pothole Repair #4829</span>
                  <span className="text-primary font-mono text-[11px]">RESOLVED</span>
                </div>
                <p className="text-[11px] text-on-surface-variant truncate">Sector 4 • 14 mins ago via Field Operations</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-on-surface-variant text-[11px] px-1 pt-2">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">lock</span> ISO 27001 & SOC-2 Certified
              </span>
              <span className="font-mono text-[10px]">LATENCY: 24ms</span>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center bg-surface-container-lowest">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-on-surface tracking-tight mb-1">
              Sign in to FixMyArea
            </h1>
            <p className="text-sm text-on-surface-variant">
              Access your civic dashboard to report issues or dispatch field crews.
            </p>
          </div>

          {/* Role Tabs */}
          <div className="mb-6">
            <div className="p-1 rounded-xl bg-surface-container-low flex gap-1 items-center border border-outline-variant/30">
              <button
                type="button"
                onClick={() => setRole('resident')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  role === 'resident'
                    ? 'bg-surface-container-lowest text-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">home</span>
                <span>Resident</span>
              </button>

              <button
                type="button"
                onClick={() => setRole('staff')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  role === 'staff'
                    ? 'bg-surface-container-lowest text-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">engineering</span>
                <span>Municipal Staff</span>
              </button>

              <button
                type="button"
                onClick={() => setRole('admin')}
                className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  role === 'admin'
                    ? 'bg-surface-container-lowest text-primary shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
                <span>Admin</span>
              </button>
            </div>

            <div className="mt-2.5 flex items-start gap-2 px-1">
              <span className="material-symbols-outlined text-primary text-[16px] mt-0.5">info</span>
              <p className="text-xs text-on-surface-variant">
                {role === 'resident' && 'Residents: Sign in with your registered phone or email to track community incident reports.'}
                {role === 'staff' && 'Field Crew: Sign in with your municipal employee ID to manage dispatched work orders.'}
                {role === 'admin' && 'Administrators: Access high-level jurisdiction controls, SLAs, and municipal analytics.'}
              </p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={handleAuthSubmit}>
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-on-surface" htmlFor="identifier">
                Email address or Mobile number
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined text-outline absolute left-3 pointer-events-none text-[20px]">
                  contact_mail
                </span>
                <input
                  id="identifier"
                  type="text"
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="name@example.com or (555) 000-0000"
                  required
                  className="w-full h-11 pl-10 pr-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-outline text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-on-surface" htmlFor="password">
                Password
              </label>
              <div className="relative flex items-center">
                <span className="material-symbols-outlined text-outline absolute left-3 pointer-events-none text-[20px]">
                  lock
                </span>
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full h-11 pl-10 pr-12 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-on-surface placeholder:text-outline text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2.5 w-8 h-8 rounded flex items-center justify-center text-outline hover:text-on-surface transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {showPassword ? 'visibility_off' : 'visibility'}
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 rounded text-primary focus:ring-0 accent-primary cursor-pointer"
                />
                <span className="text-xs text-on-surface-variant hover:text-on-surface transition-colors">
                  Remember me for 30 days
                </span>
              </label>
              <a href="#" className="text-xs font-medium text-primary hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 mt-2 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-primary/20 cursor-pointer disabled:opacity-60"
            >
              <span>{loading ? 'Authenticating...' : `Sign in as ${role}`}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </form>

          {/* Register Link */}
          <div className="mt-6 pt-6 border-t border-outline-variant/30 text-center text-xs text-on-surface-variant">
            Don't have an account yet?{' '}
            <Link to="/register" className="font-semibold text-primary hover:underline">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
