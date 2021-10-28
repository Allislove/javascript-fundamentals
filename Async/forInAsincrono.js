const objeto = {
    "name": "Andres",
    "idioma": "Español",
    "Pais": "Colombia"
  }

const getObjetos = () => {
    for(const properti in objeto){
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                resolve(objeto);
            }, 1000);
        })
    }

}


let obj = {
    name: "Andres",
    lastName: "Romaña",
    country: "Colombia"
}

for(const prop in obj) {
    console.log(`Key:${prop} VALUE: ${obj[prop]}`)
}


for(const element of obj) {
    console.log(element)
}


//getObjetos().then((objeto) => console.log(objeto))
