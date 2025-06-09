import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function RockPaperScissors() {
  const options = ["✊", "✋", "✌️"];
  const [playerChoice, setPlayerChoice] = useState(null);
  const [opponentChoice, setOpponentChoice] = useState(null);
  const [result, setResult] = useState("");

  const play = (choice) => {
    const opponent = options[Math.floor(Math.random() * 3)];
    setPlayerChoice(choice);
    setOpponentChoice(opponent);
    if (choice === opponent) {
      setResult("🤝 تعادل");
    } else if (
      (choice === "✊" && opponent === "✌️") ||
      (choice === "✋" && opponent === "✊") ||
      (choice === "✌️" && opponent === "✋")
    ) {
      setResult("🏆 فزت");
    } else {
      setResult("❌ خسرت");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">🎮 حجرة ورقة مقص</h1>
      <div className="grid grid-cols-3 gap-4 mb-4">
        {options.map((opt) => (
          <Button key={opt} onClick={() => play(opt)}>{opt}</Button>
        ))}
      </div>
      {playerChoice && (
        <div className="text-center space-y-2">
          <p>🧍‍♂️ اختيارك: {playerChoice}</p>
          <p>🤖 خصمك: {opponentChoice}</p>
          <h2 className="text-xl font-bold">{result}</h2>
        </div>
      )}
    </main>
  );
}