"use strict";
exports.__esModule = true;
exports.evensAndOdds = void 0;
function evensAndOdds(n) {
    if (n % 2 == 0) {
        return n.toString(2);
    }
    return n.toString(16);
}
exports.evensAndOdds = evensAndOdds;
console.log(evensAndOdds(1));
