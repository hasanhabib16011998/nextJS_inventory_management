import FixedHeader from '@/app/components/dashboard/FixedHeader'
import { Shirt } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Inventory() {
  return (
    <div>
        <FixedHeader/>
        <div className='grid grid-col-1 lg:grid-cols-2 m-4'>
          <div className='shadow-x1 bg-white flex flex-col items-center justify-center gap-4'>
            <h2>Item Groups</h2>
            <div className=''>
              <Shirt strokeWidth=".5px" className='w-36 h-36'/>
            </div>
            <p className='line-clamp-1'>
              Create multiple variants of the same item using Item groups
            </p>
            <Link href="#" className='py-2 rounded-sm bg-blue-600 inline-flex px-3 text-white items-center space-x-2'>
            New Item Group
            </Link>
            <button className='py-2 rounded-sm bg-blue-600 inline-flex px-3 text-white inline-flex items-center space-x-2'>Enable</button>
          </div> 
        </div>
    </div>
  )
}
