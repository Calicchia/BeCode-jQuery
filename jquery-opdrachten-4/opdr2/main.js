
let $submit = $("#submit")


$submit.click(function(event){
  event.preventDefault(event);
  let salaris = $("#sal").val();

  let kosten = (0.18 + 0.07 + 0.05)*salaris

  let korting = 0
  if ($("#ges").val() === "vrouw") {
    korting += 0.02
  }

  if ($("#kin").val() === 3) {
    korting += 0.01
  } else if ($("#kin").val() >= 4) {
    korting += 0.02
  }
  korting = korting * kosten
  salaris = salaris - kosten + korting
  console.log(kosten, korting)
  });
