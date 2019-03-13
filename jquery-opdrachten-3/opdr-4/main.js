



  $('#target').click(function() {
    let h = $(".rechthoek").height();
      $(".rechthoek").css("height", "+=10px");
    if (h>=100){
      $(".rechthoek").css("height", "10px");
    }
  })


    $('#target2').click(function() {
        $(".rechthoek").css("background-color", "green");
    })

    $("#target3").click(function(){
        $(".rechthoek").removeAttr("style");
    });

    $("#target4").click(function() {
        $(".rechthoek").css("display", "none");
    });


    $("#target5").click(function(){
        $(".rechthoek").css("display", "block");
      });
