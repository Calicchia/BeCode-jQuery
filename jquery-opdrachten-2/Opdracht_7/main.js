$(document).ready(function(){
  $("ol li:first-child").click(function(){
    $("#content").css({'font-size':'120%'});
  });

  $("ol li:nth-child(2)").click(function(){
    $("#content").css({'font-size':'80%'});
  });


  $("#instructions li:nth-child(3)").click(function() {
       $(".green").toggleClass("bold");
     })


   $("#instructions li:nth-child(4)").click(function() {
       $(".red").toggleClass("italic");
      })


   $("#instructions li:nth-child(5)").mouseover(function() {
      $("img").attr("src", "images/download.jpeg");
     })

   $("a").hover(function() {
       $(this).prop("title", $(this).attr("href"));
     })

   $("#instructions li:nth-child(7)").click(function() {  //The .prepend() method inserts the specified content as the first child of each element in the jQuery collection (To insert it as the last child, use .append()).
     $("#content h2:first").prepend("Chapter 1");
     $("#content h2:last").prepend("Chapter 2");
   })


});
