## Conway's Game of Life

This is a web version of Conway's Game of Life, a cellular automaton devised by the mathematician John Conway. The Game of Life follows a set of simple rules to simulate the behavior of cells in a grid, creating fascinating patterns and evolving structures.

## How to Play

1. Access the game through the provided web URL or host it locally on your machine.
2. The game starts with an initial configuration of cells on a grid.
3. Observe the evolution of the cells based on the following rules:
    - Any live cell with fewer than two live neighbors dies, as if by underpopulation.
    - Any live cell with two or three live neighbors lives on to the next generation.
    - Any live cell with more than three live neighbors dies, as if by overpopulation.
    - Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
4. Click on the grid cells to toggle them between alive and dead states.
5. You can pause and resume the game at any time to analyze the current state.
6. Explore different initial configurations and observe the patterns that emerge over time.
   
## Features

- Interactive grid: Click on cells to toggle their state.
- Pause and resume: Control the simulation to observe specific patterns or configurations.
- Random configuration: Generate a random initial configuration of cells.
- Clear grid: Reset the grid to an empty state.
- Speed control: Adjust the speed of the simulation to observe changes at different rates.
  
## Technologies Used

- HTML5, CSS3: Structuring and styling the web page.
- JavaScript: Implementing the game logic and interactivity.
- Canvas API: Rendering the grid and cell states.
- Event listeners: Capturing user input and updating the game state.
- SetInterval: Controlling the simulation speed.

## Getting Started

To run the Game of Life locally on your machine, follow these steps:

Step 1:  Clone the repository or download the source code.

```
git clone https://github.com/vedantmistryy/game-of-life.git
```

Step 2: Open the index.html file in a web browser.

Step 3: Start playing and exploring the Game of Life!

## Alternatively, you can access the live version of the game through the provided web URL 👉 on top right corner.

## Contributing

Contributions to improve the Game of Life project are welcome. If you find any issues or have suggestions for enhancements, feel free to submit a pull request or open an issue on the project's GitHub repository.

<!-- >
note for maintainer - I can't find MIT license so didn't add that info
##License
The Game of Life project is licensed under the MIT License, allowing you to use, modify, and distribute the code freely. Please see the LICENSE file for more details.

Credits
The Game of Life project is inspired by the work of John Conway and various online implementations of the Game of Life. Special thanks to the open-source community for their contributions and resources.

Contact
If you have any questions, suggestions, or feedback, you can contact the project maintainer at [email protected]
-->
Enjoy playing Conway's Game of Life!
