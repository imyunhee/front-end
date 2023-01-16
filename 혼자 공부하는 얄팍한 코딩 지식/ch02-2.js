let count =0;
document.querySelector('button').addEventListener('click',
    () => {
    document.querySelector('span').innerText = ++count;
    })