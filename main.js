//  Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi” FizzBuzz”.

// dichiarazione variabili
var appoggio, appoggioPerHTML;

//creo un array vuoto
appoggio=[];

// faccio un ciclo da 1 a 100 e stampo i valori richiesti, e riempio
// l'array "appoggio" con ciascun valore ottenuto
for (var i=1; i<=100; i++){
  if (i%3==0 && i%5==0) {
    // stampo in console il valore richiesto
    console.log('FizzBuzz');
    //pusho tale valore nell'array "appoggio" per stamparlo come dico io in html
    appoggio.push('FizzBuzz');
  } else if (i%3==0){
    console.log('Fizz');
    appoggio.push('Fizz');
  } else if (i%5==0){
    console.log('Buzz');
    appoggio.push('Buzz');
  } else {
    console.log(i);
    appoggio.push(i);
  }
}

// usando l'array "appoggio" appena riempito
//stampo in html la lista iterando nell'array, andando a capo a ogni decina (tranne 0)
for (var j=0; j<100; j++){
  appoggioPerHTML = document.getElementById('listaFrizzina').innerHTML; //prende il valore che "listaFrizzina" ha in html
  if (j%10==0 && j!==0){
    document.getElementById('listaFrizzina').innerHTML = appoggioPerHTML + "<br> <br>" + appoggio[j];
  } else {
    document.getElementById('listaFrizzina').innerHTML = appoggioPerHTML + " " + appoggio[j];
  }
}

//debug
// console.log(appoggio);
