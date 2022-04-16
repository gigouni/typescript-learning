const names: string[] = ["Max", "Tom"];
const names2: Array<string> = ["Max", "Tom"];

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});
