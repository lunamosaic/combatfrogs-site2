export default function BuyPage() {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Buy</h1>
      <p className="text-gray-600 text-sm">Ссылки на маркетплейсы (замени на свои):</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        <a className="border rounded p-4 hover:bg-gray-50" href="https://opensea.io" target="_blank">OpenSea</a>
        <a className="border rounded p-4 hover:bg-gray-50" href="https://magiceden.io" target="_blank">Magic Eden</a>
        <a className="border rounded p-4 hover:bg-gray-50" href="https://tensor.trade" target="_blank">Tensor</a>
      </div>
    </main>
  );
}