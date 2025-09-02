import Link from "next/link";

export default function Home() {
  return (
    <main className="grid gap-8 md:grid-cols-2 items-start">
      <section className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Combat Frogs — Explorer Starter</h1>
        <p className="text-gray-600">
          Готовый каркас сайта с <strong>Explorer</strong>, <strong>Dashboard</strong>, страницей <strong>Buy</strong> и API-заглушками.
          Сделано на Next.js (App Router) + Tailwind CSS. Данные сейчас моковые для демонстрации.
        </p>
        <div className="flex gap-3">
          <Link className="border rounded px-4 py-2" href="/explorer">Open Explorer</Link>
          <Link className="border rounded px-4 py-2" href="/dashboard">Dashboard</Link>
          <Link className="border rounded px-4 py-2" href="/buy">Buy</Link>
        </div>
      </section>
      <section className="rounded border p-4">
        <h2 className="font-semibold mb-2">Что внутри:</h2>
        <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
          <li>Страница <code>/explorer</code> — грид NFT, фильтры по трейтам, поиск.</li>
          <li>Страница <code>/dashboard</code> — заглушка кабинета держателя.</li>
          <li>Страница <code>/buy</code> — ссылки на маркетплейс(ы).</li>
          <li>API: <code>/api/traits</code>, <code>/api/tokens</code> с мок-данными.</li>
        </ul>
      </section>
    </main>
  );
}