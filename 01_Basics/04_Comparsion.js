// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

// Reason - The reason is that an equality check  == and comparisons > < >= <= works differently. Comparisons convert null to a number, treating it as a 0. That's why (3) null >= 0 is true and (1) null > 0 is false

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);

// Avoid these all conversions where data types are different