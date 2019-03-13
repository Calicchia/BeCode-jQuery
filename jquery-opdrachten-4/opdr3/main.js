let $submit = $("#submit")
var letters = /^[A-Za-z]+$/;


$submit.click(function(){

if(isNaN($("#phone1").val())){
 $("#message1").html("Is not a number");
}else{

}
});

$submit.click(function(){

   if ($("#name1, #name2").val().match(letters)){

  } else{
    $("#message").html("Not a valid name");
  }
});
