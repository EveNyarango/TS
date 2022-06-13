"use strict";
exports.__esModule = true;
exports.vowelIndices = exports.reverseSeq = exports.even_or_odd = exports.greet = exports.isUpperCase = exports.divisors = exports.solution = void 0;
//Phase 2
//Katar 1
function solution(nums) {
    if (nums.length == 0 || nums == null) {
        return [];
    }
    return nums.sort(function (a, b) { return a - b; });
}
exports.solution = solution;
console.log(solution([1, 2, 10, 50, 5]));
//Katar 2
//   String.prototype.toJadenCase = function () {
//    return this.toLowerCase.split(" ").map(word => word[0].toUpperCase + word.splice(1)).join( " ");
//   };
//katar 3
function divisors(n) {
    var count = 0;
    for (var i = 1; i < n; i++) {
        if (n % i == 0) {
            count++;
        }
    }
    return count;
}
exports.divisors = divisors;
console.log(divisors(5));
//Katar 4
function isUpperCase(str) {
    return str == str.toUpperCase();
}
exports.isUpperCase = isUpperCase;
console.log(isUpperCase("AbH"));
//katar 5
function greet(name) {
    return "Hello, " + name + " how are you doing today?";
}
exports.greet = greet;
console.log(greet("Ryan"));
//katar 6
function even_or_odd(n) {
    if (n % 2 == 0) {
        return "Even";
    }
    ;
    return "Odd";
}
exports.even_or_odd = even_or_odd;
console.log("even_or_odd", even_or_odd(5));
//katar 7
var reverseSeq = function (n) {
    var seq = [];
    for (var b = n; b > 0; b--) {
        seq.push(b);
    }
    return seq;
};
exports.reverseSeq = reverseSeq;
//katar 8;https://www.codewars.com/kata/5680781b6b7c2be860000036/train/typescript
function vowelIndices(word) {
    var wordSplit = word.toLowerCase().split('');
    var pos = [];
    var vowel = /[aeiou]/gi;
    for (var i = 0; i < word.length; i++) {
        if (wordSplit[i].match(vowel)) {
            pos.push(i + 1);
        }
    }
    return pos;
}
exports.vowelIndices = vowelIndices;
console.log("Vowel", vowelIndices("apple"));
