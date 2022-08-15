import { useContext } from 'react';

import { UserContext } from '../context/UserContext';

import iconEllipsis from '../assets/icon-ellipsis.svg'

import iconPlay from '../assets/icon-play.svg';
import iconExercise from '../assets/icon-exercise.svg';
import iconSelfCare from '../assets/icon-self-care.svg';
import iconSocial from '../assets/icon-social.svg';
import iconStudy from '../assets/icon-study.svg';
import iconWork from '../assets/icon-work.svg';

export const TimeCard = ({ title, timeframes }) => {

  const colors = {
    work: '#ff8c66',
    play: '#56c2e6',
    study: '#ff5c7c',
    exercise: '#4acf81',
    social: '#7536d3',
    selfcare: '#f1c65b',
  };

  const times = {
    daily: 'day',
    weekly: 'week',
    monthly: 'month'
  };

  const icons = {
    work: iconWork,
    play: iconPlay,
    study: iconStudy,
    exercise: iconExercise,
    social: iconSocial,
    selfcare: iconSelfCare,
  }

  const { timeFrame } = useContext(UserContext);

  return (
    <div 
      style={{backgroundColor: colors[title.replace(' ', '').toLowerCase()]}} 
      className='rounded-md overflow-hidden'
    >

      <div className='flex justify-end px-3 h-10 overflow-hidden'>
        <img 
          src={icons[title.replace(' ', '').toLowerCase()]}
          alt="icon" className='h-16 -translate-y-2'
        />
      </div>

      <div className='bg-[#1c1f4a] hover:bg-[#151738] rounded-md h-full'>
        
        <div className='px-3 py-4'>

          <div className='flex justify-between md:mb-5'>
            <h2 className='font-bold text-white'>{ title }</h2>
            <button>
              <img src={iconEllipsis} alt="ellipsis icon" />
            </button>
          </div>

          <div className='flex justify-between md:gap-4 items-center md:flex-col'>
            <span className='text-white text-2xl md:text-4xl font-light md:w-full md:text-left'>{timeframes[timeFrame].current}hrs</span>
            <p className='text-[#6f76c8] text-sm md:text-left md:w-full'>Last {times[timeFrame]} - {timeframes[timeFrame].previous}hrs</p>
          </div>

        </div>

      </div>

    </div>
  )
}
