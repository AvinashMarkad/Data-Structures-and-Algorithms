// function reverseString(s) {
//   let ss = s.split().reverse().join();
//   let res = [];

//   for (let i = ss.length - 1; i >= 0; i--) {
//     res.push(ss[i]);
//   }
//   return res.join('');

// }

// console.log(reverseString(" i like this program very much")); // "dlrow olleh"



// **********************************************************************************************************************

function reverseString(s) {
    return s.split('').reverse().join('');
}   

console.log(reverseString("i like this program very much"));