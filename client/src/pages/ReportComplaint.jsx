import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import api from '../services/api';
import { useAuth } from '../context/AuthContext';

export default function ReportComplaint() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Step state (1: Category, 2: Details, 3: Location, 4: Review)
  const [step, setStep] = useState(1);

  // Form State
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [address, setAddress] = useState('Corner of 4th Ave & Oakwood St');
  const [ward, setWard] = useState('Ward 04 - Oakwood District');
  const [landmark, setLandmark] = useState('Opposite Central Public Library');
  const [citizenName, setCitizenName] = useState(user?.name || 'Sarah Jenkins');
  const [citizenEmail, setCitizenEmail] = useState(user?.email || 'sarah.j@example.com');
  const [citizenPhone, setCitizenPhone] = useState(user?.phone || '(555) 345-9876');
  const [photoUrl, setPhotoUrl] = useState('https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=400&q=80');
  
  const [submitting, setSubmitting] = useState(false);
  const [successTicket, setSuccessTicket] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await api.get('/categories');
        if (res.data.success && res.data.data.length > 0) {
          setCategories(res.data.data);
          const initialParam = searchParams.get('category');
          if (initialParam) {
            const matched = res.data.data.find(c => c.name.toLowerCase().includes(initialParam.toLowerCase()));
            if (matched) {
              setSelectedCategory(matched);
              setStep(2);
            } else {
              setSelectedCategory(res.data.data[0]);
            }
          } else {
            setSelectedCategory(res.data.data[0]);
          }
        }
      } catch (e) {
        console.error('Error fetching categories:', e);
      }
    };
    fetchCategories();
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const payload = {
        title,
        description,
        categoryId: selectedCategory?._id,
        categoryName: selectedCategory?.name || 'General Civic Issue',
        priority,
        location: {
          address,
          ward,
          landmark,
        },
        citizenContact: {
          name: citizenName,
          email: citizenEmail,
          phone: citizenPhone,
        },
        photos: photoUrl ? [{ url: photoUrl, caption: 'Initial citizen photo evidence' }] : [],
      };

      const res = await api.post('/complaints', payload);
      if (res.data.success) {
        setSuccessTicket(res.data.data);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to submit complaint. Please check your connection.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex font-sans antialiased">
      {/* 1. LEFT SIDEBAR */}
      <aside className="w-[260px] min-h-screen bg-white border-r border-[#e2e8f0] flex flex-col justify-between shrink-0 sticky top-0 h-screen z-30">
        <div className="flex flex-col">
          <div className="p-5 pb-3 flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#005c55] text-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[20px]">apartment</span>
            </div>
            <div>
              <h1 className="font-bold text-sm tracking-tight text-[#0b1c30]">FixMyArea</h1>
              <p className="text-[10px] text-[#64748b] tracking-wider uppercase font-semibold">
                Municipal Portal
              </p>
            </div>
          </div>

          <div className="px-5 py-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eff4ff] rounded-full text-xs font-medium text-[#1e293b]">
              <span className="w-2 h-2 rounded-full bg-[#005c55] animate-pulse"></span>
              <span>Civic Portal • Live</span>
            </div>
          </div>

          <nav className="px-3 py-3 space-y-1">
            <Link
              to="/citizen/dashboard"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[#475569] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-medium text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">dashboard</span>
              <span>Dashboard</span>
            </Link>

            <Link
              to="/report"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg bg-[#005c55] text-white font-medium text-xs shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">add_alert</span>
              <span>Report Issue</span>
            </Link>

            <Link
              to="/citizen/my-complaints"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[#475569] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-medium text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">assignment</span>
              <span>My Complaints</span>
            </Link>

            <Link
              to="/staff/workbench"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[#475569] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-medium text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">engineering</span>
              <span>Staff Workbench</span>
            </Link>

            <Link
              to="/admin/complaints"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[#475569] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-medium text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">admin_panel_settings</span>
              <span>Admin Management</span>
            </Link>

            <Link
              to="/admin/analytics"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[#475569] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-medium text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">query_stats</span>
              <span>Analytics</span>
            </Link>

            <Link
              to="/admin/settings"
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-[#475569] hover:bg-[#eff4ff] hover:text-[#0b1c30] font-medium text-xs transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">settings</span>
              <span>Settings</span>
            </Link>
          </nav>
        </div>

        <div className="p-4 space-y-3">
          <div className="p-3 rounded-xl bg-[#eff4ff] border border-[#dbeafe] flex items-center gap-3">
            <span className="material-symbols-outlined text-[#006780] text-[22px]">support_agent</span>
            <div>
              <p className="text-xs font-semibold text-[#0f172a]">Municipal Helpline</p>
              <p className="text-[11px] text-[#64748b]">Dial 311 (24/7 Support)</p>
            </div>
          </div>

          <div className="p-2.5 rounded-xl bg-white border border-[#e2e8f0] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=80&q=80"
                alt="Profile"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-[#005c55]/20"
              />
              <div>
                <p className="text-xs font-bold text-[#0f172a] leading-tight">{user?.name || 'Sarah Jenkins'}</p>
                <p className="text-[10px] text-[#64748b]">Verified Citizen</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* 2. MAIN REPORT FORM CONTENT */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="h-16 bg-white border-b border-[#e2e8f0] px-8 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-2 text-xs text-[#64748b]">
            <Link to="/citizen/dashboard" className="font-semibold text-[#0f172a] hover:underline">
              FixMyArea
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-[#005c55] font-semibold">Report a Problem</span>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/citizen/dashboard"
              className="h-9 px-4 rounded-lg border border-[#cbd5e1] text-[#334155] font-semibold text-xs flex items-center gap-1.5 hover:bg-[#f8fafc]"
            >
              Cancel
            </Link>
          </div>
        </header>

        <main className="p-8 max-w-4xl w-full mx-auto space-y-6">
          {/* Header Banner */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#eff4ff] text-[#006780] rounded-full text-xs font-mono font-semibold mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#006780]"></span>
              <span>MUNICIPAL TICKET DISPATCH • DEPT OF PUBLIC WORKS</span>
            </div>
            <h1 className="text-2xl font-bold text-[#0f172a] tracking-tight">Report a Civic Issue</h1>
            <p className="text-xs text-[#64748b] mt-1">
              Provide accurate location and details to dispatch the right municipal field crew with proper heavy equipment.
            </p>
          </div>

          {/* Stepper Progress Bar */}
          <div className="bg-white p-4 rounded-2xl border border-[#e2e8f0] shadow-sm grid grid-cols-4 gap-2">
            {[
              { num: 1, title: 'Category & Type' },
              { num: 2, title: 'Issue Details' },
              { num: 3, title: 'Location & Photos' },
              { num: 4, title: 'Review & Dispatch' },
            ].map((s) => {
              const isCurrent = step === s.num;
              const isDone = step > s.num;
              return (
                <button
                  key={s.num}
                  type="button"
                  onClick={() => setStep(s.num)}
                  className={`flex items-center gap-2.5 p-2 rounded-xl text-left transition-all cursor-pointer ${
                    isCurrent
                      ? 'bg-[#eff4ff] border border-[#dbeafe]'
                      : 'hover:bg-[#f8fafc]'
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                      isDone
                        ? 'bg-[#005c55] text-white'
                        : isCurrent
                        ? 'bg-[#006780] text-white'
                        : 'bg-[#e2e8f0] text-[#64748b]'
                    }`}
                  >
                    {isDone ? <span className="material-symbols-outlined text-[16px]">check</span> : s.num}
                  </div>
                  <div className="min-w-0 hidden sm:block">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#94a3b8]">Step 0{s.num}</p>
                    <p className={`text-xs font-semibold truncate ${isCurrent ? 'text-[#005c55]' : 'text-[#334155]'}`}>
                      {s.title}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Success Screen */}
          {successTicket ? (
            <div className="bg-white p-8 rounded-2xl border border-[#e2e8f0] shadow-sm text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-[#ecfdf5] text-[#059669] flex items-center justify-center mx-auto shadow-sm">
                <span className="material-symbols-outlined text-[36px]">check_circle</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-[#0f172a]">Ticket Successfully Logged!</h2>
                <p className="text-xs text-[#64748b] mt-1 max-w-md mx-auto">
                  Your issue has been recorded in the central municipal system and routed to the appropriate department.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#f8fafc] border border-[#e2e8f0] inline-block text-left text-xs font-mono max-w-sm w-full mx-auto space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#64748b]">TICKET ID:</span>
                  <span className="font-bold text-[#005c55]">#{successTicket.ticketId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">CATEGORY:</span>
                  <span className="font-bold text-[#0f172a]">{successTicket.categoryName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">WARD:</span>
                  <span className="text-[#0f172a]">{successTicket.location?.ward}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#64748b]">STATUS:</span>
                  <span className="px-2 py-0.5 rounded bg-[#e0f2fe] text-[#0369a1] font-bold uppercase text-[10px]">
                    {successTicket.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-4">
                <Link
                  to={`/track?ticket=${successTicket.ticketId}`}
                  className="px-5 py-2.5 rounded-xl bg-[#005c55] text-white font-semibold text-xs shadow-md shadow-[#005c55]/20 hover:bg-[#004d47]"
                >
                  Track Incident Live
                </Link>
                <Link
                  to="/citizen/dashboard"
                  className="px-5 py-2.5 rounded-xl border border-[#cbd5e1] text-[#334155] font-semibold text-xs hover:bg-[#f8fafc]"
                >
                  Return to Dashboard
                </Link>
              </div>
            </div>
          ) : (
            /* Multi-step Form */
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl border border-[#e2e8f0] shadow-sm space-y-6">
              {error && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-600 text-xs flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]">error</span>
                  <span>{error}</span>
                </div>
              )}

              {/* STEP 1: CATEGORY SELECTION */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-[#0f172a]">Select Civic Issue Category</h3>
                    <p className="text-xs text-[#64748b]">Choose the municipal division responsible for this repair</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {categories.map((cat) => {
                      const selected = selectedCategory?._id === cat._id;
                      return (
                        <div
                          key={cat._id}
                          onClick={() => setSelectedCategory(cat)}
                          className={`p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                            selected
                              ? 'bg-[#eff4ff] border-[#005c55] shadow-sm ring-1 ring-[#005c55]'
                              : 'border-[#e2e8f0] hover:border-[#cbd5e1] hover:bg-[#f8fafc]'
                          }`}
                        >
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white font-bold"
                            style={{ backgroundColor: cat.color || '#005c55' }}
                          >
                            <span className="material-symbols-outlined text-[20px]">
                              {cat.icon || 'build'}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2">
                              <h4 className="text-xs font-bold text-[#0f172a]">{cat.name}</h4>
                              <span className="text-[10px] font-bold font-mono px-1.5 py-0.2 bg-[#f1f5f9] rounded text-[#64748b]">
                                {cat.code}
                              </span>
                            </div>
                            <p className="text-[11px] text-[#64748b] mt-0.5">{cat.description || cat.department}</p>
                            <p className="text-[10px] text-[#006780] font-semibold mt-1">
                              Standard SLA: {cat.slaHours} Hours
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-end pt-4">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 rounded-xl bg-[#005c55] text-white font-semibold text-xs flex items-center gap-2 hover:bg-[#004d47] transition-all shadow-sm cursor-pointer"
                    >
                      <span>Continue to Details</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: ISSUE DETAILS */}
              {step === 2 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-[#0f172a]">Incident Details</h3>
                    <p className="text-xs text-[#64748b]">Provide a clear headline and descriptive overview</p>
                  </div>

                  <div className="space-y-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-[#0f172a] mb-1">
                        Incident Headline / Title *
                      </label>
                      <input
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="e.g. Dangerous 3-foot pothole near Oakwood High crosswalk"
                        className="w-full h-11 px-4 rounded-xl border border-[#cbd5e1] text-xs text-[#0f172a] focus:outline-none focus:border-[#005c55] focus:ring-1 focus:ring-[#005c55]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0f172a] mb-1">
                        Detailed Description *
                      </label>
                      <textarea
                        required
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Describe severity, hazards to vehicles or pedestrians, water depth, exposed wires, etc."
                        className="w-full p-4 rounded-xl border border-[#cbd5e1] text-xs text-[#0f172a] focus:outline-none focus:border-[#005c55] focus:ring-1 focus:ring-[#005c55] resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0f172a] mb-1">
                        Urgency Level
                      </label>
                      <div className="grid grid-cols-4 gap-2">
                        {['low', 'medium', 'high', 'critical'].map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setPriority(p)}
                            className={`py-2 px-3 rounded-lg text-xs font-bold uppercase transition-all cursor-pointer ${
                              priority === p
                                ? 'bg-[#005c55] text-white shadow-sm'
                                : 'bg-[#f1f5f9] text-[#64748b] hover:bg-[#e2e8f0]'
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-[#f1f5f9]">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-2 rounded-lg border border-[#cbd5e1] text-xs font-semibold text-[#475569]"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      disabled={!title.trim() || !description.trim()}
                      className="px-6 py-2.5 rounded-xl bg-[#005c55] text-white font-semibold text-xs flex items-center gap-2 hover:bg-[#004d47] transition-all disabled:opacity-50 cursor-pointer"
                    >
                      <span>Continue to Location</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: LOCATION & PHOTO */}
              {step === 3 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-[#0f172a]">Location &amp; Evidence Photo</h3>
                    <p className="text-xs text-[#64748b]">Help crews navigate precisely to the repair site</p>
                  </div>

                  <div className="space-y-3.5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0f172a] mb-1">
                          Street Address / Intersection *
                        </label>
                        <input
                          type="text"
                          required
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="e.g. 4th Ave & Elm Street"
                          className="w-full h-11 px-4 rounded-xl border border-[#cbd5e1] text-xs text-[#0f172a] focus:outline-none focus:border-[#005c55]"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-[#0f172a] mb-1">
                          Municipal Ward / Sector *
                        </label>
                        <select
                          value={ward}
                          onChange={(e) => setWard(e.target.value)}
                          className="w-full h-11 px-4 rounded-xl border border-[#cbd5e1] text-xs text-[#0f172a] focus:outline-none focus:border-[#005c55] bg-white cursor-pointer"
                        >
                          <option>Ward 01 - Downtown Metro</option>
                          <option>Ward 02 - East Riverfront</option>
                          <option>Ward 03 - North Highland</option>
                          <option>Ward 04 - Oakwood District</option>
                          <option>Ward 05 - West End & Industrial</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0f172a] mb-1">
                        Nearest Landmark (Optional)
                      </label>
                      <input
                        type="text"
                        value={landmark}
                        onChange={(e) => setLandmark(e.target.value)}
                        placeholder="e.g. Opposite Oakwood High School Entrance"
                        className="w-full h-11 px-4 rounded-xl border border-[#cbd5e1] text-xs text-[#0f172a] focus:outline-none focus:border-[#005c55]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#0f172a] mb-1">
                        Photo Evidence URL
                      </label>
                      <input
                        type="url"
                        value={photoUrl}
                        onChange={(e) => setPhotoUrl(e.target.value)}
                        placeholder="https://..."
                        className="w-full h-11 px-4 rounded-xl border border-[#cbd5e1] text-xs text-[#0f172a] focus:outline-none focus:border-[#005c55]"
                      />
                      {photoUrl && (
                        <div className="mt-2 w-32 h-20 rounded-lg overflow-hidden border border-[#e2e8f0]">
                          <img src={photoUrl} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-[#f1f5f9]">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-5 py-2 rounded-lg border border-[#cbd5e1] text-xs font-semibold text-[#475569]"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      disabled={!address.trim()}
                      className="px-6 py-2.5 rounded-xl bg-[#005c55] text-white font-semibold text-xs flex items-center gap-2 hover:bg-[#004d47] transition-all disabled:opacity-50 cursor-pointer"
                    >
                      <span>Review Ticket</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 4: REVIEW & SUBMIT */}
              {step === 4 && (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-[#0f172a]">Review Ticket Before Dispatch</h3>
                    <p className="text-xs text-[#64748b]">Ensure details are accurate before lodging into the municipal queue</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[#eff4ff]/60 border border-[#dbeafe] space-y-3 text-xs">
                    <div className="flex items-center justify-between border-b border-[#cbd5e1]/40 pb-2.5">
                      <span className="font-semibold text-[#64748b]">Selected Department:</span>
                      <span className="font-bold text-[#005c55]">{selectedCategory?.name} ({selectedCategory?.code})</span>
                    </div>

                    <div className="flex items-center justify-between border-b border-[#cbd5e1]/40 pb-2.5">
                      <span className="font-semibold text-[#64748b]">Priority:</span>
                      <span className="px-2 py-0.5 rounded bg-[#fef3c7] text-[#92400e] font-bold uppercase text-[10px]">
                        {priority}
                      </span>
                    </div>

                    <div className="border-b border-[#cbd5e1]/40 pb-2.5">
                      <span className="font-semibold text-[#64748b] block mb-1">Issue Title:</span>
                      <p className="font-bold text-[#0f172a]">{title}</p>
                    </div>

                    <div className="border-b border-[#cbd5e1]/40 pb-2.5">
                      <span className="font-semibold text-[#64748b] block mb-1">Location:</span>
                      <p className="text-[#0f172a]">{address} — {ward}</p>
                      {landmark && <p className="text-[11px] text-[#64748b]">Landmark: {landmark}</p>}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-[#64748b]">Reporting Citizen:</span>
                      <span className="text-[#0f172a]">{citizenName} ({citizenPhone})</span>
                    </div>
                  </div>

                  <div className="flex justify-between pt-4 border-t border-[#f1f5f9]">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="px-5 py-2 rounded-lg border border-[#cbd5e1] text-xs font-semibold text-[#475569]"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-8 py-3 rounded-xl bg-[#005c55] hover:bg-[#004d47] text-white font-bold text-xs flex items-center gap-2 shadow-md shadow-[#005c55]/20 cursor-pointer disabled:opacity-50"
                    >
                      <span className="material-symbols-outlined text-[18px]">send</span>
                      <span>{submitting ? 'Submitting to Municipal Queue...' : 'Confirm & Dispatch Ticket'}</span>
                    </button>
                  </div>
                </div>
              )}
            </form>
          )}
        </main>
      </div>
    </div>
  );
}
