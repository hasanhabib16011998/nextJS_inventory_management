"use client"
import React from 'react'
import { Trash2 } from 'lucide-react'

export default function DeleteBtn() {
    const handleDelete = ()=> {
        console.log('Button Clicked');
    }

    return (
        <button className="font-medium text-red-600 dark:red-blue-500 flex items-center space-x-1" onClick={handleDelete}>
            <Trash2 className='w-4 h-4' />
            <span>Delete</span>
        </button>
    )
}
