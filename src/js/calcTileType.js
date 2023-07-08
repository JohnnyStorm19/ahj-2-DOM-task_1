export function calcTileType(index, boardSize) {
    // TODO: ваш код будет тут
    const boardLength = boardSize ** 2;
    if (index === 0) {
      return 'top-left';
    }
    if (index === boardSize - 1) {
      return 'top-right';
    }
    if (index === boardLength - 1) {
      return 'bottom-right';
    }
    if (index === boardLength - boardSize) {
      return 'bottom-left';
    }
  
    const row = Math.ceil(index / boardSize);
    if (Number.isInteger(index / boardSize)) {
      return 'left';
    }
    if (Number.isInteger((index + 1) / boardSize)) {
      return 'right';
    }
    if (row === 1) {
      return 'top';
    }
    if (row === boardSize) {
      return 'bottom';
    }
    return 'center';
  }