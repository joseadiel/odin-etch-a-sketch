const div = document.createElement('div');
div.classList.add('container');
document.body.appendChild(div);

for (let i = 0; i < 256; i++) {
    // Cuadricula 16 x 16
    const square = document.createElement('div');
    square.classList.add('square');
    const container = document.querySelector('.container');
    container.appendChild(square);
    // Eventos del ratón
    square.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'red';
    });
}