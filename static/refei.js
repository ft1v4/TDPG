const data = document.getElementById('dataR')
const div = document.getElementById('divDIAS')

function validar(){

    const dataNova = new Date(data.value)
    console.log(dataNova)

    const dataVerificar = dataNova.getDay()

    if(dataVerificar !=0){
        alert('COLOCA SEGUNDA SEU FILHO DE UMA PUTA')
    }else{
        div.style.display = 'block'
    }
}