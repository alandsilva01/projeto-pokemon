const pika = document.querySelector('.pika');
const poke = document.querySelector('.poke');

const jump = () => {
    pika.classList.add('jump');

    setTimeout(() => {
        pika.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {

    const pokePosition = poke.offsetLeft;
    const pikaPosition = +window.getComputedStyle(pika).bottom.replace('px', '');

    console.log(pikaPosition);

    if (pokePosition <= 200 && pokePosition > 0 && pikaPosition < 20) {

        poke.style.animation = 'none';
        poke.style.left = `${pokePosition}px`;

        pika.style.animation = 'none';
        pika.style.bottom = `${pikaPosition}px`;

        pika.src = './imagens/game-over.gif';
        pika.style.width = '150px'
        pika.style.marginLeft = '95px'
        pika.style.bottom = '-18px'
        
        poke.style.display = "none";

        clearInterval(loop)
    }

}, 10);

document.addEventListener('keydown', jump);