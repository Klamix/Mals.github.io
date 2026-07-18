// 1. Находим нашу кнопку в документе по её id
const button = document.querySelectorAll(".menu-btn");

button.forEach(button => {
    button.addEventListener('click', () => {
        window.location.href = button.getAttribute('data-url');
    })
})