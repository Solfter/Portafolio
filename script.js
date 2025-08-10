// Menú responsive
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Texto animado en el hero
const frases = [
    "Apasionado por los datos",
    "Transformo datos en decisiones",
    "Convertir datos en valor es mi misión",
    "Interpretando datos para un futuro mejor"
];
let fraseIndex = 0;
let letraIndex = 0;
let borrando = false;

function escribirTexto() {
    const typewriter = document.getElementById("typewriter");
    const frase = frases[fraseIndex];

    if (!borrando && letraIndex <= frase.length) {
        typewriter.textContent = frase.substring(0, letraIndex);
        letraIndex++;
        setTimeout(escribirTexto, 100);
    } else if (borrando && letraIndex >= 0) {
        typewriter.textContent = frase.substring(0, letraIndex);
        letraIndex--;
        setTimeout(escribirTexto, 50);
    } else {
        borrando = !borrando;
        if (!borrando) {
            fraseIndex = (fraseIndex + 1) % frases.length;
        }
        setTimeout(escribirTexto, 500);
    }
}
escribirTexto();
