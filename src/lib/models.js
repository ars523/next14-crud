import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false
    }
})

export const Todo = mongoose.models.Todo || mongoose.model("Todo", todoSchema)