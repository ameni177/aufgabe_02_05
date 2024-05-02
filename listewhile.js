let zahlen = [];
//zahlen.push("1");
//zahlen.push("2");
//zahlen.push("3");

let answer = "";

while (answer !== "exit") {
  answer = prompt("enter a value or write exit");
  if (answer !== "exit") {
    zahlen.push(answer);
  }
}

console.log(zahlen);
