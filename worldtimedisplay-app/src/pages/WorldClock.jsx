import CityTime from './CityTime'

export default function WorldClock() {

  const cities = [
    { name : 'San Francisco', timezone: 'America/Los_Angeles' }, 
    { name: 'Chicago', timezone: 'America/Chicago' }, 
    { name: 'New York', timezone: 'America/New_York' }, 
    { name: 'London', timezone: 'Europe/London' },
    { name: 'Dubai', timezone: 'Asia/Dubai' },
    { name: 'Bengaluru', timezone: 'Asia/Kolkata' },
    { name: 'Singapore', timezone: 'Asia/Singapore' },
    { name: 'Tokyo', timezone: 'Asia/Tokyo' },
    { name: 'Sydney', timezone: 'Australia/Sydney' },    
    { name: 'Wellington', timezone: 'Pacific/Auckland' }    
  ];

  return (
    <div>
      <h1> Clock Dashboard </h1>
      
      <ul> {cities.map((cityObject, index) => (
        //key is required when using map to render a list of components to keep track of each component and avoid mix ups
        <CityTime key = {index} city = {cityObject}/>
      ))} </ul>

    </div>
  )
}
