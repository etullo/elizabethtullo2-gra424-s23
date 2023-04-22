document.querySelector('.dropdown').onclick = function (e) {
    var menu =document.querySelector('.menu');
    var dropdown = document.querySelector('.dropdown');

    menu.classList.toggle('is-active');
    dropdown.classList.toggle('is-active');

    e.preventDefault();
}