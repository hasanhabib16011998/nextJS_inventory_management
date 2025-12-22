import React from 'react'

export default function DataTable({ data, columns }) {
    return (
        <div className="relative overflow-x-auto bg-white shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-body">
                <thead className="text-sm text-body bg-neutral-secondary-medium border-b border-default-medium">
                    <tr>
                        {
                            columns.map((item,i)=>{
                                return (
                                    <th key={i} scope="col" className="px-6 py-3 font-medium uppercase">{item}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,i)=>{
                            return(
                                <tr key={i} className="bg-neutral-primary-soft border-b border-default hover:bg-neutral-secondary-medium">
                                    <th scope="row" className="px-6 py-4 font-medium text-heading whitespace-nowrap">
                                        {item.title}
                                    </th>
                                    <td className="px-6 py-4">
                                        {item.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        <a href="#" className="font-medium text-fg-brand hover:underline">Edit</a>
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
