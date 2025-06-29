import HomeNavBar from '@/app/components/dashboard/HomeNavBar';
import React from 'react'

function Layout({children}) {
  return (
    <div className=''>
        <HomeNavBar/>
        {children}
    </div>
  )
}

export default Layout;