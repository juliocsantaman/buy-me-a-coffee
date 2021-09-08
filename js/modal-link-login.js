const linkLogin = document.getElementById('link-login');
const modalLinkLogin = document.getElementById('modal-link-login');
const closeIcon = document.getElementById('close-icon');

linkLogin.addEventListener('click', function() {
    modalLinkLogin.classList.toggle('inactive-modal-link-login');
    modalLinkLogin.classList.toggle('active-modal-link-login');
});

closeIcon.addEventListener('click', function() {
    modalLinkLogin.classList.toggle('inactive-modal-link-login');
    modalLinkLogin.classList.toggle('active-modal-link-login');
});