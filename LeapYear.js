"use strict";
exports.__esModule = true;
exports.isLeap = void 0;
function isLeap(year) {
    return ((year > 0 && year % 4 == 0 && year % 100 != 0) || year % 400 == 0);
}
exports.isLeap = isLeap;
console.log(isLeap(1999));
