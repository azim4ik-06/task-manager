import Box from "./Box";
// import TodoItem from "./TodoItem";

export default function Todo() {
  return (
    <Box title="Your Todos">
      <div className="flex items-center gap-3 my-3">
        <input
          type="text"
          id=""
          className="p-2 rounded-lg w-full shadow-md focus:shadow-xl focus:outline-indigo-200 focus:scale-[1.006] focus:duration-300 bg-slate-50"
          placeholder="Add a new todo"
        />
        <button className="bg-black text-white hover:text-gray-300 p-2 rounded-lg shadow-md hover:duration-300 hover:shadow-xl hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </div>
      {/* <TodoItem /> */}
    </Box>
  );
}
