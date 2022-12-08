const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const map1 = arr.map((x) => (x === 3 ? x * 1 : x * 2));

// console.log(map1);

function map(x) {
  if (x === 2) {
    return x * 1;
  }
  return x * 3;
}

console.log(map(x));
