var text = prompt("Escribe una frase");
var myChar = 'a';
var countLetter=0;

for(let i= 0; i < text.length; i++) {
    if(text.charAt(i) === myChar){
        countLetter++;
    }
    alert(`We have found ${countLetter} letters '${myChar}' in your text!!!`);
}

