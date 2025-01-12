# Digital Clock

## Overview
This project is a **Digital Clock** web application that displays the current time and highlights the active day of the week. It includes an **ON/OFF button** for toggling the clock display and uses animations for visual effects.

## Features
- Displays the current hour and minute.
- Highlights the current day of the week.
- Includes an ON/OFF button to toggle the clock display.
- Animations for transitions and visual effects.
- Fully responsive and minimalist design.

## Demo
[Live Demo](amal-rekshin.github.io/Digital_clock/)

## File Structure
```
digital-clock/
├── index.html   # Main HTML file
├── style.css    # Styles for the clock
├── script.js    # Updates the time and highlights the current day
├── on-off.js    # Handles the ON/OFF functionality
├── clock.svg    # Icon for the page
└── README.md    # Documentation
```

## Getting Started

### Prerequisites
- A modern web browser (e.g., Chrome, Edge, Firefox).

### Usage
1. Open the application in your browser.
2. Click the **ON/OFF button** to toggle the clock display.
3. View the current time and the active day of the week.

## Technologies Used
- **HTML**: For structuring the web application.
- **CSS**: For styling and animations.
- **JavaScript**: For dynamic updates and user interactions.

## Code Functionality

### ON/OFF Functionality
The `on-off.js` script handles the toggle feature:
- The clock display background changes between `black` (OFF) and `transparent` (ON).
- The dots separating hours and minutes are hidden when OFF and visible when ON.
- The ON/OFF button changes text and color dynamically【29†source】.

### Time and Day Updates
The `script.js` script handles real-time updates:
- Updates the hour and minute every second.
- Highlights the active day of the week based on the current date【30†source】.

## Example Output
- **ON State**: Displays the current time and highlights the day.
- **OFF State**: The display is blank, and the clock is paused.

## License
This project is licensed under the MIT License.

## Acknowledgments
- Inspired by modern digital clocks with simple and intuitive designs.

