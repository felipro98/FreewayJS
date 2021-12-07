function setup() {
  createCanvas(500, 400);
  trilhaSonora.loop();
}

function draw() {
  background(imagemEstrada);
  mostraPersonagem();
  movimentaPersonagem();
  mostraCarro();
  movimentaCarro();
  resetaPosicaoDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();  
}