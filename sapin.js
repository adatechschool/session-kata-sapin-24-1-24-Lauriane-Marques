// function afficherEtoiles(n){
//     let etoiles = []
//     for(let i =0; i<n;i++){
//         etoiles.push('*')
//     }
//     let ligneEtoiles = etoiles.join('')
//     console.log(ligneEtoiles)
// }

function afficherEtoiles(n){
    const ETOILE = '*'
    return ETOILE.repeat(n)
}

//console.log(afficherEtoiles(4))

// function afficherRectangle(hauteur, largeur){
//     let rectangle = []
//     for(let i=0; i<hauteur;i++){
//         rectangle.push(afficherEtoiles(largeur))
//     }
//     return rectangle
// }

function afficherRectangle(hauteur, largeur){
    let largeurSapin = afficherEtoiles(largeur)
    for(let i=0; i<hauteur;i++){
        console.log(largeurSapin)
    }
}

//afficherRectangle(6,3)

function afficherTriangleDroite(n) {
    for(let i=0; i<n;i++){
        let etoiles = afficherEtoiles(i)
        etoiles += '\\'
        console.log(etoiles)
    }
}

//afficherTriangleDroite(5)

function afficherTriangleGauche(n) {
    for(let i=0; i<n;i++){
        let etoiles = '/' + afficherEtoiles(i) 
        console.log(etoiles.padStart(n,' '))
    }
}

//afficherTriangleGauche(5)

function afficherPointeSapin(n) {
    let etoileTop = '+'
    console.log(etoileTop.padStart(n+1, ' '))
    for(let i=0; i<n;i++){
        let nombreEspace = n-i-1
        const ESPACE = ' '
        let etoiles = ESPACE.repeat(nombreEspace )+ '/' + afficherEtoiles(i)+ '|' + afficherEtoiles(i)+ '\\'
        console.log(etoiles)

        //console.log(etoiles.padStart(espace,'.'))
        //Je voulais utiliser cette méthode pour faire commencer les étages en fonction de la longueur actuelle de la chaine mais je n'ai pas réussi
        //même en testant plein de choses et plein de valeurs différentes de début
}
}
afficherPointeSapin(6)