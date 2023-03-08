// 1. capturer les éléments

var input = document.querySelector('input');
var bouton = document.querySelector('button');
var container = document.querySelector('.container');

// 2. function chiffre random


var randomChiffre = Math.floor(Math.random() * 10) + 1;

function addContainer (randomNumber, userNumber) {
    
    var randomNumber = randomChiffre;

    if(userNumber > randomNumber)
    {
        container.innerHTML = `<span>Ton chiffre choisi est le ${userNumber}</span>
        <span>et le chiffre à trouver est plus petit.</span>`
    } 
    if (userNumber < randomNumber)
    {
        container.innerHTML = `<span>Ton chiffre choisi est le ${userNumber}</span>
        <span>et le chiffre à trouver est plus grand.</span>`
    } 
    if (userNumber == randomNumber) 
    {
        container.innerHTML = `<span>Ton chiffre choisi est le ${userNumber}</span>
        <span>et bravo tu as trouvé !</span>`
    }
}

// 3. event : valeur de mon input + appel function (arg1, arg2)

bouton.addEventListener('click', (e) => {
    var userNumber = input.value;
    addContainer(randomChiffre, userNumber )
});

input.addEventListener('keypress', (e) => {
    if(e.key == "Enter"){
        var userNumber = input.value;
        addContainer(randomChiffre, userNumber )
    }
});