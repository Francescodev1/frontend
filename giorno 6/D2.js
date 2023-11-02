/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
/*
let num1 = prompt('inserisci primo numero ');
let num2 = prompt('inserisci secondo numero ');

if (num1 > num2) {
console.log(num1 + " è maggiore di " + num2);
} else if (num1 < num2){
  console.log(num2 + " è maggiore di " + num1);
} else {
  console.log(num1 + " è uguale a " + num2);
}


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
/*
let num3 = Number(prompt('inserisci numero'));

if (num3 === 5){
  console.log('ok');
} else { (num3 !== 5) 
  console.log('not equal');
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
/*
let num4 = Number(prompt('Inserisci un numero'));


if (num4 % 5 === 0) {
  console.log("Numero divisibile per 5");
}



/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
/*
let num6 = Number(prompt('numero 1'));
let num7 = Number(prompt ('numero 2'));

/*
num6 = parseInt(num6);
num6 = parseInt(num7);
console.log(typeof num6) */

/*
if (num6 == 8 || num7 == 8 ){
  console.log('il valore di uno di essi è 8' );
} else if(num6 + num7 == 8){
  console.log('la somma dei due numeri è 8');
} else if(num6 - num7 == 8){
  console.log('la sottrazione dei due numeri è 8');
} else if (num7 - num6 == 8){
  console.log('la sottrazione dei due numeri è 8');
}
/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let totalShoppingCart = Number(prompt('Totale carrello'));

console.log(typeof totalShoppingCart)

if (totalShoppingCart < 50){
  console.log("Totale da pagare " + (totalShoppingCart + 10));
} else if("Totale da pagare " + totalShoppingCart > 50){
  console.log(totalShoppingCart);
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let totalShoppingCart = Number(prompt('Totale carrello'));

let totalecar = (totalShoppingCart * 0.8);

if (totalecar < 50){
  console.log("Totale da pagare " + (totalecar + 10));
} else if("Totale da pagare " + totalecar > 50){
  console.log(totalecar);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let a = 5;
let b = 4;
let c = 2;

let numArr = [a];

if (a > b) {
  numArr.unshift(b);
} else {
  numArr.push(b);
}

if(c >a && c >b){
  numArr.unshift(c);
} else if (c > a && c < b) {
  numArr.push(c);
} else if (c > x && c <)
*/
/*
let x = 10;
let y = 15;
let z = 25;
let numArr = [x];

if(x > y) {
  numArr.unshift(y); // [15, 10]
} else {
  numArr.push(y); 
}

if(z > x && z > y) {
  numArr.unshift(z); // [25, 15, 10]
} else if (z < x && z < y) {
  numArr.push(z);
} else {
  numArr.splice(1,0,z);
}



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let valore = 'ciao';

//console.log(typeof valore);

if(typeof valore === 'number'){
  console.log(valore + ' è un numero');
} else {
  console.log(valore + ' è una stringa');
}


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
let newval = Number(prompt('inserisci numero'));

if(newval%2 == 0){
  console.log('il numero inserito è pari');
} else {
  console.log('Il numero inserito è dispari');}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
/*
 let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }



/* SCRIVI QUI LA TUA RISPOSTA */
let val = 4
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else if (val >= 10){
      console.log("Uguale a 10 o maggiore");
    }
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
/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],}

 me.city = 'Toronto';

 console.log(me);


/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/*
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],}

 me.city = 'Toronto';

 console.log(me);

 delete me.lastName;
 console.log(me)
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],}

 me.city = 'Toronto';

 console.log(me);

 delete me.lastName;
 console.log(me);

 me.skills.pop();
 console.log(me);
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

myarray = [];
myarray.push =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(myarray);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

//SCRIVI QUI LA TUA RISPOSTA


let myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];




myarray.splice(9, 1, 100);

//console.log(myarray);

//myarray.pop(1, 0, 100);
//myarray.splice(0, 5, 100);
//myarray[0] = 100;

console.log(myarray);