/* CONTACT FORM SUBMISSION */
window.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('.form');
    var statusContainer = document.querySelector('.status_container');
    var status = document.querySelector('.status');

    function success() {
        form.reset();
        status.innerHTML = "Tack för ditt meddelande!";
        statusContainer.classList.add('success');
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
        statusContainer.classList.add('error');
    }

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
})

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
/* END ---- CONTACT FORM SUBMISSION */