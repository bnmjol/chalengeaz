import { useState } from "react";

export default function ChallengePage() {
  const [amount, setAmount] = useState("");
  const [mode, setMode] = useState("1v1");

  const handleStart = () => {
    alert("🚀 تم إرسال التحدي! سيتم مطابقة خصم قريباً");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-cyan-50 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-4 text-cyan-700">🎮 ابدأ تحديًا جديدًا</h1>

      <div className="w-full max-w-md bg-white p-4 rounded-xl shadow-md flex flex-col gap-4">

        <div>
          <label className="font-semibold">🧑‍🤝‍🧑 نوع التحدي:</label>
          <select
            className="w-full mt-1 p-2 border rounded"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
          >
            <option value="1v1">1 ضد 1</option>
            <option value="random">خصم عشوائي</option>
            <option value="open">تحدي مفتوح</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">💰 مبلغ التحدي (بالدولار):</label>
          <input
            type="number"
            className="w-full mt-1 p-2 border rounded"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="مثلاً: 5"
          />
        </div>

        <div className="text-sm text-gray-600">
          سيتم خصم <span className="font-bold">15%</span> عمولة من كل تحدي.
        </div>

        <button
          className="bg-cyan-600 text-white py-3 rounded-xl text-lg shadow"
          onClick={handleStart}
        >
          🚀 إرسال التحدي
        </button>
      </div>
    </main>
  );
}