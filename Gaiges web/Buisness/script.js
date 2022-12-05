const backgroundAudio = document.getElementById('bruh');

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState == 'visible') {
        backgroundAudio.play();
    } else {
        backgroundAudio.pause();
    }
});

const anchor = document.querySelectorAll('a');
anchor.target = "_blank";