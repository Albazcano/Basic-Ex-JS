function askAge(edad) {

	if(edad >= 18) {
		return("Puedes conducir");
	} else {
		return('No puedes conducir')
	}	
}

module.exports = askAge;
