export default function TokenCard({ token }) {
  return (
    <article className="border rounded overflow-hidden">
      <img
        src={token.image}
        alt={token.name}
        className="w-full aspect-square object-cover"
        loading="lazy"
      />
      <div className="p-2 text-sm flex items-center justify-between">
        <div className="truncate">{token.name}</div>
        <div className="text-xs opacity-70">Rank #{token.rank}</div>
      </div>
      <div className="px-2 pb-2 text-[11px] text-gray-500">
        <span>{token.traits.Faction}</span> • <span>{token.traits.Skin}</span> • <span>{token.traits.Eyes}</span>
      </div>
    </article>
  );
}