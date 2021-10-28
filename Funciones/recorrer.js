const alumnos = [
    {
        "names": [
            {
                "name": "Andrés",
                "jornada": "Mañana",
                "aniosProfesional": 1
            },
            {
                "name": "Felipe",
                "jornada": "Noche",
                "aniosProfesional": 10
            }
        ]
    }    

];


for(const i in alumnos) {
    //console.log(alumnos[i])
    const alumno = alumnos[i].names;
    console.log(alumno);
    for(const identificador in alumno) {
        console.log(alumno[identificador].name);
        
    }
}

/* for(const i=0; i<alumnos; i++) {
    console.log(i);
    let infoArray = alumnos.find(firstName => firstName === 'Andrés')
    console.log(infoArray);
} */