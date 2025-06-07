
export function Card({ children, className }) {
  return <div className={`rounded-2xl bg-white ${className}`}>{children}</div>;
}
export function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}
