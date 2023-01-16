let frame = document.getElementById('frame');
document.addEventListener('keydown', (e) => {
    if (e.key == 'End') {
        togglefullscreen
    }
});

function togglefullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen;
    }
}
