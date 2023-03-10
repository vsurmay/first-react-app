function checkWinner(board) {
  // Перевірка горизонтальних ліній
  for (let i = 0; i < 3; i++) {
    if (board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
      if (board[i][0] !== "") {
        return board[i][0];
      }
    }
  }

  // Перевірка вертикальних ліній
  for (let i = 0; i < 3; i++) {
    if (board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
      if (board[0][i] !== "") {
        return board[0][i];
      }
    }
  }

  // Перевірка діагоналей
  if (board[0][0] === board[1][1] && board[1][1] === board[2][2]) {
    if (board[0][0] !== "") {
      return board[0][0];
    }
  }
  if (board[2][0] === board[1][1] && board[1][1] === board[0][2]) {
    if (board[2][0] !== "") {
      return board[2][0];
    }
  }

  // Якщо немає переможця
  return null;
}

export default checkWinner;
