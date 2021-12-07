//Arquivo sobre os carros do Jogo

let xCarros = [550, 550, 550, 550, 550, 550];
let yCarros = [45, 100, 153, 210, 263, 318];
let velocidadeCarros = [2, 3, 2.5, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let alturaCarro = 40;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function resetaPosicaoDoCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarro){
  return xCarro < - 50;
}