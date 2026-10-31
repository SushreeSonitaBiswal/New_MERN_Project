import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';
import Layout from '../components/Layout';

export default function MyComplaints() {
  const { user } = useAuth();
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        setLoading(true);
        const res = await api.get('/complaints');
        if (res.data.success) {
          setComplaints(res.data.data);
        }
      } catch (err) {
        console.error('Error fetching complaints:', err);
      } finally {
        setLoading(false);
      }
    };
    fetchComplaints();
  }, []);

  const filtered = complaints.filter((c) => {
    if (filter === 'all') return true;
    return c.status === filter;
  });

  return (
    <Layout title="My Filed Complaints" breadcrumb="My Complaints" portalType="citizen">
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#0f172a]">My Filed Complaints</h1>
            <p className="text-xs text-[#64748b] mt-0.5">
              Audit the live lifecycle, field dispatch notes, and completion evidence for issues you filed.
            </p>
          </div>

            {/* Filter Tabs */}
            <div className="p-1 rounded-xl bg-white border border-[#e2e8f0] flex gap-1 shadow-sm">
              {['all', 'in-progress', 'resolved', 'submitted'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase transition-all cursor-pointer ${
                    filter === tab
                      ? 'bg-[#005c55] text-white shadow-sm'
                      : 'text-[#64748b] hover:bg-[#f1f5f9]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Cards List */}
          {loading ? (
            <div className="py-20 text-center text-xs text-[#64748b]">
              <span className="material-symbols-outlined text-[32px] text-[#005c55] animate-spin mb-2">refresh</span>
              <p>Loading complaints from database...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="p-12 rounded-2xl bg-white border border-dashed border-[#cbd5e1] text-center space-y-3">
              <span className="material-symbols-outlined text-[36px] text-[#94a3b8]">inbox</span>
              <p className="text-sm font-bold text-[#0f172a]">No complaints found in this view</p>
              <Link
                to="/report"
                className="inline-block px-5 py-2 rounded-xl bg-[#005c55] text-white text-xs font-bold"
              >
                File a Complaint
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {filtered.map((item) => {
                const isResolved = item.status === 'resolved';
                return (
                  <div
                    key={item._id}
                    className="p-6 rounded-2xl bg-white border border-[#e2e8f0] shadow-sm space-y-4 hover:border-[#cbd5e1] transition-all"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs">
                        <span className="font-mono font-bold text-[#006780] bg-[#eff4ff] px-2.5 py-0.5 rounded">
                          #{item.ticketId}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-[#ecfdf5] text-[#059669]">
                          {item.status}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">
                          {item.categoryName}
                        </span>
                      </div>
                      <span className="text-[11px] text-[#94a3b8]">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-[#0f172a]">{item.title}</h3>
                      <p className="text-xs text-[#64748b] mt-1 leading-relaxed">{item.description}</p>
                    </div>

                    <div className="flex items-center justify-between pt-3 border-t border-[#f1f5f9] text-xs">
                      <span className="text-[#64748b] flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px] text-[#94a3b8]">location_on</span>
                        <span>{item.location?.address} ({item.location?.ward})</span>
                      </span>

                      <div className="flex items-center gap-2">
                        {isResolved && (
                          <Link
                            to={`/track?ticket=${item.ticketId}`}
                            className="px-3.5 py-1.5 rounded-lg border border-[#eab308] text-[#854d0e] bg-[#fefce8] text-xs font-bold flex items-center gap-1"
                          >
                            <span className="material-symbols-outlined text-[14px]">star</span>
                            <span>Rate Work Quality</span>
                          </Link>
                        )}
                        <Link
                          to={`/track?ticket=${item.ticketId}`}
                          className="px-4 py-1.5 rounded-lg bg-[#005c55] text-white text-xs font-semibold flex items-center gap-1 hover:bg-[#004d47]"
                        >
                          <span>Full Audit Trail</span>
                          <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
    </Layout>
  );
}
