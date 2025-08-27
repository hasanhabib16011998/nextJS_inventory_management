"use client"
import FormHeader from '@/app/components/dashboard/FormHeader'
import SubmitButton from '@/app/components/FormInputs/SubmitButton';
import TextAreaInput from '@/app/components/FormInputs/TextAreaInput';
import TextInput from '@/app/components/FormInputs/TextInput';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewCategory() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    reset();
  }
  return (
    <div>
      {/* Header */}
      <FormHeader title="New Category" href="#" />
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput label="Category Title" name="title" register={register} errors={errors} type="text" />


          {/* Description */}
          <TextAreaInput label="Category Description" name="description" register={register} errors={errors} type="text" />


        </div>

        <SubmitButton isLoading={loading} title="Category" />

      </form>

    </div>
  )
}
