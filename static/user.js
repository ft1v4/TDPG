const anos = document.querySelectorAll('.ano');

anos.forEach(ano => {
    ano.addEventListener('click', () => {

        let existingOverlay = ano.querySelector('.overlay');
        let btnSim5 = ano.querySelector('#btnS')
        let btnNao5 = ano.querySelector('#btnN')
        if (existingOverlay || btnSim5 || btnNao5) {
            console.log("entrei no if")
            return;
        }
        console.log("Passei do if")


        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        overlay.style.position = 'absolute';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '1';

        const divBTN = document.createElement('form');
        divBTN.style.display = 'flex';
        divBTN.action = '/home'
        divBTN.method = 'post'
        divBTN.style.gap = '10px';

        const btnSim = document.createElement('button');
        btnSim.id = 'btnS'
        btnSim.name = 'SIM'
        btnSim.style.backgroundColor = 'green';
        btnSim.style.color = 'white';
        btnSim.style.width = '100px';
        btnSim.style.height = '30px';
        btnSim.textContent = 'SIM';
        btnSim.style.cursor = 'pointer'

        const btnNao = document.createElement('button');
        btnNao.id = 'btnN'
        btnNao.name = 'NAO'
        btnNao.style.backgroundColor = 'red';
        btnNao.style.color = 'white';
        btnNao.style.width = '100px';
        btnNao.style.height = '30px';
        btnNao.textContent = 'NÃO';
        btnNao.style.cursor = 'pointer'

        divBTN.appendChild(btnSim);
        divBTN.appendChild(btnNao);
        overlay.appendChild(divBTN);
        ano.style.position = 'relative';
        ano.appendChild(overlay);

        btnSim.addEventListener('click', () => {
            let ovo = ano.querySelector('.overlay')
            console.log(ovo)
            ovo.style.display = 'none'
            let verificaCheck = ano.querySelector('#check')
            let verificaCheck2 = ano.querySelector('#not')
            if (verificaCheck || verificaCheck2) {
                return
            }
            const checkmark = document.createElement('div');
            checkmark.id = 'check'
            checkmark.textContent = '✔';
            checkmark.style.fontSize = '100px';
            checkmark.style.color = 'green';
            checkmark.style.position = 'absolute';
            checkmark.style.top = '50%';
            checkmark.style.left = '50%';
            checkmark.style.transform = 'translate(-50%, -50%)';
            ano.appendChild(checkmark);
        });


        btnNao.addEventListener('click', () => {
            let ovo = ano.querySelector('.overlay')
            ovo.style.display = 'none'
            let verificaCheck2 = ano.querySelector('#check')
            let verificaCheck = ano.querySelector('#not')
            if (verificaCheck || verificaCheck2) {
                return
            }
            const crossmark = document.createElement('div');
            crossmark.id = 'not'
            crossmark.textContent = '❌';
            crossmark.style.fontSize = '50px';
            crossmark.style.color = 'red';
            crossmark.style.position = 'absolute';
            crossmark.style.top = '50%';
            crossmark.style.left = '50%';
            crossmark.style.transform = 'translate(-50%, -50%)';
            ano.appendChild(crossmark);
        });
    });
});


