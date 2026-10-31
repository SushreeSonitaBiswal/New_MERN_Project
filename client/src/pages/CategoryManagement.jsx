import React, { useState } from 'react';
import Layout from '../components/Layout';

const INITIAL_CATEGORIES = [
  {
    id: 'CAT-01',
    name: 'Potholes & Asphalt Degradation',
    code: 'POTHOLE',
    icon: 'construction',
    department: 'Public Works & Transportation',
    slaStandard: 24,
    slaHazard: 8,
    activeReports: 142,
    completionRate: '94.2%',
    status: 'Active',
    fleet: 'PW-Roads (Hotbox & Tamper Units)',
    color: 'emerald',
  },
  {
    id: 'CAT-02',
    name: 'Waste Management & Illegal Dumping',
    code: 'SANITATION',
    icon: 'delete_sweep',
    department: 'Waste Management & Sanitation',
    slaStandard: 18,
    slaHazard: 6,
    activeReports: 89,
    completionRate: '98.1%',
    status: 'Active',
    fleet: 'Rapid Sanitation Unit 03',
    color: 'teal',
  },
  {
    id: 'CAT-03',
    name: 'Streetlight & Electrical Infrastructure',
    code: 'LIGHTING',
    icon: 'lightbulb',
    department: 'Electrical & Lighting Division',
    slaStandard: 36,
    slaHazard: 12,
    activeReports: 64,
    completionRate: '91.8%',
    status: 'Active',
    fleet: 'Aerial Bucket EMU-01',
    color: 'amber',
  },
  {
    id: 'CAT-04',
    name: 'Water Mains & Storm Drainage',
    code: 'WATER',
    icon: 'water_damage',
    department: 'Municipal Waterworks & Sewers',
    slaStandard: 12,
    slaHazard: 4,
    activeReports: 31,
    completionRate: '99.0%',
    status: 'Active',
    fleet: 'Water Hydro-Excavation Alpha',
    color: 'sky',
  },
  {
    id: 'CAT-05',
    name: 'Parks, Playgrounds & Greenways',
    code: 'PARKS',
    icon: 'park',
    department: 'Parks & Recreation Division',
    slaStandard: 48,
    slaHazard: 16,
    activeReports: 45,
    completionRate: '95.5%',
    status: 'Active',
    fleet: 'Parks Grounds Crew North',
    color: 'emerald',
  },
  {
    id: 'CAT-06',
    name: 'Traffic Signals & Pedestrian Crossings',
    code: 'TRAFFIC',
    icon: 'traffic',
    department: 'Traffic Engineering & Safety',
    slaStandard: 16,
    slaHazard: 4,
    activeReports: 28,
    completionRate: '96.5%',
    status: 'Active',
    fleet: 'Traffic Electronics Team',
    color: 'rose',
  },
];

export default function CategoryManagement() {
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  const [selectedId, setSelectedId] = useState(INITIAL_CATEGORIES[0].id);
  const [search, setSearch] = useState('');
  const [deptFilter, setDeptFilter] = useState('All');
  const [toastMessage, setToastMessage] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // New category form
  const [newCat, setNewCat] = useState({
    name: '',
    department: 'Public Works & Transportation',
    slaStandard: 24,
    slaHazard: 8,
    icon: 'handyman',
  });

  const selectedCategory = categories.find((c) => c.id === selectedId) || categories[0];

  // Editable SLA form state
  const [editSlaStandard, setEditSlaStandard] = useState(selectedCategory.slaStandard);
  const [editSlaHazard, setEditSlaHazard] = useState(selectedCategory.slaHazard);
  const [editFleet, setEditFleet] = useState(selectedCategory.fleet);

  const handleSelect = (cat) => {
    setSelectedId(cat.id);
    setEditSlaStandard(cat.slaStandard);
    setEditSlaHazard(cat.slaHazard);
    setEditFleet(cat.fleet);
  };

  const handleSaveMatrix = (e) => {
    e.preventDefault();
    setCategories((prev) =>
      prev.map((c) =>
        c.id === selectedCategory.id
          ? {
              ...c,
              slaStandard: Number(editSlaStandard),
              slaHazard: Number(editSlaHazard),
              fleet: editFleet,
            }
          : c
      )
    );
    setToastMessage(`SLA and routing rules for "${selectedCategory.name}" saved successfully.`);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const handleCreateCategory = (e) => {
    e.preventDefault();
    if (!newCat.name.trim()) return;

    const nextId = `CAT-0${categories.length + 1}`;
    const created = {
      id: nextId,
      name: newCat.name,
      code: newCat.name.toUpperCase().slice(0, 8).replace(/\s+/g, '_'),
      icon: newCat.icon || 'category',
      department: newCat.department,
      slaStandard: Number(newCat.slaStandard),
      slaHazard: Number(newCat.slaHazard),
      activeReports: 0,
      completionRate: '100%',
      status: 'Active',
      fleet: 'Default Sector Crew',
      color: 'emerald',
    };

    setCategories((prev) => [...prev, created]);
    setSelectedId(created.id);
    setShowAddModal(false);
    setNewCat({
      name: '',
      department: 'Public Works & Transportation',
      slaStandard: 24,
      slaHazard: 8,
      icon: 'handyman',
    });
    setToastMessage(`New category "${created.name}" created.`);
    setTimeout(() => setToastMessage(''), 3500);
  };

  const filteredCategories = categories.filter((cat) => {
    const matchesSearch =
      cat.name.toLowerCase().includes(search.toLowerCase()) ||
      cat.department.toLowerCase().includes(search.toLowerCase()) ||
      cat.code.toLowerCase().includes(search.toLowerCase());
    const matchesDept = deptFilter === 'All' || cat.department === deptFilter;
    return matchesSearch && matchesDept;
  });

  return (
    <Layout title="Category Management" breadcrumb="Category & Routing Management" portalType="admin">
      <div className="flex flex-col w-full pb-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-1">
              <span>Admin Console</span>
              <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              <span className="text-[#005c55] font-semibold">Category Management</span>
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Category &amp; Routing Management</h1>
            <p className="text-sm text-slate-600 mt-1">
              Configure civic issue categories, SLA response thresholds, and primary dispatch crews.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setShowAddModal(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#005c55] hover:bg-[#004742] text-white font-semibold text-sm transition-all shadow-sm"
              type="button"
            >
              <span className="material-symbols-outlined text-[18px]">add_circle</span>
              <span>New Category</span>
            </button>
          </div>
        </div>

        {/* 4 Clean Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Active Categories</span>
              <span className="p-2 rounded-lg bg-teal-50 text-[#005c55]">
                <span className="material-symbols-outlined text-[20px]">category</span>
              </span>
            </div>
            <div className="text-2xl font-bold text-slate-900">{categories.length}</div>
            <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#005c55]"></span>
              <span>100% Routed to Crews</span>
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Average SLA Target</span>
              <span className="p-2 rounded-lg bg-sky-50 text-sky-600">
                <span className="material-symbols-outlined text-[20px]">timer</span>
              </span>
            </div>
            <div className="text-2xl font-bold text-slate-900">
              {(categories.reduce((acc, c) => acc + c.slaStandard, 0) / categories.length).toFixed(1)} hrs
            </div>
            <p className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-0.5">
              <span className="material-symbols-outlined text-[14px]">arrow_downward</span>
              <span>3.5 hrs faster than standard</span>
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Auto-Assignment</span>
              <span className="p-2 rounded-lg bg-amber-50 text-amber-600">
                <span className="material-symbols-outlined text-[20px]">bolt</span>
              </span>
            </div>
            <div className="text-2xl font-bold text-slate-900">92.4%</div>
            <p className="text-xs text-slate-500 mt-1">Automatic fleet routing</p>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-xs">
            <div className="flex items-center justify-between text-slate-500 mb-2">
              <span className="text-xs font-semibold uppercase tracking-wider">Citizen CSAT</span>
              <span className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
                <span className="material-symbols-outlined text-[20px]">verified</span>
              </span>
            </div>
            <div className="text-2xl font-bold text-slate-900">4.8 / 5.0</div>
            <p className="text-xs text-slate-500 mt-1">Post-resolution sign-offs</p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs mb-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="relative flex-1 w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[18px] text-slate-400">
              search
            </span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search category name, code, or department..."
              className="w-full h-10 pl-9 pr-3 rounded-xl bg-slate-50 text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#005c55]/20 focus:bg-white transition-all border border-transparent focus:border-slate-300"
            />
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <select
              value={deptFilter}
              onChange={(e) => setDeptFilter(e.target.value)}
              className="h-10 px-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#005c55]/20 cursor-pointer"
            >
              <option value="All">All Departments</option>
              <option value="Public Works & Transportation">Public Works &amp; Transportation</option>
              <option value="Waste Management & Sanitation">Waste Management &amp; Sanitation</option>
              <option value="Electrical & Lighting Division">Electrical &amp; Lighting Division</option>
              <option value="Municipal Waterworks & Sewers">Municipal Waterworks &amp; Sewers</option>
              <option value="Parks & Recreation Division">Parks &amp; Recreation Division</option>
              <option value="Traffic Engineering & Safety">Traffic Engineering &amp; Safety</option>
            </select>
          </div>
        </div>

        {/* Toast Notification */}
        {toastMessage && (
          <div className="mb-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-600 text-[18px]">check_circle</span>
            <span>{toastMessage}</span>
          </div>
        )}

        {/* 2-Column: Left Category Cards (8 cols), Right SLA Matrix Editor (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Categories List */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col gap-3">
            {filteredCategories.length === 0 ? (
              <div className="bg-white p-8 rounded-2xl border border-slate-200/80 text-center">
                <span className="material-symbols-outlined text-[36px] text-slate-400">search_off</span>
                <p className="text-sm font-semibold text-slate-700 mt-2">No matching categories found</p>
                <p className="text-xs text-slate-500 mt-0.5">Try adjusting your search terms or department filter.</p>
              </div>
            ) : (
              filteredCategories.map((cat) => {
                const isSelected = cat.id === selectedCategory.id;
                return (
                  <div
                    key={cat.id}
                    onClick={() => handleSelect(cat)}
                    className={`bg-white rounded-2xl p-5 border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-[#005c55] ring-2 ring-[#005c55]/20 shadow-sm'
                        : 'border-slate-200/80 hover:border-slate-300 hover:shadow-xs'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-xl bg-teal-50 text-[#005c55] flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[22px]">{cat.icon}</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-bold text-slate-900 text-sm">{cat.name}</h3>
                            <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 font-mono text-[10px] font-semibold">
                              #{cat.id}
                            </span>
                          </div>
                          <p className="text-xs text-slate-500 mt-0.5">{cat.department}</p>
                        </div>
                      </div>

                      <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-semibold text-[11px] shrink-0">
                        {cat.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 pt-3 border-t border-slate-100 text-xs">
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-semibold">Standard SLA</span>
                        <span className="font-bold text-slate-800 mt-0.5 block">{cat.slaStandard} hours</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-semibold">Critical SLA</span>
                        <span className="font-bold text-rose-600 mt-0.5 block">{cat.slaHazard} hours</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-semibold">Assigned Fleet</span>
                        <span className="font-semibold text-slate-700 mt-0.5 block truncate">{cat.fleet}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 block text-[10px] uppercase font-semibold">Active / Rate</span>
                        <span className="font-semibold text-slate-700 mt-0.5 block">
                          {cat.activeReports} rpts · {cat.completionRate}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Right Column: Quick SLA Matrix Editor */}
          <div className="lg:col-span-5 xl:col-span-4 sticky top-24">
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#005c55] flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">rule_settings</span>
                  </div>
                  <div>
                    <h2 className="font-bold text-sm text-slate-900">SLA &amp; Routing Rules</h2>
                    <span className="text-[11px] text-slate-500 font-medium">#{selectedCategory.id}</span>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-teal-50 text-[#005c55] text-[10px] font-bold">
                  Selected
                </span>
              </div>

              <form onSubmit={handleSaveMatrix} className="flex flex-col gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Category Name
                  </label>
                  <input
                    type="text"
                    disabled
                    value={selectedCategory.name}
                    className="w-full h-9 px-3 rounded-xl bg-slate-100 text-slate-700 text-xs font-medium cursor-not-allowed border border-slate-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Department
                  </label>
                  <input
                    type="text"
                    disabled
                    value={selectedCategory.department}
                    className="w-full h-9 px-3 rounded-xl bg-slate-100 text-slate-700 text-xs font-medium cursor-not-allowed border border-slate-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Response Thresholds (Hours)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="text-[10px] text-slate-500 block uppercase font-medium">Standard SLA</span>
                      <div className="flex items-center gap-1 mt-1">
                        <input
                          type="number"
                          min="1"
                          max="168"
                          value={editSlaStandard}
                          onChange={(e) => setEditSlaStandard(e.target.value)}
                          className="w-full bg-transparent font-bold text-base text-slate-900 focus:outline-none"
                        />
                        <span className="text-xs text-slate-400 font-medium">hrs</span>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-rose-50/50 border border-rose-200">
                      <span className="text-[10px] text-rose-600 block uppercase font-medium">Critical Hazard</span>
                      <div className="flex items-center gap-1 mt-1">
                        <input
                          type="number"
                          min="1"
                          max="72"
                          value={editSlaHazard}
                          onChange={(e) => setEditSlaHazard(e.target.value)}
                          className="w-full bg-transparent font-bold text-base text-rose-700 focus:outline-none"
                        />
                        <span className="text-xs text-rose-500 font-medium">hrs</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Assigned Municipal Fleet
                  </label>
                  <input
                    type="text"
                    value={editFleet}
                    onChange={(e) => setEditFleet(e.target.value)}
                    className="w-full h-9 px-3 rounded-xl bg-slate-50 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#005c55]/20 border border-slate-200 focus:border-[#005c55]"
                  />
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">
                    Citizen Submission Requirements
                  </span>
                  <label className="flex items-center justify-between text-xs text-slate-700 cursor-pointer">
                    <span>Photo proof required</span>
                    <input type="checkbox" defaultChecked className="w-3.5 h-3.5 accent-[#005c55] rounded" />
                  </label>
                  <label className="flex items-center justify-between text-xs text-slate-700 cursor-pointer">
                    <span>GPS geotag required</span>
                    <input type="checkbox" defaultChecked className="w-3.5 h-3.5 accent-[#005c55] rounded" />
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#005c55] hover:bg-[#004742] text-white font-semibold text-xs transition-all shadow-xs flex items-center justify-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">save</span>
                  <span>Save SLA Settings</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Modal: New Category */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <h3 className="font-bold text-base text-slate-900">Add New Category</h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              </div>

              <form onSubmit={handleCreateCategory} className="flex flex-col gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Category Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={newCat.name}
                    onChange={(e) => setNewCat({ ...newCat, name: e.target.value })}
                    placeholder="e.g. Fallen Tree & Forestry"
                    className="w-full h-9 px-3 rounded-xl bg-slate-50 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#005c55]/20 border border-slate-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    Department
                  </label>
                  <select
                    value={newCat.department}
                    onChange={(e) => setNewCat({ ...newCat, department: e.target.value })}
                    className="w-full h-9 px-3 rounded-xl bg-slate-50 text-slate-700 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#005c55]/20 border border-slate-200 cursor-pointer"
                  >
                    <option value="Public Works & Transportation">Public Works &amp; Transportation</option>
                    <option value="Waste Management & Sanitation">Waste Management &amp; Sanitation</option>
                    <option value="Electrical & Lighting Division">Electrical &amp; Lighting Division</option>
                    <option value="Municipal Waterworks & Sewers">Municipal Waterworks &amp; Sewers</option>
                    <option value="Parks & Recreation Division">Parks &amp; Recreation Division</option>
                    <option value="Traffic Engineering & Safety">Traffic Engineering &amp; Safety</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Standard SLA (hrs)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={newCat.slaStandard}
                      onChange={(e) => setNewCat({ ...newCat, slaStandard: e.target.value })}
                      className="w-full h-9 px-3 rounded-xl bg-slate-50 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#005c55]/20 border border-slate-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      Hazard SLA (hrs)
                    </label>
                    <input
                      type="number"
                      min="1"
                      value={newCat.slaHazard}
                      onChange={(e) => setNewCat({ ...newCat, slaHazard: e.target.value })}
                      className="w-full h-9 px-3 rounded-xl bg-slate-50 text-slate-900 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-[#005c55]/20 border border-slate-200"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-end gap-2 pt-3 border-t border-slate-100 mt-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-[#005c55] hover:bg-[#004742] text-white font-semibold text-xs transition-colors shadow-xs"
                  >
                    Create Category
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
