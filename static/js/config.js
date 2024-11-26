const toggleSwitch = document.getElementById('toggleSwitch');

toggleSwitch.addEventListener('change', () => {
    if (toggleSwitch.checked) {
        console.log('Ligado')
    } else {
        console.log('Desligado');
    }
});

const configButton = document.getElementById('config');
const configDiv = document.querySelector('.config');

configButton.addEventListener('click', () => {
    configDiv.classList.toggle('show');
});