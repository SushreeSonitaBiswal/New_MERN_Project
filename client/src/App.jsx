import { useState, useEffect } from 'react';
import axios from 'axios';
import { Database, Server, Globe, CheckCircle2, AlertCircle, Plus, Trash2, RefreshCw } from 'lucide-react';

function App() {
  const [health, setHealth] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const fetchStatus = async () => {
    try {
      setLoading(true);
      setError(null);
      const healthRes = await axios.get('/api/health');
      setHealth(healthRes.data);

      const itemsRes = await axios.get('/api/items');
      setItems(itemsRes.data.data || []);
    } catch (err) {
      setError(err.response?.data?.message || err.message || 'Failed to connect to backend server');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  const handleAddItem = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      setSubmitting(true);
      const res = await axios.post('/api/items', { title, description });
      if (res.data.success) {
        setItems((prev) => [res.data.data, ...prev]);
        setTitle('');
        setDescription('');
      }
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to add item. Ensure MongoDB is connected.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteItem = async (id) => {
    try {
      await axios.delete(`/api/items/${id}`);
      setItems((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || 'Failed to delete item.');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <span className="font-black text-xl text-white">M</span>
            </div>
            <div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                MERN Stack Boilerplate
              </h1>
              <p className="text-xs text-slate-400">React + Tailwind v4 + Express + MongoDB</p>
            </div>
          </div>

          <button
            onClick={fetchStatus}
            disabled={loading}
            className="flex items-center gap-2 text-xs font-medium px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all cursor-pointer border border-slate-700 active:scale-95 disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            Refresh Status
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-10 flex-1 w-full space-y-8">
        {/* Status Indicators */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* React Frontend */}
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-slate-300">Frontend Client</span>
              <Globe className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">React 19 + Tailwind CSS</span>
            </div>
            <p className="text-xs text-slate-500 mt-2">Vite dev server running on port 5173</p>
          </div>

          {/* Express Backend */}
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-slate-300">Express Server</span>
              <Server className="w-5 h-5 text-indigo-400" />
            </div>
            <div className="flex items-center gap-2">
              {health?.status === 'OK' ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-400">Operational</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-medium text-amber-400">Waiting for backend (port 5000)</span>
                </>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-2">Node.js + Express REST API</p>
          </div>

          {/* MongoDB */}
          <div className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-sm shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-semibold text-slate-300">Database</span>
              <Database className="w-5 h-5 text-emerald-400" />
            </div>
            <div className="flex items-center gap-2">
              {health?.database === 'Connected' ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-400">Connected</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-medium text-amber-400">
                    {health?.database ? `DB Status: ${health.database}` : 'Provide Mongo URI'}
                  </span>
                </>
              )}
            </div>
            <p className="text-xs text-slate-500 mt-2">Configured in server/.env (MONGO_URI)</p>
          </div>
        </section>

        {error && (
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm flex items-center gap-3">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <div>
              <p className="font-semibold">Backend Connection Notice</p>
              <p className="text-xs text-amber-300/80">{error}. Please start backend server with `npm run server` or `npm run dev`.</p>
            </div>
          </div>
        )}

        {/* Demo CRUD Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Add Item Form */}
          <div className="p-6 rounded-2xl bg-slate-900/50 border border-slate-800 shadow-xl space-y-4">
            <div className="border-b border-slate-800/80 pb-3">
              <h2 className="text-base font-semibold text-white">Create Test Item</h2>
              <p className="text-xs text-slate-400">Verify full-stack integration with Mongo</p>
            </div>

            <form onSubmit={handleAddItem} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Item Title</label>
                <input
                  type="text"
                  placeholder="e.g. Test Database Sync"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Description (Optional)</label>
                <textarea
                  placeholder="Write a brief note..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="3"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-indigo-600/30 active:scale-98 disabled:opacity-50"
              >
                <Plus className="w-4 h-4" />
                {submitting ? 'Adding...' : 'Add Item'}
              </button>
            </form>
          </div>

          {/* Items List */}
          <div className="lg:col-span-2 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 shadow-xl space-y-4 flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <div>
                <h2 className="text-base font-semibold text-white">Database Items</h2>
                <p className="text-xs text-slate-400">Items fetched from MongoDB via Express API</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 font-mono">
                {items.length} items
              </span>
            </div>

            <div className="flex-1 overflow-y-auto space-y-3 pr-1 max-h-[400px]">
              {items.length === 0 ? (
                <div className="h-44 border border-dashed border-slate-800 rounded-xl flex flex-col items-center justify-center text-slate-500 text-sm">
                  <Database className="w-8 h-8 mb-2 stroke-1 opacity-50" />
                  <p>No items found in MongoDB</p>
                  <p className="text-xs text-slate-600 mt-1">Provide connection string and add a test item above</p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item._id}
                    className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/70 flex items-start justify-between gap-4 hover:border-slate-700 transition-all group"
                  >
                    <div>
                      <h3 className="text-sm font-semibold text-slate-200">{item.title}</h3>
                      {item.description && (
                        <p className="text-xs text-slate-400 mt-1">{item.description}</p>
                      )}
                      <span className="text-[10px] text-slate-500 font-mono mt-2 inline-block">
                        ID: {item._id}
                      </span>
                    </div>

                    <button
                      onClick={() => handleDeleteItem(item._id)}
                      className="p-2 text-slate-500 hover:text-red-400 rounded-lg hover:bg-red-500/10 transition-all cursor-pointer opacity-80 group-hover:opacity-100"
                      title="Delete Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-4 text-center text-xs text-slate-600">
        MERN Boilerplate setup complete. Ready for development.
      </footer>
    </div>
  );
}

export default App;
