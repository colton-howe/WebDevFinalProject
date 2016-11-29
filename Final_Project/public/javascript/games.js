var acc = document.getElementsByClassName("accordion");
var i;

var modal = document.getElementById('modal');
var copyright = document.getElementById('copyright');
var logout = document.getElementById('logout');

window.onclick = function(event) {
  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
    }
  }
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

window.onload = function(event) {
  var channel = ["moonmoon_ow", "imaqtpie", "wagamamatv", "Wintergaming"];
  var c;
  if($( "#twitch").hasClass("OW")) {
    c = 0;
  } else if($( "#twitch").hasClass("LoL")) {
    c = 1;
  } else if($( "#twitch").hasClass("Dota2")) {
    c = 2;
  } else if($( "#twitch").hasClass("SC2")) {
    c = 3;
  }
  var options = {
    width: 800,
    height: 480,
    channel: channel[c],
    autoplay: false, 
  };
  var player = new Twitch.Player("twitch", options);
  player.setVolume(0.5);
  
  document.getElementById("twitch-btn").addEventListener("click",function(){
    var active = $( "#twitch-btn" ).hasClass("active");
    if(!active) {
      player.play();
    } else {
       player.pause(); 
     }
  });    
}