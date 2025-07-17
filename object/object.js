// object da key bo'lishi mumkin 3ta ma'lumot turi (string , number, symbol)

const myObj = {
  name: "Asadbek",
  age: 25,
  location: "South Korea",
  about: function () {
    const newObj = {
      hobby: "swimming",
      language: "JS",
    };
    return `Name: ${this.name} hobby: ${newObj.hobby}`;
  },
};

console.log(myObj.about());
//jsda tsda ichida return bo'lmagan functionlar void function deyiladi

// agarda obj malumotlariga o'zgartirish kiritishni taqiqlash uchun Object.freeze() dan foydalaniladi

// Object.freeze(myObj);

//objectdan 2 xil usulda ma'lumot olinadi 1-dot 2-bracket notation

// dot usulida malumotni olish [Agar obj key raqam bo'lsa dot usuli bilan malumotni olib bo'lmaydi]

// console.log(myObj.name);

// bracket usulida malumot olish

// console.log(myObj[1]);

// Objni loop qilish uchun for (let i in {bu yerga obj yoziladi})

for (let i in myObj) {
  // console.log(myObj[i]); //consolga obj value chiqadi
  // console.log(i); // consolga obj key chiqadi
}

//obj valueni o'zgartirish
// myObj.name = "Akmal";

// obj malumotni delete qilish
// delete myObj[1];

// objga malumot qo'shish

// myObj.job = "web developer";

// console.log(myObj);

// Obejct.keys() objectni keylarini array qilib beradi
// Object.values() objectni qiymatini array qilib beradi
// Obejct.entries() object ichidaga malumotni bitta arrayga tenglaydi va  nested array shakllanadi

// console.log(Object.keys(myObj));
// console.log(Object.values(myObj));
// console.log(Object.entries(myObj));
