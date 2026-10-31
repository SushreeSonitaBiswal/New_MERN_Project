import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';

export default function Login() {
  const [role, setRole] = useState('resident');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const { login, loading } = useAuth();
  const navigate = useNavigate();

  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    
    const result = await login(identifier, password);
    if (result.success) {
      if (result.user.role === 'admin') {
        navigate('/admin/complaints');
      } else if (result.user.role === 'staff') {
        navigate('/staff/workbench');
      } else {
        navigate('/citizen/dashboard');
      }
    } else {
      setErrorMessage(result.message);
    }
  };

  const fillDemoCredentials = (targetRole) => {
    setRole(targetRole);
    setErrorMessage('');
    if (targetRole === 'admin') {
      setIdentifier('admin@fixmyarea.gov');
      setPassword('Password123!');
    } else if (targetRole === 'staff') {
      setIdentifier('marcus@fixmyarea.gov');
      setPassword('Password123!');
    } else {
      setIdentifier('sarah.j@example.com');
      setPassword('Password123!');
    }
  };

  return (
    <div className="w-full min-h-screen bg-background flex flex-col justify-center items-center py-10 px-4 relative overflow-hidden font-sans">
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none" />

      <div className="w-full max-w-5xl bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden flex flex-col lg:flex-row relative z-10 border border-outline-variant/30">
        {/* Left Side */}
        <div className="lg:w-5/12 bg-surface-container-low p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden border-b lg:border-b-0 lg:border-r border-outline-variant/20">
          <div className="relative z-10">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <Logo className="w-11 h-11" />
              <div>
                <span className="text-xl font-bold text-on-surface tracking-tight">FixMyArea</span>
                <p className="text-xs text-on-surface-variant">Civic Action & Dispatch Network</p>
              </div>
            </Link>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-on-surface leading-tight">
                Empowering cleaner, safer neighborhoods.
              </h2>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                Connect directly with municipal public works departments, track incident lifecycles in real time, and audit civic infrastructure repairs.
              </p>
            </div>
          </div>

          <div className="mt-8 relative z-10 space-y-3">
            {/* Quick Demo Credentials Box */}
            <div className="p-3.5 rounded-xl bg-surface-container-lowest/90 border border-primary/20 text-xs space-y-2">
              <div className="flex items-center justify-between text-primary font-semibold">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">key</span>
                  Quick Demo Accounts
                </span>
                <span className="text-[10px] bg-primary/10 px-2 py-0.5 rounded-full">Click to Auto-fill</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => fillDemoCredentials('admin')}
                  className="px-2 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-left cursor-pointer transition-colors"
                >
                  <p className="font-semibold text-on-surface text-[11px]">Admin</p>
                  <p className="text-[10px] text-on-surface-variant truncate">admin@fixmyarea.gov</p>
                </button>
                <button
                  type="button"
                  onClick={() => fillDemoCredentials('staff')}
                  className="px-2 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-left cursor-pointer transition-colors"
                >
                  <p className="font-semibold text-on-surface text-[11px]">Field Staff</p>
                  <p className="text-[10px] text-on-surface-variant truncate">marcus@fixmyarea.gov</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="lg:w-7/12 p-8 lg:p-12 flex flex-col justify-center bg-surface-container-lowest">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-on-surface tracking-tight mb-1">
              Sign in to FixMyArea
            </h1>
            <p className="text-sm text-on-surface-variant">
              Access your civic dashboard to report issues or dispatch field crews.
            </p>
          </div>

          {errorMessage && (
            <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-xs flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">error</span>
              <span>{errorMessage}</span>
            </div>
          )}

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
                  placeholder="name@example.com or phone"
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
