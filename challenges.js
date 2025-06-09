import { Button } from "@/components/ui/button";

export default function Challenges() {
  return (
    <main className="min-h-screen p-4 bg-white flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">⚔️ التحديات</h1>
      <div className="w-full max-w-sm space-y-4">
        <div className="bg-cyan-100 p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2">🎮 تحدي مفتوح</h2>
          <p className="text-sm">المبلغ: 5$</p>
          <Button className="mt-2 w-full">الانضمام للتحدي</Button>
        </div>

        <div className="bg-cyan-100 p-4 rounded-xl shadow">
          <h2 className="font-semibold mb-2">➕ إنشاء تحدي جديد</h2>
          <Button className="w-full">ابدأ تحدي الآن</Button>
        </div>
      </div>
    </main>
  );
}