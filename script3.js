let counter = parseInt(localStorage.getItem('counter')) || 0;
const countEl = document.querySelector('span');

localStorage.setItem('counter', counter);
countEl.textContent = counter;

    const setCount = (counter) => {
        countEl.textContent = counter;
        localStorage.setItem('counter', counter);
    };

    const increase = document.querySelector('.increase');
    increase.addEventListener('click', () => {
        counter += 1;
        setCount(counter);
    });

    const decrease = document.querySelector('.decrease');
    decrease.addEventListener('click', () => {
        counter -= 1;
        setCount(counter);
    });

    const reset = document.querySelector('.reset');
    reset.addEventListener('click', () => {
        counter = 0;
        setCount(counter);
    });