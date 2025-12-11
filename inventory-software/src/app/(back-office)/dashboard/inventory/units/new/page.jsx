"use client"
import FormHeader from '@/app/components/dashboard/FormHeader'
import SubmitButton from '@/app/components/FormInputs/SubmitButton';
import TextInput from '@/app/components/FormInputs/TextInput';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { makePostRequest } from '@/lib/apiRequest';

export default function NewUnit() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  async function onSubmit(data){
    console.log(data);
    const endPoint = 'api/units';
    makePostRequest(setLoading, endPoint, data, "Unit", reset);
  }

  return (
    <div>
      {/* Header */}
      <FormHeader title="New unit" href="/dashboard/inventory" />
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput label="Unit Title" name="title" register={register} errors={errors} type="text" containerWidth='w-full'/>


          {/* Abbreviation */}
          <TextInput label="Unit Abbreviation" name="abbreviation" register={register} errors={errors} type="text" containerWidth='w-full'/>
          


        </div>

        <SubmitButton isLoading={loading} title="unit" />

      </form>

    </div>
  )
}
