
//Est-ce que mon fichier est bien lié
console.log('mon fichier est bien lié')

// document.getElementById
// récuperer un élément avec son id
var wrapper = document.getElementById('wrapper');
console.log(wrapper);

// element.innerHTML
wrapper.innerHTML = 'J\'ai accéder à mon élément';
wrapper.innerHTML += '<h1>Ceci est un titre</h1>';

// Récupérer un random entre 0 et 149
var random = Math.floor( Math.random() * 150);

// Math.floor(0.1768) = 0;
// Math.floor(12.2) = 12;
// Math.floor(179) = 179;

// Math.random() -> chiffre au hasard entre 0 et 1
// Si on multiplie par 150.
// La valeur la plus petite = 0 * 150;
// La valeur la plus grande = 1 * 150;