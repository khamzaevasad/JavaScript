// array primitive malumotlarni reftence qilib beradi
const friends = ["Jay", "John", "Jeck", "Angella"];
const age = [30, 35, 20, 29];

//concat methodi orqali 2ta arrayni bir biriga qo'shib bitta array qilish mumkin

// console.log(friends.concat(age));

// push va pop methodlari orqali arrayga malumot qo'shish yoki olib tashash mumkin
friends.push("Akhmed");
friends.pop("Akhmed");
friends[0] = "Conner";

console.log(friends);
