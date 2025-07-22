//1.  Bahosi 5, 4, 3 bo’lgan o’quvchilarni ismlaridan iborat massiv qaytaruvchi getNamesByGrade(students, grade) funksiya tuzing. (map, filter)

const students = [
  { name: "Quincy", percent: 96 },
  { name: "Jason", percent: 84 },
  { name: "Alexis", percent: 100 },
  { name: "Sam", percent: 65 },
  { name: "Katie", percent: 90 },
  { name: "Anna", percent: 75 },
];

function getNamesByGrade(students, grade) {
  const studentGrade = students.map((student) => {
    if (student.percent <= 100 && student.percent >= 85) {
      return { ...student, grade: 5 };
    } else if (student.percent <= 85 && student.percent >= 70) {
      return { ...student, grade: 4 };
    } else if (student.percent <= 70 && student.percent >= 60) {
      return { ...student, grade: 3 };
    }
  });

  const rankStudent = studentGrade.filter((student) => {
    return student.grade === grade;
  });

  return rankStudent.map((student) => student.name);
}
console.log(getNamesByGrade(students, 5));

//2.  Massivdagi bir xil so’zlar sonini hosil qiluvchi obyekt yarating. (reduce)
const animals = [
  "dog",
  "chicken",
  "cat",
  "dog",
  "chicken",
  "chicken",
  "rabbit",
];

const sumAnimals = animals.reduce((acc, curVal) => {
  if (!acc[curVal]) {
    acc[curVal] = 1;
  } else {
    acc[curVal] += 1;
  }
  return acc;
}, {});

//3.  Massiv elementlari kvadratlaridan hosil bo’lgan massiv hosil qiling. (map)
const arr = [1, 2, 3, 4, 5];
const newArr = arr.map((num) => num ** 2);
console.log(newArr);

//4.  Massivdagi musbat sonlar yig’indisini hisoblang. (filter va reduce)
const numArr = [1, -4, 12, 0, -3, 29, -150];
const newNumArr = numArr.filter((num) => num > 0);
const sum = newNumArr.reduce((acc, curVal) => acc + curVal);
console.log(sum);

//5.  Satrdagi so’zlarning bosh harflarini oling. (split, map, join)
const str = "George Raymond Richard Martin".split(" ");
const letters = str.map((letter) => letter[0]).join("");
console.log(letters);

//6.  Massivdagi eng yosh va eng qarilarni topib, ularni yoshlarini farqini toping. (sort).
const about = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];
const sortedAbout = about.sort((num2, num1) => num1.age - num2.age);
console.log(sortedAbout[0].age - sortedAbout[sortedAbout.length - 1].age);

//7.  N ta elementdan iborat massiv berilgan.Massiv elementlari orasidan juftlarini va toqlarini o'z ichiga oladigan massivlar hosil qilinsin. (filter)

const numbers = [2, 5, 8, 13, 6, 9, 4, 7, 12];
const evenNum = numbers.filter((num) => num % 2 === 0);
const oddNum = numbers.filter((num) => num % 2 === 1);

//8.  N ta elementdan iborat massiv berilgan. Massiv elementlari orasidan bir xil qiymatga ega bo’lganlarini o’chiruvchi dastur tuzilsin. Faqat birinchi uchragani qoldirilsin. (reduce)

const number = [2, 4, 2, 5, 4, 6, 7, 5];
const numberList = number.reduce((acc, curVal) => {
  if (!acc.includes(curVal)) {
    acc.push(curVal);
  }
  return acc;
}, []);
console.log(numberList);

//9. Products massivini id, name, price, rating va discount bo'yicha sortlash; (sort)
const products = [
  { id: 1, name: "Laptop", price: 1200, rating: 4.5, discount: 10 },
  { id: 2, name: "Smartphone", price: 800, rating: 4.7, discount: 15 },
  { id: 3, name: "Tablet", price: 600, rating: 4.2, discount: 5 },
  { id: 4, name: "Monitor", price: 300, rating: 4.0, discount: 20 },
  { id: 5, name: "Keyboard", price: 100, rating: 3.8, discount: 25 },
  { id: 6, name: "Headphones", price: 150, rating: 4.3, discount: 30 },
];

products.sort((a, b) => a.discount - b.discount);
products.sort((a, b) => a.rating - b.rating);
products.sort((a, b) => a.price - b.price);
console.log(products);

//10. Rating bo'yicha eng kuchli product topilsin. (sort) //11 Narxi eng past bo'lgan product topilsin. (sort)
const maxRating = products.sort((a, b) => b.rating - a.rating)[0];
const minPrice = products.sort((a, b) => a.price - b.price)[0];
console.log(maxRating, minPrice);

//12. Barcha products narxlari yig'indisi topilsin. (reduce)

const sumPrice = products.reduce((acc, curVal) => {
  return acc + curVal.price;
}, 0);
console.log(sumPrice);

//13. Faqatgina products nomlaridangina iborat bo'lgan massiv qaytaring. (map)
const productsName = products.map((product) => product.name);
console.log(productsName);

//14. Id si 5 bo'lgan elementni nomini qaytaruvchi dastur yozing. (find)
const productName = products.find((product) => product.id === 5);
console.log(productName.name);

//15. Id si 4 bo'lgan productni o'chiruvchi dastur yozing. (filter)
const deleteProduct = products.filter((product) => product.id !== 4);
console.log(deleteProduct);

//16. Berilgan satrni faqatgina harflardan iborat ekanligiga tekshiring (split, every)
let word = "heloworld1!".split(" ");
const everyStr = word.every((letter) => letter === "");
console.log(everyStr);

//17. Massiv truthy va falsy elementlardan tuzilgan. O’sha massivdagi truthy va falsy elementlarni alohida massivlarga ajratib object qilib qaytaruvchi getTruthyFalsy funksiya tuzing. (filter)
let inputs = [false, 1, 10, "", null, "abdulaziz", 1.13, 0];

function getTruthyFalsy(arr) {
  const truthy = inputs.filter(Boolean);
  const falsy = inputs.filter((el) => !Boolean(el));
  return { truthy, falsy };
}

console.log(getTruthyFalsy(inputs));

//18. Satr berilgan. Satrdagi so'zlar uzunligidan iborat bo'lgan massiv qaytaring.
let words = "Men Abdulaziz Programmerman".split(" ");
const res = words.map((el) => el.length);
console.log(res);

//19. Satrni bo'sh joy bor yoki yo'qligini tekshiring. (split, some)
const someStr = words.some((el) => el.includes(" "));
console.log(someStr);

//20. Objectning kalit va qiymatlarining string ko'rinishidagi yig'indisidan iborat massiv qaytaring. (Object.entries, map, join)
let obj = { a: 2, b: 5, c: 7 };
const arrList = Object.entries(obj);
const results = arrList.map((el) => el.join(""));
console.log(results);

//21. Sonning raqamlari yig'indisini hisoblab beradigan digitSum() funksiya yozing. (rekursiv funksiya)
let num = "123";
let toStr = num.toString().split(" ");
let toNum = toStr.toString().split("").map(Number);
const sums = toNum.reduce((acc, curVal) => {
  return acc + curVal;
}, 0);
console.log(sums);

/*Quyidagi pupils massividagi barcha o'quvchilarni protcentlarining o'rtacha qiymatini toping. (reduce) Pupils massividagi ojectlarga quyidagi propertylarni qo'shib yangi massiv qaytaring. (map)


23. grade propertyga protcent 90-100 o'rtasida bo'lsa 5, 80-90 o'rtasida bo'lsa 4, 70-80 o'rtasida bo'lsa 3 bahoni, qolgan holatlarda 2 bahoni o'zlashtiring.(map)


24. isPassed propertyga protcent 70 dan o'tsa true, aks holda false qiymat o'zlashtirilsin. (map)


25. Necha kishi imtihondan o'tdi va necha kishi imtihonda o'ta olmadi shuni ham hisoblang. (reduce)*/

const pupils = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];

const avarage = Math.round(
  pupils.reduce((acc, curVal) => acc + curVal.protcent, 0) / pupils.length
);

const addGrade = pupils.map((student) => {
  if (student.protcent > 90 && student.protcent < 100) {
    return { ...student, grade: 5 };
  } else if (student.protcent > 80 && student.protcent < 90) {
    return { ...student, grade: 4 };
  } else if (student.protcent > 70 && student.protcent < 80) {
    return { ...student, grade: 3 };
  } else {
    return { ...student, grade: 2 };
  }
});
console.log(addGrade);

const isPassed = addGrade.map((student) => {
  if (student.protcent > 70) {
    return { ...addGrade, isPassed: true };
  } else {
    return { ...addGrade, isPassed: false };
  }
});

console.log(isPassed);

const result = isPassed.reduce(
  (acc, item) => {
    if (item.isPassed) {
      acc.passed += 1;
    } else {
      acc.failed += 1;
    }
    return acc;
  },
  { passed: 0, failed: 0 }
);

console.log(result);

// berilgan string ichidagi har bir belgining chastotasini hisoblab, uni kamdan kam uchraydigan ko'proq uchraydiganiganiga qarab
// tartiblab qaytarafigan funksiya yozing

// programming

// function stringCheck(string) {
//   const arrList = string.split("").sort();
//   let stringObj = {};

//   for (list of arrList) {
//     if (stringObj[list]) {
//       stringObj[list] = stringObj[list] + 1;
//     } else {
//       stringObj[list] = 1;
//     }
//   }

//   let res = "";

//   for (let key in stringObj) {
//     res += key.repeat(stringObj[key]);
//   }

// const objKeys = Object.keys(stringObj).sort();
// const objValue = Object.values(stringObj).sort();

//   return res;
// }
// console.log(stringCheck("programming"));

// var addTwoNumbers = function (l1, l2) {
//   const l1Reverce = Number(Array.from(l1).reverse().join(""));
//   const l2Reverce = Number(Array.from(l2).reverse().join(""));
//   const sum = (l1Reverce + l2Reverce).toString().split("");
//   const result = sum.reverse().map(Number);
//   return result;
// };
// console.log(addTwoNumbers([0], [0]));
