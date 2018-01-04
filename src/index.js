const CODE_STONE = 1;
const CODE_WATER = 2;
const CODE_EMPTY = 0;

module.exports = function trapRainWater(elevationMap) {
    const matrix = initWithStone(elevationMap);
    fillWithWater(matrix);
    return countWaterCells(matrix);
};

function initWithStone(elevationMap) {
    const rowsCount = Math.max.apply(null, elevationMap);
    const emptyMatrix = new Array(rowsCount)
        .fill(0)
        .map(_ => []);

    elevationMap.forEach((columnHeight, columnIndex) => {
        for (
            let i = emptyMatrix.length, j = 0;
            i >= 0;
            i--, j++
        ) {
            if (j < columnHeight) {
                emptyMatrix[i][columnIndex] = CODE_STONE;
            } else {
                emptyMatrix[i][columnIndex] = CODE_EMPTY;
            }
        }
    });
}

function fillWithWater(matrix) {
    return matrix;
}

function countWaterCells(matrix) {
    return 0;
}
