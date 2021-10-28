const users = {
    "name": "Andres",
    "lastName": '',
    "country": '',
    "city": '',
    "edad": Number,
    "contacto": [
        {
            email: 'andrewss@gmail.com',
            twitter: '',
            facebook: '',
            phone: ''
        }
    ],
    "nickname": '',
    "saludar": () => {
        let saludar = 'Hello World!';
        //console.log(saludo);
        return saludar;
    }

}


console.log(users.saludar());
console.log(users);

/* for(const i in users) {

    console.log(users[i]);

} */