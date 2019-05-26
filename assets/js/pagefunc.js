function openProjectModal(contentId) {
    var modal = document.getElementById('modalTemplate');
    modal.style.display = "block";
    fetch(`projects-generated/${contentId}.html`)
        .then(response => response.text())
        .then(text => $("#modal-content").html(text));

    var span = document.getElementsByClassName("close")[0];

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        }
    }
}