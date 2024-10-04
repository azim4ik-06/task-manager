export default function Header() {
  return (
    <div className="flex justify-between items-center m-10">
      <h1 className="text-3xl font-bold">Todo App</h1>
      <div className="flex gap-3">
        <button className="p-2 bg-gray-400 shadow-lg text-white rounded-lg">Dark mod</button>
        <button className="p-2 bg-black shadow-lg text-white rounded-lg">Login</button>
      </div>
    </div>
  );
}
