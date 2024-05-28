# Dynamic Alphabet Grid Generator

## Overview

This application displays a 10x10 grid filled with random alphabetic characters (a-z) that refreshes every 2 seconds. It includes functionality to generate a 2-digit code based on the grid and the system clock, as well as an input field to bias the grid with a specific character.

## Features

- **Grid**: A 10x10 grid of random alphabetic characters, refreshed every 2 seconds.
- **Start Button**: Click to begin generating the grid.
- **Code Generation**: A 2-digit code computed from the grid and system clock, displayed below the grid.
- **Bias Input**: An input field to bias 20% of the grid with a specific character (a-z), updated every 4 seconds.

## Code Computation Algorithm

1. Retrieve the 2-digit seconds from the system clock.
2. Get characters from grid positions [3,6] and [6,3].
3. Count occurrences of these characters in the grid.
4. If a count exceeds 9, divide by the smallest integer to get a value ≤ 9.
5. Concatenate the counts to form the 2-digit code.

## API Endpoints

- **Grid Endpoint**: Provides the current grid data.
- **Code Endpoint**: Provides the current 2-digit code.

## Bias Input Constraints

- The bias character can be entered once every 4 seconds.
- 20% of the grid will be filled with the specified character, the rest with random characters.

## Refresh Rate

- The grid and code are updated every 2 seconds.

---

# Frameworks

- Frontend: Vite: [https://vitejs.dev](https://vitejs.dev)
- Backend: NodeJS Express: [https://expressjs.com/en/starter/installing.html](https://expressjs.com/en/starter/installing.html)

# Install

Go to the directories ("be-app" and "fe-app") and run `npm i`;

# How to Run

## Run the Backend App

- Go to the "be-app" directory and run `npm run dev`;

## Run the Frontend App

- Go to the "fe-app" directory and run `npm run dev`;
- Open your browser on: `http://localhost:5173/`
