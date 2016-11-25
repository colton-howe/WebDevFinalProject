$(document).ready(function() {
  var content;
  console.log("Function run");
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
    console.log("Logged in");
  }
});