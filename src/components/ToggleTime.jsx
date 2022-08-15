import React, { useContext } from 'react'

import { UserContext } from '../context/UserContext';

export const ToggleTime = () => {

  const {timeFrame, setTimeFrame} = useContext(UserContext);

  const handleClick = (time) => {
    setTimeFrame(time);
  }

  return (
    <div className='px-3 py-4'>
      <div className='flex md:flex-col justify-between md:gap-5'>
        <button 
          style={{color: timeFrame === 'daily' ? 'white' : '#6f76c8'}}
          onClick={() => handleClick('daily')}
        >Daily</button>
        <button 
          style={{color: timeFrame === 'weekly' ? 'white' : '#6f76c8'}}
          onClick={() => handleClick('weekly')}
        >Weekly</button>
        <button 
          style={{color: timeFrame === 'monthly' ? 'white' : '#6f76c8'}}
          onClick={() => handleClick('monthly')}
        >Monthly</button>
      </div>
    </div>
  )
}
