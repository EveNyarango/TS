export function evensAndOdds(n: number): string {
    if(n%2 == 0){
        return n.toString(2);
    }
    return n.toString(16);
  }

  console.log(evensAndOdds(1))