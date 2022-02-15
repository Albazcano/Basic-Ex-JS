const button = document.getElementById('boton');
const parent = document.getElementById('parent');

button.addEventListener("click", askAge);


export function askAge() {

let edad = document.getElementById('edad').value;
let result = document.createElement('p');


	if(edad > 18) {
		result.innerHTML=('Puedes conducir');
		parent.appendChild(result); 
	} else {
		result.innerHTML=('No puedes conducir');
		parent.appendChild(result); 
	}	
}

