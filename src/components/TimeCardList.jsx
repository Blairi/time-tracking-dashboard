import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { TimeCard } from './TimeCard'
import { ToggleTime } from './ToggleTime';

export const TimeCardList = () => {

  const { user:data } = useContext(UserContext);
  
  return (
    <div className='grid gap-4 md:grid-cols-3'>
      {
        data.map((item, index) => (
          <TimeCard 
            timeframes={item.timeframes}
            title={item.title}
            key={index}
          />
        ))
      }
    </div>
  )
}
