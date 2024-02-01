"use server";

import { revalidatePath } from "next/cache";
import { Todo } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";

//Add todo
export const addTodo = async (prev, formData) => {
  console.log(prev, '=======previous state')
  console.log(formData, '=====form data')
  // const { title, description } = Object.fromEntries(formData);
  const title = formData.get('title')
  const description = formData.get('description')
  try {
    connectToDB();
    const newTodo = new Todo({
      title,
      description,
    });

    await newTodo.save();
  } catch (error) {
    console.log(error);
    return {
      message: 'Failed to create todo'
    }
  }
  revalidatePath("/");
  redirect("/");
};

//Update todo
export const updateTodo = async (formData) => {
  const { title, description, id } = Object.fromEntries(formData);

  try {
    const updatedData = {
      title,
      description,
    };
    Object.keys(updatedData).forEach(key=>{
        if(updatedData[key] === '' || updatedData[key] === undefined){
            delete updatedData[key]
        }
    })

    connectToDB();
    await Todo.findByIdAndUpdate(id, updatedData);
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create new todo");
  }
  revalidatePath("/");
  redirect("/");
};

//Delete todo
export const deleteTodo = async (formData) => {
  const { id } = Object.fromEntries(formData);
  try {
    connectToDB();
    await Todo.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Todo can not be deleted");
  }
  revalidatePath("");
  redirect("/");
};
