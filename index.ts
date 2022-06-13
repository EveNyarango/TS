//Phase 2
//Katar 1
export function solution(nums: number[]): number[] {
    if(nums.length == 0 || nums == null){
        return [];

    }
    return nums.sort((a,b) => a-b); 
  }

  console.log(solution([1, 2, 10, 50, 5]));

  //Katar 2
//   String.prototype.toJadenCase = function () {
//    return this.toLowerCase.split(" ").map(word => word[0].toUpperCase + word.splice(1)).join( " ");
//   };

//katar 3
export function divisors(n: number) {
    let count = 0;
     
     for(let i = 1; i< n; i++){
        if(n%i == 0){
       count++;
     }
     }
     return count;
   }
   console.log(divisors(5));

   //Katar 4
   export function isUpperCase(str: string) : boolean{
    return str == str.toUpperCase();
  }
  console.log(isUpperCase("AbH"));

  //katar 5
  export function greet(name: string): string {

    return "Hello, " + name + " how are you doing today?" ;

   }
   console.log(greet("Ryan"))

   //katar 6
   export function even_or_odd(n:number):string {
   if(n%2 == 0){
    return "Even"
   } ;
   return "Odd"
  }

  console.log("even_or_odd", even_or_odd(5))

  //katar 7
  export const reverseSeq = (n: number): number[] => {
    let seq = [];
    for(let b = n; b > 0; b--){
        seq.push(b);
    }
    return seq;
};

//katar 8;https://www.codewars.com/kata/5680781b6b7c2be860000036/train/typescript
export function vowelIndices(word: string): number[] {

  let wordSplit = word.toLowerCase().split('');
  let pos= [];
  let vowel = /[aeiou]/gi;

  for(let i=0; i<word.length;i++){
    if(wordSplit[i].match( vowel)){
      pos.push(i+1);
    }

  }
  return pos;

}

console.log("Vowel", vowelIndices("apple"));
