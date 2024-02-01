'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

function AddTaskButton() {
    const { pending } = useFormStatus()
    console.log(pending, '=======pending status')
    return (
        <button type="submit">{pending? 'Adding..': 'Add'}</button>
    )
}

export default AddTaskButton