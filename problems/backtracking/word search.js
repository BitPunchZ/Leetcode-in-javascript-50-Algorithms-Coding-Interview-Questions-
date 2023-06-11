/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

 var solution = function(board, word, x, y, cur) {
    let dx = [0, 0, -1, 1];
    let dy = [1, -1, 0, 0];
  
    if (
      x >= board.length ||
      x < 0 ||
      y < 0 ||
      y >= board[x].length ||
      board[x][y] == " "
    ) {
      return false;
    }
  
    cur += board[x][y];
    if (cur.length > word.length) return false;
    if (cur[cur.length - 1] != word[cur.length - 1]) return false;
    if (cur === word) return true;
  
    let temp = board[x][y];
    board[x][y] = " ";
    for (let i = 0; i < 4; ++i) {
      if (solution(board, word, x + dx[i], y + dy[i], cur)) return true;
    }
    board[x][y] = temp;
    return false;
  };
  
  var exist = function(board, word) {
    if (word.length == 0) return true;
    const n = board.length;
  
    for (let i = 0; i < n; ++i) {
      let m = board[i].length;
      for (let j = 0; j < m; ++j) {
        if (word[0] === board[i][j] && solution(board, word, i, j, ""))
          return true;
      }
    }
    return false;
  };