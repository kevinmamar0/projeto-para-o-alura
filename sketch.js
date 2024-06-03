let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

if (xBolinha + raio > width || xBolinha - raio < 0) velocidadeXBolinha *= -1;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  circle(xBolinha, yBolinha, diametro);
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;

  if (xBolinha > width || xBolinha < 0) {
    velocidadeXBolinha *= -1;
  }

  if (yBolinha > height || yBolinha < 0) {
    velocidadeYBolinha *= -1;
  }

  let raio = diametro / 2;

  if (xBolinha + raio > width || xBolinha - raio < 0) velocidadeXBolinha *= -1;
  function draw() {
    background(0);
    mostraBolinha();
    movimentaBolinha();
    verificaColisaoBorda();
  }

  function mostraBolinha() {
    circle(xBolinha, yBolinha, diametro);
  }

  function movimentaBolinha() {
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  }

  function verificaColisaoBorda() {
    if (xBolinha + raio > width || xBolinha - raio < 0) {
      velocidadeXBolinha *= -1;
    }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
      velocidadeYBolinha *= -1;
    }
  }
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  rect(5, 150, 10, 90);
}
