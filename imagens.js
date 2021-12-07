//Arquivo sobre as imagens e sons do Jogo

let imagemEstrada;
let imagemPersonagem;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let trilhaSonora;
let somColisao;
let somPonto;

function preload (){
  imagemEstrada = loadImage("imagens/estrada.png");
  imagemPersonagem = loadImage("imagens/lulu.png");
  imagemCarro = loadImage("imagens/carro-1.png");
  imagemCarro2 = loadImage("imagens/carro-2.png");
  imagemCarro3 = loadImage("imagens/carro-3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3, imagemCarro, imagemCarro2, imagemCarro3];
  trilhaSonora = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav")
}