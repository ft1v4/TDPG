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
    window.location = '/home'
})