var images = document.querySelector('.img-zoom');

images.addEventListener('click', function() {
	this.classList.toggle('zoom-in');
});

function validerFormulaire() {
    // Récupérer les valeurs saisies par l'utilisateur 
    // var element = document.getElementById(id);
    var nom = document.getElementById('nom').value; //renvoie un objet représentant l'élément dont la propriété id correspond à la chaîne de caractères spécifiée
    var email = document.getElementById('email').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    
    // condition qui vérifie si tous les champs sont bien remplis
    if (nom == '' || email == '' || date == '' || time == '') {
      alert("Veuillez remplir tous les champs");
      return false;
    }
    
    // Afficher les valeurs saisies
    alert("//Réservation prit en compte//" + "\nNom: " + nom + "\nEmail: " + email + "\nDate: " + date + "\nHeure: " + time);
    
    // Réinitialiser le formulaire
    document.getElementById("reservationForm").reset();
    
    // Empêcher l'envoi du formulaire
    return false;
  }