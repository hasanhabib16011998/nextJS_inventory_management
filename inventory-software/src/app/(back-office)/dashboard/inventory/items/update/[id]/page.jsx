import { getData } from '@/lib/getData'
import React from 'react'
import NewItem from '../../new/page';
export default async function Update({params}) {
    const {id} = await params;
    const data = await getData(`items/${id}`);
    console.log(data);
  return (
    <>
        <NewItem initialData={data} isUpdate={true}/>
    </>
  )
}
