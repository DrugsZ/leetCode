/*
 * [36] Valid Sudoku
 *
 * https://leetcode.com/problems/valid-sudoku/description/
 *
 * algorithms
 * Medium (38.65%)
 * Total Accepted:    167.4K
 * Total Submissions: 433.1K
 * Testcase Example:  '[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]'
 *
 * Determine if a 9x9 Sudoku board is valid. Only the filled cells need to be
 * validated according to the following rules:
 * 
 * 
 * Each row must contain the digits 1-9 without repetition.
 * Each column must contain the digits 1-9 without repetition.
 * Each of the 9 3x3 sub-boxes of the grid must contain the digits 1-9 without
 * repetition.
 * 
 * 
 * 
 * A partially filled sudoku which is valid.
 * 
 * The Sudoku board could be partially filled, where empty cells are filled
 * with the character '.'.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * [
 * ⁠ ["5","3",".",".","7",".",".",".","."],
 * ⁠ ["6",".",".","1","9","5",".",".","."],
 * ⁠ [".","9","8",".",".",".",".","6","."],
 * ⁠ ["8",".",".",".","6",".",".",".","3"],
 * ⁠ ["4",".",".","8",".","3",".",".","1"],
 * ⁠ ["7",".",".",".","2",".",".",".","6"],
 * ⁠ [".","6",".",".",".",".","2","8","."],
 * ⁠ [".",".",".","4","1","9",".",".","5"],
 * ⁠ [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * [
 * ["8","3",".",".","7",".",".",".","."],
 * ["6",".",".","1","9","5",".",".","."],
 * [".","9","8",".",".",".",".","6","."],
 * ["8",".",".",".","6",".",".",".","3"],
 * ["4",".",".","8",".","3",".",".","1"],
 * ["7",".",".",".","2",".",".",".","6"],
 * [".","6",".",".",".",".","2","8","."],
 * [".",".",".","4","1","9",".",".","5"],
 * [".",".",".",".","8",".",".","7","9"]
 * ]
 * Output: false
 * Explanation: Same as Example 1, except with the 5 in the top left corner
 * being 
 * ⁠   modified to 8. Since there are two 8's in the top left 3x3 sub-box, it
 * is invalid.
 * 
 * 
 * Note:
 * 
 * 
 * A Sudoku board (partially filled) could be valid but is not necessarily
 * solvable.
 * Only the filled cells need to be validated according to the mentioned
 * rules.
 * The given board contain only digits 1-9 and the character '.'.
 * The given board size is always 9x9.
 * 
 * 
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rowFlag = true, colFlag = true, cellFlag = true;
    let rowArr = [];
    let temRow = Array(9).fill(false)

    for( let i = 0; i< 9; i++ ){
        let temp = temRow.slice();
        rowArr.push(temp)
    }
    
        //判断行
    for(let rowIndex = 0; rowIndex < board.length; rowIndex++ ){
        let items = board[rowIndex];
        for(let colIndex = 0; colIndex < items.length; colIndex++){
            let element = board[rowIndex][colIndex];
            if(element!='.'){
                if(rowArr[rowIndex][element]){
                    return false
                }
                else rowArr[rowIndex][element] = true;
            }
        }
    }
    
    rowArr = [];

    for( let i = 0; i< 9; i++ ){
        let temp = temRow.slice();
        rowArr.push(temp)
    }
        //判断列
    for(let colIndex = 0; colIndex < 9; colIndex ++){
        for(let rowIndex = 0; rowIndex < board.length; rowIndex++){
            let element = board[rowIndex][colIndex];
            if(element!='.'){
                if(rowArr[colIndex][element]){
                    return false
                }
                else rowArr[rowIndex][element] = true;
            }
        }
    }

    rowArr = [];

    for( let i = 0; i< 9; i++ ){
        let temp = temRow.slice();
        rowArr.push(temp)
    }
        //判断组
    for(let rowIndex = 0; rowIndex < 9; rowIndex ++){
        for(let colIndex = 0; colIndex < 9; colIndex ++){
            let index =Math.floor(rowIndex/3) * 3 + Math.floor(colIndex/3);
            if (board[rowIndex][colIndex] != '.') {
                let element = board[rowIndex][colIndex]
                if (rowArr[index][element]){
                    return false;
                }
                else rowArr[index][element] = true;
            }

        }
    }

    return true
};
