


const distanza = parseInt(prompt('Inserisci la distanza che vuoi percorrere (km)'));
console.log('Distanza: ' + distanza);

const eta = parseInt(prompt('Inserisci la tua età'));
console.log('Età: ' + eta);

let prezzoAlKm = 0.21;

let prezzoBigliettoBase = prezzoAlKm * distanza;
prezzoBigliettoBase = prezzoBigliettoBase.toFixed(2);
console.log('Prezzo biglietto normale: ' + prezzoBigliettoBase);

let scontoGiovani = (prezzoBigliettoBase / 100) * 20;
console.log('Sconto giovani: ' + scontoGiovani);

let scontoAnziani = (prezzoBigliettoBase / 100) * 40;
console.log('Sconto anziani: ' + scontoAnziani);

let bigliettoGiovani = prezzoBigliettoBase - scontoGiovani;
bigliettoGiovani = bigliettoGiovani.toFixed(2);

let bigliettoAnziani = prezzoBigliettoBase - scontoAnziani;
bigliettoAnziani = bigliettoAnziani.toFixed(2);


if (eta < 18) {
  document.getElementById('prezzo-viaggio').innerHTML = bigliettoGiovani + '€ Hai uno sconto del 20% perché sei minorenne!';
  
} else if (eta > 65) {
  document.getElementById('prezzo-viaggio').innerHTML = bigliettoAnziani + '€ Hai uno sconto del 40% perché sei over 65!';

} else {
  document.getElementById('prezzo-viaggio').innerHTML = prezzoBigliettoBase + '€';
 
}

/*
if (eta < 18) {
  risultato = prezzoBigliettoBase - scontoGiovani;
} else if (eta > 65) {
  risultato = prezzoBigliettoBase - scontoAnziani;
} else {
  risultato = prezzoBigliettoBase;
}
*/