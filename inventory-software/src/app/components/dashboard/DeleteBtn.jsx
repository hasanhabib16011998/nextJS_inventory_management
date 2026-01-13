"use client"
import React from 'react';
import { Trash2 } from 'lucide-react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';


export default function DeleteBtn({ id, resourceTitle }) {
    const router = useRouter();
    const handleDelete = async()=> {
        console.log(`Button Clicked. id:${id}, resource:${resourceTitle}`);

        Swal.fire({
            title: 'Are you sure?',
            text:'You wont be able to revert this',
            showDenyButton: true,
            confirmButtonText: 'Yes',
            denyButtonText: 'No',
            customClass: {
              actions: 'my-actions',
              cancelButton: 'order-1 right-gap',
              confirmButton: 'order-2',
              denyButton: 'order-3',
            },
          }).then(async(result) => {
            if (result.isConfirmed) {
                const res = await fetch(`/api/${resourceTitle}/${id}`, {
                    method:"DELETE"
                });
                const data = await res.json();
                console.log("Data retreived : ",data);
                if(res.ok){
                    router.refresh();
                    Swal.fire('Deleted!', `${resourceTitle} has been deleted`, 'success');
                }
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })


    }

    return (
        <button className="font-medium text-red-600 dark:red-blue-500 flex items-center space-x-1" onClick={handleDelete}>
            <Trash2 className='w-4 h-4' />
            <span>Delete</span>
        </button>
    )
}
