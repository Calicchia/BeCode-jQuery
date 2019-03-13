

//$(document).ready(function() {
//  $("#pass-confirm").keyup(function() {
//    if($(this).val() == $("#pass").val()) {
//      $("#verifyNote").addClass("hidden");
//    } else {
//        $("#verifyNote").removeClass("hidden");
//    }
//  })
//})

let $submit = $("#send")
let $name = $("#display-name")
let $password = $("#pass")
let $passwordc = $("#pass-confirm")
let $mail = $("#email")
let $input = $("input")



$(document).ready(function() {
$submit.click(function(event){
  event.preventDefault();
  if ($name.val().length < 5) {
    $name.css("border", "5px solid red")
  }

  else {
    $name.css("border", "5px solid green")
  }


  if ($password.val() != $passwordc.val() || $password.val().length < 5 || $passwordc.val().length < 5) {
    $("#pass, #pass-confirm").css("border", "5px solid red")
  }

   else {
    $("#pass, #pass-confirm").css("border", "5px solid green")
  }


  if ($mail.val().length < 5 || (!($mail.val().includes("@"))))  {
    $mail.css("border", "5px solid red")
  }

  else {
    $mail.css("border", "5px solid green")
  }

  if( $($input).val().length === 0 ) {
        alert("Fields are empty")
    }
})
});

// Reset button

$("#reset").click(function() {
$name.val("");
$password.val("");
$passwordc.val("");
$mail.val("");
$name.css("border", "1px solid grey");
$password.css("border", "1px solid grey");
$passwordc.css("border", "1px solid grey");
$mail.css("border", "1px solid grey");
$("#mistake").hide();
});




//$submit.click(function(event){
//  event.preventDefault();
//  if (($name.val().length < 5) || ($password.val().length < 5) || ($passwordc.val().length < 5) || ($mail.val().length < 5))  {
//    alert("need more than 5 characters");
//    $("#pass").css("border", "5px solid red")
//  }
//  if (($name).val() == ('') || ($password).val() == ('') || ($passwordc).val() == ('') || ($mail).val() == (''))  {
//     alert('Input can not be left blank')
//  }
//});
