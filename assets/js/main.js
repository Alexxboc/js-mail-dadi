/* 
ESERCIZIO: MAIL

Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
*/



// Creare una lista di e-mail
const mailList = ['boccardi.alessandro@gmail.com', 'antonellariccio84@gmail.com', 'g.glamour.it@gmail.com', 'info@gglamour.it'];

// Chiedere la mail all'utente
const askMail = prompt(`Type your e-mail`);

// Crea un ciclo for con la lista delle mail

for(let i = 0; i < mailList.length; i++){
    // console.log(mails[i]);

// Crea una variabile per ogni singola mail
    let email = mailList[i];
    // console.log(mail);

// Controlla che la mail sia inclusa nella lista

    if(email === askMail){
// Stampa il messaggio positivo in console
    console.log(`La mail è presente nella lista`);
    } else {
// Stampa il messaggio negativo in console
    console.log(`La mail non è presente nella lista`);
    }


}



/* 

ESERCIZIO: GIOCO DEI DADI

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

*/

// // Crea una lista con i numeri
// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers);

// // Scegli un numero casuale per l'utente
// const user_number = Math.floor(Math.random()* numbers.length + 1);
// console.log(user_number);

// //Scegli un numero casuale per il computer
// const computer_number = Math.floor(Math.random()* numbers.length + 1);
// console.log(computer_number);

//  //Controlla chi ha vinto
//     if(user_number > computer_number) {
//         console.log(`Il tuo numero è ${user_number} Hai vinto`)
//     } else if (user_number < computer_number){
//         console.log(`Il tuo numero è ${user_number} Hai perso`)
//     } else {
//         console.log (`Il tuo numero è ${user_number} Avete pareggiato`)
//     }




/* 

BONUS: Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.

*/

// // Creare una lista di e-mail
// const mails = ['boccardi.alessandro@gmail.com', 'antonellariccio84@gmail.com', 'g.glamour.it@gmail.com', 'info@gglamour.it'];

// // Seleziona il bottone nell'htmnl
// const button = document.querySelector('.btn')

// // Crea un evento di submit

// button.addEventListener (`click`, 
// function(){
//     console.log(`click`)
// // Estrapola il "Valore Email" dall'input
//     const Email = document.getElementById(`email`).value;

// // Crea un ciclo for con la lista delle mail
//     for(let i = 0; i < mails.length; i++){

// // Crea una variabile per ogni singola mail della lista
//         let listMail = mails[i];

// // Controlla che la mail sia inclusa nella lista
//         if(Email === listMail) {

// // Stampa il risultato
//         console.log(`La mail ${Email} è presente nella lista`); 

//         } else {
// // Stampa il risultato
//         console.log(`La mail ${Email} non è presente nella lista`); 
//         }
//     }

// })



