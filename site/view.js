/*
A module to manipulate the DOM to reflect a given model.
*/
exports.render = function(model) {
  for (let x = 1; x <= 3; x++) {
    for (let y = 1; y <= 3; y++) {
    let id = '' + x + y;
    let className = 'board-cell board-cell-' + model.board[x - 1][y - 1];
    let el = document.getElementById(id);
    el.className = className;
    }
  }

  let gameState = document.getElementById('gameState');
  if (model.isGameOver) {
    if (model.winner==='nought') {
      gameState.innerHTML = 'Game Over: Noughts Won!';
    } else if (model.winner==='cross') {
      gameState.innerHTML = 'Game Over: Crosses Won!';
    } else {
      gameState.innerHTML = 'Game Over: It\'s a Draw!';
    }
  } else if (model.isNoughtToPlay) {
    gameState.innerHTML = 'Noughts to play';
  } else {
    gameState.innerHTML = 'Crosses to play';
  }
};
