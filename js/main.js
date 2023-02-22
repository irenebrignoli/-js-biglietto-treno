/*

Ciao ragazzi,
esercizio di oggi: calcolo del prezzo del biglietto del treno
cartella/repo js-biglietto-treno
Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


n kilometri che vuole fare
età passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio


*/



const distanza = parseInt(prompt('Inserisci la distanza che vuoi percorrere (km)'));
console.log('Distanza: ' + distanza);

const eta = parseInt(prompt('Inserisci la tua età'));
console.log('Età: ' + eta);

let prezzoAlKm = 0.21;

let prezzoBigliettoBase = prezzoAlKm * distanza;
console.log('Prezzo biglietto normale: ' + prezzoBigliettoBase);

let scontoGiovani = (prezzoBigliettoBase / 100) * 20;
console.log('Sconto giovani: ' + scontoGiovani);

let scontoAnziani = (prezzoBigliettoBase / 100) * 40;
console.log('Sconto anziani: ' + scontoAnziani);

let risultato;

if (eta < 18) {
  risultato = prezzoBigliettoBase - scontoGiovani;
} else if (eta > 65) {
  risultato = prezzoBigliettoBase - scontoAnziani;
} else {
  risultato = prezzoBigliettoBase;
}

risultato = risultato.toFixed(2);

document.getElementById('prezzo-viaggio').innerHTML = risultato;