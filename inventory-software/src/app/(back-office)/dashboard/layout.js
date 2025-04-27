import Header from '@/app/components/dashboard/Header'
import Sidebar from '@/app/components/dashboard/Sidebar'
import React from 'react'

export default function layout({children}) {
  return (
    <div className='flex'>
        <Sidebar/>

        <main className='w-full bg-slate-100 min-h-screen'>
        <Header/>
        {children}
        </main>
    </div>
  )
}
