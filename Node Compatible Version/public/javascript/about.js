$(document).ready(function() {
  $.ajax({
    url: 'files/about.xml',
    type: 'GET',
    dataType: 'xml',
    success: function(result){
      $(result).find('paragraph').each(function (){
        var output = "";
        output += "<h1>" + $(this).find('title').html()+"</h1>";
        output += "<p>" + $(this).find('content').html() + "</p>";
        $('#content').append(output);
      });
      $('#content').accordion(); 
    },
  });
});