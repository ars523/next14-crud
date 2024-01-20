import { addTodo } from "@/lib/action";
import { fetchTodo } from "@/lib/data";
import Image from "next/image";

export default async function Home() {
  const todos = await fetchTodo()
  console.log(todos, '=======todos')
  return (
    <main className="">
      <p>Hello</p>
      {
        todos.map(todo=>(
          <div key={todo.title}>
            {todo.title} - {todo.description}
          </div>
        ))
      }
      <form action={addTodo}>
        <input placeholder="Enter title" type="text" name="title"/>
        <input placeholder="Enter description" type="text" name="description"/>
        <button type="submit">Add</button>
      </form>
    </main>
  );
}

// wkvgCjcc5RbkznVk
// next-app
