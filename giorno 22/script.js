class User {
    constructor(firstName, lastName, age, location) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;
    }

    confrontaEta(altraPersona) {
        // Metodo per confrontare l'età con un'altra persona
        if (this.age > altraPersona.age) {
            return `${this.firstName} è più vecchio di ${altraPersona.firstName}`;
        } else if (this.age < altraPersona.age) {
            return `${this.firstName} è più giovane di ${altraPersona.firstName}`;
        } else {
            return `${this.firstName} ha la stessa età di ${altraPersona.firstName}`;
        }
    }
}

// Creazione di due istanze della classe User
const utente1 = new User('Mario', 'Rossi', 30, 'Roma');
const utente2 = new User('Giuseppe', 'Verdi', 35, 'Milano');

// Chiamata del metodo confrontaEta per verificare il confronto tra le età
const risultatoConfronto = utente1.confrontaEta(utente2);

// Stampa a console del risultato
console.log(risultatoConfronto);







