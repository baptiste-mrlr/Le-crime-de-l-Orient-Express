///Attente du chargement de la fenêtre :///
window.addEventListener('load', demarrer);

///Démarrage du code JS :///
function demarrer(){
    let mon_bouton = document.getElementById('button');
    mon_bouton.addEventListener('click', cliquer);
}

///Les fonctions :///
function cliquer(){
	alert('Bravo ! Vous avez réussi votre mission ! Clique sur "OK" pour voir ce que tu as remporté !');
}