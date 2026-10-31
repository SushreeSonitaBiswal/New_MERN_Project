import React, { useState } from 'react';
import Layout from '../components/Layout';

export default function StaffWorkload() {
  const [searchTerm, setSearchTerm] = useState('');
  const [wardFilter, setWardFilter] = useState('All');
  const [selectedStaff, setSelectedStaff] = useState(null);
  const [reassignModalOpen, setReassignModalOpen] = useState(false);
  const [notification, setNotification] = useState(null);

  const initialStaff = [
    {
      id: '#PW-8821',
      name: 'Dave Miller',
      role: 'Senior Lineman / Heavy Equip',
      department: 'Roads & Surface',
      ward: 'Ward 4 - Oakwood',
      status: 'Overloaded',
      statusColor: 'bg-red-50 text-red-700 border-red-200',
      workloadCount: 4,
      workloadMax: 4,
      loadPercent: 100,
      sla: '99.4%',
      rating: '4.9',
      activeTickets: ['#9102 Sinkhole', '#8492 Asphalt', '+2 more'],
      vehicle: 'Truck EMU-02',
      telemetry: '99.8% GPS Fix',
      speed: '14 mph',
      route: 'Main St → 4th Ave',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces',
    },
    {
      id: '#SN-4412',
      name: 'Amina Patel',
      role: 'Sanitation Lead',
      department: 'Sanitation & Spill',
      ward: 'Ward 4 - Oakwood',
      status: 'En Route',
      statusColor: 'bg-blue-50 text-blue-700 border-blue-200',
      workloadCount: 3,
      workloadMax: 5,
      loadPercent: 60,
      sla: '97.8%',
      rating: '4.8',
      activeTickets: ['#9088 Fuel Spill', '#8911 Bio-Waste'],
      vehicle: 'Van SN-09',
      telemetry: '99.1% GPS Fix',
      speed: '22 mph',
      route: 'Pine Rd → Industrial Blvd',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=faces',
    },
    {
      id: '#EL-0914',
      name: 'Carlos Mendez',
      role: 'Traffic & Signal Tech',
      department: 'Electrical & Traffic',
      ward: 'Ward 4 - Oakwood',
      status: 'Standby',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      workloadCount: 1,
      workloadMax: 4,
      loadPercent: 25,
      sla: '94.2%',
      rating: '4.7',
      activeTickets: ['#8701 Signal Head'],
      vehicle: 'Rig EL-04',
      telemetry: '100% Stationed',
      speed: '0 mph',
      route: 'Substation Yard 04',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces',
    },
    {
      id: '#WW-3390',
      name: 'Elena Rostova',
      role: 'Drainage & Water Inspector',
      department: 'Water & Drainage',
      ward: 'Ward 3 - Riverside',
      status: 'Active',
      statusColor: 'bg-teal-50 text-teal-700 border-teal-200',
      workloadCount: 3,
      workloadMax: 4,
      loadPercent: 75,
      sla: '99.1%',
      rating: '5.0',
      activeTickets: ['#9012 Main Burst', '#8944 Storm Gate'],
      vehicle: 'Pump Truck WT-11',
      telemetry: '98.5% GPS Fix',
      speed: '8 mph',
      route: 'Riverside Riverbank St',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=faces',
    },
  ];

  const [staffList, setStaffList] = useState(initialStaff);
  const activeStaff = selectedStaff || staffList[0];

  const filteredStaff = staffList.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesWard = wardFilter === 'All' || s.ward.includes(wardFilter);
    return matchesSearch && matchesWard;
  });

  const showToast = (msg) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleRebalance = () => {
    setStaffList((prev) =>
      prev.map((s) => {
        if (s.id === '#PW-8821') {
          return {
            ...s,
            workloadCount: 3,
            loadPercent: 75,
            status: 'Active',
            statusColor: 'bg-teal-50 text-teal-700 border-teal-200',
            activeTickets: ['#8492 Asphalt', '+2 more'],
          };
        }
        if (s.id === '#EL-0914') {
          return {
            ...s,
            workloadCount: 2,
            loadPercent: 50,
            status: 'Active',
            statusColor: 'bg-teal-50 text-teal-700 border-teal-200',
            activeTickets: ['#8701 Signal Head', '#9102 Sinkhole'],
          };
        }
        return s;
      })
    );
    setReassignModalOpen(false);
    showToast('Workload successfully rebalanced! Shift load sustained.');
  };

  return (
    <Layout title="Staff & Workload" breadcrumb="Crew Allocation & Telemetry" portalType="admin">
      <div className="space-y-6">
        {/* Toast Alert */}
        {notification && (
          <div className="fixed top-20 right-8 z-50 bg-[#005c55] text-white px-4 py-2.5 rounded-xl shadow-lg flex items-center gap-2 text-xs font-medium">
            <span className="material-symbols-outlined text-[18px]">check_circle</span>
            <span>{notification}</span>
          </div>
        )}

        {/* 1. Page Header with Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-slate-200">
          <div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">Staff &amp; Workload Management</h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Real-time field crew telemetry, active task load distribution, and automated workload levelling.
            </p>
          </div>
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setReassignModalOpen(true)}
              className="px-3.5 py-2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-lg text-xs font-semibold shadow-2xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[17px] text-[#005c55]">balance</span>
              <span>Auto-Balance Workload</span>
            </button>
            <button
              onClick={() => showToast('Staff registration modal opened')}
              className="px-3.5 py-2 bg-[#005c55] hover:bg-[#004d47] text-white rounded-lg text-xs font-semibold shadow-2xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[17px]">person_add</span>
              <span>Add Staff Member</span>
            </button>
          </div>
        </div>

        {/* 2. Key Metrics Row (4 Clean Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Total On-Duty</span>
              <span className="p-1.5 rounded-lg bg-teal-50 text-[#005c55]">
                <span className="material-symbols-outlined text-[18px]">groups</span>
              </span>
            </div>
            <div className="mt-3">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-slate-900">48</span>
                <span className="text-xs text-slate-500 font-medium">Technicians</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">36 In Field • 8 En Route • 4 Standby</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Avg Capacity Load</span>
              <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                <span className="material-symbols-outlined text-[18px]">speed</span>
              </span>
            </div>
            <div className="mt-3">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-slate-900">74%</span>
                <span className="text-xs text-emerald-600 font-semibold flex items-center gap-0.5">
                  <span className="material-symbols-outlined text-[14px]">check_circle</span> Optimal
                </span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">Target range: 65% – 85% sustained</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">High Load Units</span>
              <span className="p-1.5 rounded-lg bg-red-50 text-red-600">
                <span className="material-symbols-outlined text-[18px]">warning</span>
              </span>
            </div>
            <div className="mt-3">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-red-600">
                  {staffList.filter((s) => s.loadPercent >= 90).length}
                </span>
                <span className="text-xs text-slate-500 font-medium">Need Shift Relief</span>
              </div>
              <p className="text-[11px] text-red-600 font-medium mt-1">Operating at &gt;90% capacity</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Tasks Resolved Today</span>
              <span className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                <span className="material-symbols-outlined text-[18px]">task_alt</span>
              </span>
            </div>
            <div className="mt-3">
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl font-bold text-slate-900">86</span>
                <span className="text-xs text-slate-500 font-medium">Completed</span>
              </div>
              <p className="text-[11px] text-slate-500 mt-1">98% QA Pass • 2.4 tasks/tech</p>
            </div>
          </div>
        </div>

        {/* 3. Search & Filter Bar */}
        <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-80">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[17px] text-slate-400">
              search
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search crew by name, unit #, or department..."
              className="w-full h-9 pl-9 pr-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#005c55] focus:bg-white"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              value={wardFilter}
              onChange={(e) => setWardFilter(e.target.value)}
              className="h-9 px-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 focus:outline-none focus:border-[#005c55]"
            >
              <option value="All">All Wards (Metropolitan)</option>
              <option value="Ward 4">Ward 4 - Oakwood</option>
              <option value="Ward 3">Ward 3 - Riverside</option>
              <option value="Ward 2">Ward 2 - Highland</option>
              <option value="Ward 1">Ward 1 - Harbor</option>
            </select>

            <button
              onClick={() => showToast('Crew CSV export generated')}
              className="h-9 px-3 rounded-lg bg-white border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px]">download</span>
              <span>Export CSV</span>
            </button>
          </div>
        </div>

        {/* 4. Main Workspace Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Crew Roster Table */}
          <div className="lg:col-span-8 bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden">
            <div className="px-5 py-3.5 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-bold text-xs text-slate-900">Allocated Crew Roster</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 text-[10px] font-semibold">
                  {filteredStaff.length} shown
                </span>
              </div>
              <span className="text-[11px] text-slate-400">Click a technician to inspect telemetry</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-[11px] uppercase tracking-wider font-semibold border-b border-slate-200">
                    <th className="py-3 px-4">Technician</th>
                    <th className="py-3 px-4">Sector &amp; Dept</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4">Capacity Meter</th>
                    <th className="py-3 px-4">Assigned Tasks</th>
                    <th className="py-3 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {filteredStaff.map((staff) => {
                    const isSelected = activeStaff.id === staff.id;
                    return (
                      <tr
                        key={staff.id}
                        onClick={() => setSelectedStaff(staff)}
                        className={`cursor-pointer transition-colors ${
                          isSelected ? 'bg-teal-50/50 hover:bg-teal-50' : 'hover:bg-slate-50/80'
                        }`}
                      >
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <img
                              src={staff.avatar}
                              alt={staff.name}
                              className="w-9 h-9 rounded-full object-cover border border-slate-200"
                            />
                            <div className="min-w-0">
                              <p className="font-bold text-slate-900 truncate">{staff.name}</p>
                              <p className="text-[11px] font-mono text-slate-400">{staff.id}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <p className="font-medium text-slate-800">{staff.ward}</p>
                          <p className="text-[11px] text-slate-500">{staff.department}</p>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${staff.statusColor}`}>
                            {staff.status}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="w-28">
                            <div className="flex justify-between text-[10px] text-slate-500 mb-1 font-mono">
                              <span>{staff.workloadCount}/{staff.workloadMax} tasks</span>
                              <span className={staff.loadPercent >= 90 ? 'text-red-600 font-bold' : ''}>
                                {staff.loadPercent}%
                              </span>
                            </div>
                            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
                              <div
                                className={`h-full rounded-full ${
                                  staff.loadPercent >= 90
                                    ? 'bg-red-500'
                                    : staff.loadPercent >= 60
                                    ? 'bg-[#005c55]'
                                    : 'bg-emerald-500'
                                }`}
                                style={{ width: `${staff.loadPercent}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex flex-wrap gap-1 max-w-[160px]">
                            {staff.activeTickets.map((t, idx) => (
                              <span
                                key={idx}
                                className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedStaff(staff);
                              setReassignModalOpen(true);
                            }}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-[#005c55] hover:bg-slate-100 transition-colors"
                            title="Reassign Load"
                          >
                            <span className="material-symbols-outlined text-[17px]">swap_horiz</span>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* Right Column: Selected Staff Telemetry & Proximity Card */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-xl border border-slate-200 shadow-2xs p-5">
              <div className="flex items-start justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <img
                    src={activeStaff.avatar}
                    alt={activeStaff.name}
                    className="w-12 h-12 rounded-xl object-cover border border-slate-200"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="font-bold text-sm text-slate-900">{activeStaff.name}</h3>
                      <span className="material-symbols-outlined text-[15px] text-[#005c55]">verified</span>
                    </div>
                    <p className="text-[11px] text-slate-500">{activeStaff.role}</p>
                    <span className="text-[10px] font-mono text-slate-400">{activeStaff.id}</span>
                  </div>
                </div>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${activeStaff.statusColor}`}>
                  {activeStaff.status}
                </span>
              </div>

              {/* Telemetry Grid */}
              <div className="grid grid-cols-2 gap-2.5 py-3.5 border-b border-slate-100 text-xs">
                <div className="bg-slate-50 p-2 rounded-lg">
                  <span className="text-[10px] text-slate-400 font-medium block">Vehicle Assigned</span>
                  <span className="font-semibold text-slate-800 text-[11px] font-mono">{activeStaff.vehicle}</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg">
                  <span className="text-[10px] text-slate-400 font-medium block">GPS Telemetry</span>
                  <span className="font-semibold text-emerald-600 text-[11px] flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {activeStaff.telemetry}
                  </span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg">
                  <span className="text-[10px] text-slate-400 font-medium block">SLA Success Rate</span>
                  <span className="font-semibold text-[#005c55] text-[11px]">{activeStaff.sla}</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-lg">
                  <span className="text-[10px] text-slate-400 font-medium block">Citizen Rating</span>
                  <span className="font-semibold text-amber-600 text-[11px] flex items-center gap-1">
                    <span className="material-symbols-outlined text-[13px] text-amber-500">star</span>
                    {activeStaff.rating} / 5.0
                  </span>
                </div>
              </div>

              {/* Current Active Route Breadcrumb */}
              <div className="py-3.5 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-700 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px] text-[#005c55]">near_me</span>
                    Current Route Track
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">{activeStaff.speed}</span>
                </div>
                <div className="p-2.5 rounded-lg bg-teal-50/60 border border-teal-100 text-xs text-slate-700">
                  <p className="font-medium">{activeStaff.route}</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Sector: {activeStaff.ward}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={() => setReassignModalOpen(true)}
                  className="flex-1 py-2 rounded-lg bg-[#005c55] hover:bg-[#004d47] text-white text-xs font-semibold shadow-2xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">balance</span>
                  <span>Levelling Assistant</span>
                </button>
                <button
                  onClick={() => showToast(`Paging ${activeStaff.name} via terminal...`)}
                  className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                  title="Direct Dispatch Ping"
                >
                  <span className="material-symbols-outlined text-[16px]">notifications_active</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Clean Modal for Auto-Balancing / Reassignment */}
        {reassignModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-teal-50 text-[#005c55]">
                    <span className="material-symbols-outlined text-[18px]">balance</span>
                  </span>
                  <h3 className="font-bold text-sm text-slate-900">Workload Levelling Manager</h3>
                </div>
                <button
                  onClick={() => setReassignModalOpen(false)}
                  className="text-slate-400 hover:text-slate-600 p-1 rounded-lg cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              <div className="py-4 space-y-4">
                <p className="text-xs text-slate-600">
                  Select tickets currently assigned to overloaded staff member to balance across available standby crews:
                </p>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <label className="flex items-start gap-2.5 text-xs text-slate-800 cursor-pointer">
                    <input type="checkbox" defaultChecked className="mt-0.5 text-[#005c55] rounded" />
                    <div>
                      <p className="font-semibold">#FMA-9102: Sinkhole &amp; Structural Crack</p>
                      <p className="text-[11px] text-slate-500">Intersection of 5th Ave &amp; Pine (Est. 2.5 hrs)</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-2.5 text-xs text-slate-800 cursor-pointer pt-2 border-t border-slate-200">
                    <input type="checkbox" className="mt-0.5 text-[#005c55] rounded" />
                    <div>
                      <p className="font-semibold">#FMA-8492: Surface Asphalt Depression</p>
                      <p className="text-[11px] text-slate-500">Ward 4 Alleyway 12 (Est. 45 mins)</p>
                    </div>
                  </label>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 block">Transfer to Standby Crew:</label>
                  <select className="w-full h-9 px-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:border-[#005c55]">
                    <option>Carlos Mendez (#EL-0914) - Standby (25% Capacity)</option>
                    <option>Amina Patel (#SN-4412) - En Route nearby (60% Capacity)</option>
                    <option>Emergency Reserve Crew B - Substation 04 (Available)</option>
                  </select>
                </div>

                <div className="p-3 rounded-xl bg-teal-50 border border-teal-200 text-xs text-[#005c55]">
                  <p className="font-semibold flex items-center gap-1">
                    <span className="material-symbols-outlined text-[15px]">trending_down</span>
                    Projected Capacity Relief
                  </p>
                  <p className="text-[11px] text-slate-600 mt-0.5">
                    Dave Miller load drops from 100% to 75% (Nominal boundary). SLA breach risk eliminated.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  onClick={() => setReassignModalOpen(false)}
                  className="px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleRebalance}
                  className="px-4 py-2 rounded-lg bg-[#005c55] hover:bg-[#004d47] text-white text-xs font-semibold shadow-2xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">check</span>
                  <span>Confirm Reallocation</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}


