$(document).ready(function(){

    $("#i3").hover(function(){
        $("#txt1").fadeIn(500);
    }, function() {
        $("#txt1").fadeOut(500);
    });
    $("#i4").hover(function(){
        $("#txt2").fadeIn(500);
    }, function() {
        $("#txt2").fadeOut(500);
    });
    $("#i5").hover(function(){
        $("#txt3").fadeIn(500);
    }, function() {
        $("#txt3").fadeOut(500);
    });
});