import React from 'react'
import { ProfileCard } from './components/ProfileCard'
import { TimeCardList } from './components/TimeCardList'
import { UserProvider } from './context/UserProvider'

export const TimeTrackingDashboard = () => {
  return (
    <UserProvider>
      <div className='min-h-screen bg-[#0f1424] flex items-center'>

        <div className='w-[85%] max-w-[1280px] mx-auto py-10 grid md:grid-cols-[1fr_3fr] gap-4'>
          <ProfileCard />
          <TimeCardList />
        </div>

      </div>
    </UserProvider>
  )
}
