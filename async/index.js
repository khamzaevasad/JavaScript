// async

console.log("1");
console.log("2");

setTimeout(() => {
  console.log("hello world");
}, 5000);

console.log("3");
console.log("4");

// jsda kodlar qator bilan o'qiladi va 1ta stack mavjud yuqoridagi kod  consol 1 2 oqilgandan keyin settimeout oqiladi lekin u web apiga tushadi  va consol 3 4 o'qiladi va 5soniya o'tgach settimeout web apidan queuega o'tadi undan so'ng stackga tushib consolda chiqadi

//umumiy qilib backgroundda malumot bir ishlarni bajaradigan funksiyalarni async deyiladi
