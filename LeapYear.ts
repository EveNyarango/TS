export function isLeap(year: number):boolean {
    return ((year > 0 && year % 4 == 0 && year % 100 != 0)|| year % 400 == 0)
  }

  console.log(isLeap(1999))