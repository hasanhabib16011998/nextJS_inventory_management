import { getData } from '@/lib/getData'
import React from 'react'
import NewUnit from '../../new/page';
export default async function Update({params}) {
    const {id} = await params;
    const data = await getData(`units/${id}`);
    console.log(data);
  return (
    <>
        <NewUnit initialData={data} isUpdate={true}/>
    </>
  )
}
