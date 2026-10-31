import React, { useState } from 'react';
import Layout from '../components/Layout';

const INITIAL_NOTIFICATIONS = [
  {
    id: 'n-1',
    type: 'dispatch',
    typeLabel: 'Crew Dispatched',
    typeBadge: 'bg-teal-50 text-[#005c55] border-teal-200',
    icon: 'local_shipping',
    title: 'Field Crew Dispatched to #FMA-8492',
    ward: 'Ward 4 (4th Ave & Elm St)',
    timestamp: '12 mins ago',
    unread: true,
    content:
      'Public Works Hotbox Crew has departed the municipal depot and is en route to 4th Ave & Elm St for asphalt patching.',
    eta: '18 minutes',
    lead: 'C. Morales (Unit 4)',
  },
  {
    id: 'n-2',
    type: 'advisory',
    typeLabel: 'Ward Advisory',
    typeBadge: 'bg-rose-50 text-rose-700 border-rose-200',
    icon: 'warning',
    title: 'Water Main Maintenance Notice — Ward 4',
    ward: 'Ward 4 (Elmwood Terrace)',
    timestamp: '45 mins ago',
    unread: true,
    content:
      'Due to scheduled 16-inch main line repairs on Elmwood Terrace, low pressure may be experienced for the next 2 hours. Service will resume shortly.',
    eta: null,
    lead: 'Municipal Waterworks Team',
  },
  {
    id: 'n-3',
    type: 'resolution',
    typeLabel: 'Verification Needed',
    typeBadge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: 'task_alt',
    title: 'Repair Completed for #FMA-8421',
    ward: 'Ward 2 (Cedar St)',
    timestamp: '2 hours ago',
    unread: false,
    content:
      'Streetlight ballast converted to high-efficiency LED fixture. Please inspect the illumination and verify the repair when convenient.',
    eta: null,
    lead: 'Dave Miller (Lighting Division)',
  },
  {
    id: 'n-4',
    type: 'status',
    typeLabel: 'Ticket Triage',
    typeBadge: 'bg-sky-50 text-sky-700 border-sky-200',
    icon: 'assignment_turned_in',
    title: 'Complaint #FMA-8501 Assigned to Sanitation',
    ward: 'Ward 3 (Maple Ave)',
    timestamp: '3 hours ago',
    unread: false,
    content:
      'Illegal debris accumulation reported at corner park has been assigned to Rapid Sanitation Unit 03 for pickup.',
    eta: 'Tomorrow, 9:00 AM',
    lead: 'Dispatch Supervisor Vance',
  },
  {
    id: 'n-5',
    type: 'dispatch',
    typeLabel: 'Crew Dispatched',
    typeBadge: 'bg-teal-50 text-[#005c55] border-teal-200',
    icon: 'construction',
    title: 'Pothole Patching Scheduled #FMA-8488',
    ward: 'Ward 1 (Broad St)',
    timestamp: 'Yesterday',
    unread: false,
    content:
      'Pothole cold-mix repair scheduled. Street lane closure advisory posted for off-peak morning hours.',
    eta: null,
    lead: 'PW-Roads Alpha',
  },
];

export default function NotificationCenter() {
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [filter, setFilter] = useState('all');
  const [unreadOnly, setUnreadOnly] = useState(false);
  const [search, setSearch] = useState('');

  const [toastMessage, setToastMessage] = useState('');

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })));
    setToastMessage('All notifications marked as read.');
    setTimeout(() => setToastMessage(''), 3000);
  };

  const toggleRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, unread: !n.unread } : n))
    );
  };

  const filtered = notifications.filter((n) => {
    const matchesFilter = filter === 'all' || n.type === filter;
    const matchesUnread = !unreadOnly || n.unread;
    const matchesSearch =
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.content.toLowerCase().includes(search.toLowerCase()) ||
      n.ward.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesUnread && matchesSearch;
  });

  const unreadCount = notifications.filter((n) => n.unread).length;

  return (
    <Layout title="Notification Center" breadcrumb="Dispatch Alerts & Messages">
      <div className="flex flex-col w-full pb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
              <span>FixMyArea</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-[#005c55] font-semibold">Notification Center</span>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
                Notification Center &amp; Alerts
              </h1>
              {unreadCount > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-teal-50 border border-teal-200 text-[#005c55] text-xs font-bold">
                  {unreadCount} unread
                </span>
              )}
            </div>
            <p className="text-sm text-slate-600 mt-1">
              Real-time updates on ticket status changes, crew assignments, and municipal advisories.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={markAllRead}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors shadow-xs"
              type="button"
            >
              <span className="material-symbols-outlined text-[#005c55] text-[18px]">done_all</span>
              <span>Mark All as Read</span>
            </button>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs mb-6 flex flex-col lg:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0">
            {[
              { id: 'all', label: 'All Alerts', count: notifications.length },
              {
                id: 'dispatch',
                label: 'Crews',
                count: notifications.filter((n) => n.type === 'dispatch').length,
              },
              {
                id: 'advisory',
                label: 'Advisories',
                count: notifications.filter((n) => n.type === 'advisory').length,
              },
              {
                id: 'resolution',
                label: 'Verifications',
                count: notifications.filter((n) => n.type === 'resolution').length,
              },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-xl font-semibold text-xs transition-all flex items-center gap-1.5 shrink-0 ${
                  filter === tab.id
                    ? 'bg-[#005c55] text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    filter === tab.id ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between w-full lg:w-auto gap-3 shrink-0">
            <div className="relative w-full sm:w-60">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-slate-400">
                search
              </span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search notifications..."
                className="w-full h-9 pl-9 pr-3 rounded-xl bg-slate-50 text-slate-900 text-xs placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#005c55]/20 focus:bg-white border border-transparent focus:border-slate-300 transition-all"
              />
            </div>

            <label className="inline-flex items-center gap-2 cursor-pointer select-none shrink-0 text-xs text-slate-700 font-medium">
              <input
                type="checkbox"
                checked={unreadOnly}
                onChange={(e) => setUnreadOnly(e.target.checked)}
                className="w-4 h-4 accent-[#005c55] rounded"
              />
              <span>Unread only</span>
            </label>
          </div>
        </div>

        {/* Toast */}
        {toastMessage && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
            <span>{toastMessage}</span>
          </div>
        )}

        {/* 2-Column: Left Feed (8 cols), Right Settings & SMS Logs (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Notifications Feed */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {filtered.length === 0 ? (
              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 text-center">
                <span className="material-symbols-outlined text-[36px] text-slate-400">notifications_off</span>
                <p className="text-sm font-semibold text-slate-700 mt-2">No notifications found</p>
                <p className="text-xs text-slate-500 mt-0.5">You are all caught up on civic alerts!</p>
              </div>
            ) : (
              filtered.map((item) => (
                <div
                  key={item.id}
                  className={`bg-white rounded-2xl p-5 border transition-all ${
                    item.unread
                      ? 'border-[#005c55]/40 shadow-xs ring-1 ring-[#005c55]/10'
                      : 'border-slate-200/80 opacity-90'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#005c55] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span
                            className={`px-2 py-0.5 rounded-md border text-[10px] font-bold uppercase tracking-wider ${item.typeBadge}`}
                          >
                            {item.typeLabel}
                          </span>
                          <h3 className="font-bold text-slate-900 text-sm">{item.title}</h3>
                        </div>
                        <span className="text-xs text-slate-400 font-medium shrink-0">
                          {item.timestamp}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed mt-1">{item.content}</p>

                      <div className="flex flex-wrap items-center justify-between gap-3 mt-3 pt-3 border-t border-slate-100 text-xs">
                        <div className="flex items-center gap-3 text-slate-500 text-[11px]">
                          <span className="flex items-center gap-1 font-medium">
                            <span className="material-symbols-outlined text-[14px]">location_on</span>
                            {item.ward}
                          </span>
                          {item.eta && (
                            <span className="flex items-center gap-1 font-semibold text-[#005c55]">
                              <span className="material-symbols-outlined text-[14px]">navigation</span>
                              ETA: {item.eta}
                            </span>
                          )}
                          <span className="text-slate-400">· {item.lead}</span>
                        </div>

                        <button
                          onClick={() => toggleRead(item.id)}
                          className="text-xs font-semibold text-[#005c55] hover:underline"
                        >
                          {item.unread ? 'Mark as Read' : 'Mark as Unread'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Column: Preferences & SMS Logs */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* Delivery Preferences */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <div className="flex items-center gap-2 pb-3 border-b border-slate-100 mb-3">
                <span className="material-symbols-outlined text-[#005c55] text-[20px]">notifications_active</span>
                <h3 className="font-bold text-sm text-slate-900">Alert Preferences</h3>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-slate-800 block">SMS Instant Alerts</span>
                    <span className="text-[11px] text-slate-500">+1 (555) •••-8821</span>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#005c55] rounded" />
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-slate-800 block">Daily Email Digest</span>
                    <span className="text-[11px] text-slate-500">Every evening at 6:00 PM</span>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#005c55] rounded" />
                </div>

                <div className="flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-slate-800 block">Browser Push Notifications</span>
                    <span className="text-[11px] text-slate-500">Instant desktop popup</span>
                  </div>
                  <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#005c55] rounded" />
                </div>
              </div>
            </div>

            {/* Helpline quick card */}
            <div className="bg-slate-900 text-white rounded-2xl p-4.5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  24/7 Helpline
                </span>
                <span className="material-symbols-outlined text-slate-400 text-[18px]">phone</span>
              </div>
              <p className="text-xs text-slate-300">Oakwood Central Dispatch Line</p>
              <div className="text-lg font-bold text-white mt-1">(555) 311-CIVIC</div>
              <p className="text-[11px] text-slate-400 mt-2">
                Call for immediate water main, gas, or fallen tree blockages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
