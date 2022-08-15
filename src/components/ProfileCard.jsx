import React from 'react'
import profileIcon from '../assets/image-jeremy.png';
import { ToggleTime } from './ToggleTime';

export const ProfileCard = () => {
  return (
    <div className='rounded-md overflow-hidden bg-[#1c1f4a]'>

      <div className='bg-[#5847eb] px-3 py-4 rounded-md md:h-96 max-h-[1200px] md:flex md:items-center'>

        <div className='flex md:flex-col gap-1 items-center'>

          <div className='md:flex md:justify-start md:w-full'>
            <img className='rounded-full border-[.3rem] w-12 h-12' src={profileIcon} alt="profile icon" />
          </div>

          <div className='flex flex-col justify-center'>
            <span className='text-gray-300'>Report for</span>
            <h1 className='text-white text-xl md:text-2xl'>Jeremy Robson</h1>
          </div>

        </div>

      </div>

      <ToggleTime />

    </div>
  )
}
