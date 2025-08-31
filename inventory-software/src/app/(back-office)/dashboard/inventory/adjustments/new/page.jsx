"use client"
import AddInventoryForm from '@/app/components/dashboard/AddInventoryForm';
import FormHeader from '@/app/components/dashboard/FormHeader'
import TransferInventoryForm from '@/app/components/dashboard/TransferInventory';
import { Minus, Plus } from 'lucide-react';
import React, { useState } from 'react'

export default function NewAdjustments() {
  const tabs = [
    {
      title: "Add Stock",
      icon: Plus,
      form:"add",
    },
    {
      title: "Transfer Stock",
      icon: Minus,
      form:"transfer",
    },

  ];

  const [activeForm, setActiveForm] = useState("add")

  return (
    <div>
      {/* Header */}
      <FormHeader title="New Adjustment" href="/dashboard/inventory" />

      <div className="border-b border-gray-200 dark:border-gray-700 w-full max-w-4xl px-4 py-2 bg-white border mx-auto my-4 shadow rounded">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">

            {
              tabs.map((tab,i)=>{
                const Icon = tab.icon;
                return (
                  <li className="mr-2" key={i}>
                    <button onClick={()=> setActiveForm(tab.form)} 
                    className={`${activeForm===tab.form?"inline-flex items-center justify-center p-4 border-b-2 border-blue-600 rounded-t-lg text-blue-600 rounded-t-l group active":"inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"}`}
                   >
                        <Icon className='w-4 h-4 mr-2 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300'/> {tab.title}
                    </button>
                  </li>
                )
              })
            }

        </ul>
      </div>
      {/* Form */}
      { activeForm === 'add' ? (
        <AddInventoryForm/>
      ):(
        <TransferInventoryForm/>
      )}

    </div>
  )
}
