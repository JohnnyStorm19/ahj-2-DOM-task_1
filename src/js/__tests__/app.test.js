import { calcTileType } from "../calcTileType";
import GamePlay from "../GamePlay";

const gamePlay = new GamePlay();

test.each([
    [0, 4, 'top-left'],
    [3, 4, 'top-right'],
    [63, 8, 'bottom-right'],
    [12, 4, 'bottom-left'],
    [3, 8, 'top'],
    [4, 4, 'left'],
    [8, 8, 'left'],
    [7, 4, 'right'],
    [15, 8, 'right'],
    [14, 4, 'bottom'],
    [61, 8, 'bottom'],
    [5, 4, 'center'],
    [10, 8, 'center'],
])('testing cell type with %i index and width %i boardsize', (index, boardSize, result) => {
    expect(calcTileType(index, boardSize)).toBe(result);
})

test('GamePlay throwing an error when binding to DOM non-valid container', () => {
    const fakeContainer = null;
    gamePlay.container = fakeContainer;
    expect(() => {
        gamePlay.checkBinding();
    }).toThrow('GamePlay not bind to DOM')
})