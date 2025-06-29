'use client'
import { Building2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react';
import { usePathname } from 'next/navigation';

function HomeNavBar() {
    const pathname = usePathname();
    const navLinks=[
        {
            title:"Dashboard",
            href:"/dashboard/home/overview",
        },
        {
            title:"Getting Started",
            href:"/dashboard/home/getting-started",
        },
        {
            title:"Recent Updates",
            href:"/dashboard/home/updates",
        },
        {
            title:"Announcements",
            href:"/dashboard/home/announcements",
        },

    ]
  return (
    <div className='h-32 p-5'>
        <div className='flex space-x-3'>
            <div className='flex w-12 h-12 bg-white rounded-lg items-center justify-center'>
                <Building2/>
            </div>
            <div className='flex flex-col'>
                <p className='text-slate-900 font-semibold'>Hello, Hasan</p>
                <span className='text-sm'>DevOps</span>
            </div>
        </div>
        <nav className='sticky mt-6 border-b-1 border-slate-200'>
            {
                navLinks.map((item,i)=> {
                    return (
                        <Link key={i} href={item.href} className={`${
                        pathname === item.href ? "py-1 mr-5 border-b-2 border-blue-600" : "py-1 mr-5"
                        }`}>{item.title}</Link>
                    )
                })
            }
        </nav>
    </div>
  )
}

export default HomeNavBar