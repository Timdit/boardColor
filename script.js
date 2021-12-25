const board = document.querySelector('.board');

function randColor() {
    let r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256);
        return '#' + r.toString(16) + g.toString(16) + b.toString(16);
}
randColor()

// console.log(randColor());


console.log(document);

let number = 500;

for (let i = 0; i < number; i++) {
    let div = document.createElement('div');

    div.classList.add('box');

    div.addEventListener('mouseover', () => {
        /* Событие наведения мыши */
        div.style.background = randColor();
        div.style.boxShadow = '0 0 2px ranfColor()';
    })

    div.addEventListener('mouseleave', () => {
        /* Событие когда мышь уводим */
        div.style.background = '#1d1414';
        div.style.boxShadow = '0 0 2px #000';
    })

    board.appendChild(div);
}