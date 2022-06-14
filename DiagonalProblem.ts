/**
 * Breakdown
 * Which type of matrix; odd or even
 * How to get diagonals for each matrix
 * If odd; How to eliminate the centre elements
 * Sum the 2 diagonals
 * Check if sum is prime or not - should be > 1, only divisible by 1 and itself
 * If prime "<sum> is a prime"
 * If not prime "<sum> is not a prime"
 * 
 */

let matrix = [
    [2, 2, 3],
    [5, 4, 6],
    [7, 8, 1]
];

function isOdd(matrix): boolean {
    return matrix.length % 2 != 0;
}

function getSumOfDiagonals() :string{
    let sum = 0;
 for(let row = 0; row<matrix.length; row++){
     for(let col = row; col<row + 1; col++){
         let leftDiagonal = matrix[row][col];
         let rightDiagonal = matrix[row][matrix.length - 1 - col];

         if(isOdd(matrix.length) && row == matrix.length - 1 - col){
            sum += leftDiagonal; 
         }else{
            sum += leftDiagonal;
            sum += rightDiagonal;
         }
     }
 }

 function isPrime(sum) :boolean{
    for(let i = 2; i<sum; i++){
        if(sum%i == 0){
            return false;
        }
    }
    return true;
}

if(isPrime(sum)){
    return sum + " is a prime"
}
return sum + " is not a prime"
}

console.log(getSumOfDiagonals())









