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
  createCanvas(800,800)
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
  posy1 = random(posy)
  posy2 = random(posy);
  for(var i = 1; i = 0; i++){
    if(posy2 != posy1){i=0} else {posy2=random(posy)}

  }
  posy3 = random(posy);
  for(var i = 1; i = 0; i++){
    if(posy3 != posy1 && posy3 != posy2){i=0} else {posy3=random(posy)}
  }
}

function draw() {
  textSize(32)
text(paese, 50, 400)
text(capitale1, 600, posy1)
text(capitale2, 600, posy2)
text(capitale3, 600, posy3)
}
