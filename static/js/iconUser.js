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

        overlay.appendChild(img);
        
        document.body.appendChild(overlay);

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                document.body.removeChild(overlay);
            }
        });
    });
}
