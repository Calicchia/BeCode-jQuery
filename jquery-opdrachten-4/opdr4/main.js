let $submit = $("#submit")

$submit.click(function(){

  let test = $("#name1").val();
  let test2 = $("#name2").val();
  let test3 = $("#geboorted").val();
  let test4 = $("#geboortep").val();
  let test5 = $("#werk1").val();
  let test6 = $("#bedrijf1").val();
  let tekst = (test + " " + test2 + " Geboren op " +  test3 +  " in " +  test4 +  " momenteel een " +  test5 +  " in " +  test6)
  $("#message1").html(tekst);
});
