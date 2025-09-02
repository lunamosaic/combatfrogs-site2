export default function TraitsFilter({ buckets, selected, onToggle }) {
  return (
    <div className="space-y-6">
      {buckets.map((b) => (
        <section className="rounded border p-3" key={b.key}>
          <div className="font-semibold mb-2">{b.key}</div>
          <div className="flex flex-wrap gap-2">
            {b.values.map((v) => {
              const active = (selected[b.key] || []).includes(v);
              return (
                <button
                  key={v}
                  onClick={() => onToggle(b.key, v)}
                  className={`text-xs border rounded px-2 py-1 ${active ? "bg-black text-white" : ""}`}
                >
                  {v}
                </button>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}