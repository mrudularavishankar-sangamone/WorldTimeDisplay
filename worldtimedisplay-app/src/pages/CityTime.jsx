import React, { useState, useEffect }  from 'react';

export default function CityTime( { city } ) {

  //State to hold the current time. Initialize it with the current date and time
  //Gets upadated every second to reflect the current time
  const [time, setTime] = useState(new Date());

  function updateTime() {
    setTime(new Date());
  }

  //Effect hook to set up an interval that updates the time state every second
  useEffect(function setupInterval() {
    const timer = setInterval(updateTime, 1000);
    
    ////Cleanup the interval on component unmount
    return function cleanup() {
      clearInterval(timer);
    };
  }, []);

  //Formatting the time based on the city's timezone
  //Use an inbuilt JavaScript function that formats timeyones to localtime strings 
  const formattedTime = time.toLocaleTimeString('en-US', { 
    timeZone: city.timezone
  });

  return (
    <div>
      <p> {city.name}: { formattedTime } </p>
    </div>
  )
}
