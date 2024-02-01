'use client'
import React, { useRef } from 'react'
import { addTodo } from '@/lib/action'
import AddTaskButton from '../AddTaskButton/AddTaskButton'
import { useFormState } from 'react-dom'


function AddTodoForm() {
    const formRef = useRef(null)
    const initialState = {
        message: '',
    }
    const [state, formAction] = useFormState(addTodo, initialState)
    return (
        <>
            <p className='text-red-400'>{state?.message}</p>
            <form
                ref={formRef}
                action={async formData => {
                    await formAction(formData)
                    formRef.current.reset();

                }}
            >
                <input placeholder="Enter title" type="text" name="title" />
                <input placeholder="Enter description" type="text" name="description" />
                <AddTaskButton />
            </form>
        </>
    )
}

export default AddTodoForm