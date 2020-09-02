// Toggle The Menu
const menuToggle = () => {
    document.querySelector('header nav').classList.toggle('active');
}

// Hide The Logo During The Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        document.querySelector('header .logo').style.opacity = '0';
    } else {
        document.querySelector('header .logo').style.opacity = '1';
    }
})

// JQuery Smoooth Scroll
$(document).ready(() => {
    $('header nav ul li a').on('click', function (e) {
        e.preventDefault()
        if (this.hash !== '') {
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })
})