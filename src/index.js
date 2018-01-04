module.exports = function trapRainWater(elevationMap) {
    const matrix = initWithStone(elevationMap);
    fillWithWater(matrix);
    return countWaterCells(matrix);
};

function initWithStone(elevationMap) {
    return [];
}

function fillWithWater(matrix) {
    return matrix;
}

function countWaterCells(matrix) {
    return 0;
}
