/*
Array23. n ta elementdan iborat massiv berilgan. Massivning elementlari teskari tartibda joylashtirilsin. (DIQQAT: Sizdan teskari tartibda chiqarish talab qilinayotgani yo'q. a[0] element a[n-1] bilan almashsin, va hakazo, teskari tartibda joylashtirish talab qilinyapti)
 */

let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < Math.floor(arr.length / 2); i++) {
  let temp = arr[i];
  arr[i] = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = temp;
}

/*
Array24. n ta butun sonlardan iborat a massiv berilgan. Massivning eng kichik va eng katta elementlari orasidagilarini nolga almashtiruvchi programma tuzilsin. Eng kichik va eng katta elementlari o'zgarishsiz qoldirilsin.
*/

let temp = [3, 8, 4, 1, 5, 9, 2];
const max = Math.max(...temp);
const min = Math.min(...temp);
let minIdx = temp.indexOf(min);
let maxIdx = temp.indexOf(max);
let start = Math.min(minIdx, maxIdx);
let end = Math.max(minIdx, maxIdx);

for (let i = start + 1; i < end; i++) {
  temp[i] = 0;
}

/*
 Array25.n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini bir qadam chapga siklik siljituvchi programma tuzilsin. a[n-1] element qiymati a[n-2] ga o'tadi, a[n-2] esa a[n-3] ga, ... a[0] esa a [n-1] ga o'tadi.
*/

let n = [10, 20, 30, 40, 50];

let temps = n[0];

for (let i = 0; i < n.length - 1; i++) {
  n[i] = n[i + 1];
}
n[n.length - 1] = temps;

/*
Array26. n ta elementdan tashkil topgan massiv va k butun soni berilgan (0<= k < n). Indeksi k ga teng bo'lgan elementni o'chiruvchi va yangi massiv qaytaruvchi deleteElementWithIndex(arr, k) nomli funksiya tuzilsin.
*/

function deleteElementWithIndex(arrList, k) {
  const filteredList = arrList.filter((num, index) => {
    return index !== k;
  });
  return filteredList;
}
// console.log(deleteElementWithIndex([10, 20, 30, 40, 50], 2));

/* 
Array27. n ta elementdan tashkil topgan massiv va k, m butun sonlari berilgan (0< k < m < n). Indeksi k dan m gacha bo'lgan elementlarni o'chiruvchi programma tuzilsin. Hosil bo'lgan massiv elementlar soni va elementlari chiqarilsin.
*/

let numList = [10, 20, 30, 40, 50, 60];
let k = 2;
let m = 4;

const fileredNumlist = numList.filter((num, index) => {
  return index < k || index > m;
});

// console.log(fileredNumlist);

/*
Array28. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan bir xil qo'shnilarning birini o'chiruvchi programma tuzilsin.
*/

let dublicateNum = [1, 2, 2, 3, 3, 3, 4, 5, 5];

const filteredDubNum = dublicateNum.filter(
  (val, index) => val !== dublicateNum[index - 1]
);
// console.log(filteredDubNum);

/*
Array29. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing.
*/

function getElementsOneTime(arr) {
  const count = {};
  arr.forEach((num) => {
    count[num] = (count[num] || 0) + 1;
  });
  return arr.filter((num) => count[num] === 1);
}
// console.log(getElementsOneTime([1, 5, 6, 1, 5, 7, 2]));

/*
Array30. arr nomli massivda k qiymatli bir nech element mavjude. Shu elementlar indekslari massividan iborat qiymat qaytaruvchid searchAllElements(arr) nomli funksiya hosil qiling !
*/

function searchAllElements(arr, k) {
  const result = [];
  arr.forEach((num, index) => {
    if (num === k) {
      result.push(index);
    }
  });

  return result;
}
console.log(searchAllElements([2, 3, 4, 3, 5, 3, 7], 3));
