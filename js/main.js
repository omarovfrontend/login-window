const lockBtn = document.querySelector('.js-lock-btn');
const icon = document.querySelector('i');
const fieldPassword = document.querySelector('.subscribe-form-password');
const fieldName = document.querySelector('.subscribe-form-text');
const jsForm = document.querySelector('.js-form');
const sendBtn = document.querySelector('.subscribe-form-btn');

// вешаем обработчик события кнопку-иконки
lockBtn.addEventListener('click', function() {
    if (icon.classList.contains('fa-lock')) {
        fieldPassword.setAttribute('type', 'text'); // меняю аттрибут type на text
        icon.classList.remove('fa-lock');
        icon.classList.add('fa-unlock-alt');
    } else {
        fieldPassword.setAttribute('type', 'password');
        icon.classList.remove('fa-unlock-alt');
        icon.classList.add('fa-lock');
    }
});

jsForm.addEventListener('submit', formSubmit);

sendBtn.addEventListener('click', formSubmit);

function formSubmit(event) {
    event.preventDefault();

    if ( fieldName.value.length >= 2 && fieldPassword.value.length > 3 && fieldPassword.value.length <= 12 ) {
        alert('Форма отправлена!');
        fieldName.value = '';
        fieldPassword.value = '';
    } else {
        alert('Заполните все поля!');
    }
}
