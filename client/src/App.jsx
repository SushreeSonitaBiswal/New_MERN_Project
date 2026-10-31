import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

// Import all 17 Stitch pages
import LandingPage from './pages/LandingPage';
import HowItWorks from './pages/HowItWorks';
import ExploreComplaints from './pages/ExploreComplaints';
import ReportComplaint from './pages/ReportComplaint';
import ComplaintTracking from './pages/ComplaintTracking';
import CitizenDashboard from './pages/CitizenDashboard';
import MyComplaints from './pages/MyComplaints';
import NotificationCenter from './pages/NotificationCenter';
import StaffWorkbench from './pages/StaffWorkbench';
import CompletedWorkHistory from './pages/CompletedWorkHistory';
import AdminComplaints from './pages/AdminComplaints';
import StaffWorkload from './pages/StaffWorkload';
import CategoryManagement from './pages/CategoryManagement';
import ReportsAnalytics from './pages/ReportsAnalytics';
import SystemSettings from './pages/SystemSettings';
import Login from './pages/Login';
import Register from './pages/Register';

const routesList = [
  { path: '/', label: 'Landing Page', category: 'Public' },
  { path: '/how-it-works', label: 'How It Works', category: 'Public' },
  { path: '/explore', label: 'Explore Complaints', category: 'Public' },
  { path: '/report', label: 'Report Complaint', category: 'Citizen' },
  { path: '/track', label: 'Track & Rate', category: 'Citizen' },
  { path: '/citizen/dashboard', label: 'Citizen Dashboard', category: 'Citizen' },
  { path: '/citizen/my-complaints', label: 'My Complaints', category: 'Citizen' },
  { path: '/notifications', label: 'Notification Center', category: 'Citizen' },
  { path: '/staff/workbench', label: 'Staff Workbench', category: 'Staff' },
  { path: '/staff/history', label: 'Completed Work History', category: 'Staff' },
  { path: '/admin/complaints', label: 'Complaint Management', category: 'Admin' },
  { path: '/admin/staff', label: 'Staff & Workload', category: 'Admin' },
  { path: '/admin/categories', label: 'Category Management', category: 'Admin' },
  { path: '/admin/analytics', label: 'Reports & Analytics', category: 'Admin' },
  { path: '/admin/settings', label: 'System Settings', category: 'Admin' },
  { path: '/login', label: 'Login', category: 'Auth' },
  { path: '/register', label: 'Register', category: 'Auth' },
];

function StitchNavigationOverlay() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="fixed bottom-5 right-5 z-[9999] font-sans">
      {/* Floating Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 text-white shadow-2xl backdrop-blur-md border border-slate-700/80 hover:bg-slate-800 transition-all cursor-pointer font-medium text-xs tracking-wide group"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse group-hover:scale-125 transition-transform" />
        <span>Screens ({routesList.length})</span>
        <span className="material-symbols-outlined text-[16px]">
          {open ? 'expand_more' : 'apps'}
        </span>
      </button>

      {/* Popout Screen Directory */}
      {open && (
        <div className="absolute bottom-14 right-0 w-80 max-h-[80vh] overflow-y-auto bg-slate-900/95 text-slate-100 rounded-2xl shadow-2xl border border-slate-800 p-4 backdrop-blur-xl animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
            <div>
              <h3 className="text-sm font-bold text-white">FixMyArea Stitch Screens</h3>
              <p className="text-[11px] text-slate-400">17 screens from project 8105988459316776604</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>

          <div className="space-y-4 text-xs">
            {['Public', 'Citizen', 'Staff', 'Admin', 'Auth'].map((cat) => {
              const items = routesList.filter((r) => r.category === cat);
              if (items.length === 0) return null;
              return (
                <div key={cat} className="space-y-1.5">
                  <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-500 px-2">
                    {cat}
                  </span>
                  <div className="space-y-1">
                    {items.map((route) => {
                      const isActive = location.pathname === route.path;
                      return (
                        <Link
                          key={route.path}
                          to={route.path}
                          onClick={() => setOpen(false)}
                          className={`flex items-center justify-between px-3 py-2 rounded-xl transition-all ${
                            isActive
                              ? 'bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30'
                              : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                          }`}
                        >
                          <span>{route.label}</span>
                          <span className="text-[10px] font-mono text-slate-500">
                            {route.path}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public Website Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/explore" element={<ExploreComplaints />} />
          <Route path="/track" element={<ComplaintTracking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* 1. CITIZEN WEBSITE / PORTAL (Role: resident, citizen) */}
          <Route
            path="/citizen/dashboard"
            element={
              <ProtectedRoute allowedRoles={['resident', 'citizen']}>
                <CitizenDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/report"
            element={
              <ProtectedRoute allowedRoles={['resident', 'citizen']}>
                <ReportComplaint />
              </ProtectedRoute>
            }
          />
          <Route
            path="/citizen/my-complaints"
            element={
              <ProtectedRoute allowedRoles={['resident', 'citizen']}>
                <MyComplaints />
              </ProtectedRoute>
            }
          />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute allowedRoles={['resident', 'citizen', 'staff', 'admin']}>
                <NotificationCenter />
              </ProtectedRoute>
            }
          />

          {/* 2. STAFF WEBSITE / PORTAL (Role: staff) */}
          <Route
            path="/staff/workbench"
            element={
              <ProtectedRoute allowedRoles={['staff']}>
                <StaffWorkbench />
              </ProtectedRoute>
            }
          />
          <Route
            path="/staff/history"
            element={
              <ProtectedRoute allowedRoles={['staff']}>
                <CompletedWorkHistory />
              </ProtectedRoute>
            }
          />

          {/* 3. ADMIN WEBSITE / PORTAL (Role: admin) */}
          <Route
            path="/admin/complaints"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminComplaints />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/staff"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <StaffWorkload />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/categories"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <CategoryManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/analytics"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <ReportsAnalytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/settings"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <SystemSettings />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
