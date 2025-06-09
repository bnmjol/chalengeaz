import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Wallet() {
  const [balance, setBalance] = useState(12.5); // قيمة افتراضية مؤقتة

  const handleDeposit = (amount) => {
    window.open(`https://www.paypal.me/VohTic/${amount}`, "_blank");
    alert("📥 تم تحويلك إلى PayPal. بعد الدفع، أرسل إشعارك للإدارة لتأكيد الرصيد.");
  };

  return (
    <main className="min-h-screen bg-slate-50 p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">💼 محفظتي</h1>
      <div className="bg-white p-4 rounded-xl shadow w-full max-w-sm text-center">
        <h2 className="text-xl font-semibold">💰 الرصيد الحالي:</h2>
        <div className="text-3xl font-bold text-green-600 my-2">${balance.toFixed(2)}</div>
        <div className="grid grid-cols-3 gap-2">
          <Button onClick={() => handleDeposit(5)}>$5</Button>
          <Button onClick={() => handleDeposit(10)}>$10</Button>
          <Button onClick={() => handleDeposit(20)}>$20</Button>
        </div>
      </div>
    </main>
  );
}