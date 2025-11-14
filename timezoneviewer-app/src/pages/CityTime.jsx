import React, { useState, useEffect }  from 'react';

export default function CityTime( { city } ) {

  //State to hold the current time. Initialize it with the current date and time
  //Gets upadated every second to reflect the current time
  const [time, setTime] = useState(new Date());

  //Effect hook to set up an interval that updates the time state every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer); //Cleanup the interval on component unmount
  }, []);

  //Formatting the time based on the city's timezone
  //Use an inbuilt JavaScript function that formats timeyones to localtime strings 
  const formattedTime = time.toLocaleTimeString('en-US', { 
    timeZone: city.timezone,
    hour12: false, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit'
  });

  return (
    <div className='city-zone'>
      <h2 className='city-name'> { city.name } </h2>
      <div className='city-time'> { formattedTime } </div>
    </div>
  )
}
