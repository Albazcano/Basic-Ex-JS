var n1 = prompt("Escribe un número");
var i;
var prime = true;

for (i=2; i < n1 / 2; i++) {
if (n1 % i === 0) {
    prime = false;
    }
}
if (prime) {
    document.write("El número es primo");
} else {
    document.write("El número no es primo");
}