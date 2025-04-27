import { ChevronLeft, HomeIcon, ShoppingCartIcon, Warehouse } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Sidebar() {
  return (
    <div className='w-56 min-h-screen bg-slate-900 text-slate-50 justify-between'>
        {/* Top Part */}
        <div className='flex flex-col'>
            {/* Logo */}
            <div className='bg-slate-950 flex space-x-2 items-center py-4 px-2'>
            <ShoppingCartIcon/>
            <span className='font-semibold'>Inventory</span>

            </div>
            {/* Links */}
            <nav className='flex flex-col gap-4 p-3'>
                <Link className='flex items-center space-x-2' href=''>
                    <HomeIcon className='w-4 h-4'/>
                    <span>Home</span>
                </Link>
                <Link className='flex items-center space-x-2' href=''>
                    <Warehouse className='w-4 h-4'/>
                    <span>Inventory</span>
                </Link>
            </nav>

        </div>

        {/* Bottom Part */}
        <div className='flex flex-col justify-end'>
            <div className='bg-slate-950 flex space-x-2 items-center py-4 px-2'>
            <ChevronLeft/>
            </div>

        </div>
        {/* Subscription Card */}
        {/* Footer Icon */}
    </div>
  )
}
