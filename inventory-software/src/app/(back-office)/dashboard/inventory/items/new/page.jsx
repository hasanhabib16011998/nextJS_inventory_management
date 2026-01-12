import FormHeader from '@/app/components/dashboard/FormHeader'
import React from 'react'
import CreateItemForm from '@/app/components/dashboard/CreateItemForm';
import { getData } from '@/lib/getData';

export default async function NewItem({initialData={}, isUpdate=false}) {

  const categories = await getData('categories');
  const units = await getData('units');
  const brands = await getData('brands');
  const warehouses = await getData('warehouse');
  const suppliers = await getData('suppliers');
  
  return (
    <div>
      {/* Header */}
      <FormHeader title={ isUpdate ? "Update Item":"New Item" } href="/dashboard/inventory/items" />
      <CreateItemForm 
        categories={categories} 
        units={units} 
        brands={brands} 
        warehouses={warehouses} 
        suppliers={suppliers} 
        initialData={initialData} 
        isUpdate={true}
      />

    </div>
  )
}
