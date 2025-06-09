import { useRef, useEffect, useState } from "react";

export default function GlowHockey() {
  const fieldRef = useRef(null);
  const paddleRef = useRef(null);
  const puckRef = useRef(null);

  const [paddleY, setPaddleY] = useState(0);
  const [puck, setPuck] = useState({ x: 150, y: 200, dx: 2, dy: 2 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPuck(prev => {
        let { x, y, dx, dy } = prev;
        x += dx;
        y += dy;

        // حدود الحقل
        if (x <= 0 || x >= 300) dx = -dx;
        if (y <= 0 || y >= 600) dy = -dy;

        // التصادم مع العصا السفلية
        const paddle = paddleRef.current?.getBoundingClientRect();
        const puckEl = puckRef.current?.getBoundingClientRect();
        if (
          paddle && puckEl &&
          puckEl.bottom >= paddle.top &&
          puckEl.left <= paddle.right &&
          puckEl.right >= paddle.left
        ) {
          dy = -Math.abs(dy);
        }

        return { x, y, dx, dy };
      });
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const handleTouch = (e) => {
    const field = fieldRef.current?.getBoundingClientRect();
    const touchY = e.touches[0].clientY;
    if (field) {
      const relativeY = touchY - field.top;
      setPaddleY(Math.max(0, Math.min(relativeY - 20, 560))); // حدود اللعب
    }
  };

  return (
    <main
      ref={fieldRef}
      onTouchMove={handleTouch}
      className="w-full max-w-sm h-[600px] bg-black mx-auto mt-4 relative overflow-hidden rounded-xl"
    >
      {/* القرص */}
      <div
        ref={puckRef}
        className="w-6 h-6 bg-cyan-400 rounded-full absolute"
        style={{ left: puck.x, top: puck.y }}
      />
      {/* العصا السفلية */}
      <div
        ref={paddleRef}
        className="w-24 h-4 bg-white rounded-full absolute left-1/2 -translate-x-1/2"
        style={{ top: paddleY + "px" }}
      />
    </main>
  );
}