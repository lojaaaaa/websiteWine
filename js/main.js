const window_1 = document.querySelector('#window_1')
const openWindow_1 = document.querySelector('#open_1')
const closeWindow_1 = document.querySelector('#close_1')

const window_2 = document.querySelector('#window_2')
const openWindow_2 = document.querySelector('#open_2')
const closeWindow_2 = document.querySelector('#close_2')


openWindow_1.addEventListener('click', e =>{
    e.preventDefault()
    console.log(1)
    window_1.classList.add('active')
})
closeWindow_1.addEventListener('click', e =>{
    console.log(2)
    e.preventDefault()
    window_1.classList.remove('active')
})



openWindow_2.addEventListener('click', e =>{
    e.preventDefault()
    console.log(1)
    window_2.classList.add('active')
})
closeWindow_2.addEventListener('click', e =>{
    console.log(2)
    e.preventDefault()
    window_2.classList.remove('active')
})