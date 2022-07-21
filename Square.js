"use strict";
exports.__esModule = true;
function isSquare(n) {
    return (Math.sqrt(n) % 1 == 0);
}
exports["default"] = isSquare;
;
console.log(isSquare(25));
