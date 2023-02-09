const nav = document.querySelector('.navegacion');

//registrar un evento
nav.addEventListener('mouseenter', () => {
    console.log('posicionándome');
    nav.style.backgroundColor = 'transparent';
})
nav.addEventListener('mouseout', () => {
    console.log('Entrando en la navegación');
    nav.style.backgroundColor = 'white';
})

//mousedown = similar al click 
//mouseup= cuando se suelta el click
//dblclick = doble click