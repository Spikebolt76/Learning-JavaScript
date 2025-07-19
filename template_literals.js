// let p =
// `This text
// can
// span multiple lines`;

// console.log(p);
// console.log(p.length);

// for (let i = 0; i < p.length; i++) {
//   console.log(`${i}: '${p[i]}' (${p.charCodeAt(i)})`);
// }
// console.log(JSON.stringify(p));

function format(literals, ...substitutions) {
  let result = '';

  for (let i = 0; i < substitutions.length; i++) {
    result += literals[i];
    result += substitutions[i];
  }
  // add the last literal
  result += literals[literals.length - 1];
  return result;
}

let quantity = 9,
  priceEach = 8.99,
  result = format`${quantity} items cost $${(quantity * priceEach).toFixed(
    2
  )}.`;

console.log(result); // 9 items cost $80.91.
