let casillas = document.querySelectorAll("main")

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

let puntero = true
let contador = 0
casillas.forEach(casilla => {
    casilla.addEventListener("click", e => {
        if (e.target.classList.contains("fila1-col1")) {
            contador = contador + 1

            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[0][0] = puntero

            verificaGanador()
        }
        if (e.target.classList.contains("fila1-col2")) {
            contador = contador + 1
            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[0][1] = puntero

            verificaGanador()
        }
        if (e.target.classList.contains("fila1-col3")) {
            contador = contador + 1
            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[0][2] = puntero

            verificaGanador()
        }
        if (e.target.classList.contains("fila2-col1")) {
            contador = contador + 1
            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[1][0] = puntero

            verificaGanador()
        }
        if (e.target.classList.contains("fila2-col2")) {
            contador = contador + 1
            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[1][1] = puntero

            verificaGanador()
        }
        if (e.target.classList.contains("fila2-col3")) {
            contador = contador + 1
            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[1][2] = puntero

            verificaGanador()
        }
        if (e.target.classList.contains("fila3-col1")) {
            contador = contador + 1
            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[2][0] = puntero

            verificaGanador()
        }
        if (e.target.classList.contains("fila3-col2")) {
            contador = contador + 1
            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[2][1] = puntero

            verificaGanador()
        }
        if (e.target.classList.contains("fila3-col3")) {
            contador = contador + 1
            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[2][2] = puntero

            verificaGanador()
        }
    })
})

function actualizaPuntero(x) {
    if (x === true) {
        puntero = !puntero
        return "X"
    } else {
        puntero = !puntero
        return "O"
    }
}

function verificaGanador() {
    console.log(contador)
    if (
        (matriz[0][0] === matriz[0][1]) & (matriz[0][1] === matriz[0][2]) ||
        (matriz[1][0] === matriz[1][1]) & (matriz[1][1] === matriz[1][2]) ||
        (matriz[2][0] === matriz[2][1]) & (matriz[2][1] === matriz[2][2]) ||
        (matriz[0][0] === matriz[1][0]) & (matriz[1][0] === matriz[2][0]) ||
        (matriz[0][1] === matriz[1][1]) & (matriz[1][1] === matriz[2][1]) ||
        (matriz[0][2] === matriz[1][2]) & (matriz[1][2] === matriz[2][2]) ||
        (matriz[0][0] === matriz[1][1]) & (matriz[1][1] === matriz[2][2]) ||
        (matriz[0][2] === matriz[1][1]) & (matriz[1][1] === matriz[2][0])
    ) {
        setTimeout(() => {
            verificaPuntero()
            location.reload()
        }, 500)
    } else {
        if (contador === 9) {
            alert("El juego resultó en un empate")
            location.reload()
        }
    }
}

function verificaPuntero() {
    if (puntero === true) {
        alert("El ganador es O")
    } else {
        alert("El ganador es X")
    }
}
function lanzarConfeti() {
    confetti({
        particleCount: 100, // Número de partículas
        spread: 70, // Ángulo de expansión del confeti
        origin: { x: 0.5, y: 0.5 }, // Posición desde donde sale el confeti
        colors: ["#ff0a54", "#ff477e", "#ff7096", "#ff85a1", "#fbb1bd"],
    })
}
