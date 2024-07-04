let valorCorrecto = '5555'
let idSofi= '817475'
let idJuli= '913911'
let test1 = document.getElementById('test')
let card = document.getElementById("cardMedico")

const test=()=>{
    let codigoCorrecto = document.getElementById("codigo").value
    let nombrePaciente = document.getElementById("nombre").value
    let idMedico = document.getElementById("idMedico").value
    console.log(codigoCorrecto)
    console.log(nombrePaciente)
    if(codigoCorrecto === valorCorrecto){
        card.style.display="none"
        if(idMedico === idSofi){
            test1.innerHTML='Bienvenida Dra Mofia'
        }
        else if(idMedico === idJuli){
            test1.innerHTML='Bienvenida Dra Alegria'
        }
    }
 }