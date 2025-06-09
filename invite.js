import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Invite() {
  const [referralCode] = useState("ahmad123"); // مؤقت
  const [referralLink, setReferralLink] = useState("");

  useEffect(() => {
    setReferralLink(`https://chalengeaz.com/invite/${referralCode}`);
  }, [referralCode]);

  const copyLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert("✅ تم نسخ رابط الدعوة!");
  };

  return (
    <main className="min-h-screen p-4 flex flex-col items-center bg-cyan-50">
      <h1 className="text-2xl font-bold mb-6">📨 دعوة الأصدقاء</h1>
      <div className="w-full max-w-sm bg-white p-4 rounded-xl shadow">
        <h2 className="font-semibold mb-1">🔗 رابط الدعوة:</h2>
        <div className="bg-gray-100 p-2 rounded text-sm break-all">{referralLink}</div>
        <Button className="mt-2 w-full" onClick={copyLink}>📋 نسخ الرابط</Button>
      </div>
    </main>
  );
}