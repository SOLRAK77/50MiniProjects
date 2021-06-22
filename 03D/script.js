const open = document.getElementById('open')
const close = document.getElementById('close')
const main = document.getElementById('main')

open.addEventListener('click',() => main.classList.add('show-nav'))
close.addEventListener('click',() => main.classList.remove('show-nav'))