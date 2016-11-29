$(document).ready(function() {
  var content;
  if($('#accountMessage').text() == ''){
    content = "<table>"
    content += "<tr>";
    content += "<td><img src='images/pylon.png' alt='PYLONS!'></td>";
    content += "<td><h1>You must construct additional pylons!</h1>";
    content += "<p>This page is only available to members of our site. To become a member, please either login at the top of the page,"
               + " or <a href='/registrationPage'>register for an account</a>.</td>";
    content += "</tr>";
    content += "</table>";
    $('#content').html(content);
  } else {
    content = "<table id='icons'>";
    content += "<tr>";
    content += "<td><input type='image' src='images/League_of_Legends_Icon.png' class='icon' id='league'/><td>";
    content += "<td><input type='image' src='images/Dota_Icon.png' class='icon' id='dota'/><td>";
    content += "<td><input type='image' src='images/Overwatch_Icon.png' class='icon' id='overwatch' /><td>";
    content += "<td><input type='image' src='images/Starcraft_Icon.png' class='icon' id='starcraft'/><td>";
    content += "</tr>";
    content += "</table>";
    $('#contentNavigation').html(content);
    var content = '<iframe src="https://calendar.google.com/calendar/embed?src=uoit.net_baoomoiamksu672190n2iiopuc%40group.calendar.google.com&ctz=America/Toronto" style="border: 0" width="1300" height="600" frameborder="0" scrolling="no"></iframe>';
    $('#content').html(content);
  }
  $('#league').click(function (){
    var content = '<iframe src="https://calendar.google.com/calendar/embed?src=uoit.net_baoomoiamksu672190n2iiopuc%40group.calendar.google.com&ctz=America/Toronto" style="border: 0" width="1300" height="600" frameborder="0" scrolling="no"></iframe>';
    $('#content').html(content);
  });
  
  $('#dota').click(function (){
    var content = '<iframe src="https://calendar.google.com/calendar/embed?src=uoit.net_n029q1s6cv7de08t0dblpomg3s%40group.calendar.google.com&ctz=America/Toronto" style="border: 0" width="1300" height="600" frameborder="0" scrolling="no"></iframe>';
    $('#content').html(content);
  });
  
  $('#overwatch').click(function (){
    var content = '<iframe src="https://calendar.google.com/calendar/embed?src=uoit.net_l2bpl4djno1lfrucp3fbi8592k%40group.calendar.google.com&ctz=America/Toronto" style="border: 0" width="1300" height="600" frameborder="0" scrolling="no"></iframe>';
    $('#content').html(content);
  });
  
  $('#starcraft').click(function (){
    var content = '<iframe src="https://calendar.google.com/calendar/embed?src=uoit.net_ajg0j5rpsnn37duhcflokhok3o%40group.calendar.google.com&ctz=America/Toronto" style="border: 0" width="1300" height="600" frameborder="0" scrolling="no"></iframe>';
    $('#content').html(content);
  });
});
