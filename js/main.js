let valorCorrecto = '780201'
let idSofi= '817475'
let idJuli= '913911'
let test1 = document.getElementById('test')
let card = document.getElementById("cardMedico")
let card2 = document.getElementById("cardMedica2")

const test=()=>{
    let codigoCorrecto = document.getElementById("codigo").value
    let nombrePaciente = document.getElementById("nombre").value
    let idMedico = document.getElementById("idMedico").value
    console.log(codigoCorrecto)
    console.log(nombrePaciente)
    if(codigoCorrecto === valorCorrecto){
        card.style.display="none"
        card2.style.display="flex"
        if(idMedico === idSofi){
            test1.innerHTML='Bienvenida Dra Sofia'
        }
        else if(idMedico === idJuli){
            test1.innerHTML='Bienvenida Dra Julia'
        }
    }
 }