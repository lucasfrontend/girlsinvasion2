let cursor = document.getElementsByClassName('cursor');

// cursor code
document.addEventListener('mousemove', (e) => {
    cursor[0].setAttribute("style", "top:" + (e.pageY - 15) + "px; left:" + (e.pageX - 15) + "px");
})
document.addEventListener('click', (e) => {
    cursor[0].classList.add('expand');
    setTimeout(() => {
        cursor[0].classList.remove('expand');
    }, 500)
})