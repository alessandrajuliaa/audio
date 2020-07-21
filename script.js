let song = document.querySelector('#audio');

function voltar(){
    song.currentTime -= 15;
}
function avancar(){
    song.currentTime += 15;
}
function diminuirVel(){
    song.playbackRate -= 0.1;
}
function aumentarVel(){
    song.playbackRate += 0.1;
}
function play(){
    song.play();
}
function pause(){
    song.pause();
}