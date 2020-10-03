// sticky navigation effect start
let nav = document.querySelector('.header-container')
let placeholder = document.querySelector('.placeholder')


window.onscroll = function() {
    let navoffset = nav.offsetTop
    let scrollPos = window.scrollY

    if (scrollPos > navoffset) {
        nav.classList.add('fixed')
    } else {
        nav.classList.remove('fixed')
    }
}


// handling the photo animation
let imgContainer = document.querySelector('.slide')
let nextBackground = document.querySelector('.next')
let previousBackground = document.querySelector('.previous')
let url = [
    "url('images/img-2.jpg')",
    "url('images/img-4.jpg')",
    "url('images/img-5.jpg')",
    "url('images/img-9.jpg')",
    "url('images/img-10.jpg')",
    "url('images/img-11.jpg')",
    "url('images/img-12.jpg')",
    "url('images/img-13.jpg')",
    "url('images/img-14.jpg')"
]

let urlCount = 0

function slide() {
    if (urlCount == url.length) urlCount = 0
        imgContainer.style.backgroundImage = `${url[urlCount]}`
        urlCount++
}

previousBackground.addEventListener('click', function() {
    if (url > 1) urlCount--
    console.log(urlCount)
    slide() 
})
nextBackground.addEventListener('click', () => {
    if (urlCount < url.length) urlCount++
    console.log(urlCount)
    slide()
})



setInterval(slide, 10000)