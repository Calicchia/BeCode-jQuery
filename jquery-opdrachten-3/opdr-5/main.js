//var pane = $('#pane'),
//    box = $('#box'),
//    w = pane.width() - box.width(),
//    d = {},
//    x = 3;

//function newv(v,a,b) {
//    var n = parseInt(v, 10) - (d[a] ? x : 0) + (d[b] ? x : 0);
//    return n < 0 ? 0 : n > w ? w : n;
//}

//$(window).keydown(function(e) { d[e.which] = true; });
//$(window).keyup(function(e) { d[e.which] = false; });
//
//setInterval(function() {
//    box.css({
//        left: function(i,v) { return newv(v, 37, 39); },
//        top: function(i,v) { return newv(v, 38, 40); }
//    });
//}, 20);


          //    Variable explanations:
          //    w - the maximal left/top value that the box can have (to stay within bounds)
          //    x - the distance (in px) that the box moves in each interval
        //      d - this object stores the information on what key is being pressed. For instance, while the user holds down the LEFT ARROW key, d['37'] is true. Otherwise it's false. BTW, 37 is the key-code for the LEFT ARROW key and this value is stored in the e.which property of the event object. The d object is being updated on each keydown and keyup event.

        //      An setInterval which is executed every 20ms, updates the left and top CSS properties of the box element. The new values are calculated via the newv function.

        //      The newv function will calculate the new left/top value based on a) the old value v and b) the d object.

        //      The expression n < 0 ? 0 : n > w ? w : n ensures that the new value is in the permitted bounds (which are 0 to w). If n is < 0, zero will be returned. If n is > w, w will be returned.


let $box = $(".box");

$(document).keydown(function(e){
    switch (e.which){
    case 37:    //left arrow key
        $box.css("left", "-=10");
        break;
    case 38:    //up arrow key
        $box.css("top", "-=10")
        break;
    case 39:    //right arrow key
        $box.css("left", "+=10")
        break;
    case 40:    //bottom arrow key
        $box.css("top", "+=10")
    }

    if (parseInt($box.css("left")) > window.innerWidth) {
      $box.css("left", 0);
    }
    else if (parseInt($box.css("left")) < 0) {
      $box.css("left", window.innerWidth);
    }
    else if (parseInt($box.css("top")) > window.innerHeight) {
      $box.css("top", 0);
    }
    else if (parseInt($box.css("top")) < 0) {
      $box.css("top", window.innerHeight);
    }

});
