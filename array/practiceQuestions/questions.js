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
// let res = [];
// for (let i = 0; i < arr.length; i++) {
//   res.push(arr[i], arr[arr.length - i - 1]);
// }
// console.log(res.join(","));

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
//   return count;
// }

// console.log(rangeSum());

/* 
Array5. n ta elementdan tashkil topgan massiv berilgan. Massivda qatnashgan sonlardan faqat bittadan chiqaruvchi getSingleArr(arr) tuzilsin.
Input: let arr =  [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7]
Output: [7, 4, 2, 3, 1, 5]
*/

// let arr = [7, 4, 2, 3, 1, 4, 5, 2, 4, 5, 7];

// console.log(new Set([...arr]));

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
//   return `max val ${max_val} min val ${min_val}`;
// }
// console.log(count());

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

// let arr = [2, 3];
// let n = 5;
// let a = 2;
// let b = 3;

// for (let i = 2; i < n; i++) {
//   let sum = 0;
//   for (let j = 0; j < i; j++) {
//     sum += arr[j];
//   }
//   arr.push(sum);
// }

// console.log(arr);

// let newArr = [a, b];
// let count = a + b;

// newArr.forEach((num) => {
//   count += num;
// });
// console.log(count);

/*
Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.
*/

// let arr = [1, 2, 3, 4, 5, 6];

// function reverse() {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
//   }

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

//   console.log(`Natija ${arrList.join(" ")} toqlar soni ${arrList.length}`);
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

/* 
Array7. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin.
*/

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];

// function oldNum() {
//   const result = arr.filter((num, index) => index % 2 == 1).reverse();
//   console.log(result.join("-"));
// }
// oldNum();

/*

Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.

*/

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];

// function evenOldIndex() {
//   const evenNum = arr.filter((num, index) => index % 2 == 0);
//   const oldNum = arr.filter((num, index) => index % 2 == 1);
//   const result = evenNum.concat(oldNum);
//   result.forEach((num, index) => console.log(`${num} [${arr.indexOf(num)}]`));
// }
// evenOldIndex();

/*
Array9. n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin.
*/

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];

// function evenOldIndex() {
//   const oldIndex = arr
//     .filter((num, index) => index % 2 === 1)
//     .sort((num1, num2) => num1 - num2);
//   const evenIndex = arr
//     .filter((num, index) => index % 2 === 0)
//     .sort((num2, num1) => num1 - num2);
//   const allNum = oldIndex.concat(evenIndex);
//   allNum.forEach((num, index) => console.log(`${num} [${arr.indexOf(num)}] `));
// }
// evenOldIndex();

/*
Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], 
*/

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];

// for (let i = 0; i < arr.length - 1; i++) {
//   console.log(
//     arr[i],
//     arr[i + 1],
//     arr[arr.length - i - 1],
//     arr[arr.length - i - 2]
//   );
// }

// function startEnd() {
//   let start = 0;
//   let end = arr.length - 1;
//   while (start < end) {
//     console.log(arr[start]);
//     console.log(arr[start + 1]);
//     console.log(arr[end]);
//     console.log(arr[end - 1]);

//     start += 2;
//     end -= 2;
//   }
// }
// startEnd();

/*
Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.
*/

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// let k = 2;
// let l = 5;
// function rangeOutSum() {
//   let count = 0;
//   arr.forEach((num, index) => {
//     if (index < k || index > l) {
//       count += num;
//     }
//   });
//   console.log(count);
// }
// rangeOutSum();

/*
Array12. Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.
Input: [10, false, “”, “Abdulaziz”, null]
Output:
Truthy: [10, “Abdulaziz”]
Falsy: [false, “”, null]

*/

// let arrList = [10, false, "", "Abdulaziz", null];

// let truthy = [];
// let falsy = [];
// function truthyFalsy() {
//   arrList.forEach((val) => {
//     if (val) {
//       truthy.push(val);
//     } else {
//       falsy.push(val);
//     }
//   });
// }
// truthyFalsy();
// console.log(truthy, falsy);

/* 
Array13. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv juft indeksli elementlari orasidan kichigini aniqlovchi getOddMin(arr) nomli funksiya tuzilsin.
*/

/* 
Array14. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv toq indeksli elementlari orasidan kattasini aniqlovchi getEvenMax(arr) tuzilsin.
*/

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];

// function getOddMin() {
//   const evenIndex = arr.filter((evenNum, index) => index % 2 === 0);

//   let min = evenIndex[0];

//   evenIndex.forEach((item) => {
//     if (item < min) {
//       min = item;
//     }
//   });

//   console.log(min);
// }
// getOddMin();

// function getEvenMax() {
//   const eventIndex = arr.filter((num, index) => index % 2 === 1);
//   let maxNdx = eventIndex[0];

//   eventIndex.forEach((num) => {
//     if (num > maxNdx) {
//       maxNdx = num;
//     }
//   });

//   console.log(maxNdx);
// }
// getEvenMax();

/* 
  Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).
Input: [
{name: 'John', age: 13},
{name: 'Mark', age: 56},
{name: 'Rachel', age: 45},
{name: 'Nate', age: 67},
{name: 'Jeniffer', age: 65}
];
Output: 54

*/

// const about = [
//   { name: "John", age: 13 },
//   { name: "Mark", age: 56 },
//   { name: "Rachel", age: 45 },
//   { name: "Nate", age: 67 },
//   { name: "Jeniffer", age: 65 },
// ];

// const result = about.sort((a, b) => b.age - a.age);
// console.log(result[0].age - result[result.length - 1].age);

//Masala nomi: "Birinchi takroriy sonni toping"

// const numbers = [2, 4, 3, 5, 7, 4, 9, 2];

// function findFirstDuplicate(arr) {
//   let seen = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (seen.has(arr[i])) {
//       return arr[i]; // bu son allaqachon ko‘rilgan => bu takroriy son
//     }
//     seen.add(arr[i]); // bu yangi son => saqlab qo‘yamiz
//   }
// }
// console.log(findFirstDuplicate(numbers));

/* 
Array15. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan oxirgi lokal maksimum elementi indeksini chiqaruvchi programma tuzilsin. Lokal maksimum - o'ng va chap qo'shinisidan katta bo'lgan element.
*/

// const numbers = [2, 4, 3, 5, 7, 4, 9, 2];
// const localMax = [];
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > numbers[i - 1] && numbers[i] > numbers[i + 1]) {
//     localMax.push(numbers.lastIndexOf(numbers[i]));
//   }
// }
// const localMaxIndex = localMax.pop();
// console.log(localMaxIndex);

/* 
Array16. n ta elementdan tashkil topgan massiv va R butun soni berilgan. Massiv elementlari orasidan R soniga eng yaqin sonni topuvchi programma tuzilsin.
*/
// const numbers = [2, 4, 3, 5, 7, 4, 9, 2];
// const r = 10;
// let minDiff = Infinity;
// let closest = null;

// for (let i = 0; i < numbers.length; i++) {
//   let minVal = Math.abs(r - numbers[i]);
//   if (minVal < minDiff) {
//     minDiff = minVal;
//     closest = numbers[i];
//   }
// }
// console.log(closest);

/*
Array17. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan yig'indisi eng katta bo'ladigan 2 ta qo'shni elementni chiqaruvchi programma tuzilsin.
*/

// const numbers = [2, 4, 3, 5, 7, 4, 9, 2];
// let maxSum = numbers[0] + numbers[1];
// let first = numbers[0];
// let second = numbers[1];

// for (let i = 0; i < numbers.length - 1; i++) {
//   let sum = numbers[i] + numbers[i + 1];

//   if (sum > maxSum) {
//     maxSum = sum;
//     first = numbers[i];
//     second = numbers[i + 1];
//   }
// }

// console.log(maxSum);

/* 
Array18. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasida aniq 2 ta bir xil qiymatli element bor. Shu bir xil qiymatli elementlar indeksini chiqaruvchi programma tuzilsin.
*/

// const numbers = [2, 4, 3, 5, 7, 6, 9, 2];
// const value = 2;

// const firstIdx = numbers.indexOf(value);
// const secondIdx = numbers.lastIndexOf(value);
// console.log(firstIdx, secondIdx);

/*
Array19. n ta elementdan tashkil topgan massiv berilgan. Massivda eng ko'p qatnashgan bir xil qiymatli elementni va uning sonini chiqaruvchi programma tuzilsin.
*/

/*
Array20. n ta elementdan iborat butun sonlardan tashkil topgan a massiv berilgan. a massivning juft elementlaridan tashkil topgan b massivini hosil qiling. b massiv elementlari soni va elementlari chiqarilsin.
 */

// const a = [3, 6, 9, 12, 15, 18, 21, 24];
// const b = a.filter((num) => num % 2 === 0);
// console.log(b, b.length);

/* 
 nta butun sonlardan iborat a massiv va k butun soni berilgan. Massivning har bir elementini k ga orttiruvchi programma tuzilsin.
*/

// const a = [2, 5, 7];
// const k = 3;
// const res = a.map((num) => {
//   return num + k;
// });
// console.log(res);

/*
Array22. n ta elementdan iborat massiv berilgan (n juft son). Massivning birinchi yarmi va ikkinchi yarmi qiymatlari almashtirilsin. 
*/
// const arr = [1, 2, 3, 4, 5, 6];
// const leftArr = arr.slice(0, 3);
// const rightArr = arr.slice(3);
// console.log(rightArr.concat(leftArr));

/* 

1.  Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing. (map, filter)
5 baho - (85 - 100)
4 baho - (70 - 85)
3 baho – (60 - 70)

*/

// const students = [
//   { name: "Quincy", percent: 96 },
//   { name: "Jason", percent: 84 },
//   { name: "Alexis", percent: 100 },
//   { name: "Sam", percent: 65 },
//   { name: "Katie", percent: 90 },
//   { name: "Anna", percent: 75 },
// ];

// const studentGrade = students.map((student) => {
//   if (student.percent <= 100 && student.percent >= 85) {
//     return { ...student, grade: 5 };
//   } else if (student.percent <= 85 && student.percent >= 70) {
//     return { ...student, grade: 4 };
//   } else if (student.percent <= 70 && student.percent >= 60) {
//     return { ...student, grade: 3 };
//   }
// });

// console.log(studentGrade);
