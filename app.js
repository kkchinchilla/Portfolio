const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Scroll Animation

const boxes =  document.querySelectorAll('.work__container')

document.body.addEventListener('scroll', checkBoxes)

// checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight/ 3.5 * 3;
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top 

        if(boxTop < triggerBottom ){
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}