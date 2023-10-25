const vid = document.getElementById('video-bg');
const videos = ['marte.mp4'];
let indiceVideoAtual = 0;

function trocarVideoAutomaticamente() {
    vid.src = "./video/" + videos[indiceVideoAtual];
    indiceVideoAtual = (indiceVideoAtual + 1) % videos.length;
}

trocarVideoAutomaticamente(); // Chame a função uma vez para começar
setInterval(trocarVideoAutomaticamente, 5000); // Trocar a cada 5 segundos (5000 milissegundos)
