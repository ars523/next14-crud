import { Todo } from "./models"
import { connectToDB } from "./utils";

export const fetchTodos = async ()=>{
    try {
        connectToDB()
        const todos = await Todo.find();
        return todos
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch data!')
    }
}

export const fetchTodo = async (id)=>{
    try {
        connectToDB()
        const todo = await Todo.findById(id);
        return todo
    } catch (error) {
        console.log(error)
        throw new Error('Failed to fetch data!')
    }
}