
const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    })
})

const observer2 = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if (entry.isIntersecting){
            entry.target.classList.add('showPill')
        }
    })
})

const menuLinks = document.getElementById('nav-links');


const openMenu = () =>{
    if(menuLinks.style.display === 'none'){
        menuLinks.style.display = 'flex'
    }else{
        menuLinks.style.display = 'none'
    }
}

menuLinks.addEventListener('click', (e) => {
    if(e.target.classList.contains('link')) {
        openMenu();
    }
  });

const hiddenCards = document.querySelectorAll('.hidden')
hiddenCards.forEach((el) => observer1.observe(el))

const hiddenSkillPills = document.querySelectorAll('.hiddenPill')
hiddenSkillPills.forEach((el) => observer2.observe(el))