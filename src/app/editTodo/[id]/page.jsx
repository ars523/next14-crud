import { updateTodo } from '@/lib/action'
import { fetchTodo } from '@/lib/data'

export default async function Page({params}) {
    const todo = await fetchTodo(params.id)
    return (
        <form action={updateTodo}>
            <input type="hidden" name="id" value={todo.id} />
            <input type="text" name="title" placeholder ={todo.title} />
            <input type="text" name="description" placeholder={todo.description} />
            <button type="submit">Update</button>
        </form>
    )
}