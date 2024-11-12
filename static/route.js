function mostrarAnoInput() {
    var alunoRadio = document.getElementById("alunoRadio");
    var anoInput = document.getElementById("anoInput");

    // Verifica se o radio de "Aluno" está marcado
    if (alunoRadio.checked) {
        anoInput.style.display = "block"; // Mostra o campo de ano
    } else {
        anoInput.style.display = "none";  // Oculta o campo de ano
    }
}

const btn = document.getElementById('btn')
btn.addEventListener('click', ()=>{
    var alunoRadio = document.getElementById("alunoRadio");
    var funcionarioRadio = document.getElementById("funcionarioRadio");
    var admRadio = document.getElementById("admRadio");

    if (alunoRadio.checked) {
        window.location = '/home'
    }if(funcionarioRadio.checked){
        alert('NAO FUNCIONA ISSO')
    }if(admRadio.checked){
        window.location = '/funcionario'
    }

    
})