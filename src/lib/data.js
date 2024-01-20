import { Todo } from "./models"
import { connectToDB } from "./utils";

export const fetchTodo = async ()=>{
    try {
        connectToDB()
        const todos = await Todo.find();
        return todos
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch data!')
    }
}