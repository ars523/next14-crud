import AddTodoForm from "@/components/AddTodoForm/AddTodoForm";
import { deleteTodo } from "@/lib/action";
import { fetchTodos } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const todos = await fetchTodos();
  return (
    <main className="">
      <div className="w-fit mx-auto">
        {/* <Link href={"/addTodo"} className="block text-center mb-4 border">
          Add new todo
        </Link> */}

        <div className="my-2">
          <AddTodoForm />
        </div>

        {todos.map((todo) => (
          <div key={todo.title} className="p-2 border mb-1">
            <h1>{todo.title} </h1>
            <span className="text-sm">{todo.description}</span>
            <div className="flex gap-4">
              <Link href={`/editTodo/${todo.id}`}>View</Link>
              <form action={deleteTodo}>
                <input type="hidden" value={todo.id} name="id" />
                <button type="submit">Delete</button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
