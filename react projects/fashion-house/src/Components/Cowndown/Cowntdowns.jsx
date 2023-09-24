import React, { useState, useEffect } from 'react';

const Countdown = ({ date }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      const currentDate = new Date();
      const countdownDate = new Date(date.y, date.m, date.d);

      const timeDifference = countdownDate - currentDate;

      if (timeDifference > 0) {
        const remainingSeconds = Math.floor(timeDifference / 1000);
        const remainingMinutes = Math.floor(remainingSeconds / 60) % 60;
        const remainingHours = Math.floor(remainingSeconds / 3600) % 24;
        const remainingDays = Math.floor(remainingSeconds / 86400);

        setDays(remainingDays);
        setHours(remainingHours);
        setMinutes(remainingMinutes);
      }
    }, 1000); // Update every second

    return () => {
      clearInterval(countdownInterval);
    };
  }, [date]);

  return (
    <div className='grid grid-cols-3 gap-2 my-3 max-w-[250px]'>
      <div className='flex flex-col items-center text-center bg-white text-[32px] text-[#224F34]'>
        <span className='text-base'>Days</span>
        <span className=''>{days}</span>
      </div>
      <div className='flex flex-col items-center text-center bg-white text-[32px] text-[#224F34]'>
        <span className='text-base'>Hours</span>
        <span className=''>{hours}</span>
      </div>
      <div className='flex flex-col items-center text-center bg-white text-[32px] text-[#224F34]'>
        <span className='text-base'>Minutes</span>
        <span className=''>{minutes}</span>
      </div>
    </div>
  );
};

export default Countdown;
