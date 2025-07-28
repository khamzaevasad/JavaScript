const request = new XMLHttpRequest(); // object serverga malumotni yuborishda kk

request.addEventListener("readystatechange", () => {
  //   console.log(request, request.readyState);

  if (request.readyState === 4) {
    console.log(request.responseText);
  }
});

//open o'zini ichiga 2ta narsa oladi 1-qanday turdegi malumot yuboryabmiz 2-qayerga jonatyabmiz

request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

// send

request.send();

// 1 open tayyor
// 2 send yuborildi
// 3 loading... yuklanyabdi
// 4 malumot keldi
