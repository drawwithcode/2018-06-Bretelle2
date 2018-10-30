var data;
var paese;
var capitale1;
var capitale2;
var capitale3;
//posizione testi
var posy1;
var posy2;
var posy3;
// punteggio
var punteggio= 0;

function preload(){
data =  loadJSON('assets/stati_e_capitali.json');
}

function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(12)
  quiz();
}

quiz = function() {
  // do i numeri o.O
  var numeroC = [];
  for(i=0; i<data.countries.length; i++) {
    numeroC.push(i);
  }
  var randCit = [];
  do {
    randCit[randCit.length] = numeroC.splice(Math.floor(Math.random() * numeroC.length), 1)[0];
  } while (randCit.length < 3);
  esatta = randCit[0];
  sbagliata2 = randCit[1];
  sbagliata3 = randCit[2];
  console.log(esatta)
  console.log(sbagliata2)


  //carico Dati
  paese = data.countries[esatta].name;
  capitale1 = data.countries[esatta].capital;
  capitale2 = data.countries[sbagliata2].capital;
  capitale3 = data.countries[sbagliata3].capital;


  //assegno posizioni
  var posy=[300,400,500];
  var randY = [];
  do {
    randY[randY.length] = posy.splice(Math.floor(Math.random() * posy.length), 1)[0];
  } while (randY.length < 3);
  posy1 = randY[0];
  posy2 = randY[1];
  posy3 = randY[2];
  console.log(posy1)
}


function draw() {
background(255)
fill(0)
textSize(32)
text('Guess the Capital!', 50, 100)
text(paese, 50, 400)
text(capitale1, 600, posy1)
text(capitale2, 600, posy2)
text(capitale3, 600, posy3)
if(punteggio>0){fill(random(0,255),random(0,255),random(0,255))}
if(punteggio<0){fill(random(0,255),0,0)}
text('punteggio '+punteggio, width-200, height-20)
}

function mousePressed() {
  var dx = dist(mouseX, 0, 600, 0)
  var dy = dist(0, mouseY, 0, posy1)
  if(dx<150&&dy<50) {
    punteggio++;
  } else {
    punteggio--;
  }
  quiz();
}
