import React from 'react';
import { BellRing, Bolt, ChevronDown, Grid2X2, History, Plus, UserPen, Users2 } from 'lucide-react';
import SearchInput from './SearchInput';
import Image from 'next/image';

export default function Header() {
  return (
    <div className='bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-slate-200'>
      <div className='flex gap-3'>
        {/* Recent Activities */}
        <button>
          <History className='w-6 h-6' />
        </button>
        {/* Search */}
        <SearchInput />
      </div>

      <div className='flex items-center gap-2'>
        {/* Plus Icon */}
        <div className='pr-2 border-r border-gray-300'>
          <button className='p-1 rounded-lg bg-blue-600'>
            <Plus className='text-slate-50 w-4 h-4' />
          </button>
        </div>

        {/* Users Icons */}
        <div className='flex gap-2 border-r border-gray-300'>
          <button className='p-1 rounded-lg hover:bg-slate-200'>
            <Users2 className='text-slate-900 w-4 h-4' />
          </button>
          <button className='p-1 rounded-lg hover:bg-slate-200'>
            <BellRing className='text-slate-900 w-4 h-4' />
          </button>
          <button className='p-1 rounded-lg hover:bg-slate-200'>
            <Bolt className='text-slate-900 w-4 h-4' />
          </button>
        </div>

        <div className='flex gap-6'>
            <button className='flex items-center'>
                <span>Garat</span>
                <ChevronDown className='w-4 h-4'/>
            </button>

            <button>
                <Image 
                    src='/user.png'
                    alt="user_image"
                    width={96}
                    height={96}
                    className='w-8 h-8 rounded-full border border-slate-900'
                />
            </button>
            <button>
                <Grid2X2 className='w-6 h-6 text-slate-900'/>
            </button>
        </div>
      </div>
    </div>
  );
}