import { HelpCircle, LayoutGrid, List, MoreHorizontal, Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function FixedHeader() {
  return (
    <div className='flex justify-between items-center py-5 bg-white px-4'>
      <button className='item'>All Items</button>
      <div className='flex gap-4'>
        {/* New, List, LayoutGrid: horizontal */}
        <div className='pr-2 border-r border-gray-300 flex items-center gap-x-2'>
          <Link href="#" className='p-1 rounded-sm bg-blue-600 flex px-4 text-white items-center space-x-2'>
            <Plus className='w-4 h-4' />
            <span>New</span>
          </Link>
          <div className='flex rounded-md overflow-hidden'>
          <button className='bg-gray-300 p-2 border-r border-grey-400'>
            <List className='w-4 h-4'/>
          </button>
          <button className='bg-gray-100 p-2'>
            <LayoutGrid className='w-4 h-4'/>
          </button>
        </div>
        <button className='bg-gray-100 p-2 rounded-md'><MoreHorizontal className='w-4 h-4'/></button>
        <button className='bg-orange-600 p-2 text-white rounded-md'><HelpCircle className='w-4 h-4'/></button>
        </div>
      </div>
    </div>
  )
}