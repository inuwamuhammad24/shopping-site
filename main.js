class Slider {
    constructor() {
        this.SliderContainer = document.querySelector('.slider')
        this.counter = 1
        this.setSlides()
    }

    setSlides() {
        setInterval(() => {
            if(this.counter > 9) this.counter = 0
            this.SliderContainer.style.right = `${this.counter * 100}%`
            this.counter++
            console.log(this)
        }, 7000);
    }
}

class Nav {
    constructor() {
        this.nav = document.querySelector('.signup-menu')
        this.menuIcon = document.querySelector('.categories-menu')
        this.menuOverlay = document.querySelector('.menu-overlay')
        this.events()
    }

    // events
    events() {
        this.menuIcon.addEventListener('click', () => this.openMenu())
        this.menuOverlay.addEventListener('click', () => this.closeOverlay())
    }

    // methods
    openMenu() {
        this.nav.style.right = '0'
        this.menuOverlay.style.display = 'block'
        this.menuOverlay.style.opacity = '1'
    }

    closeOverlay() {
        this.nav.style.right = '-999px'
        this.menuOverlay.style.opacity = '0'
        this.menuOverlay.style.display = 'none'
    }
}


// account settings in the admin page
class AccountSett {
    constructor () {
        this.icon = document.querySelector('.admin-nav-pic-icon')
        this.dropDown = document.querySelector('.drop-down')
        this.modal = document.querySelector('.account-modal')
        this.events()
    }

    // events
    events() {
        this.icon.addEventListener('click', () => {
            this.modal.classList.toggle('fadeIn')
            this.dropDown.classList.toggle('rotate')
        })
    }




    // methods
}


// admin sidebar effect
class AdminSidebar {
    constructor() {
        // main sidebar container selector
        this.mainSide = document.querySelector('.admin-sidebar-container')
        this.modal = document.querySelector('.admin-modal')
        this.adminMenu = document.querySelector('.admin-menu')
        this.sidebarDropDown = document.querySelectorAll('.nav-div')
        this.events()
    }

    // events
        events() {
            this.adminMenu.addEventListener('click', () => this.openSidebar())
            this.modal.addEventListener('click', () => this.closeSidebar())
            this.sidebarDropDown.forEach(elem => elem.addEventListener('click', (e) => {
                this.slideDown(elem, e)
            }))
        }



    // methods

    openSidebar() {
        this.adminMenu.style.transform = "rotate(180deg)"
        this.modal.style.display = 'block'
        this.modal.style.opacity = '1'
        this.mainSide.style.left = '0'
    }

    closeSidebar() {
        this.adminMenu.style.transform = "rotate(0)"
        this.modal.style.opacity = '0'
        this.modal.style.display = 'none'
        this.mainSide.style.left = '-100%'
    }

    slideDown(elem, e) {
        e.preventDefault()
        elem.nextElementSibling.classList.toggle('slideIn')
        if (elem.children[1].classList.contains('drop-icon')) {
            elem.children[1].classList.toggle('rotate1')
        }
    }
}


if (document.querySelector('.slider')) new Slider()
if (document.querySelector('.signup-menu')) new Nav() 
new AccountSett()
new AdminSidebar()
