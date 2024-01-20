import { revalidatePath } from "next/cache"
import { Todo } from "./models"
import { connectToDB } from "./utils"

export const addTodo = async (formData) =>{
    "use server"
    const {title, description} = Object.fromEntries(formData)

    try {
        connectToDB()
        const newTodo = new Todo({
            title,
            description
        })

        await newTodo.save();
        
    } catch (error) {
        console.log(error)
        throw new Error("Failed to create new todo")
    }
    revalidatePath('/')
}