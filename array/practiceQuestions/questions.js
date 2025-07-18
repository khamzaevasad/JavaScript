/* Array1. n natural soni berilgan. Dastlabki n ta toq sondan tashkil topgan massiv qaytaruvchi getInitialOdds(n) nomli funksiya tuzing.
Input: getInitialOdds(5)
Output: [1, 3, 5, 7, 9]
 */

function getInitialOdds(num) {
  let res = [];
  let count = 1;

  for (let i = 0; i < num; i++) {
    res.push(count);
    count += 2;
  }
  //   console.log(res);
}
getInitialOdds(5);

/* Array2. arr nomli massiv berilgan. Massiv elementlari orasidan juftlarini indekslari kamayish tartibidan hosil bo’lgan massivni qaytaruvchi getEvenReverse(arr) programma tuzilsin.
Input: [4, 5, 7, 8, 6, 9]
Output: [6, 8, 4]
*/

// function getEvenReverse(arr) {
//   return arr.filter((num) => num % 2 == 0).reverse();
// }
// console.log(getEvenReverse(arr));

/* 
Array3. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin.
A[0], A[n-1], A[1], A[n-2], A[2], A[n-3],...
Input:  [4, 5, 7, 8, 6, 9]
Output: 4, 9, 5, 6, 7, 8, 8, 7, 6, 5, 9, 4
*/

let arr = [4, 5, 7, 8, 6, 9];
let n = arr.length;
let res = "";
let res2 = "";

function arrIndex() {
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    res += arr[i] + ", ";
    if (i !== n - 1 - i) {
      res += arr[n - 1 - i] + ", ";
    }
  }
  for (let i = n - 3; i >= 0; i--) {
    res2 += arr[n - 1 - i] + ", ";
  }
}

arrIndex();
console.log(res, res2);
