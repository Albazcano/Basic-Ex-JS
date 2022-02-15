const button = document.getElementById('boton');

button.addEventListener("click", nota);
// console.log("He realizado mi examen.");

// Condición
export function nota() {
    let nota= document.getElementById('nota').value;

    if (nota < 3 && nota > 0) {
      console.log("Muy Deficiente");
    } else if (nota < 5){
      console.log("Insuficiente");
    }else if (nota < 6) {
      console.log ("Suficiente");
    } else if (nota < 7) {
      console.log("Bien");
    } else if (nota < 9) {
      console.log("Notable");
    } else if (nota <=10) {
      console.log ("Sobresaliente");
    } else {
      console.log('Nota inválida')
    }
}


// console.log("He obtenido un", calificacion);