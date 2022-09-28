import React from 'react'
import Analytics from './Analytics/Analytics'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-12 gap-6 mt-2'>
      <div className='hidden md:block col-start-1 col-end-3'><Sidebar /></div>
      <div className='col-start-3 col-span-10 -ml-20 md:-ml-0 '><Analytics /></div>

    </div>
  )
}

export default Dashboard