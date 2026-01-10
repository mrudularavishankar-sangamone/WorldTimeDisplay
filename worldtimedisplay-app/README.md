# World Time Display

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

## Technologies Used:
- ReactJS - UI framework and interactivity
- HTML - Markup structure
- CSS - Styling

## Setup/Installation

### Prerequisites:
- Node.js (v14 or higher) and npm installed on your machine
- Git (to clone the repository)

### Steps:

1. Verify if npm is installed in your device/workspace(for Windows):
    - Before running the project, ensure that npm is installed on your system.
    - Open the Terminal in VSCode.
    - Run the following command:
      ```
      npm -v
      ```
    - If a version number is displayed (for example, 10.4.1), npm is already installed. You can skip Step 2.
    - If you see an error such as: 'npm' is not recognized as an internal or external command, then npm is not installed. Proceed to Step 2

2. Installing npm:
    - Download Node.js from 'https://nodejs.org/'.
    - Install Node.js by running the installer and follow the prompts.
    - Verify the installation by running the npm -v command in terminal.

3. Install the React package and its dependencies:
   ```
   npx create-react-app <app-name>
   ```
   P.S: The AppName should only contain lowercase alphabets

4. Changing the directory to the <AppName>:
   ```
   cd <app-name>
   ```

5. Start the development server:
   ```
   npm start
   ```
   The app will open in your browser at `http://localhost:3000`

6. Modify App.js file:
   - Delete the logo.svg import statement
   - Delete all the lines of code between the return() in App function
   - Add the following statements in the return()
     ```
     return(
        <div>
          <h1> World Clock Display </h1>
        </div>
     );
     ```
   - Verify the output at `http://localhost:3000`. Now, the React Application is ready. 
     
7. Grouping the jsx files
   - Create a folder called pages under src
   - Create a file called Page1.jsx under pages folder
   - Add the ```export default function Page1(){ }``` statement 
   - Create an array of cities inside Page1() function within the { }:
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
   - Display the list of cities as per the code below after the cities array within the { }:
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

8. Include Page1.jsx reference in App.js:
    ```
    import Page1 from './pages/Page1.jsx';
    ```
    - Add <Page1/> React tag within the return() so that the contents of Page1.jsx shows up on the screen.
      ```
      return (
        <div className = 'App'>
          <h1> World Clock Display </h1>
          <Page1 />
        </div>
      );
      ```
   - Verify the output at `http://localhost:3000`.

9. Create Page2.jsx under src/pages
   - Create a file called Page2.jsx under pages folder
   - Import the useState in-built function from React:
     ```
      import { useState } from 'react';
     ```
   - Add the ``` export default function Page2({city}) { } ``` statement
   - Create an array of time and setTime to hold the current time within the { } of the Page2 function:
     ```
     import { useState } from 'react';
      
     export default function Page2({city}) {
        const [time, setTime] = useState(new Date());
     }
     ```
   - Add a return statement to display the time after the ```const [time, setTime] = useState(new Date());``` statement within { }:
     ```
     return(
        <div>
           <p> {city.name}: {time.toLocaleTimeString()} </p>
        </div>
     )
     ```
10. Include Page2.jsx reference in Page1.jsx
    ```
    import Page2 from './Page2.jsx';
    ```
    - Add <Page2/> React tag within the return() so that the contents of Page2.jsx shows up on the screen.
      ```
      return(
         <div>
            <h1> World Clock Display </h1>
            <ul> {cities.map((cityObject, index) => (
              <Page2 key = {index} city = {cityObject}/> ))}
            </ul>
         </div>
        )
      ```
      We use .map() so React can automatically display all cities in the list without writing the same <ul> line over and
      over.
   - Verify the output at `http://localhost:3000`.

11. Adding the Timezones to each of the city
    - The above step (Step11) displays only the time acquired from the system and does not specifically display the time in each city. In order to display the respective time in each city, we need to add the following to Page2.jsx within { } Page2() function:
    ```
     import { useState } from 'react';
      
     export default function Page2({city}) {
        const [time, setTime] = useState(new Date());
         
        const formattedTime = time.toLocaleTimeString('en-US', {
          timeZone: city.timezone
        });
         
        return(
          <div>
            <p> {city.name}: { formattedTime } </p>
          </div>
        )
     } 
    ```
     - Verify the output at `http://localhost:3000`.

12. Automatic Time Update
    - We need to update the time automatically without having to click refresh every second. In order to do this, we use a React Hook called useEffect(), which updates the page after the mentioned time has passed(E.g: 1000ms/ 1s)
      ```
      import { useState, useEffect } from 'react';
      
      export default function Page2( {city} ) {
           const [time, setTime] = useState(new Date());

           function updateTime() {
                setTime(new Date());
           }
            
           useEffect(function setupInterval() {
               const timer = setInterval(updateTime, 1000);
                
               ////Cleanup the interval on component unmount
               return function cleanup() {
                  clearInterval(timer);
               };
           }, []);
           
           const formattedTime = time.toLocaleTimeString('en-US', {
                timeZone: city.timezone
           });
            
           return(
             <div>
               <p> {city.name}: { formattedTime } </p>
             </div>
           )
      }
      ```
     - Verify the output at `http://localhost:3000`. The time gets updated automatically.