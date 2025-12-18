"use client"
import FormHeader from '@/app/components/dashboard/FormHeader'
import SelectInput from '@/app/components/FormInputs/SelectInput';
import SubmitButton from '@/app/components/FormInputs/SubmitButton';
import TextAreaInput from '@/app/components/FormInputs/TextAreaInput';
import TextInput from '@/app/components/FormInputs/TextInput';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { makePostRequest } from '@/lib/apiRequest';


export default function AddInventoryForm({items, warehouses}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);


  async function onSubmit(data){
    console.log(data);
    const endPoint = 'api/adjustments/add';
    makePostRequest(setLoading, endPoint, data, "Inventory", reset);
  }
  return (
    <div>
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput label="Reference Number" name="referenceNumber" register={register} errors={errors} type="text"/>

          <SelectInput name="itemId" label="Select the Item" register={register} containerWidth='w-full' options={items}/>

          <TextInput label="Enter quantity of stock to add" name="addStockQty" register={register} errors={errors} type="number" containerWidth="w-full"/>

          <SelectInput name="receivingWarehouseId" label="Select the Warehouse that will receive stock" register={register} containerWidth='w-full' options={warehouses}/>


          {/* Description */}
          <TextAreaInput label="Adjustment Notes" name="notes" register={register} errors={errors} type="text" />


        </div>

        <SubmitButton isLoading={loading} title="Adjustment" />

      </form>

    </div>
  )
}
