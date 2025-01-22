//hamburger menu script
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');
    const navContainer = document.querySelector('.nav-container');
    
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navList.classList.toggle('nav-hidden');
        navContainer.classList.toggle('collapsed');
    });
});
//animation:
const scroller = document.querySelector('.scroller');
addAnimation();
// if (!window.matchMedia( "(prefers-reduced-motion: reduce)").matches){
//     addAnimation();
// }
function addAnimation(){
    scroller.setAttribute('data-animated',true);
    const scrollerContent = scroller.querySelector('.scroller-content');
    const scrollerItems = Array.from(scrollerContent.children);
    scrollerItems.forEach(item =>{
        const duplicate = item.cloneNode(true);
        duplicate.setAttribute('aria-hidden',true);
        scrollerContent.appendChild(duplicate);
    })
}

const projBtn = document.querySelector('.projectsButton');
projBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const projectsSection = document.querySelector('.projects');
    if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
});
// end of hamburger menu script

//Project section script
const buttons = document.querySelectorAll('.projectsView button');
buttons.forEach(btn => btn.addEventListener('click', function(e){
    buttons.forEach(btn => {
        (btn!==e.currentTarget) ? btn.classList.remove('active') : null;
    })
    this.classList.add('active');
}));