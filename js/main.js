let valorCorrecto = '5555'
let card = document.getElementById("cardMedico")

const test=()=>{
    let codigoCorrecto = document.getElementById("codigo").value
    let nombrePaciente = document.getElementById("nombre").value
    console.log(codigoCorrecto)
    console.log(nombrePaciente)
    if(codigoCorrecto === valorCorrecto){
        card.style.display="none"
    }
 }