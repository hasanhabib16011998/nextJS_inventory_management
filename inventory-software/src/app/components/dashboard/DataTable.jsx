import { Pencil } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import DeleteBtn from './DeleteBtn'

export default function DataTable({ data=[], columns=[], resourceTitle }) {
    
    return (
        <div className="overflow-x-auto bg-white shadow-md sm:rounded-lg">
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
                        <th scope="col" className="px-6 py-3 font-medium">ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,i)=>{
                            return(
                                <tr key={i} className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                                    {columns.map((columnName, i) => (
                                        <td key={i} className="px-6 py-4">
                                            {columnName === "imageURL" ? (
                                            <img
                                                src={item[columnName]}
                                                alt={`Image`}
                                                className="w-10 h-10 object-cover rounded"
                                            />
                                            ) : columnName === "createdAt" ||
                                            columnName === "updatedAt" ? (
                                            new Date(item[columnName]).toLocaleDateString()
                                            ) : columnName.includes(".") ? (
                                                columnName.split(".").reduce((obj,key)=> obj[key],item)
                                            ) : (
                                            item[columnName]
                                            )}
                                        </td>
                                    ))}
                                    <td className="px-6 py-4 flex items-center space-x-4">
                                        <Link href={`/dashboard/inventory/${resourceTitle}/update/${item.id}`} className="font-medium text-blue-600 dark:text-blue-500 flex items-center space-x-2">
                                        <Pencil className='w-4 h-4'/>
                                        <span>Edit</span>
                                        </Link>

                                        <DeleteBtn id={item.id} resourceTitle={resourceTitle}/>
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
