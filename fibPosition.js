// input: position in fibonacci series
// output: the number that's there

// v: 0 1 1 2 3 5 8 13 ...
// p: 0 1 2 3 4 5 6 7

const fibber = function(position) {

  // with caching
  const cache = [];
  let last;
  let secondLast;

  const inside = (number) => {
    // check if we have it in the cache first
    if (cache[number]) {
      return cache[number];
    }
    // base case: it's 0 or 1 position
    if (number === 0 || number === 1) {
      return number;
    } else {
    // recursive case: it's not
      const result = inside(number - 1) + inside(number - 2);
      cache[number] = result;
      return result;
    }
  }

  return inside(position);
}

console.log(fibber(38));