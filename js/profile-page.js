const btnUpload = document.getElementById('btnUpload');
const btnSearch = document.getElementById('btnSearch');
const upload = document.getElementById('upload');
const search = document.getElementById('search');

btnUpload.addEventListener('click', function() {
    if(upload.classList.contains('inactive-upload')) {
        upload.classList.toggle('inactive-upload');
        search.classList.toggle('inactive-search');
    }
});

btnSearch.addEventListener('click', function() {
    if(search.classList.contains('inactive-search')) {
        search.classList.toggle('inactive-search');
        upload.classList.toggle('inactive-upload');
    }
});