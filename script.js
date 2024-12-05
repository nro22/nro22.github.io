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
