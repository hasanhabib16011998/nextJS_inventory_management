"use client"
import ImageUpload from '@/app/components/FormInputs/ImageUpload';
import SelectInput from '@/app/components/FormInputs/SelectInput';
import SubmitButton from '@/app/components/FormInputs/SubmitButton';
import TextAreaInput from '@/app/components/FormInputs/TextAreaInput';
import TextInput from '@/app/components/FormInputs/TextInput';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { makePostRequest,makePutRequest } from '@/lib/apiRequest';
import { useRouter } from 'next/navigation';

export default function CreateItemForm({categories, units, brands, warehouses, suppliers, initialData = {}, isUpdate=false}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({defaultValues:initialData});
  const [loading, setLoading] = useState(false);
  const [imageURL, setImageURL] = useState("");
  const router = useRouter();


  const redirectUrl = "/dashboard/inventory/items";
  function redirect(){
    router.push("/dashboard/inventory/items");
  }

  async function onSubmit(data){
    if(isUpdate){
      const endPoint = `api/items/${initialData.id}`;
      makePutRequest(setLoading, endPoint, data, "Item", redirect, reset);

    } else {
      data.imageURL = imageURL;
      const endPoint = 'api/items';
      makePostRequest(setLoading, endPoint, data, "Item", redirectUrl, reset);
      setImageURL("");
    }
  }
  return (
    <>
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-4xl p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto my-3'>
        <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
          <TextInput label="Item Name" name="title" register={register} errors={errors} type="text" containerWidth="w-full"/>

          <SelectInput name="categoryId" label="Item category" register={register} containerWidth='w-full' options={categories}/>



          <TextInput label="Item SKU" name="sku" register={register} errors={errors} type="text" containerWidth="w-full" />

          <TextInput label="Item Barcode" name="barcode" register={register} errors={errors} type="text" containerWidth="w-full" />

          <TextInput label="Item Quantity" name="quantity" register={register} errors={errors} type="number" containerWidth="w-full" />

          <SelectInput name="unitId" label="Unit" register={register} containerWidth='w-full' options={units} />

          <SelectInput name="brandId" label="Item Brand" register={register} containerWidth='w-full' options={brands} />

          <TextInput label="Buying Price" name="buyingPrice" register={register} errors={errors} type="number" containerWidth="w-full" />

          <TextInput label="Selling Price" name="sellingPrice" register={register} errors={errors} containerWidth="w-full" type="number"/>

          <SelectInput name="supplierId" label="Select the supplier" register={register} containerWidth='w-full' options={suppliers} />

          <TextInput label="Re-Order Point" name="reOrderPoint" register={register} errors={errors} containerWidth="w-full" type="number"/>

          <SelectInput name="warehouseId" label="Select the warehouse" register={register} containerWidth='w-full' options={warehouses} />

          <TextInput label="Weight" name="weight" register={register} errors={errors} containerWidth="w-full" type="number"/>

          <TextInput label="Item Tax in %" name="taxRate" register={register} errors={errors} containerWidth="w-full" type="number"/>


          {/* Description */}
          <TextAreaInput label="Item Description" name="description" register={register} errors={errors} type="text" />

          <TextAreaInput label="Item Notes" name="notes" register={register} errors={errors} type="text" />

          <ImageUpload imageURL={imageURL} setImageURL={setImageURL} />

        </div>

        <SubmitButton isLoading={loading} title={ isUpdate ? "Updated Item":"New Item" } />

      </form>

    </>
  )
}
