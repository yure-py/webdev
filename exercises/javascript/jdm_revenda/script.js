const frm = document.querySelector("form")
const resp = document.querySelector("pre")
const carros = []

frm.addEventListener("submit", (e) => {
    e.preventDefault()                      // Evitar enviar e dar o reload
    
    const modelo = frm.inModelo.value       // extração do valor
    const preco = Number(frm.inPreco.value)
    carros.push({modelo, preco})
    
    frm.inModelo.value = ""                 // limpar os campos
    frm.inPreco.value = ""
    
    inModelo.focus()

    // dispara um evento de click em btListar (equivale a um click no botão na página)
    frm.btListar.dispatchEvent(new Event("click"))
})
frm.btListar.addEventListener("click", () => {
    
})
