// ch02-2 js 예시
let count =0;
document.querySelector('button').addEventListener('click',
    () => {
    document.querySelector('span').innerText = ++count;
    })