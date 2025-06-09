export function Button({ children, className = '', ...props }) {
  return (
    <button
      {...props}
      className={`bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-xl ${className}`}
    >
      {children}
    </button>
  );
}