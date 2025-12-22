import { Pencil, Trash, Trash2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function DataTable({ data, columns }) {
    return (
        <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
                    <tr>
                        {
                            columns.map((columnName,i)=>{
                                return (
                                    <th key={i} scope="col" className="px-6 py-3 font-medium uppercase">{columnName}</th>
                                )
                            })
                        }
                        <th scope="col" class="px-6 py-3 font-medium">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,i)=>{
                            return(
                                <tr key={i} className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                                    {columns.map((columnName,i)=>{
                                        return(
                                            <td key={i} className='px-6 py-4'>
                                                {item[columnName]}
                                            </td>
                                        )

                                    })}
                                    <td class="px-6 py-4 flex items-center space-x-4">
                                        <Link href="#" className="font-medium text-blue-600 dark:text-blue-500 flex items-center space-x-2">
                                        <Pencil className='w-4 h-4'/>
                                        <span>Edit</span>
                                        </Link>
                                    <button className="font-medium text-red-600 dark:red-blue-500 flex items-center space-x-1">
                                    <Trash2 className='w-4 h-4'/>
                                    <span>Delete</span>
                                    </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )
}
