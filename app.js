const div = document.createElement('div');
div.classList.add('container');
document.body.appendChild(div);

function grid16x() {
    for (let i = 0; i < 256; i++) {
        // Cuadricula 16 x 16
        const square = document.createElement('div');
        square.classList.add('square');
        const container = document.querySelector('.container');
        container.appendChild(square);
        // Eventos del ratón
        square.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'blue';
        });
    }
}

function grid32x() {
    for (let i = 0; i < 1024; i++) {
        const square32 = document.createElement('div');
        square32.classList.add('square32');
        const container = document.querySelector('.container');
        container.style.setProperty('height', '320');
        container.style.setProperty('width', '320');
        container.appendChild(square32);
        square32.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = 'yellow';
        });
    }
}

// Botón para cambiar cuadricula
const btn = document.createElement('button');
btn.classList.add('change');
btn.textContent = 'Change';
document.body.appendChild(btn);
btn.addEventListener('click', () => {
    let user = prompt('How many squares do you want per side?');
    if (user === '16x16') {
        const container = document.querySelector('.container');
        container.innerHTML = '';
        grid16x();
    } else if (user === "32x32") {
        const container = document.querySelector('.container');
        container.innerHTML = '';
        grid32x();
    }
});