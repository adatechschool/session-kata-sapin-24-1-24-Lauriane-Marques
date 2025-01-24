function afficherEtoiles(n){
    let etoiles = []
    for(let i =0; i<n;i++){
        etoiles.push('*')
    }
    let ligneEtoiles = etoiles.join('')
    console.log(ligneEtoiles)
}

//afficherEtoiles(4)

function afficherRectangle(hauteur, largeur){
    let rectangle = []
    for(let i=0; i<hauteur;i++){
        rectangle.push(afficherEtoiles(largeur))
    }
    return rectangle
}

//afficherRectangle(6,3)

function afficherTriangleDroite(n) {
    let coteDroit = []
    for(let i=0; i<n;i++){
        coteDroit.push(afficherEtoiles(i), '\\')
    }
    return coteDroit
}

afficherTriangleDroite(5)