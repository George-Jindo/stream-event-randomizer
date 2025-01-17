# Stream Event Randomizer

A web app designed for streamers to randomly pick challenges and manage their events during streams. Includes a functional timer and local storage integration for challenge persistence.

## Features
- Timer with start, pause, and reset
- Add, delete, and randomize challenges
- Persistent storage using localStorage

## Tech Stack
- React
- CSS

## **Technical Overview**

### **Technologies Used**
- **React**: For building the interactive UI components and managing application state.
- **CSS**: For styling the components and creating a responsive user interface.
- **localStorage**: To provide persistent storage for user-generated challenges across sessions.

### **File Structure**
The project follows a modular structure for better organization and scalability:

src/ ├── components/ │ ├── Timer.jsx # Timer component with start, pause, and reset functionality │ ├── ChallengeForm.jsx # Form for adding new challenges │ ├── ChallengeList.jsx # List displaying all challenges with delete and randomize options ├── App.jsx # Main app component integrating all features ├── index.css # Global CSS for basic styling └── main.jsx # Entry point for the React app


### **Key Functionalities**
1. **Timer**
   - Built with `useState` for time management and `useEffect` to control behavior changes.
   - Functions include:
     - **Start**: Begins the countdown.
     - **Pause**: Pauses the current timer.
     - **Reset**: Resets the timer to the initial value.
   - Timer automatically starts when a random challenge is selected but can also be manually controlled.

2. **Challenge Management**
   - Users can:
     - Add new challenges using the form (supports pressing `Enter` for quick submission).
     - Delete challenges individually or using a "Select All" option.
     - Randomize challenges to pick one at random from the list.
   - Challenges are stored in `localStorage` using `JSON.stringify` and retrieved using `JSON.parse`.

3. **Local Storage Persistence**
   - Implemented with `useEffect` to synchronize the state of challenges with `localStorage`:
     - On initial load, retrieves saved challenges from `localStorage`.
     - Updates `localStorage` whenever the challenge list changes.
   - Debugged issues with data clearing by ensuring proper synchronization logic in `useEffect`.

4. **Responsive Design**
   - CSS used for a clean and responsive layout:
     - Buttons styled for consistency with hover effects.
     - Lists aligned properly with no unwanted left margin.
   - Ensures functionality and usability on different screen sizes.
