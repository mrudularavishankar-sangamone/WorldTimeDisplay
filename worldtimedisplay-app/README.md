<img width="404" height="484" alt="image" src="https://github.com/user-attachments/assets/fc895eb4-2913-4ad3-aee5-a005d07c477e" /># World Time Display

This ReactJS app displays the current local time in 10 major cities around the world. It helps users easily check the time in different parts of the world at a glance.

### Cities Included:
- San Francisco
- Chicago
- New York
- London
- Dubai
- Bangalore
- Singapore
- Tokyo
- Sydney
- Wellington

### Technologies Used:
- ReactJS - UI framework and interactivity
- HTML - Markup structure
- CSS - Styling

## Setup/Installation

### Prerequisites:
- Node.js (v14 or higher) and npm installed on your machine
- Git (to clone the repository)

### Steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/mrudularavishankar-sangamone/WorldTimeDisplay
   cd WorldTimeDisplay/worldtimedisplay-app
   ```

2. **Install the React package and its dependencies:**
   ```
   npx create-react-app <AppName>
   ```

3. **Changing the directory to the <AppName>**
   ```
   cd <AppName>
   ```

4. **Start the development server:**
   ```
   npm start
   ```
   The app will open in your browser at `http://localhost:3000`

5.  **Delete the following files from src**
   - App.test.js
   - index.css
   - logo.svg
   - reportWebVitals.js
   - setupTests.js

6. **Modify index.js file**
   - Delete the reportWebVitals import statement
   - Delete the index.css import statement
   - Delete the comments
   - Delete the reportWebVitals() from the bottom of the code
  
7. **Modify App.js file**
   - Delete the logo.svg import statement
   - Delete all the lines of code between the return() in App function
   - Add the following statements in the return()
     ```
     <>
      <p>My React App</p>
     </>
     ```
   - Verify the output at `http://localhost:3000`. Now, the React Application is ready. 
     
8. **Grouping the jsx files**
   - Create a folder called pages under src
   - Create a file called pages/page1.jsx
   - Add the 'export default function Page1(){}' statement 
   - Create an array of cities inside page1() function:
     ```
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
     ```
   - Display the list of cities as per the code below:
     ```
     return(
        <div>
           <h1> World Clock Display </h1>
           <ul> {cities[0].name} </ul>
           <ul> {cities[1].name} </ul>
           <ul> {cities[2].name} </ul>
           <ul> {cities[3].name} </ul>
           <ul> {cities[4].name} </ul>
           <ul> {cities[5].name} </ul>
           <ul> {cities[6].name} </ul>
           <ul> {cities[7].name} </ul>
           <ul> {cities[8].name} </ul>
           <ul> {cities[9].name} </ul>
       </div>
     )
     ```

9. **Include page1.jsx reference in App.js**
    ```
    import Page1 from './pages/page1.jsx';
    ```
    - Add <Page1/> React tag within the return()
      ```
      return (
       <>
         <p>My React App</p>
         <Page1 />
       </>
      );
      ```
   - Verify the output at `http://localhost:3000`.
     <img width="404" height="484" alt="image" src="https://github.com/user-attachments/assets/ac677e39-4836-4e7e-8f9a-b2f0dc15185a" />

10. **Create page2.jsx under src**
   - Create a file called pages/page2.jsx
   - Import the useState in-built function from React
     ```
      import { useState } from 'react';
     ```
   - Add the 'export default function Page2( {city} ){}' statement
   - Create an array of time and setTime to hold the current time:
     ```
      const [time, setTime] = useState(new Date());
     ```
   - Add a return statement to display the time:
     ```
     return(
       <div>
         <p> {city.name}: {time.toLocaleTimeString()} </p>
       </div>
     )
     ```
11. **Include page2.jsx reference in page1.jsx**
    ```
    import Page2 from "./page2.jsx";
    ```
    - Add <Page2/> React tag within the return()
      ```
      return(
    <div>
      <h1> World Clock Display </h1>
      <ul> {cities.map((city, index) => (
        <Page2 key = {index} city = {city}/>
      ))} </ul>
    </div>
  )
      ```
   

## Images/Icons Used:
- https://www.freepik.com/icon/time-zone_2340162#fromView=families&page=1&position=1&uuid=7a49de49-7d70-4fcf-ac07-2f11f7cf0700
