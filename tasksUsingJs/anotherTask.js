function printSpiralMatrix(matrix) {
    if (matrix.length === 0) return;

    let topRow = 0;
    let bottomRow = matrix.length - 1;
    let leftCol = 0;
    let rightCol = matrix[0].length - 1;
    let result = [];

    while (topRow <= bottomRow && leftCol <= rightCol) {
        // top row
        for (let i = leftCol; i <= rightCol; i++) {
            result.push(matrix[topRow][i]);
        }
        topRow++;

        // right column
        for (let i = topRow; i <= bottomRow; i++) {
            result.push(matrix[i][rightCol]);
        }
        rightCol--;

        // bottom row
        if (topRow <= bottomRow) {
            for (let i = rightCol; i >= leftCol; i--) {
                result.push(matrix[bottomRow][i]);
            }
            bottomRow--;
        }

        // left column
        if (leftCol <= rightCol) {
            for (let i = bottomRow; i >= topRow; i--) {
                result.push(matrix[i][leftCol]);
            }
            leftCol++;
        }
    }

    console.log(result.join(" "));
}


const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
printSpiralMatrix(matrix);
