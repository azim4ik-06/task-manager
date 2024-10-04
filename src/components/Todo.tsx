import Box from "./Box";
// import TodoItem from "./TodoItem";

export default function Todo() {
  return (
    <Box title="Your Todos">
      <div className="flex items-center gap-3">
        <input
          type="text"
          id=""
          className="p-2 rounded-lg w-full shadow-md"
          placeholder="Add a new todo"
        />
        <button className="bg-black text-white p-2 rounded-lg shadow-md">
          Add
        </button>
      </div>
      {/* <TodoItem /> */}
    </Box>
  );
}
