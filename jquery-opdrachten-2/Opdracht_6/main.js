$("#green").mouseover(function(){
  $("#text").css("color", "green");
});
$("#red").mouseover(function(){
  $("#text").css("color", "red");
});
$("#blue").mouseover(function(){
  $("#text").css("color", "blue");
});
$("#blue, #red, #green").mouseleave(function(){
  $("#text").css("color", "black");
});
