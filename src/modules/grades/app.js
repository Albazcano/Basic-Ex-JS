const button = document.getElementById('boton');
const parent = document.getElementById('parent');

button.addEventListener("click", nota);

export function nota() {
  
  let nota= document.getElementById('nota').value;
  let result = document.createElement('p');

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
