
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix === undefined) {
        return [];
    }
    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0){
            res = res.concat(matrix[i]);
        } else {
            res = res.concat(matrix[i].reverse());
        }
    }
    return res;
}
