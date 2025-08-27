"use client"
import FormHeader from '@/app/components/dashboard/FormHeader'
import SelectInput from '@/app/components/FormInputs/SelectInput';
import SubmitButton from '@/app/components/FormInputs/SubmitButton';
import TextAreaInput from '@/app/components/FormInputs/TextAreaInput';
import TextInput from '@/app/components/FormInputs/TextInput';
import { Plus } from 'lucide-react';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function NewItem() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);

  const categories = [
    {
      label:"Electronics",
      value: "wahfbabfkwjhf",
    },
    {
      label:"Fashion",
      value: "alguoheoarhfhi",
    },
  ];

  const units = [
    {
      label:"Kg",
      value: "earkgaerbgerjh",
    },
    {
      label:"Pcs",
      value: "aohawurhwujVSD",
    },
    {
      label:"Packets",
      value: "EAGIAEBUILGA",
    },
  ];

  const brands = [
    {
      label:"Senora",
      value: "ahfahkfb",
    },
    {
      label:"Joya",
      value: "sroguheaogWF",
    },
    {
      label:"Fresh",
      value: "erghaeruilbgeil",
    },
  ];

  const warehouses = [
    {
      label:"Main",
      value: "wtguptougquif",
    },
    {
      label:"Dhaka",
      value: "ruigholtgloaegb",
    },
    {
      label:"Gazipur",
      value: "auoWHFUOWfuiaefki",
    },
  ];

  const suppliers = [
    {
      label:"Supplier A",
      value: "aergiaebruigbw",
    },
    {
      label:"Supplier B",
      value: "aergheurghleag",
    },
    {
      label:"Supplier C",
      value: "eryigbeuilrbgerhb",
    },
  ];

  

  async function onSubmit(data){
    try {
      setLoading(true);
      console.log(data);
      const baseURL = "http://localhost:3000";
      const response = await fetch(`${baseURL}/api/items`, {
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
      <FormHeader title="New item" href="/dashboard/inventory" />
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput label="Item Name" name="title" register={register} errors={errors} type="text" containerWidth="w-full"/>

          <SelectInput name="categoryId" label="Item category" register={register} containerWidth='w-full' options={categories}/>



          <TextInput label="Item SKU" name="sku" register={register} errors={errors} type="text" containerWidth="w-full" />

          <TextInput label="Item Barcode" name="barcode" register={register} errors={errors} type="text" containerWidth="w-full" />

          <TextInput label="Item Quantity" name="qty" register={register} errors={errors} type="number" containerWidth="w-full" />

          <SelectInput name="unitId" label="Unit" register={register} containerWidth='w-full' options={units} />

          <SelectInput name="brandId" label="Item Brand" register={register} containerWidth='w-full' options={brands} />

          <TextInput label="Buying Price" name="buyingPrice" register={register} errors={errors} type="number" containerWidth="w-full" />

          <TextInput label="Selling Price" name="sellingPrice" register={register} errors={errors} containerWidth="w-full" type="number"/>

          <SelectInput name="supplierId" label="Select the supplier" register={register} containerWidth='w-full' options={suppliers} />

          <TextInput label="Re-Order Point" name="reorderPoint" register={register} errors={errors} containerWidth="w-full" type="number"/>

          <SelectInput name="warehouseId" label="Select the warehouse" register={register} containerWidth='w-full' options={warehouses} />

          <TextInput label="Weight" name="weight" register={register} errors={errors} containerWidth="w-full" type="number"/>

          <TextInput label="Item Tax in %" name="taxRate" register={register} errors={errors} containerWidth="w-full" type="number"/>


          {/* Description */}
          <TextAreaInput label="Item Description" name="description" register={register} errors={errors} type="text" />

          <TextAreaInput label="Item Notes" name="notes" register={register} errors={errors} type="text" />


        </div>

        <SubmitButton isLoading={loading} title="item" />

      </form>

    </div>
  )
}
