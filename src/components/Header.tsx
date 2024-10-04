import IconHeader from "./IconHeader";

export default function Header() {
  return (
    <div className="flex justify-between items-center m-10">
      <h1 className="text-3xl font-bold">Todo App</h1>
      <IconHeader />
    </div>
  );
}
