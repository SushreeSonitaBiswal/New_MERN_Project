import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import api from '../services/api';
import Layout from '../components/Layout';

export default function ComplaintTracking() {
  const [searchParams] = useSearchParams();
  const ticketParam = searchParams.get('ticket') || 'FMA-4829';

  const [ticketInput, setTicketInput] = useState(ticketParam);
  const [complaint, setComplaint] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Rating State
  const [ratingScore, setRatingScore] = useState(5);
  const [feedback, setFeedback] = useState('');
  const [ratingSubmitted, setRatingSubmitted] = useState(false);
  const [ratingLoading, setRatingLoading] = useState(false);

  const fetchTicket = async (idToSearch) => {
    if (!idToSearch) return;
    setLoading(true);
    setError('');
    try {
      const res = await api.get(`/complaints/${idToSearch}`);
      if (res.data.success) {
        setComplaint(res.data.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Ticket not found. Verify the ID.');
      setComplaint(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (ticketParam) {
      fetchTicket(ticketParam);
    }
  }, [ticketParam]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (ticketInput.trim()) {
      fetchTicket(ticketInput.trim());
    }
  };

  const handleRatingSubmit = async (e) => {
    e.preventDefault();
    if (!complaint) return;
    setRatingLoading(true);

    try {
      const res = await api.post(`/complaints/${complaint._id}/rate`, {
        score: ratingScore,
        feedback,
      });
      if (res.data.success) {
        setRatingSubmitted(true);
        fetchTicket(complaint.ticketId);
      }
    } catch (err) {
      alert('Failed to submit rating.');
    } finally {
      setRatingLoading(false);
    }
  };

  return (
    <Layout title="Track & Rate Resolution" breadcrumb="Track by ID" portalType="citizen">
      <div className="max-w-5xl mx-auto space-y-6">
        {/* Quick Ticket Search Bar */}
        <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-[#0f172a]">Live Resolution Audit</h1>
            <p className="text-xs text-[#64748b]">Search any municipal dispatch ticket by code.</p>
          </div>
          <form onSubmit={handleSearchSubmit} className="flex items-center gap-2">
            <div className="relative w-64 md:w-80">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-[#94a3b8]">
                search
              </span>
              <input
                type="text"
                value={ticketInput}
                onChange={(e) => setTicketInput(e.target.value)}
                placeholder="Search by Ticket ID (e.g. FMA-4829)"
                className="w-full h-9 pl-9 pr-3 rounded-lg bg-[#f1f5f9] text-xs font-mono text-[#0f172a] focus:outline-none focus:ring-1 focus:ring-[#005c55]"
              />
            </div>
            <button
              type="submit"
              className="h-9 px-4 rounded-lg bg-[#005c55] text-white font-semibold text-xs hover:bg-[#004d47] transition-all cursor-pointer"
            >
              Track
            </button>
          </form>
        </div>
        {loading ? (
          <div className="p-16 text-center text-xs text-[#64748b]">
            <span className="material-symbols-outlined text-[32px] text-[#005c55] animate-spin mb-2">
              refresh
            </span>
            <p>Fetching municipal ticket data from database...</p>
          </div>
        ) : error ? (
          <div className="p-8 bg-white rounded-2xl border border-red-200 text-center space-y-3">
            <span className="material-symbols-outlined text-[32px] text-red-500">error</span>
            <p className="text-sm font-bold text-red-600">{error}</p>
            <p className="text-xs text-[#64748b]">
              Try searching for seeded tickets like <span className="font-mono font-bold">FMA-4829</span> or{' '}
              <span className="font-mono font-bold">FMA-7104</span>.
            </p>
          </div>
        ) : complaint ? (
          <div className="space-y-6">
            {/* Top Ticket Status Card */}
            <div className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-mono font-bold text-[#006780] text-sm bg-[#eff4ff] px-2.5 py-0.5 rounded-lg border border-[#dbeafe]">
                    #{complaint.ticketId}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#ecfdf5] text-[#059669] font-bold text-xs uppercase tracking-wider">
                    {complaint.status}
                  </span>
                  <span className="text-xs text-[#64748b]">Priority: {complaint.priority}</span>
                </div>
                <h1 className="text-xl font-bold text-[#0f172a]">{complaint.title}</h1>
                <p className="text-xs text-[#64748b] mt-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px]">location_on</span>
                  <span>{complaint.location?.address} ({complaint.location?.ward})</span>
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] text-right shrink-0">
                <p className="text-[10px] uppercase font-bold text-[#94a3b8]">Assigned Division</p>
                <p className="text-xs font-bold text-[#005c55] mt-0.5">{complaint.categoryName}</p>
                <p className="text-[11px] text-[#64748b] mt-1">
                  {complaint.assignedStaff ? `Crew Leader: ${complaint.assignedStaff.name}` : 'Dispatched to Fleet Unit'}
                </p>
              </div>
            </div>

            {/* Grid: Timeline Left | Evidence & Rating Right */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Timeline (7 cols) */}
              <div className="md:col-span-7 bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-[#f1f5f9] pb-3">
                  <h2 className="text-sm font-bold text-[#0f172a] flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#005c55] text-[18px]">history</span>
                    <span>Audit & Dispatch Lifecycle</span>
                  </h2>
                  <span className="text-[10px] text-[#64748b] font-mono">Immutable Logs</span>
                </div>

                <div className="space-y-4 pl-2 border-l-2 border-[#e2e8f0] ml-3 mt-4">
                  {complaint.timeline?.map((step, idx) => (
                    <div key={idx} className="relative pl-4">
                      <div className="absolute -left-[21px] top-0 w-3 h-3 rounded-full bg-[#005c55] ring-4 ring-white" />
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#0f172a] uppercase">{step.status}</span>
                        <span className="text-[10px] text-[#94a3b8]">
                          {new Date(step.timestamp).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-xs text-[#64748b] mt-0.5">{step.message}</p>
                      <p className="text-[10px] text-[#006780] font-medium mt-1">Action by: {step.actionBy}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photos & Rating (5 cols) */}
              <div className="md:col-span-5 space-y-6">
                {/* Photo Evidence */}
                <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] shadow-sm space-y-3">
                  <h3 className="text-xs font-bold text-[#0f172a] uppercase tracking-wider">
                    Photo Documentation
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {complaint.photos && complaint.photos.length > 0 ? (
                      complaint.photos.map((p, i) => (
                        <div key={i} className="rounded-xl overflow-hidden border border-[#e2e8f0] h-28">
                          <img src={p.url} alt="Evidence" className="w-full h-full object-cover" />
                        </div>
                      ))
                    ) : (
                      <div className="col-span-2 p-6 text-center text-xs text-[#94a3b8] border border-dashed rounded-xl">
                        No photos attached
                      </div>
                    )}
                  </div>
                </div>

                {/* Rating Widget */}
                <div className="bg-white p-5 rounded-2xl border border-[#e2e8f0] shadow-sm space-y-3">
                  <h3 className="text-xs font-bold text-[#0f172a] uppercase tracking-wider flex items-center justify-between">
                    <span>Citizen Satisfaction Rating</span>
                    {complaint.citizenRating?.score && (
                      <span className="text-[#eab308] font-bold font-mono">
                        {complaint.citizenRating.score} / 5 Stars
                      </span>
                    )}
                  </h3>

                  {complaint.citizenRating?.score ? (
                    <div className="p-4 rounded-xl bg-[#ecfdf5] border border-[#a7f3d0] text-xs space-y-1">
                      <p className="font-bold text-[#065f46]">Rating Recorded:</p>
                      <p className="text-[#047857]">"{complaint.citizenRating.feedback}"</p>
                    </div>
                  ) : ratingSubmitted ? (
                    <div className="p-4 rounded-xl bg-[#ecfdf5] text-xs font-bold text-[#065f46]">
                      Thank you! Your rating has been logged into the municipal scorecards.
                    </div>
                  ) : (
                    <form onSubmit={handleRatingSubmit} className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-[#64748b] mb-1">Select Score:</label>
                        <div className="flex gap-2">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setRatingScore(star)}
                              className={`w-9 h-9 rounded-lg font-bold text-xs flex items-center justify-center transition-all cursor-pointer ${
                                ratingScore >= star
                                  ? 'bg-[#eab308] text-white shadow-sm'
                                  : 'bg-[#f1f5f9] text-[#64748b]'
                              }`}
                            >
                              ★ {star}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <textarea
                          rows="2"
                          value={feedback}
                          onChange={(e) => setFeedback(e.target.value)}
                          placeholder="Leave feedback on repair quality & crew speed..."
                          className="w-full p-2.5 rounded-xl border border-[#cbd5e1] text-xs text-[#0f172a] focus:outline-none focus:border-[#005c55] resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={ratingLoading}
                        className="w-full py-2 px-4 rounded-xl bg-[#005c55] hover:bg-[#004d47] text-white text-xs font-bold transition-all shadow-sm cursor-pointer disabled:opacity-50"
                      >
                        {ratingLoading ? 'Submitting...' : 'Submit Citizen Rating'}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Layout>
  );
}
