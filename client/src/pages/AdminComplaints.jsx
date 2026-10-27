import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function AdminComplaints() {
  const { user } = useAuth();
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [search, setSearch] = useState('');
  const [staffList, setStaffList] = useState([]);
  
  // Quick Dispatch Modal State
  const [dispatchModal, setDispatchModal] = useState(null);
  const [selectedStaff, setSelectedStaff] = useState('');
  const [selectedPriority, setSelectedPriority] = useState('high');
  const [dispatchLoading, setDispatchLoading] = useState(false);

  const fetchComplaints = async () => {
    try {
      setLoading(true);
      const res = await api.get('/admin/complaints', {
        params: {
          status: filterStatus !== 'all' ? filterStatus : undefined,
          priority: filterPriority !== 'all' ? filterPriority : undefined,
          search: search || undefined,
        },
      });
      if (res.data.success) {
        setComplaints(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching admin complaints:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchStaff = async () => {
    try {
      const res = await api.get('/admin/staff');
      if (res.data.success) {
        setStaffList(res.data.data);
      }
    } catch (err) {
      console.error('Error fetching staff list:', err);
    }
  };

  useEffect(() => {
    fetchComplaints();
    fetchStaff();
  }, [filterStatus, filterPriority]);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchComplaints();
  };

  const handleDispatchSubmit = async (e) => {
    e.preventDefault();
    if (!dispatchModal) return;
    setDispatchLoading(true);

    try {
      const res = await api.put(`/admin/complaints/${dispatchModal._id}/dispatch`, {
        staffId: selectedStaff || undefined,
        priority: selectedPriority,
        status: 'dispatched',
      });
      if (res.data.success) {
        setDispatchModal(null);
        fetchComplaints();
      }
    } catch (err) {
      alert('Failed to dispatch complaint.');
    } finally {
      setDispatchLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex font-sans antialiased">
      {/* 1. LEFT SIDEBAR */}
      <aside className="w-[260px] min-h-screen bg-white border-r border-[#e2e8f0] flex flex-col justify-between shrink-0 sticky top-0 h-screen z-30">
        <div className="flex flex-col">
          <div className="p-5 pb-3 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#b91c1c] text-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
            </div>
            <div>
              <h1 className="font-bold text-sm tracking-tight text-[#0f172a]">FixMyArea</h1>
              <p className="text-[10px] text-[#b91c1c] tracking-wider uppercase font-bold">
                Admin Command
              </p>
            </div>
          </div>

          <div className="px-5 py-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fef2f2] rounded-full text-xs font-semibold text-[#991b1b]">
              <span className="w-2 h-2 rounded-full bg-[#ef4444] animate-pulse"></span>
              <span>Central Dispatch • Admin</span>
            </div>
          </div>

          <nav className="px-3 py-3 space-y-1">
            <Link
              to="/admin/complaints"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-[#005c55] text-white font-medium text-xs shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">assignment</span>
              <span>Complaints Management</span>
            </Link>

            <Link
              to="/admin/staff"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[#475569] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-medium text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">group</span>
              <span>Staff &amp; Workload</span>
            </Link>

            <Link
              to="/admin/categories"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[#475569] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-medium text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">category</span>
              <span>Category Management</span>
            </Link>

            <Link
              to="/admin/analytics"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[#475569] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-medium text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">query_stats</span>
              <span>Reports &amp; Analytics</span>
            </Link>

            <Link
              to="/admin/settings"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[#475569] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-medium text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">settings</span>
              <span>System Settings</span>
            </Link>
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 space-y-2 border-t border-[#e2e8f0]">
          <Link
            to="/citizen/dashboard"
            className="flex items-center gap-2 p-2 rounded-lg text-xs font-semibold text-[#006780] hover:bg-[#eff4ff]"
          >
            <span className="material-symbols-outlined text-[18px]">visibility</span>
            <span>Switch to Citizen Portal</span>
          </Link>
          <div className="p-2.5 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] flex items-center justify-between text-xs">
            <div>
              <p className="font-bold text-[#0f172a]">{user?.name || 'Director Vance'}</p>
              <p className="text-[10px] text-[#94a3b8]">Municipal Operations</p>
            </div>
            <span className="px-2 py-0.5 rounded bg-[#fee2e2] text-[#991b1b] font-bold text-[10px] uppercase">
              Admin
            </span>
          </div>
        </div>
      </aside>

      {/* 2. MAIN ADMIN CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-[#e2e8f0] px-8 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-2 text-xs text-[#64748b]">
            <span className="font-semibold text-[#0f172a]">Admin Control</span>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#005c55] font-semibold">Incident Dispatch Queue</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#f1f5f9] text-xs font-mono font-bold text-[#334155]">
              API: /api/admin/complaints
            </span>
            <button
              onClick={fetchComplaints}
              className="h-9 px-3.5 rounded-lg bg-white border border-[#cbd5e1] text-xs font-semibold text-[#334155] flex items-center gap-1.5 hover:bg-[#f8fafc]"
            >
              <span className="material-symbols-outlined text-[16px]">refresh</span>
              <span>Refresh</span>
            </button>
          </div>
        </header>

        <main className="p-8 max-w-[1400px] w-full mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-[#0f172a] tracking-tight">
                Municipal Complaint Management
              </h1>
              <p className="text-xs text-[#64748b] mt-0.5">
                Audit citizen reports, assign heavy machinery crews, override SLAs, and verify resolution evidence.
              </p>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="bg-white p-4 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-wrap items-center justify-between gap-4">
            <form onSubmit={handleSearch} className="relative flex-1 min-w-[280px]">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-[#94a3b8]">
                search
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by ticket #, citizen name, address..."
                className="w-full h-10 pl-9 pr-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-xs text-[#0f172a] focus:outline-none focus:border-[#005c55]"
              />
            </form>

            <div className="flex items-center gap-3">
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="h-10 px-3 rounded-xl border border-[#e2e8f0] bg-white text-xs text-[#0f172a] focus:outline-none focus:border-[#005c55] cursor-pointer"
              >
                <option value="all">All Statuses</option>
                <option value="submitted">Submitted</option>
                <option value="dispatched">Dispatched</option>
                <option value="in-progress">In Progress</option>
                <option value="resolved">Resolved</option>
                <option value="closed">Closed</option>
              </select>

              <select
                value={filterPriority}
                onChange={(e) => setFilterPriority(e.target.value)}
                className="h-10 px-3 rounded-xl border border-[#e2e8f0] bg-white text-xs text-[#0f172a] focus:outline-none focus:border-[#005c55] cursor-pointer"
              >
                <option value="all">All Priorities</option>
                <option value="critical">Critical</option>
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>

          {/* Complaints Table */}
          <div className="bg-white rounded-2xl border border-[#e2e8f0] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#f8fafc] border-b border-[#e2e8f0] text-[#64748b] uppercase font-bold text-[10px] tracking-wider">
                  <tr>
                    <th className="py-3 px-4">Ticket ID</th>
                    <th className="py-3 px-4">Incident Title &amp; Address</th>
                    <th className="py-3 px-4">Category</th>
                    <th className="py-3 px-4">Priority</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Assigned Crew</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#f1f5f9]">
                  {loading ? (
                    <tr>
                      <td colSpan="7" className="py-12 text-center text-[#64748b]">
                        <span className="material-symbols-outlined text-[24px] text-[#005c55] animate-spin mb-1">
                          refresh
                        </span>
                        <p>Loading complaints from database...</p>
                      </td>
                    </tr>
                  ) : complaints.length === 0 ? (
                    <tr>
                      <td colSpan="7" className="py-12 text-center text-[#64748b]">
                        No complaints match your filters
                      </td>
                    </tr>
                  ) : (
                    complaints.map((c) => {
                      let pColor = 'bg-[#f1f5f9] text-[#64748b]';
                      if (c.priority === 'critical') pColor = 'bg-[#fee2e2] text-[#dc2626]';
                      if (c.priority === 'high') pColor = 'bg-[#ffedd5] text-[#ea580c]';
                      if (c.priority === 'medium') pColor = 'bg-[#fef9c3] text-[#854d0e]';

                      let sColor = 'bg-[#e0f2fe] text-[#0369a1]';
                      if (c.status === 'resolved') sColor = 'bg-[#ecfdf5] text-[#059669]';
                      if (c.status === 'in-progress') sColor = 'bg-[#ede9fe] text-[#6d28d9]';

                      return (
                        <tr key={c._id} className="hover:bg-[#f8fafc] transition-colors">
                          <td className="py-3 px-4 font-mono font-bold text-[#006780]">
                            #{c.ticketId}
                          </td>
                          <td className="py-3 px-4">
                            <p className="font-bold text-[#0f172a]">{c.title}</p>
                            <p className="text-[11px] text-[#64748b]">
                              {c.location?.address} • {c.location?.ward}
                            </p>
                          </td>
                          <td className="py-3 px-4 font-medium text-[#334155]">{c.categoryName}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${pColor}`}>
                              {c.priority}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${sColor}`}>
                              {c.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-[#334155]">
                            {c.assignedStaff ? (
                              <span className="font-semibold text-[#005c55]">{c.assignedStaff.name}</span>
                            ) : (
                              <span className="text-[#94a3b8] italic">Unassigned</span>
                            )}
                          </td>
                          <td className="py-3 px-4 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => {
                                  setDispatchModal(c);
                                  setSelectedStaff(c.assignedStaff?._id || '');
                                  setSelectedPriority(c.priority || 'high');
                                }}
                                className="px-3 py-1 rounded-lg bg-[#005c55] text-white font-semibold text-[11px] hover:bg-[#004d47] transition-all cursor-pointer"
                              >
                                Dispatch
                              </button>
                              <Link
                                to={`/track?ticket=${c.ticketId}`}
                                className="p-1 rounded-lg hover:bg-[#e2e8f0] text-[#64748b] hover:text-[#0f172a]"
                                title="View Public Ticket"
                              >
                                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* DISPATCH MODAL */}
      {dispatchModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-[#e2e8f0] pb-3">
              <div>
                <h3 className="text-base font-bold text-[#0f172a]">
                  Dispatch Ticket #{dispatchModal.ticketId}
                </h3>
                <p className="text-xs text-[#64748b]">{dispatchModal.title}</p>
              </div>
              <button
                onClick={() => setDispatchModal(null)}
                className="text-[#94a3b8] hover:text-[#0f172a]"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <form onSubmit={handleDispatchSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#0f172a] mb-1">
                  Assign Field Staff / Crew Leader
                </label>
                <select
                  value={selectedStaff}
                  onChange={(e) => setSelectedStaff(e.target.value)}
                  className="w-full h-11 px-3 rounded-xl border border-[#cbd5e1] text-xs text-[#0f172a] focus:outline-none focus:border-[#005c55] bg-white cursor-pointer"
                >
                  <option value="">Select Field Staff</option>
                  {staffList.map((s) => (
                    <option key={s._id} value={s._id}>
                      {s.name} ({s.department} • Active: {s.activeCount || 0})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0f172a] mb-1">
                  Urgency / Priority
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {['low', 'medium', 'high', 'critical'].map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => setSelectedPriority(p)}
                      className={`py-2 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                        selectedPriority === p
                          ? 'bg-[#005c55] text-white shadow-sm'
                          : 'bg-[#f1f5f9] text-[#64748b]'
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#f1f5f9]">
                <button
                  type="button"
                  onClick={() => setDispatchModal(null)}
                  className="px-4 py-2 rounded-xl border border-[#cbd5e1] text-xs font-semibold text-[#64748b]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={dispatchLoading}
                  className="px-5 py-2 rounded-xl bg-[#005c55] text-white text-xs font-bold hover:bg-[#004d47] transition-all cursor-pointer disabled:opacity-50"
                >
                  {dispatchLoading ? 'Dispatching...' : 'Confirm Dispatch'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
