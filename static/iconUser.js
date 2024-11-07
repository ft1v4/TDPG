const user = document.getElementById('user');

if (user) {
    user.addEventListener('click', () => {
        console.log('TESET');

        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        overlay.style.display = 'flex';
        overlay.style.alignItems = 'center';
        overlay.style.justifyContent = 'center';
        overlay.style.zIndex = '999';
        overlay.style.flexDirection = 'column'


        const img = user.cloneNode();
        img.style.width = '150px';
        img.style.height = '150px';

        const sair = document.createElement('button')
        sair.id = 'exitConta'
        sair.textContent = 'Sair da conta'
        sair.style.backgroundColor = '#27AE60'
        sair.style.padding = '10px'
        sair.style.borderRadius = '8px'
        sair.style.border = 'none'
        sair.style.display = 'flex'
        sair.style.alignItems = 'center'
        sair.style.justifyContent = 'center'
        sair.style.marginTop = '30px'
        sair.style.cursor = 'pointer'


        sair.addEventListener('click', () => {
            window.location = '/'
        })


        overlay.appendChild(img);
        overlay.appendChild(sair)


        document.body.appendChild(overlay);

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
    });
}
