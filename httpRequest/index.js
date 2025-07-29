const getTodos = (resurse) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("malumotni olishni iloji yo'q");
      }
    });

    request.open("GET", resurse);

    request.send();
  });
};

//promise chaining example

getTodos("./app.json")
  .then((data) => {
    console.log(data);
    return getTodos("./data.json");
  })
  .then((data) => {
    console.log(data);
    return getTodos("./todos.json");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//callback hell example
// getTodos("app.json", (err, data) => {
//   console.log(data);
//   getTodos("data.json", (err, data) => {
//     console.log(data);
//     getTodos("todos.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });

//promise

// const internet = false;

// const getData = () => {
//   return new Promise((resolve, reject) => {
//     //serverga sorov jonatamiz

//     if (internet) {
//       resolve("some data");
//     } else {
//       reject("some error");
//     }
//   });
// };
// getData()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
