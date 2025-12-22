import Header from '@/app/components/dashboard/Header'
import Sidebar from '@/app/components/dashboard/Sidebar'
import React from 'react'

export default function Layout({ children }) {
  return (
    // 1. Lock the outer div to the screen height
    <div className='flex h-screen overflow-hidden'>
      
      {/* Sidebar stays fixed because the parent is h-screen */}
      <Sidebar />

      {/* 2. Main takes remaining width (flex-1) and handles its own scrolling */}
      <main className='flex-1 flex flex-col min-w-0 bg-slate-100 transition-all'>
        <Header />
        
        {/* 3. This wrapper handles the actual page content scrolling */}
        <div className='flex-1 overflow-y-auto overflow-x-hidden'>
          {children}
        </div>
      </main>
    </div>
  )
}