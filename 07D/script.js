const objRight = document.querySelector('.right')
const objLeft = document.querySelector('.left')
const container = document.querySelector('.container')

objRight.addEventListener('mouseenter',() => { container.classList.add('hover-right') })
objRight.addEventListener('mouseleave',() => { container.classList.remove('hover-right') })

objLeft.addEventListener('mouseenter',() => { container.classList.add('hover-left') })
objLeft.addEventListener('mouseleave',() => { container.classList.remove('hover-left') })