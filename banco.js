let botonIngresos = document.getElementById("boton-ingresos")
let botonGastos = document.getElementById("botonGastos")
let inputMonto = document.getElementById("inputMonto")
let inputMotivo = document.getElementById("inputMotivo")
let registrar = document.getElementById("registrar")
let agregarHistoria = document.getElementById("prueba")
let mensaje = document.getElementById("mensaje")
let disponible = document.getElementById("disponible")
let ingresos = document.getElementById("ingresos")
let gastos = document.getElementById("gastos")


botonIngresos.addEventListener("click", () => {
    const usuarioIngresos = inputMonto.value
    const usuarioMotivo = inputMotivo.value
    
    if (usuarioIngresos === "" || usuarioMotivo === "") {
        mensaje.textContent = "Ingrese su Ingresos/Gastos y su Motivo"
    } else {
        mensaje.innerHTML = "<p></p>"
        let div = document.createElement("div")
        div.classList.toggle("opciones")
        
        let div3 = document.createElement("div")
        div3.classList.toggle("opciones-monto")
        div.style.color = "#10b981"
        div.style.fontSize = 10
        
        div.innerHTML = 
        `<div class="opciones">
        <h5>${usuarioMotivo}</h5>
        </div>
        <div class="opciones-monto">
        <p>+ $ ${usuarioIngresos}</p>
        </div>`
        
        agregarHistoria.appendChild(div)

        let ingresosV2 = Number(usuarioIngresos)
        let total = Number(ingresos.textContent)
        let totalV2 = total + ingresosV2
        ingresos.textContent = totalV2.toFixed(2)

        let totalIngresos = Number(ingresos.textContent)
        let totalGastos = Number(gastos.textContent)
        let saldo = totalIngresos - totalGastos
        disponible.textContent = saldo.toFixed(2)
    }
    
})

botonGastos.addEventListener("click", () => {
    const usuarioGasto = inputMonto.value
    const usuarioMotivo = inputMotivo.value
    
    if (usuarioGasto === "" || usuarioMotivo === "") {
        mensaje.textContent = "Ingrese su Ingresos/Gastos y su Motivo"
        
    } else {
        mensaje.innerHTML = "<p></p>"
        
        let div = document.createElement("div")
        div.classList.toggle("opciones")
        div.style.color = "#94a3b8"
        
        
        let div3 = document.createElement("div")
        div3.classList.toggle("opciones-monto")
        div.style.color = "#ef4444"
        
        div.innerHTML = 
        `<div class="opciones">
        <h5>${usuarioMotivo}</h5>
        </div>
        <div class="opciones-monto">
        <p> - $ ${usuarioGasto}</p>
        </div>`
        
        agregarHistoria.appendChild(div)

        let ingresosV2 = Number(usuarioGasto)
        let total = Number(gastos.textContent)
        let totalV2 = total + ingresosV2
        gastos.textContent = totalV2.toFixed(2)

        let totalIngresos = Number(ingresos.textContent)
        let totalGastos = Number(gastos.textContent)
        let saldo = totalIngresos - totalGastos
        disponible.textContent = saldo.toFixed(2)
    }
} )
