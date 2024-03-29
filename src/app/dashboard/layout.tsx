import React, { ReactNode } from 'react'
import SideBar from './_components/SideBar'

const DashboardLayout = ({children}:{children:ReactNode}) => {
  return (
    <div className='h-full'>
        <div className='hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50'>
            <SideBar/>
        </div>
        {children}
    </div>
  )
}

export default DashboardLayout