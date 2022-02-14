const POPUP_OPEN = document.querySelector('.modal__open');
const POPUP = document.getElementById('popup');
const POPUP_CONTENT = document.querySelector('.popup__content')
const POPUP_CLOSE = document.querySelector('.popup__close');

POPUP_OPEN.addEventListener('click', function() {
    POPUP.classList.add('open');
})

POPUP_CLOSE.addEventListener('click', function() {
    POPUP.classList.remove('open');
})
