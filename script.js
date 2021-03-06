const menuBars = document.getElementById('menu-bars')
const overlay = document.getElementById('overlay')
const nav1 = document.getElementById('nav-1')
const nav2 = document.getElementById('nav-2')
const nav3 = document.getElementById('nav-3')
const nav4 = document.getElementById('nav-4')
const nav5 = document.getElementById('nav-5')

const navItems = [nav1, nav2, nav3, nav4, nav5]

function navAnimation(dir1, dir2){
    navItems.forEach((nav, i)=>{

        console.log(`slide-${dir1}-${i+1}`,`slide-${dir2}-${i+1}`)

        nav.classList.replace(`slide-${dir1}-${i+1}`,`slide-${dir2}-${i+1}`)
    } )
}

function toggleNav(){
    // menu close/opne
    menuBars.classList.toggle('change')

    //menu active 
    overlay.classList.toggle('overlay-active')
    if (overlay.classList.contains('overlay-active')){

        //animate in
        // but we cannot replace if class is not there
        // so define a class base class on the main page
        overlay.classList.replace('overlay-slide-left','overlay-slide-right')

        //animate in nav Items
        navAnimation('out','in')
    }
    else{
        //animate out
        overlay.classList.replace('overlay-slide-right','overlay-slide-left')
        //animate out nav Items
        navAnimation('in','out')
    }
}


menuBars.addEventListener('click', toggleNav)
navItems.forEach((nav)=>{
    nav.addEventListener('click', toggleNav)
})


