import { addTodo } from '@/lib/action'

export default function Page() {
    return (
        <form action={addTodo}>
            <input placeholder="Enter title" type="text" name="title" />
            <input placeholder="Enter description" type="text" name="description" />
            <button type="submit">Add</button>
        </form>
    )
}