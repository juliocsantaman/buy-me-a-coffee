const choose = document.getElementById('choose');
const yourLink = document.getElementById('your-link');
const creator = document.getElementById('creator');
const btnContinue = document.getElementById('btn-continue');

creator.addEventListener('click', function() {
    choose.classList.toggle('inactive-section');
    yourLink.classList.toggle('inactive-section');
});

btnContinue.addEventListener('click', function() {
    location.href = "../pages/select-payment-mode.html";
});