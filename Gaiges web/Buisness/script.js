const backgroundAudio = document.getElementById('bruh');
backgroundAudio.volume = 0.5
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState == 'visible') {
        backgroundAudio.play();
    } else {
        backgroundAudio.pause();
    }
});


const anchor = document.getElementById('nl');
anchor.target = '_blank';
let inf = document.getElementById('info');
let info = document.getElementById('infobtn');
let untitled = document.getElementById('nuk');