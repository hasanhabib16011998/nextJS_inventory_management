"use client"
import FormHeader from '@/app/components/dashboard/FormHeader'
import SubmitButton from '@/app/components/FormInputs/SubmitButton';
import TextAreaInput from '@/app/components/FormInputs/TextAreaInput';
import TextInput from '@/app/components/FormInputs/TextInput';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast';
import { makePostRequest, makePutRequest } from '@/lib/apiRequest';


export default function NewBrand({initialData={}, isUpdate=false}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues:initialData
  });
  const [loading, setLoading] = useState(false);
  const redirectUrl = "/dashboard/inventory/brands";

  async function onSubmit(data){
    console.log(data);
    if(isUpdate){
      const endPoint = `api/brands/${initialData.id}`;
      makePutRequest(setLoading, endPoint, data, "Brand", redirectUrl, reset);

    } else {
      const endPoint = 'api/brands';
      makePostRequest(setLoading, endPoint, data, "Brand", redirectUrl, reset);
    }
  }

  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate? "Update Brand":"New Brand"} href={redirectUrl} />
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput label="Brand Title" name="title" register={register} errors={errors} type="text"/>


        </div>

        <SubmitButton isLoading={loading} title={isUpdate? "Updated Brand":"New Brand"} />

      </form>

    </div>
  )
}
