let total = 0;

function ajouterProduit(produitId) {
  // Récupérer les informations du produit en fonction de l'ID
  let produit = obtenirProduit(produitId);
  
  // Créer un nouvel élément de liste pour afficher le produit dans le panier
  let nouvelElement = document.createElement("li");
  nouvelElement.textContent = produit.nom + " - Prix : " + produit.prix + " €";
  
  // Ajouter le nouvel élément à la liste des produits dans le panier
  let listeProduits = document.getElementById("liste-produits");
  listeProduits.appendChild(nouvelElement);
  
  // Mettre à jour le total
  total += produit.prix;
  let totalElement = document.getElementById("total");
  totalElement.textContent = "Total : " + total + " €";
}

function obtenirProduit(produitId) {
  // Ici, vous pouvez récupérer les informations du produit à partir de votre source de données
  // Par exemple, vous pouvez utiliser une API ou une base de données pour obtenir les détails du produit en fonction de l'ID
  
  // Pour cet exemple, nous allons simplement renvoyer un objet avec des informations statiques sur le produit
  if (produitId === 1) {
    return { nom: "Nom du produit 1", prix: 10 };
  } else if (produitId === 2) {
    return { nom: "Nom du produit 2", prix: 15 };
  }
}
