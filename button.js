
export function Button({ children, ...props }) {
  return <button className="bg-black text-white rounded-xl px-4 py-2 hover:opacity-90" {...props}>{children}</button>;
}
