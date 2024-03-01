// EXAMPLE 1 - Replace/Remove all Numbers in a String using JavaScript

const str = 'b234 h567 c890';

// ✅ Replace each number in a string with a replacement string
const replaced = str.replace(/[0-9]/g, '!');
console.log(replaced); // 👉️ b!!! h!!! c!!!

// ✅ Replace multiple, consecutive numbers with a single replacement string
const replaced2 = str.replace(/[0-9]+/g, '!');
console.log(replaced2); // 👉️ b! h! c!

// ------------------------------------------------------------------

// // EXAMPLE 2 - Replace multiple, consecutive numbers with a single replacement

// const str = 'b234 h567 c890';

// const replaced2 = str.replace(/[0-9]+/g, '!');
// console.log(replaced2); // 👉️ b! h! c!

// ------------------------------------------------------------------

// // EXAMPLE 3 - You can use any replacement character

// const str = 'a1 b2 c3';

// const replaced = str.replace(/[0-9]/g, '_');
// console.log(replaced); // 👉️ a_ b_ c_

// ------------------------------------------------------------------

// // EXAMPLE 4 - Replace/Remove all numbers in a String using `\d` special character

// const str = 'b234 h567 c890';

// // ✅ replace all occurrences of a number with a replacement string
// const replaced = str.replace(/\d/g, '_');
// console.log(replaced); // 👉️ b___ h___ c___

// // ✅ replace multiple, consecutive numbers with a single replacement string
// const replaced2 = str.replace(/\d+/g, '_');
// console.log(replaced2); // 👉️ b_ h_ c_

// ------------------------------------------------------------------

// // EXAMPLE 5 - Remove all Numbers from a String using String.match()

// const str = 'b234 h567 c890';

// // 👇️ [ 'b', ' ', 'h', ' ', 'c' ]
// console.log(str.match(/\D/g));

// const replaced = str.match(/\D/g, '').join('');
// console.log(replaced); // 👉️ b h c
