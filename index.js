function knightMoves(start, end) {
  // Function to check if a move is valid
  function isValidMove(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  // Possible moves for the knight
  const moves = [
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
  ];

  // Initialize queue with starting position
  const queue = [[start, [start]]];
  const visited = new Set([start.toString()]); // Track visited positions

  // BFS
  while (queue.length > 0) {
    const [current, path] = queue.shift();

    if (current[0] === end[0] && current[1] === end[1]) {
      return path; // Return the path if end position is reached
    }

    // Generate valid neighbors
    for (const [dx, dy] of moves) {
      const nextX = current[0] + dx;
      const nextY = current[1] + dy;

      if (isValidMove(nextX, nextY)) {
        const nextPos = [nextX, nextY];
        const nextPosString = nextPos.toString();

        if (!visited.has(nextPosString)) {
          // Add neighbor to queue and mark as visited
          queue.push([nextPos, path.concat([nextPos])]);
          visited.add(nextPosString);
        }
      }
    }
  }

  return []; // Return empty array if no path is found
}

// Example usage:
const start = [0, 0];
const end = [3, 3];
console.log('Shortest path:', knightMoves(start, end));
