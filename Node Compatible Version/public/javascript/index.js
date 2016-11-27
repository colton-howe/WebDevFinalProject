var modal = document.getElementById('modal');
var copyright = document.getElementById('copyright');

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

$('#form').submit(function(e) {
  var $this = $(this);
  $.post($this.attr("action"), $this.serialize(), function(data) {
  })
});

function handleLogin(){
  if($('#accountMessage').text() == '' || $('#accountMessage').text() == '				'){
    document.getElementById('modal').style.display='block'
  } else {
    document.getElementById('logout').style.display='block'
  }
}