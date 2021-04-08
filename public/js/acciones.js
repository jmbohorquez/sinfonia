//Manejo de la reproducción de los videos de la cabecera
const videoContainer1 = document.getElementById('video-container-1');
const video1 = document.getElementById( 'video-1' );
const videoContainer2 = document.getElementById('video-container-2');
const video2 = document.getElementById('video-2');


videoContainer1.style.zIndex = '1';
video1.play();

videoContainer2.style.zIndex = '0';
video2.autoplay = false;

video1.addEventListener( 'ended', function(){
    videoContainer1.style.zIndex = '0';
    videoContainer2.style.zIndex = '1';
    video2.play();
} );

video2.addEventListener( 'ended', function(){
    videoContainer2.style.zIndex = '0';
    videoContainer1.style.zIndex = '1';
    video1.play();
} );