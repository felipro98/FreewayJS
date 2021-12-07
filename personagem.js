//Arquivo sobre o Personagem do Jogot yPersonagem = 366;
let xPersonagem = 90;
let yPersonagem = 366;
let colisao = false;
let meusPontos = 0;

function mostraPersonagem(){
  image(imagemPersonagem, xPersonagem, yPersonagem, 30, 30);
}

function movimentaPersonagem(){
  if (keyIsDown(UP_ARROW)){
    yPersonagem -= 3;
  }
  if (podeSeMover()){
  if (keyIsDown(DOWN_ARROW)){
    yPersonagem += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i ++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xPersonagem, yPersonagem, 15)
    if (colisao){
      voltaPersonagemParaPosicaoInicial();
      somColisao.play();
      if(pontosMaiorQueZero()){
      meusPontos -= 1;
      }
    }
  }
}

function voltaPersonagemParaPosicaoInicial(){
  yPersonagem = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 60));
  text(meusPontos, width / 5, 27);
}

function marcaPonto(){
  if (yPersonagem < 15){
    meusPontos += 1;
    somPonto.play();
    voltaPersonagemParaPosicaoInicial();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0
}

function podeSeMover(){
  return yPersonagem < 366;
}