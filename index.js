let casillas = document.querySelectorAll("main")

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

let puntero = true

casillas.forEach(casilla => {
    casilla.addEventListener("click", e => {
        if (e.target.classList.contains("fila1-col1")) {
            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[0][0] = puntero
            console.table(matriz)
            verificaGanador()
        }
        if (e.target.classList.contains("fila1-col2")) {
            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[0][1] = puntero
            console.table(matriz)
            verificaGanador()
        }
        if (e.target.classList.contains("fila1-col3")) {
            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[0][2] = puntero
            console.table(matriz)
            verificaGanador()
        }
        if (e.target.classList.contains("fila2-col1")) {
            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[1][0] = puntero
            console.table(matriz)
            verificaGanador()
        }
        if (e.target.classList.contains("fila2-col2")) {
            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[1][1] = puntero
            console.table(matriz)
            verificaGanador()
        }
        if (e.target.classList.contains("fila2-col3")) {
            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[1][2] = puntero
            console.table(matriz)
            verificaGanador()
        }
        if (e.target.classList.contains("fila3-col1")) {
            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[2][0] = puntero
            console.table(matriz)
            verificaGanador()
        }
        if (e.target.classList.contains("fila3-col2")) {
            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[2][1] = puntero
            console.table(matriz)
            verificaGanador()
        }
        if (e.target.classList.contains("fila3-col3")) {
            e.target.textContent = actualizaPuntero(puntero)
            e.target.classList.add("validaCasilla")
            matriz[2][2] = puntero
            console.table(matriz)
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
    }
}

function verificaPuntero() {
    if (puntero === true) {
        alert("El ganador es O")
    } else {
        alert("El ganador es X")
    }
}
