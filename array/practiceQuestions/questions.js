/* Array1. n natural soni berilgan. Dastlabki n ta toq sondan tashkil topgan massiv qaytaruvchi getInitialOdds(n) nomli funksiya tuzing.
Input: getInitialOdds(5)
Output: [1, 3, 5, 7, 9]
 */

// function getInitialOdds(num) {
//   let res = [];
//   let count = 1;

//   for (let i = 0; i < num; i++) {
//     res.push(count);
//     count += 2;
//   }
//   console.log(res);
// }
// getInitialOdds(5);

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

// let arr = [4, 5, 7, 8, 6, 9];
// let n = arr.length;
// let res = "";
// let res2 = "";

// function arrIndex() {
//   for (let i = 0; i < Math.ceil(n / 2); i++) {
//     res += arr[i] + ", ";
//     if (i !== n - 1 - i) {
//       res += arr[n - 1 - i] + ", ";
//     }
//   }
//   for (let i = n - 3; i >= 0; i--) {
//     res2 += arr[n - 1 - i] + ", ";
//   }
// }

// arrIndex();
// console.log(res, res2);

/* 
Array4. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlari yig'indisini chiqaruvchi rangeSum(arr, K, L) programma tuzilsin.
Input: arr = [1, 6, 9, 5, 8, 10, 15];
Ouput: rangeSum(arr, 2, 5) => 32

*/

// const arr = [1, 6, 9, 5, 8, 10, 15];
// let k = 2;
// let l = 5;

// function rangeSum() {
//   let count = 0;
//   arr.forEach((item, index) => {
//     if (index >= k && index <= l) {
//       count += item;
//     }
//   });
//   console.log(`arr, ${k}, ${l} => ${count}`);
// }
// rangeSum();

/* 
Array5. n ta elementdan tashkil topgan massiv berilgan. Massivda qatnashgan sonlardan faqat bittadan chiqaruvchi getSingleArr(arr) tuzilsin.
Input: let arr =  [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7]
Output: [7, 4, 2, 3, 1, 5]
*/

// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];

// function getSingleArr() {
//   let resArr = [];
//   arr.forEach((num) => {
//     if (!resArr.includes(num)) {
//       resArr.push(num);
//     }
//   });
//   console.log(resArr);
// }
// getSingleArr();

/* 
Array6. n ta elementdan iborat massiv berilgan. Massivning eng kichik va eng katta elementlari topilsin va o'rni almashtirilsin.
Input: [7, 4, 9, 2, 3, 1, 5]
Output:
Max: 9
Min: 1
[7, 4, 1, 2, 3, 9, 5]
*/

// let arr = [7, 4, 9, 2, 3, 1, 5];

// function count() {
//   let min_val = arr[0];
//   let max_val = arr[0];

//   arr.forEach((num) => {
//     if (num < min_val) {
//       min_val = num;
//     }
//     if (num > max_val) {
//       max_val = num;
//     }
//   });
//   console.log(`max val ${max_val} min val ${min_val}`);
// }
// count();

/*

Array7. n ta elementdan tashkil topgan berilgan. Massiv elementlarini 1 ta o'rin ongga siklik siljituvchi programma tuzilsin. a[0] element qiymati a[1] ga o'tadi, a[1] esa a[2] ga, ..., a[n – 1] qiymati a[0] ga o'tadi.
Input: [1, 5, 8, 9, 10]
Output: [5, 8, 9, 10, 1]


*/

// let arr = [1, 5, 8, 9, 10];

// function shiftLeft() {
//   let first = arr.shift();
//   arr.push(first);
//   console.log(arr);
// }
// shiftLeft();

/*
Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
Input: 5
Output: [2, 4, 16, 32, 62]
*/

// function getLevel2(num) {
//   let res = [];

//   for (let i = 1; i <= num; i++) {
//     let power = Math.pow(2, i);
//     res.push(power);
//   }

//   console.log(res);
// }
// getLevel2(5);

/* 
Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
Input: n = 5, A = 2, B = 3
Output: [2, 3, 5, 10, 20]

*/

/*
Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.
*/

// let arr = [1, 2, 3, 4, 5, 6];

// function reverse() {
//   console.log([...arr].reverse());
// }
// reverse();

/* 
Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
Massiv elementlar: 4 5 7 8 6 9
Natija: 5 7 9 toqlar soni = 3
*/

// let arr = [4, 5, 7, 8, 6, 9];

// function oldNum() {
//   const arrList = arr.filter((num) => num % 2 == 1);

//   console.log(`Natija ${arrList.join(" ")} toqlar soni 3`);
// }
// oldNum();

/* 

Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
Massiv elementlar: 4 5 7 8 6 9
Natija: 4 8 6 9 7 5

*/

// let arrList = [4, 5, 7, 8, 6, 9];

// function numSort() {
//   const filteredList = arrList.filter((num) => num % 2 === 0);
//   const filterList2 = arrList.filter((num) => num % 2 === 1).reverse();

//   const res = filteredList.concat(filterList2);
//   console.log(res);
// }

// numSort();

/* 
Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.
*/

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];

// function evenIndex() {
//   const result = arr.filter((num, index) => index % 2 == 0);
//   console.log(result);
// }
// evenIndex();
