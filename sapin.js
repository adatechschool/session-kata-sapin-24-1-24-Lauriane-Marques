function afficherEtoiles(n){
    let etoiles = []
    for(let i =0; i<n;i++){
        etoiles.push('*')
    }
    let ligneEtoiles = etoiles.join('')
    console.log(ligneEtoiles)
}

afficherEtoiles(4)

