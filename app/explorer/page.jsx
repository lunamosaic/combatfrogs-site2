'use client';
import { useEffect, useMemo, useState } from "react";
import TokenCard from "../../components/TokenCard";
import TraitsFilter from "../../components/TraitsFilter";

export default function ExplorerPage() {
  const [tokens, setTokens] = useState([]);
  const [buckets, setBuckets] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState({}); // { key: Set(values) }
  const [upgradedOnly, setUpgradedOnly] = useState(false);

  useEffect(() => {
    fetch("/api/tokens").then(r => r.json()).then(d => setTokens(d.items));
    fetch("/api/traits").then(r => r.json()).then(d => setBuckets(d.buckets));
  }, []);

  function toggleTrait(key, value) {
    setSelected(prev => {
      const next = { ...prev };
      const set = new Set(next[key] || []);
      if (set.has(value)) set.delete(value); else set.add(value);
      if (set.size === 0) delete next[key]; else next[key] = Array.from(set);
      return next;
    });
  }

  const filtered = useMemo(() => {
    let list = tokens;
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(t => String(t.id).includes(q) || t.name.toLowerCase().includes(q));
    }
    if (upgradedOnly) {
      list = list.filter(t => t.upgraded === true);
    }
    // Trait filters
    for (const [key, values] of Object.entries(selected)) {
      if (!values || values.length === 0) continue;
      list = list.filter(t => {
        const v = t.traits[key];
        return values.includes(v);
      });
    }
    return list;
  }, [tokens, query, selected, upgradedOnly]);

  return (
    <main className="grid grid-cols-12 gap-6">
      <aside className="col-span-12 md:col-span-3 space-y-6">
        <div className="rounded border p-3 space-y-3">
          <div className="font-semibold">Search</div>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="ID or name…"
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" checked={upgradedOnly} onChange={() => setUpgradedOnly(v => !v)} />
            <span>V2 art only</span>
          </label>
        </div>
        <TraitsFilter buckets={buckets} selected={selected} onToggle={toggleTrait} />
      </aside>

      <section className="col-span-12 md:col-span-9">
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-600">Found <strong>{filtered.length}</strong> items</div>
          <div className="text-xs text-gray-500">Demo data • Client-side filtering</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map(t => <TokenCard key={t.id} token={t} />)}
        </div>
      </section>
    </main>
  );
}