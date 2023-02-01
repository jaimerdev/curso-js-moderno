const encabezado = document.querySelector('.contenido-hero h1').textContent;

// console.log(encabezado.innerText);//En caso de ocultar el contenido con CSS - visibility: hidden; no encuentra el código
// console.log(encabezado.textContent);//Sí encuentra el texto oculto
// console.log(encabezado.innerHTML);// Se trae el HTML


document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading';

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'