//my first JavaScript code!
console.log('Hello World');
let name = 'Jan';
let adresse = {
  plz: 99999,
  Ort: 'Berlin'
}
console.log(adresse);
//Geht mit Punkt oder auch mit []
adresse.plz = 78120
console.log(adresse.plz);
tossACoinToYourWitcher(20);
function tossACoinToYourWitcher(coins){
  const consideredCoins = 42;
  let differenz = 42- coins;
  console.log('Dir fehlen '+ differenz +' Coins um den Witcher zu rufen.');
}

//app.use(express.static('./static'));
// app.listen(4567);
// console.log('localhost:4567');

