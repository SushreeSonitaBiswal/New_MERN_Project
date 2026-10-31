import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Logo from '../components/Logo';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [ward, setWard] = useState('Ward 04 - Oakwood District');
  const [errorMessage, setErrorMessage] = useState('');

  const { register, loading } = useAuth();
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const res = await register({ name, email, phone, password, ward, role: 'citizen' });
    if (res.success) {
      navigate('/citizen/dashboard');
    } else {
      setErrorMessage(res.message);
    }
  };

  return (
    <div className="w-full min-h-screen bg-background flex flex-col justify-center items-center py-10 px-4 relative overflow-hidden font-sans">
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none" />

      <div className="w-full max-w-xl bg-surface-container-lowest rounded-2xl shadow-xl overflow-hidden p-8 border border-outline-variant/30 relative z-10">
        <div className="flex items-center justify-between border-b border-outline-variant/20 pb-4 mb-6">
          <Link to="/" className="flex items-center gap-2">
            <Logo className="w-9 h-9" />
            <span className="text-lg font-bold text-on-surface">FixMyArea</span>
          </Link>
          <span className="text-xs text-on-surface-variant font-medium">Citizen Registration</span>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-on-surface">Create your account</h1>
          <p className="text-xs text-on-surface-variant mt-1">
            Join thousands of active residents tracking and solving neighborhood issues.
          </p>
        </div>

        {errorMessage && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-xs flex items-center gap-2">
            <span className="material-symbols-outlined text-[18px]">error</span>
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-on-surface mb-1">Full Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Jane Doe"
              className="w-full h-11 px-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@example.com"
                className="w-full h-11 px-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-on-surface mb-1">Phone Number</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 000-0000"
                className="w-full h-11 px-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-on-surface mb-1">Jurisdiction / Ward</label>
            <select
              value={ward}
              onChange={(e) => setWard(e.target.value)}
              className="w-full h-11 px-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer"
            >
              <option>Ward 01 - Downtown Metro</option>
              <option>Ward 02 - East Riverfront</option>
              <option>Ward 03 - North Highland</option>
              <option>Ward 04 - Oakwood District</option>
              <option>Ward 05 - West End & Industrial</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-on-surface mb-1">Password</label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create strong password"
                className="w-full h-11 pl-4 pr-11 rounded-xl bg-surface-container-lowest border border-outline-variant/40 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-outline hover:text-on-surface cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showPassword ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full h-11 mt-4 rounded-xl bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-primary/20 cursor-pointer disabled:opacity-60"
          >
            <span>{loading ? 'Creating Account...' : 'Complete Registration'}</span>
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
          </button>
        </form>

        <div className="mt-6 text-center text-xs text-on-surface-variant">
          Already registered?{' '}
          <Link to="/login" className="font-semibold text-primary hover:underline">
            Sign In here
          </Link>
        </div>
      </div>
    </div>
  );
}
