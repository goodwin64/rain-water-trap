const CODE_STONE = 1;
const CODE_WATER = 2;
const CODE_EMPTY = 0;

module.exports = function trapRainWater(elevationMap) {
    const matrix = fillWithStone(elevationMap);
    fillWithWater(matrix);
    return countWaterCells(matrix);
};

function fillWithStone(elevationMap) {
    const rowsCount = Math.max.apply(null, elevationMap);
    const matrixToFill = new Array(rowsCount)
        .fill(0)
        .map(_ => []);

    elevationMap.forEach((columnHeight, columnIndex) => {
        for (
            let i = matrixToFill.length - 1, j = 0;
            i >= 0;
            i--, j++
        ) {
            if (j < columnHeight) {
                matrixToFill[i][columnIndex] = CODE_STONE;
            } else {
                matrixToFill[i][columnIndex] = CODE_EMPTY;
            }
        }
    });

    return matrixToFill;
}

function fillWithWater(matrix) {
    return matrix.map((row, indexRow) => {
        return row.map((cell, indexColumn) => {
            if (isWaterPossibleHere(matrix, indexRow, indexColumn)) {
                matrix[indexRow][indexColumn] = CODE_WATER;
            }
        });
    });
}

function isWaterPossibleHere(matrix, indexRow, indexColumn) {
    const firstRowSize = matrix[indexRow].length;
    if (indexColumn === 0 || indexColumn === firstRowSize - 1) {
        return false;
    }

    const isEmptyOnLeft = matrix[indexRow]
        .slice(0, indexColumn)
        .every(cell => cell === CODE_EMPTY);
    const isEmptyOnRight = matrix[indexRow]
        .slice(indexColumn + 1)
        .every(cell => cell === CODE_EMPTY);
    if (isEmptyOnLeft || isEmptyOnRight) {
        return false;
    }

    return matrix[indexRow][indexColumn] === CODE_EMPTY;
}

function countWaterCells(matrix) {
    return []
        .concat
        .apply([], matrix)
        .filter(cell => cell === CODE_WATER)
        .length;
}
