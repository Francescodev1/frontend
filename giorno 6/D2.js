/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/*aaaa
let num1 = prompt('inserisci primo numero ');
let num2 = prompt('inserisci secondo numero ');

if (num1 > num2) {
console.log(num1);
} else if(num1 < num2) {
  console.log(num2);
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/* aaaaa
let num3 = prompt('inserisci numero');

if (num3 == 5){
  console.log('ok');
} else if(num3 !== 5) {
  console.log('not equal')};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/*
let num4 = prompt('Inserisci un numero');


if (num4 % 5 == 0) {
  console.log("Numero divisibile per 5");
}



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/



/* SCRIVI QUI LA TUA RISPOSTA 
let num6 = prompt('numero 1');
let num7 = prompt ('numero 2');

num6 = parseInt(num6);
num6 = parseInt(num7);
console.log(typeof num6)


if (num6 == 8 || num7 == 8 ){
  console.log('il valore di uno di essi è 8' );
} else if(num6 - num7 == 8){
  console.log('la somma dei due numeri è 8');
} else if(num6 - num7 == 8){
  console.log('la sottrazione dei due numeri è 8');
} else if(num7 - num6 == 8){
  console.log('la sottrazione dei due numeri è 8');
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let totalShoppingCart = prompt('Totale carrello');
totalShoppingCart = parseInt(totalShoppingCart);

if (totalShoppingCart < 50){
  console.log(totalShoppingCart + 10);
} else if(totalShoppingCart > 50){
  console.log(totalShoppingCart);
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let totalShoppingCart = prompt('Totale carrello');
totalShoppingCart = parseInt(totalShoppingCart);

totalShoppingCart = (totalShoppingCart * 80) / 100 ;

if (totalShoppingCart < 50){
  console.log(totalShoppingCart + 10);
} else if(totalShoppingCart >= 50){
  console.log(totalShoppingCart);
}
/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 5;
let b = 4;
let c = 2




/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let valore = prompt('inserisci valore');
valore = parseInt(valore);

console.log(typeof valore);

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
let ciao = prompt('inserisci numero');

if(ciao%2 == 0){
  console.log('il numero inserito è pari');
} else {
  console.log('Il numero inserito è dispari');}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/

  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else (val >= 10);{
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

//SCRIVI QUI LA TUA RISPOSTA