const btng = document.getElementById('btng');
const form1 = document.getElementById('form1');
const btnfechar = document.getElementById('btnfechar');
const boxCOM = document.querySelector('.boxCOM');
const cardapioBTN = document.getElementById('cardapio')
const btnAlterar = document.getElementById('ioio')

cardapioBTN.addEventListener('click', () => {
    window.location = '/agenda'
})

btnAlterar.addEventListener('click', () => {
    window.location = '/gerar-agenda'
})

function previewImage(event) {
    const imagePreview = document.getElementById('image-preview');
    const boxIMAGE = document.querySelector('.boxIMAGE');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
            boxIMAGE.style.display = 'block';
        }

        reader.readAsDataURL(file);
    } else {
        imagePreview.style.display = 'none';
        boxIMAGE.style.display = 'none';
    }
}

function areFieldsFilled() {
    const imageInput = document.getElementById('file-input');
    const dataInicial = document.querySelector('input[name="data_inicial"]');
    const dataFinal = document.querySelector('input[name="data_final"]');


    return imageInput.files.length > 0 && dataInicial.value && dataFinal.value;
}

form1.addEventListener('submit', (e) => {
    e.preventDefault()


    if (areFieldsFilled()) {
        boxCOM.classList.toggle('boxCOM_flex')
    } else {
        boxCOM.remove()
    }
}
)

btnfechar.addEventListener('click', () => {
    boxCOM.remove('boxCOM_flex')

})


