import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-cyan-100 flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-bold mb-4 text-cyan-700">👑 مرحباً بك في Chalengeaz</h1>
      <p className="text-lg text-gray-700 mb-8">منصة التحديات الربحية متعددة اللاعبين</p>

      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Link href="/challenge">
          <button className="bg-cyan-600 text-white py-3 rounded-xl shadow-md text-lg">🎮 ابدأ التحدي</button>
        </Link>

        <Link href="/glow-hockey">
          <button className="bg-black text-cyan-300 py-3 rounded-xl shadow-md text-lg">🏒 Glow Hockey</button>
        </Link>

        <Link href="/wallet">
          <button className="bg-green-600 text-white py-3 rounded-xl shadow-md text-lg">💰 المحفظة</button>
        </Link>

        <Link href="/invite">
          <button className="bg-purple-600 text-white py-3 rounded-xl shadow-md text-lg">📨 دعوة الأصدقاء</button>
        </Link>
      </div>
    </main>
  );
}
