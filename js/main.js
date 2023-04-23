const window_1 = document.querySelector('#window_1')
const openWindow_1 = document.querySelector('#open_1')
const closeWindow_1 = document.querySelector('#close_1')
const body = document.querySelector('#body')
const html = document.querySelector('html')
const window_2 = document.querySelector('#window_2')
const openWindow_2 = document.querySelector('#open_2')
const closeWindow_2 = document.querySelector('#close_2')


openWindow_1.addEventListener('click', e =>{
    e.preventDefault()
    console.log(1)
    window_1.classList.add('active')
    body.classList.add('scroll__hidden')
    html.classList.add('scroll__padding')
})
closeWindow_1.addEventListener('click', e =>{
    console.log(2)
    e.preventDefault()
    window_1.classList.remove('active')
    body.classList.remove('scroll__hidden')
    html.classList.remove('scroll__padding')
})



openWindow_2.addEventListener('click', e =>{
    e.preventDefault()
    console.log(1)
    window_2.classList.add('active')
    body.classList.add('scroll__hidden')
    html.classList.add('scroll__padding')
})
closeWindow_2.addEventListener('click', e =>{
    console.log(2)
    e.preventDefault()
    window_2.classList.remove('active')
    body.classList.remove('scroll__hidden')
    html.classList.remove('scroll__padding')
})



const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors){
    anchor.addEventListener('click', e =>{
        e.preventDefault()
        const blockId = anchor.getAttribute('href')
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })

}

