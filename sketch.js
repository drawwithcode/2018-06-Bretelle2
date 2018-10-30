var data;
var paese;
var capitale1;
var capitale2;
var capitale3;

var posy1;
var posy2;
var posy3;
var posy=[200,400,600];

function preload(){
data =  loadJSON('assets/stati_e_capitali.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  // do i numeri o.O
  esatta = int(random(0, 197))
  sbagliata2 = int(random(0, 197))
  for(var i = 1; i = 0; i++){
  if (sbagliata2 == esatta) {sbagliata2 = int(random(0, 197))}else{i=0}
}
  sbagliata3 = int(random(0, 197))
  for(var i = 1; i = 0; i++){
  if (sbagliata3 == esatta || sbagliata3 == sbagliata2) {sbagliata3 = int(random(0, 197))}else{i=0}
}

  //carico Dati
  paese = data.countries[esatta].name;
  capitale1 = data.countries[esatta].capital;
  capitale2 = data.countries[sbagliata2].capital;
  capitale3 = data.countries[sbagliata3].capital;

  //assegno posizioni
  var randY = [];
  do {
    randY[randY.length] = posy.splice(
                                  Math.floor(Math.random() * posy.length)
                                , 1)[0];
  } while (randY.length < 3);
  console.log(randY)
  posy1 = randY[0];
  posy2 = randY[1];
  posy3 = randY[2];

}

function draw() {
  textSize(32)
text(paese, 50, 400)
text(capitale1, 600, posy1)
text(capitale2, 600, posy2)
text(capitale3, 600, posy3)
}
