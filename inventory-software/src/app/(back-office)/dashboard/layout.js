import Header from '@/app/components/dashboard/Header'
import React from 'react'

export default function layout({children}) {
  return (
    <div className='flex'>
        <div className='w-56 min-h-screen bg-slate-900 text-slate-50'>
            Side Bar
        </div>
        <main className='w-full bg-slate-100 min-h-screen'>
        <Header/>
        {children}
        </main>
    </div>
  )
}
