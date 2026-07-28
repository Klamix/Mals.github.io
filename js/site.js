// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
const button = document.getElementById("mybutton")
const reg = document.getElementById("register")

const inputs = reg.querySelectorAll('input');
const name_imp = inputs[0];
const pass_imp = inputs[1];

const friends = document.getElementById('Friends')






button.addEventListener('click', function () {

    const name = name_imp.value;
    const pass = pass_imp.value;
    if (name == "Яна") {
        reg.classList.add("closed");
        setTimeout(() => reg.remove(), 1400);
        friends.classList.add('visible')
    }
});