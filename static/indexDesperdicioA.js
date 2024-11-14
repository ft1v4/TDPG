const desperdicio = document.getElementById('desperdicioA')
const home = document.querySelector('.home')

desperdicio.addEventListener('click',()=>{
    window.location ='/desperdicioAluno'
})

home.addEventListener('click',()=>{
    alert('taes')
    window.location = '/home'
})
