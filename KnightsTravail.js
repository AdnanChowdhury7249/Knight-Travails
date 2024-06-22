function knightMoves(start, end) {
  const directions = [
    [2, 1], [2, -1], [-2, 1], [-2, -1],
    [1, 2], [1, -2], [-1, 2], [-1, -2],
  ];

  function isValid(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  const queue = [[start]]; // Queue should be an array of paths
  const visited = new Set();
  visited.add(start.toString());

  while (queue.length) {
    const path = queue.shift();
    const [x, y] = path[path.length - 1];

    if (x === end[0] && y === end[1]) return path;

    directions.forEach(([dx, dy]) => {
      const nextX = x + dx;
      const nextY = y + dy;
      const nextPos = [nextX, nextY];

      if (isValid(nextX, nextY) && !visited.has(nextPos.toString())) {
        visited.add(nextPos.toString());
        queue.push([...path, nextPos]);
      }
    });
  }

  return null; // If no path found
}

// Example call
const result = knightMoves([0, 0], [7, 7]);

console.log(result);
