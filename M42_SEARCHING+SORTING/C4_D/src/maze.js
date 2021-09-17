/**
 * Return a string representing the path through the maze.
 * @param {array} maze
 * @param {array} index The starting point
 */

function mazeSolver(maze, index = [0, 0]) {
  //initial declarations
  const record = [];

  //helper to check if a given direction is valid
  const _lookBothWays = (direction) => {
    if (
      maze[direction[0]] &&
      maze[direction[1]] &&
      maze[direction[0]] !== "*" &&
      maze[direction[1]] !== "*"
    )
      return true;
  };

  //removes last action if backpedaling
  const _backpedal = (lastDir, newDir) => {
    if (lastDir === "R") {
      return newDir === "L" ? true : false;
    } else if (lastDir === "L") {
      return newDir === "R" ? true : false;
    } else if (lastDir === "D") {
      return newDir === "U" ? true : false;
    } else if (lastDir === "U") {
      return newDir === "D" ? true : false;
    }
  };

  //decide what direction should it prioritize
  const _walkingLogic = (up, down, left, right, lastDir) => {
    const priority = [
      [right, "R"],
      [down, "D"],
      [left, "L"],
      [up, "U"],
    ];
    priority.forEach((direction) => {
      if (_lookBothWays(direction[0])) {
        if (_backpedal(lastDir, direction[1])) {
          record.pop();
          console.log(lastDir)
          priority.splice(priority.findIndex((ind) => priority[ind] === lastDir), 1);
        }
        record.push(direction[1]);
        index = direction[0];
        return mazeWalk();
      }
    });
  };

  //recursive function
  function mazeWalk() {
    let lastDir = record[record.length - 1];
    const row = index[1];
    const col = index[0];
    const _up = [col, row - 1];
    const _down = [col, row + 1];
    const _left = [col - 1, row];
    const _right = [col + 1, row];
    if (maze[(col, row)] === "e") return true;
    _walkingLogic(_up, _down, _left, _right, lastDir);
  }

  mazeWalk()

  return record.join("");
}

module.exports = mazeSolver;
