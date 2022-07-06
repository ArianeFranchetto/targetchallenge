//Caso inserido um termo que não pertencer a sequência o console não lê2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const number = parseInt(prompt("Enter a positive number: "));
let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("Fibonacci Series:");
console.log(n1);
console.log(n2);

nextTerm = n1 + n2;

while (nextTerm <= number) {
  console.log(nextTerm);

  n1 = n2;
  n2 = nextTerm;
  nextTerm = n1 + n2;
}
