var modal = document.getElementById('modal');
var copyright = document.getElementById('copyright');
var logout = document.getElementById('logout');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if(event.target == copyright) {
        copyright.style.display = "none";
    }
    if(event.target == logout) {
        logout.style.display = "none";
    }
}

function handleLogin(){
  if($('#accountMessage').text() == ''){
    document.getElementById('modal').style.display='block'
  } else {
    document.getElementById('logout').style.display='block'
  }
}