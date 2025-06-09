import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function AuthPage() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = () => {
    alert(isRegistering ? "🚀 تم إنشاء الحساب (وهمي)" : "✅ تم تسجيل الدخول (وهمي)");
  };

  return (
    <main className="min-h-screen flex flex-col justify-center items-center p-4 bg-cyan-100">
      <div className="bg-white p-6 rounded-xl shadow w-full max-w-sm">
        <h1 className="text-xl font-bold text-center mb-4">
          {isRegistering ? "🔐 إنشاء حساب" : "🚪 تسجيل دخول"}
        </h1>
        <input
          type="email"
          placeholder="📧 البريد الإلكتروني"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          type="password"
          placeholder="🔑 كلمة المرور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />
        <Button className="w-full" onClick={handleAuth}>
          {isRegistering ? "✨ إنشاء الحساب" : "➡️ دخول"}
        </Button>
        <p
          className="text-center text-blue-600 text-sm mt-3 cursor-pointer"
          onClick={() => setIsRegistering(!isRegistering)}
        >
          {isRegistering ? "لديك حساب؟ تسجيل دخول" : "ليس لديك حساب؟ إنشاء حساب"}
        </p>
      </div>
    </main>
  );
}