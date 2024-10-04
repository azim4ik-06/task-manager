import { useEffect, useState } from "react";
import { url } from "../types/url";

type Category = {
  title: string;
  id: number;
  date: string;
};

export default function TodoItem() {
  const [todos, setTodo] = useState<Category[] | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${url}/tasks`);
      const data = await res.json();

      setTodo(data);
    })();
  }, []);

  return (
    <div>
      {!todos ? (
        <>Loading...</>
      ) : (
        todos.map((todo) => (
          <div key={todo.id}>
            <h1>{todo.title}</h1>
            <p>{todo.date}</p>
            <div className="flex gap-2">
              <button>Com</button>
              <button>Del</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
