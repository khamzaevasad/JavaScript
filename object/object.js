// object da key bo'lishi mumkin 3ta ma'lumot turi (string , number, symbol)

const myObj = {
  name: "Asadbek",
  age: 25,
  location: "South Korea",
  1: "computer science and engineering",
};

//objectdan 2 xil usulda ma'lumot olinadi 1-dot 2-bracket notation

// dot usulida malumotni olish [Agar obj key raqam bo'lsa dot usuli bilan malumotni olib bo'lmaydi]

// console.log(myObj.name);

// bracket usulida malumot olish

// console.log(myObj[1]);

// Objni loop qilish uchun for (let i in {bu yerga obj yoziladi})

for (let i in myObj) {
  console.log(i);
}
