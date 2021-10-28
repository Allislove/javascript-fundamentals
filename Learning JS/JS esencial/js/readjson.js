const datos = {
    "paises": [
        "Colombia", "Holanda", "Mexico", "USA", "Haiti", "Brazil", "Nueva Zelanda", "Francia", "Egipto"
    ],
    "comidas": ["Pescado", "Zanahoria"],
    "mascotas": ["Perro", "Gatos", "Leones", "Conejos"],
    "ciudades": ["Medellin", "Quibdo", "Santa Marta", "Bogota", "Necocli", "Turbo", "Apartado"],
    "estudiante": true,
    "graduado": false,
    "semestre": 6,
    "hijos": "Ninguno",
    "casado": false
}

for(info in datos) {
    console.log(info + ': ' + datos[info])
}

