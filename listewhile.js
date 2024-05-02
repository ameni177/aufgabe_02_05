let zahlen = [];
let answer = "";

while (answer !== "exit") {
  answer = prompt("enter a value or write exit");
  if (answer !== "exit") {
    zahlen.push(answer);
  }
}

console.log(zahlen);
