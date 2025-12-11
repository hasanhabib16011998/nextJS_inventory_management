"use client"
import FormHeader from '@/app/components/dashboard/FormHeader'
import SelectInput from '@/app/components/FormInputs/SelectInput';
import SubmitButton from '@/app/components/FormInputs/SubmitButton';
import TextAreaInput from '@/app/components/FormInputs/TextAreaInput';
import TextInput from '@/app/components/FormInputs/TextInput';
import { makeAPIRequest } from '@/lib/apiRequest';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';

export default function NewSupplier() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data){
    console.log(data);
    const baseURL = "http://localhost:3000";
    const url = `${baseURL}/api/suppliers`;
    makeAPIRequest(setLoading, url, data, "Supplier", reset);
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Warehouse" href="/dashboard/inventory" />
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput label="Supplier Name" name="name" register={register} errors={errors} type="text" containerWidth="w-full"/>

          <TextInput label="Supplier Phone" name="phone" register={register} errors={errors} type="text" containerWidth="w-full"/>

          <TextInput label="Supplier Email" name="email" register={register} errors={errors} type="email" containerWidth="w-full"/>

          <TextInput label="Supplier Address" name="address" register={register} errors={errors} type="text" containerWidth="w-full"/>

          <TextInput label="Supplier Contact Person" name="contactPerson" register={register} errors={errors} type="text" containerWidth="w-full"/>

          <TextInput label="Supplier Code" name="supplierCode" register={register} errors={errors} type="text" containerWidth="w-full"/>

          <TextInput label="Supplier TIN" name="taxID" register={register} errors={errors} type="text" containerWidth="w-full"/>

          <TextAreaInput label="Supplier Payment Terms" name="paymentTerms" register={register} errors={errors} type="text" />

          <TextAreaInput label="Supplier Notes" name="notes" register={register} errors={errors} type="text" />

        </div>

        <SubmitButton isLoading={loading} title="Supplier" />

      </form>

    </div>
  )
}
