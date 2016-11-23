var modal = document.getElementById('modal');
var copyright = document.getElementById('copyright');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if(event.target == copyright) {
        copyright.style.display = "none";
    }
}