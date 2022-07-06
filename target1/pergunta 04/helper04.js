//5) Escreva um programa que inverta os caracteres de um string.

function reverse(string) {
  return string.split("").reverse().join("");
}

var string1 = reverse("target");
console.log(string1);
