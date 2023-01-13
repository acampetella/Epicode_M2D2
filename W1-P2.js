/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
 I principali datatype in Javascript sono: Number, String, Boolean, Undefined, null, BigInt e Symbol.
 Il tipo Number viene utilizzato per rappresentare un qualsiasi valore numerico, sia intero che reale. Per numero reale intendo un valore che può possedere anche parte decimale
 come 3.14, 5.725, -10.2 ecc.
*/

let numeroIntero = 100; //dichiarazione della variabile numeroIntero e assegnamento del valore 100
let numeroReale = 3.125; //dichiarazione della variabile numeroReale e assegnamento del valore 3.125

/*
 Il tipo String serve per rappresentare una qualunque sequenza di caratteri. In Javascript le stringhe sono delimitate dai doppi apici o dai singoli apici. Ecco alcuni esempi di stringhe:
 "auto", "Andrea", 'Ciao', 'arrivederci', '56', 'auto41'.
*/

let stringa1 = "Arrivederci";
let stringa2 = 'Ciao';

/*
 Il tipo Boolean è utilizato per rappresentare un'entità logia che può essere vera o falsa. Infatti, i valori possibili per questo tipo di dato sono true e false.
*/

let vero = true;
let falso = false;

/*
 Undefined indica un valore non ancora esistente, quindi indefinito. Si ha quando viene creata una variabile alla quale non è stato ancora assegnato un valore
*/

let y; //dichiarazione di una variabile a cui assegniamo il nome y
console.log(y); //visualizza undefined perchè alla variabile y non è stato assegnato ancora alcun valore

/*
 null rappresenta un valore nullo. Quando assegniamo questo valore ad una variabile, il suo contenuto si svuota
*/

let a = "bravo"; //dopo questa istruzione la variabile a contiene la stringa "bravo"
a = null; //con questa istruzione svuotiamo il contenuto della variabile a

/*
 I tipi BigInt e symbol non sono ancora stati trattati. Al momento sappiamo solo che il tipo BigInt viene utilizzato per rappresentare numeri interi molto grandi
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*
 Un oggetto in Javascript viene utilizzato per rappresentare un'entità complessa che può essere vista come l'aggregazione di altre enbtità più semplici. Ad esempio, se volessimo rappresentare 
 un'automobile, potremmo creare un oggetto contenente le informazioni relative alla marca, al modello, alla cilindrata ecc.
*/

//definizione di una variabile oggetto auto contenente gli attributi modello, cilindrata e targa
let auto = {
    modello: "Lancia Delta",
    cilindrata: 1600,
    targa: "XY123QZ"
};

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let somma = 12 + 20; //istruzione che somma i valori 12 e 20 e memorizza il risultato nella variabile somma, dichiarata con la stessa istruzione

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12; //dichiarazione della variabile x e assegnamento del valore 12

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Andrea";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let differenza = 4 - x; //la variabile differenza, dopo questa istruzione, memorizzerà il valore -8

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "jhon"; //utilizzo dei doppi apici
let name2 = 'Jhon'; //utilizzo degli apici singoli
console.log(name1 !== name2); //otteniamo il valore true
console.log(name1 === name2); //otteniamo il valore false perchè name2 ha la prima lettera in maiuscolo
console.log(name1.toLowerCase() === name2.toLowerCase()); //otteniamo il valore true perchè abbiamo trasformato entrambe le stringhe in minuscolo
