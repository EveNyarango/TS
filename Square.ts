export default function isSquare(n: number): boolean {
    return (Math.sqrt(n) % 1 == 0); 
  };

  console.log(isSquare(25));