const datos = [
    {
        id: 1,
        year: 2009,
        title: "Avengers"
        },
          {
        id: 2,
        year: 2021,
        title: "Fast 9"
        },
          {
        id: 1,
        year: 2021,
        title: "Novelas"
        },
  ];

  
  
  //Modo sincrono
/*   const getDatos = () => {
    return datos;
  } */


  //Modo asincrono simulandolo con setTimeout y usando new Promise
  const getDatos = () => {
    return new Promise((resolve, reject) => {
        //Usando o viendo el reject!
        if(datos.length === 0) {
            reject(new Error("No existen datos"))
        }
      setTimeout(() => {
        resolve(datos);
      }, 1000);
    })
  }
  console.log("----- new Promise -----");
  getDatos().then((datos) => console.log(datos))


  //Asincrono usando el Async/Await
/*   async function obteniendoLosDatos() {
      const obtnerDatos = await getDatos();
      console.log("----- Async/Await -----");
      console.log(obtnerDatos);
  } */

//Asincrono usando Async/Await y un try/catch
async function obteniendoLosDatos() {
//Es decir, el le dira intentemos hacer lo siguiente, si no, pues muestranos el error
    try {
        const obtnerDatos = await getDatos();
        console.log("----- Async/Await -----");
        console.log(obtnerDatos);
    } catch(error) {
        console.log(error)
    }
}


  obteniendoLosDatos()