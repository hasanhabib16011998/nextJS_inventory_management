"use client"
import FormHeader from '@/app/components/dashboard/FormHeader'
import SelectInput from '@/app/components/FormInputs/SelectInput';
import SubmitButton from '@/app/components/FormInputs/SubmitButton';
import TextAreaInput from '@/app/components/FormInputs/TextAreaInput';
import TextInput from '@/app/components/FormInputs/TextInput';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewAdjustments() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const selectOptions = [
    {
      label:"Dhaka",
      value: "dhaka",
    },
    {
      label:"Gazipur",
      value: "gazipur",
    },
  ]

  async function onSubmit(data){
    try {
      setLoading(true);
      console.log(data);
      const baseURL = "http://localhost:3000";
      const response = await fetch(`${baseURL}/api/adjustments`, {
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(data),
      })
      if(response.ok){
        console.log(response);
        reset();
        setLoading(false)
      }
      

    } catch(error) {
      setLoading(false);
      console.log(error);
    }
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Adjustment" href="/dashboard/inventory" />
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput label="Enter amount of stock transfer" name="transferStockQty" register={register} errors={errors} type="number" containerWidth="w-full"/>

          <SelectInput name="receivingBranchId" label="Select the Branch that will receive stock" register={register} containerWidth='w-full' options={selectOptions}/>


          {/* Description */}
          <TextAreaInput label="Adjustment Notes" name="notes" register={register} errors={errors} type="text" />


        </div>

        <SubmitButton isLoading={loading} title="Warehouse" />

      </form>

    </div>
  )
}
