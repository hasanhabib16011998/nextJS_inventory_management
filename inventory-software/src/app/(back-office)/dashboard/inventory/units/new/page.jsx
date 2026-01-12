"use client"
import FormHeader from '@/app/components/dashboard/FormHeader'
import SubmitButton from '@/app/components/FormInputs/SubmitButton';
import TextInput from '@/app/components/FormInputs/TextInput';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { makePostRequest, makePutRequest } from '@/lib/apiRequest';
import { useRouter } from 'next/navigation';

export default function NewUnit({initialData={}, isUpdate=false}) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues:initialData
  });
  const [loading, setLoading] = useState(false);
  const redirectUrl = "/dashboard/inventory/units";
  function redirect(){
    router.push("/dashboard/inventory/units");
  }
  async function onSubmit(data){
    console.log(data);
    if(isUpdate){
        const endPoint = `api/units/${initialData.id}`;
        makePutRequest(setLoading, endPoint, data, "Unit", redirect, reset);
  
    } else {
        const endPoint = 'api/units';
        makePostRequest(setLoading, endPoint, data, "Unit", redirectUrl, reset);
    }
  }

  return (
    <div>
      {/* Header */}
      <FormHeader title={isUpdate? "Update Unit":"New Unit"} href="/dashboard/inventory/units" />
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput label="Unit Title" name="title" register={register} errors={errors} type="text" containerWidth='w-full'/>


          {/* Abbreviation */}
          <TextInput label="Unit Abbreviation" name="abbreviation" register={register} errors={errors} type="text" containerWidth='w-full'/>
          


        </div>

        <SubmitButton isLoading={loading} title={isUpdate? "Updated Unit":"New Unit"} />

      </form>

    </div>
  )
}
