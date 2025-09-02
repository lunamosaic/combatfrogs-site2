export default function DashboardPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl font-semibold">Dashboard (demo)</h1>
      <p className="text-gray-600 text-sm">
        Здесь будет личный кабинет держателя: сумма NFT, редкости, роли Discord и т. п.
        Сейчас это заглушка без подключения кошелька.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        <div className="border rounded p-4">
          <div className="text-xs text-gray-500">Your NFTs</div>
          <div className="text-2xl font-bold">0</div>
        </div>
        <div className="border rounded p-4">
          <div className="text-xs text-gray-500">Estimated value</div>
          <div className="text-2xl font-bold">—</div>
        </div>
        <div className="border rounded p-4">
          <div className="text-xs text-gray-500">Discord role</div>
          <div className="text-2xl font-bold">Not linked</div>
        </div>
      </div>
    </main>
  );
}