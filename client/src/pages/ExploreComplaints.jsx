import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

export default function ExploreComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedWard, setSelectedWard] = useState('all');

  const fetchExploreComplaints = async () => {
    try {
      setLoading(true);
      const res = await api.get('/complaints', {
        params: {
          search: search || undefined,
          ward: selectedWard !== 'all' ? selectedWard : undefined,
        },
      });
      if (res.data.success) {
        setComplaints(res.data.data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExploreComplaints();
  }, [selectedWard]);

  const handleUpvote = async (id) => {
    try {
      const res = await api.post(`/complaints/${id}/upvote`);
      if (res.data.success) {
        setComplaints(prev =>
          prev.map(c => (c._id === id ? { ...c, upvotes: res.data.upvotes } : c))
        );
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col font-sans antialiased">
      {/* Top Header */}
      <header className="h-20 bg-white border-b border-[#e2e8f0] px-8 flex items-center justify-between sticky top-0 z-30">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#005c55] text-white flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[20px]">apartment</span>
          </div>
          <span className="font-bold text-lg text-[#0f172a]">FixMyArea</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-[#475569]">
          <Link to="/" className="hover:text-[#005c55]">Home</Link>
          <Link to="/explore" className="text-[#005c55] font-bold">Explore Complaints</Link>
          <Link to="/how-it-works" className="hover:text-[#005c55]">How It Works</Link>
          <Link to="/citizen/dashboard" className="hover:text-[#005c55]">Citizen Portal</Link>
        </nav>

        <Link
          to="/report"
          className="h-10 px-4 rounded-xl bg-[#005c55] text-white font-bold text-xs flex items-center gap-1.5 hover:bg-[#004d47]"
        >
          <span className="material-symbols-outlined text-[18px]">add</span>
          <span>Report Problem</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="p-8 max-w-6xl w-full mx-auto space-y-6 flex-1">
        <div>
          <h1 className="text-3xl font-extrabold text-[#0f172a] tracking-tight">Public Civic Ledger</h1>
          <p className="text-xs text-[#64748b] mt-1">
            Open, transparent municipal transparency across all wards and service divisions. Upvote issues to escalate repair priority.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="bg-white p-4 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-wrap items-center justify-between gap-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              fetchExploreComplaints();
            }}
            className="relative flex-1 min-w-[280px]"
          >
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#94a3b8] text-[18px]">
              search
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by ticket #, street name, or keyword..."
              className="w-full h-10 pl-9 pr-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-xs text-[#0f172a] focus:outline-none focus:border-[#005c55]"
            />
          </form>

          <select
            value={selectedWard}
            onChange={(e) => setSelectedWard(e.target.value)}
            className="h-10 px-4 rounded-xl border border-[#e2e8f0] bg-white text-xs text-[#0f172a] focus:outline-none focus:border-[#005c55] cursor-pointer"
          >
            <option value="all">All Municipal Wards</option>
            <option value="Ward 01">Ward 01 - Downtown Metro</option>
            <option value="Ward 02">Ward 02 - East Riverfront</option>
            <option value="Ward 03">Ward 03 - North Highland</option>
            <option value="Ward 04">Ward 04 - Oakwood District</option>
            <option value="Ward 05">Ward 05 - West End & Industrial</option>
          </select>
        </div>

        {/* Complaints Grid */}
        {loading ? (
          <div className="py-20 text-center text-xs text-[#64748b]">
            <span className="material-symbols-outlined text-[32px] text-[#005c55] animate-spin mb-2">refresh</span>
            <p>Loading public civic ledger from database...</p>
          </div>
        ) : complaints.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-2xl border border-dashed border-[#cbd5e1] text-xs text-[#64748b]">
            No complaints found matching this query.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {complaints.map((c) => {
              const isResolved = c.status === 'resolved';
              return (
                <div
                  key={c._id}
                  className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm hover:border-[#005c55] hover:shadow-md transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-[#006780] bg-[#eff4ff] px-2.5 py-0.5 rounded">
                          #{c.ticketId}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#ecfdf5] text-[#059669]">
                          {c.status}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#94a3b8] font-bold uppercase">
                        {c.categoryName}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm text-[#0f172a]">{c.title}</h3>
                    <p className="text-xs text-[#64748b] leading-relaxed line-clamp-2">{c.description}</p>

                    <div className="flex items-center gap-2 text-[11px] text-[#64748b]">
                      <span className="material-symbols-outlined text-[14px]">location_on</span>
                      <span>{c.location?.address} • {c.location?.ward}</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#f1f5f9] flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleUpvote(c._id)}
                      className="px-3 py-1.5 rounded-xl border border-[#cbd5e1] hover:bg-[#eff4ff] hover:border-[#005c55] text-xs font-semibold text-[#005c55] flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[16px]">thumb_up</span>
                      <span>Upvote ({c.upvotes || 0})</span>
                    </button>

                    <Link
                      to={`/track?ticket=${c.ticketId}`}
                      className="text-xs font-bold text-[#006780] hover:underline flex items-center gap-1"
                    >
                      <span>Track Details</span>
                      <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
