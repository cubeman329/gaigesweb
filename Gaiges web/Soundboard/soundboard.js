const boom = new Audio();
boom.src = './boom.mp3';

const emotionaldamage = new Audio();
emotionaldamage.src = "./emotionaldamage.mp3"

const bird = new Audio();
bird.src = "./bird.mp3";

const fart = new Audio();
fart.src = "fart.mp3";

const bababooey = new Audio();
bababooey.src = "bababooey.mp3";

const notif = new Audio();
notif.src = "./notif.mp3";

const bruh = new Audio();
bruh.src = "./bruh.mp3";

const heheheha = new Audio();
heheheha.src = "./heheheha.mp3";

const mm = new Audio();
mm.src = './MUSIC MAN.mp3';

const bonk = new Audio();
bonk.src = './bonk.mp3';

const fart3 = new Audio();
fart3.src = './fart3.mp3';

const hwg = new Audio();
hwg.src = './hwg.mp3';

const omg = new Audio();
omg.src = './oh mah gahd.mp3';

const bup = new Audio('./bup.mp3');

let volumeslider = document.getElementById('volumeslider');

function setVolume() {
    boom.volume = volumeslider.value;
    emotionaldamage.volume = volumeslider.value;
    bird.volume = volumeslider.value;
    fart.volume = volumeslider.value;
    bababooey.volume = volumeslider.value;
    notif.volume = volumeslider.value;
    bruh.volume = volumeslider.value;
    bruh.volume = volumeslider.value;
    heheheha.volume = volumeslider.value;
    mm.volume = volumeslider.value;
    bonk.volume = volumeslider.value;
    fart3.volume = volumeslider.value;
    hwg.volume = volumeslider.value;
    omg.volume = volumeslider.value;
    bup.volume = volumeslider.value;
}
