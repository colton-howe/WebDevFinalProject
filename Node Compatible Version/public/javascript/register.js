$(function() {
$("#user :input").keyup(function(){
var user = $("#user >:input").val();
    
    if(user.length < 6) {
        $("#user").addClass("has-error");
        $("#user").removeClass("has-success");
        
    } else {
        $("#user").addClass("has-success");
        $("#user").removeClass("has-error");
    }
});
});

$(function() {
$("#pass-check :input").keyup(function(){
    var psw = $("#psw >:input").val();
    var confirmpsw = $("#confirm-psw >:input").val();
    if(psw.length < 6) {
        $("#psw").addClass("has-error");
        $("#psw").removeClass("has-success");
        
    } else {
        $("#psw").addClass("has-success");
        $("#psw").removeClass("has-error");
    }
    if(confirmpsw == psw){
        $("#confirm-psw").addClass("has-success");
        $("#confirm-psw").removeClass("has-error");
    } 
    if(confirmpsw != psw) {
        $("#confirm-psw").addClass("has-error");
        $("#confirmpsw").removeClass("has-success");
    }
});
});

function formCheck() {
    var psw = $("#psw");
    var confirmpsw = $("#confirm-psw");
    var user = $("#user");
    
    if(psw.hasClass("has-success") && confirmpsw.hasClass("has-success") && user.hasClass("has-success")) {
        return true;
    } else {
        $('#error-msg').html("Please double check your submitted info.");
        return false;
    } 
}

$('#newuser').submit(function(e) {
  var $this = $(this);
  $.post($this.attr("action"), $this.serialize(), function(data) {
  })
});